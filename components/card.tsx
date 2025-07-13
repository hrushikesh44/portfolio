import Image from "next/image";
import Used from "./used";
import Link from "next/link";

interface CardProps{
    name: string;
    desc: string;
    imgSrc: string;
    alt: string;
    usedname1?: string;
    usedname2?: string;
    usedname3?: string;
}
export default function Card({name, desc, imgSrc, alt, usedname1, usedname2, usedname3}: CardProps){
    return (
        <div className="w-[80vw] h-fit md:w-[40vw] lg:w-[30vw] border border-white/10 rounded-xl p-5 mt-10">
          <p className="text-lg font-semibold">{name}</p> 
          <p className="text-sm text-neutral-600 pt-2">{desc}</p>
          <Image src={imgSrc} height={150} width={150} alt={alt} className="pt-3 rounded " />
          <div className="flex gap-2.5 pt-3" >
            <Used name={usedname1}/>
            <Used name={usedname2}/>
            <Used name={usedname3}/>
          </div>
        </div>
    );
}