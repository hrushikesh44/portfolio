import { Github, HomeIcon, Mail, TerminalIcon, Twitter } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { MotionValue } from 'motion/react';
import Link from 'next/link';
import { useRef } from 'react';

export default function FloatingDock ()  {
  return (
    <div className="flex justify-center border border-slate-900 rounded-full w-fit mx-auto h-fit">
      <FloatingDockCore />
    </div>
  );
};

type Link = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

const FloatingDockCore = () => {
  const links: Link[] = [
    {
      title: 'Home',
      icon: <HomeIcon className="h-full w-full text-neutral-100" />,
      href: '/',
    },
    {
      title: 'Projects',
      icon: <TerminalIcon className="h-full w-full text-neutral-100" />,
      href: '/',
    },
    {
      title: 'Github',
      icon: <Github className="h-full w-full text-neutral-100" />,
      href: 'https://github.com/hrushikesh44',
    },
    {
      title: 'twitter',
      icon: <Twitter className="h-full w-full text-neutral-100" />,
      href: 'https://x.com/hrushikesh_44',
    },
    {
      title: 'Mail',
      icon: <Mail className="h-full w-full text-neutral-100" />,
      href: 'mailto:hrushikesh44.dev@gmail.com',
    },
  ];

  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      viewport={{ once: true }}
      onMouseMove={(e: any) => mouseX.set(e.pageX)}
      onMouseLeave={(e: any) => mouseX.set(Infinity)}
      className="flex justify-center items-center fixed bottom-10 inset-x-0 mx-auto h-16 border border-white/10 hover:border-cyan-500 w-fit p-5 gap-5 rounded-full bg-[#0a0a0a]"
    >
      {links.map((el, idX) => (
        <IconContainer
          key={el.title}
          mouseX={mouseX}
          el={el}
        />
      ))}
    </motion.div>
  );
};

export const IconContainer = ({ el, mouseX }: { el: Link; mouseX: MotionValue<number> }) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    let bounds = ref?.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthIconTransform = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightIconTransform = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 100,
    damping: 12,
  });

  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 100,
    damping: 12,
  });

  return (
    <Link href={el.href} target='_blank'>  
      <motion.div
        ref={ref}
        style={{
          width,
          height,
        }}
        className=" flex items-center justify-center rounded-2xl bg-neutral-900 hover:bg-neutral-900/60 z-0"
      >
        <motion.div
          style={{
            width: widthIconTransform,
            height: heightIconTransform,
          }}
          className="flex items-center justify-center h-full w-full"
        >
          {el.icon}
        </motion.div>
      </motion.div>
    </Link>
  );
};
