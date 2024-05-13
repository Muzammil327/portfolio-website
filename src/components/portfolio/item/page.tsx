'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FaAngleRight, FaGithub } from 'react-icons/fa'

interface IProps {
  datas: any
}

export default function PortfolioItem({ datas }: IProps) {
  return (
    <>
      <div className="project flex justify-center items-center w-full relative md:py-16 py-8">
        <div className="overflow-hidden rounded-md ">
          <div className="relative overflow-hidden w-full">
            <span className="absolute py-1 h-12 w-12 flex items-center justify-center bg top-2 text-white font-semibold left-2 rounded-full text-base uppercase z-20 transition-all">
              <Link href={`${datas.githubLink}`} target="blank">
                <FaGithub size={24} />
              </Link>
            </span>
            {datas.image && (
              <Image
                src={datas.image}
                alt={datas.title}
                title={datas.title}
                className="w-full object-cover"
                height={250}
                width={400}
              />
            )}
          </div>
          <div className="text py-6 px-3 w-full bg-slate-100 rounded-bl-xl rounded-br-xl">
            <h3 className="text-black my-2 text-xl">{datas.title}</h3>
            <p className="text-slate-500 text-base mb-3">{datas.para}</p>
            <Link
              href={`${datas.liveLink}`}
              className="ptag flex items-center justify-center border-2 border-solid border-black py-2 px-6 text-black hover:text-white rounded-full text-base hover:bg-black transition-all"
              target="blank"
            >
              <span>See Live</span>
              <span className="picon ml-1 transition-all">
                <FaAngleRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
