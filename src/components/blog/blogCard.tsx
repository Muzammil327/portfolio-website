import Link from 'next/link'
import React from 'react'

export default function BlogCard() {
  return (
    <div className="rounded-bl-md rounded-br-md mt-5 relative">
      <div className="image relative overflow-hidden">
        <img
          src="https://flixta.rstheme.com/wp-content/uploads/2024/01/post_03-760x560.jpg"
          alt=""
          className="rounded-tl-lg rounded-tr-lg h-68 w-auto duration-300 ease-in-out blogCard-img"
        />
      </div>
      <span className="absolute flex justify-center items-center top-2 left-4 bg-color2 rounded-full text-white py-1 text-xs px-3">
        Web Developemnt
      </span>
      <div className="flex flex-col items-start rounded-bl-md rounded-br-md bg-slate-100 dark:bg-gray-900 px-3 py-5">
        <Link href="" className="lg:text-2xl text-xl text hover:text-color2">
          How do you improve your coding skills?
        </Link>
        <div className="flex flex-row gap-4 py-2 dark:text-gray-300 text-gray-600">
          <span>By Muzammil</span> |<span>26-12-2024</span>
        </div>
      </div>
    </div>
  )
}
