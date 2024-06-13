import Link from 'next/link'
import React from 'react'
import ImageComp from '@/src/components/ui/Image'

export interface Article {
  tagslug: string;
  authorslug: string;
  id: string;
  date: string;
  title: string;
  slug: String;
  para: string;
  cat: string;
  author: string;
  tag: string;
  catslug: string;
}
interface Iprops {
  datas: Article;
}

export default function BlogCard({ datas }: Iprops) {
  return (
    <div className="rounded-bl-md rounded-br-md mt-5 relative">
      <div className="image relative overflow-hidden w-full h-auto">
        <ImageComp
          imageName="/projects/blog-website.png"
          alt="fgh"
          height={1280}
          width={720}
          class_name="rounded-tl-lg rounded-tr-lg duration-300 ease-in-out blogCard-img"
        />
      </div>
      <span className="absolute flex justify-center items-center top-2 left-4 bg-color2 rounded-full text-white py-1 text-xs px-3">
        Web Developemnt
      </span>
      <div className="flex flex-col items-start rounded-bl-md rounded-br-md bg-slate-100 dark:bg-gray-900 px-3 py-5">
        <Link
          href={`/blogs/${datas.slug}`}
          className="lg:text-2xl md:text-xl text-lg text hover:text-color2"
        >
          {datas.title}
        </Link>
        <div className="flex flex-row gap-4 py-2 dark:text-gray-300 text-gray-600">
          <span className="text-color2">By Muzammil</span> |
          <span className="text-gray-500">26-12-2024</span>
        </div>
      </div>
    </div>
  )
}
