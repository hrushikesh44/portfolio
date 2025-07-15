interface SkillProps {
    name: string
}
export default function Skill({name}: SkillProps){
    return <span className="border border-white/10 rounded-xl px-3 py-1 hover:border-pink-500 hover:scale-110 duration-200">{name}</span>
}