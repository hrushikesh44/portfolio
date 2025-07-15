import Image from "next/image";
import Used from "./used";
import Link from "next/link";
import { Github, GlobeIcon } from "lucide-react";

interface CardProps{
    name: string;
    desc: string;
    usedname1?: string;
    usedname2?: string;
    usedname3?: string;
    href?: string;
    github?: string
}
export default function Card({name, desc, usedname1, usedname2, usedname3, href, github}: CardProps){
    return (
        <div className="w-[80vw] h-fit md:w-[50vw] lg:w-[40vw] border border-white/10 hover:border-green-500 hover:scale-105 duration-300 rounded-xl p-5 mt-10">
          <p className="text-lg font-semibold">{name}</p> 
          <p className="text-sm text-neutral-600 pt-2">{desc}</p>
          <div className="flex gap-2.5 pt-3" >
            <Used name={usedname1}/>
            <Used name={usedname2}/>
            <Used name={usedname3}/>
          </div>
          <div className="flex gap-3">
            {href && <div className="mt-4 w-fit h-fit hover:border p-1 rounded-xl hover:border-neutral-700">
            <Link href={href} target="_blank"><GlobeIcon/></Link>
            </div>}
            {github && <div className="mt-4 w-fit h-fit hover:border p-1 rounded-xl hover:border-neutral-700">
            <Link href={github} target="_blank"><Github/></Link>
            </div>}
          </div>
        </div>
    );
}