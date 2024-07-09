import Link from 'next/link'
import React from 'react'
import ImageComp from '@/src/components/ui/Image'

export interface Article {
  id: string
  date: string
  title: string
  slug: string // Changed from String to string
  para: string
  cat: string
  image: string
}

interface Iprops {
  datas: Article
}

export default function BlogCard({ datas }: Iprops) {
  return (
    <div className="rounded-bl-md rounded-br-md mt-5 relative" key={datas.id}>
      {/* <div className="image relative overflow-hidden w-full h-auto"> */}
        {/* <ImageComp
          imageName={datas.image}
          alt={datas.title}
          height={1280}
          width={720}
          class_name="rounded-tl-lg rounded-tr-lg duration-300 ease-in-out blogCard-img"
        /> */}
      {/* </div> */}
      {/* <span className="absolute flex justify-center items-center top-2 left-4 bg-color2 rounded-full text-white py-1 text-xs px-3">
        {datas.cat}
      </span> */}
      <div className="flex flex-col items-start rounded-bl-md rounded-br-md bg-slate-100 dark:bg-gray-900 px-3 py-5">
        <Link
          href={`/blogs/${datas.slug}`}
          className="lg:text-2xl md:text-xl text-lg text hover:text-color2"
        >
          {datas.title}
        </Link>
        <div className="flex flex-row gap-4 py-2 dark:text-gray-300 text-gray-600">
          <span className="text-color2">By Muzammil</span> |
          <span className="text-gray-500">{datas.date}</span>
        </div>
      </div>
    </div>
  )
}
