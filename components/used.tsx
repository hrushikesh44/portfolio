interface UsedProps{
    name?: string;
}

export default function Used({name}: UsedProps){
    return (
        <div className=" w-fit p-1 border border-white/30 rounded-lg text-sm text-neutral-300 ">
            {name}
        </div>
    )
}