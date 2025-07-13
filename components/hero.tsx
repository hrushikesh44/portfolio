import Image from "next/image";
import Card from "./card";


export default function Hero(){
    return <div className="flex justify-center min-h-screen">
        <div className="pt-20 ">
            <div className="flex justify-between">
                <p className="text-4xl font-bold pt-5">hi,hrushikesh here</p>
                <Image src={'/mr.png'} width={100} height={100} className="size-20 rounded-full"  alt="me"/>
            </div>
            <div className="pt-10 text-lg font-medium text-neutral-400">
                <p className="">i am a fullstack developer who break and build</p>
                <p>i currently am building around nextjs</p>
                <p>also exploring different technologies</p>
                <p>rn interested in ai and maybe something else tmrw hehe</p>
            </div>
            <div className=" flex flex-col items-center pt-20">
                <p className="text-2xl font-semibold text-start text-white">my recent works</p>
                <Card name={"mp4 transcoder"} desc={" web application built for converting videos into your desired types. it uses ffmpeg web assembly to transcode your videos."} usedname1="nextjs" usedname2="ffmpeg" usedname3="tailwind" imgSrc="/mr.png" alt="mp4"/>
                <Card name={"vercel"} desc={"tried to mimic vercel like functionality"} usedname1="react" usedname2="aws-sdk" usedname3="redis" imgSrc="/mr.png" alt="vercel"/>
                <Card name={"chat-app"} desc={" real time chat application for private messaging."} usedname1="react" usedname2="socketio" usedname3="aws-sdk" imgSrc="/mr.png" alt="chat"/>
            </div>
        </div>
        
    </div>
}