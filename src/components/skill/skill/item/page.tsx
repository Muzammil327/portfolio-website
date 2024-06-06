import Image from 'next/image'

interface Iprops {
  datas: Skills
}
interface Skills {
  id: number
  title: string
  image: string
}
export default function SkillCard({ datas }: Iprops) {
  return (
    <div className="skill flex items-center justify-center ">
      <Image
        src={datas.image}
        className=" lg:h-40 md:h-32 h-28 lg:w-40 md:w-32 w-28 hover:border-8 hover:p-4 hover:border-orange-400 hover:border-solid transition-all rounded-full"
        alt={datas.title}
        title={datas.title}
        height="300"
        width="300"
      />
    </div>
  )
}
