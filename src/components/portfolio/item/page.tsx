"use client";
import Link from "next/link";
import Image from "next/image";
import { Portfolio } from "@/types/page";
import { FaAngleRight } from "react-icons/fa";
import { urlForImage } from "@/sanity/lib/image";

interface IProps {
  datas: Portfolio;
}

export default function PortfolioItem({ datas }: IProps) {
  return (
    <>
      <div className="project flex justify-center items-center w-full relative md:py-16 py-8">
        <div className="overflow-hidden rounded-md ">
          <div className="relative overflow-hidden w-full">
            <span className="absolute w-auto py-1 px-4 bg top-4 text-white font-semibold left-5 rounded-full text-base uppercase z-20 transition-all">
              {datas.tag}
            </span>
            {datas.image && (
              <Image
                src={urlForImage(datas.image)}
                alt={datas.title}
                title={datas.title}
                className="w-full object-cover"
                height={250}
                width={400}
              />
            )}
          </div>
          <div className="text py-6 px-3 w-full bg-slate-100 rounded-2xl">
            <h3 className="text-black my-2 text-xl">
              <Link href={`/portfolio/${datas.slug}`}>{datas.title}</Link>
            </h3>
            <p className="text-slate-500 text-base mb-3">{datas.description}</p>
            <Link
              href={`/portfolio/${datas.slug}`}
              className="ptag flex items-center justify-center border-2 border-solid border-black py-2 px-6 text-black hover:text-white rounded-full text-base hover:bg-black transition-all"
            >
              <span>View</span>
              <span className="picon ml-1 transition-all">
                <FaAngleRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
