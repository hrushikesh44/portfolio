'use client'

import Image from "next/image";
import Card from "./card";
import Skill from "./skill";
import Link from "next/link";
import { Github, Home, LucideTwitter, Mail } from "lucide-react";
import { useEffect, useState } from "react";



export default function Hero(){
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setAnimate(true), 50);
        return () => clearTimeout(timeout);
    }, []);
    return <div className="flex justify-center min-h-screen scroll-smooth">
        <div className="pt-20 md:max-w-[50vw] lg:max-w-[40vw]">
            <div data-aos='fade-in' data-aos-duration="500" className="flex justify-between px-5">
                <p className="text-2xl md:text-4xl font-bold pt-5">hi,hrushikesh here</p>
                <Image src={'/mr.png'} width={100} height={100} className="size-20 rounded-full"  alt="me"/>
            </div>
            <div data-aos='fade-in' data-aos-duration="600" className="pt-10 px-5 text-lg font-medium text-neutral-400">
                <p className="">i am a fullstack developer.</p>
                <p className="md:w-[40vw] text-wrap ">i currently am building around nextjs and also exploring different technologies.</p>
                <p>rn interested in ai and maybe something else tmrw...</p>
            </div>
            <div data-aos='fade-in' data-aos-duration="700" className=" flex flex-col items-center py-20">
                <p className="text-2xl font-semibold text-white">my works</p>
                <Card name={"mp4 transcoder"} desc={" web application built for converting videos into your desired types. it uses ffmpeg web assembly to transcode your videos."} usedname1="nextjs" usedname2="ffmpeg" usedname3="tailwind" href="https://transcoder-blush.vercel.app" github='https://github.com/hrushikesh44/mp4-transcoder' />
                <Card name={"vercel"} desc={"tried to mimic vercel like functionality, by developing upload, request and deploy services. "} usedname1="react" usedname2="aws-sdk" usedname3="redis" github="https://github.com/hrushikesh44/vercel-req" />
                <Card name={"chat-app"} desc={" real time chat application for private messaging."} usedname1="react" usedname2="socketio" usedname3="aws-sdk" github="https://github.com/hrushikesh44/chat-app"/>
            </div>
            <div className="flex flex-col justify-center items-center px-5 pt-20 pb-40 md:w-[50vw] lg:w-[40vw]">
                <p className="mx-auto pb-5 text-xl font-bold">my skills</p>
                <div className="flex flex-wrap justify-center gap-3 mx-auto">
                    <Skill name="nextjs" />
                    <Skill name="react" />
                    <Skill name="tailwind" />
                    <Skill name="nodejs" />
                    <Skill name="express" />
                    <Skill name="mongodb" />
                    <Skill name="postgresql" />
                    <Skill name="aws" />
                    <Skill name="JWT" />
                    <Skill name="Oauth" />
                    <Skill name="UI/UX" />
                    <Skill name="websockets" />
                    <Skill name="prisma" />
                    <Skill name="redis" />
                    <Skill name="docker" />
                </div>
            </div>
        </div>
        
    </div>
}