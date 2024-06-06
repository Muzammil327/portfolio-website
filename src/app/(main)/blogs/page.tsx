import MainHero from '@/src/components/hero/MainHero'
import React from 'react'
import type { Metadata } from 'next'
import BlogView from '@/src/views/blogView'
import Container from '@/src/components/ui/Container'
import { FaArrowRight } from 'react-icons/fa'

const data = {
  title: 'My Blogs || Muzammil Portfolio',
  description:
    'I am a Full Stack Developer With Frontend Backend and Deveops Enginerr with Javascript, Typescript, Phython, PHP, Node JS and SQL.',
  canonical: '/portfolio',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://mmuzammil-portfolio.vercel.app/portfolio',
  keywords: [
    'mmuzammil-portfolio',
    'muzammil',
    'muzammil Safdar',
    'muzammil Safdar Portfolio',
    'muzammil portfolio',
  ],
}
export default function Portfolio() {
  return (
    <>
      <MainHero head="Blog Posts" para="" />
      <section className="mt-8">
        <Container>
          <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <li className="relative bg-[#f2f4ff] dark:bg-gray-900 cursor-pointer text-base rounded-md mt-3 py-3 px-5 duration-300 ease-in-out hover:bg-color2 dark:hover:bg-color2 border-[1px] border-solid border-color2 hover:text-white flex items-center justify-between">
              <span>Web Development</span>
              <span>
                <FaArrowRight />
              </span>
            </li>
            <li className="relative bg-[#f2f4ff] dark:bg-gray-900 cursor-pointer text-base rounded-md mt-3 py-3 px-5 duration-300 ease-in-out hover:bg-color2 dark:hover:bg-color2 border-[1px] border-solid border-color2 hover:text-white flex items-center justify-between">
              <span>App Development</span>
              <span>
                <FaArrowRight />
              </span>
            </li>
            <li className="relative bg-[#f2f4ff] dark:bg-gray-900 cursor-pointer text-base rounded-md mt-3 py-3 px-5 duration-300 ease-in-out hover:bg-color2 dark:hover:bg-color2 border-[1px] border-solid border-color2 hover:text-white flex items-center justify-between">
              <span>Product Design</span>
              <span>
                <FaArrowRight />
              </span>
            </li>
            <li className="relative bg-[#f2f4ff] dark:bg-gray-900 cursor-pointer text-base rounded-md mt-3 py-3 px-5 duration-300 ease-in-out hover:bg-color2 dark:hover:bg-color2 border-[1px] border-solid border-color2 hover:text-white flex items-center justify-between">
              <span>Digital Marketing</span>
              <span>
                <FaArrowRight />
              </span>
            </li>
          </ul>
        </Container>
      </section>
      {/* <BlogView /> */}
    </>
  )
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: data.keywords,
  openGraph: {
    title: data.title,
    description: data.description,
    url: data.url,
    images: [
      {
        url: data.image,
        alt: data.title,
      },
    ],
  },
  alternates: {
    canonical: data.canonical,
  },
  robots: {
    index: data.index,
    follow: data.follow,
    googleBot: {
      index: data.index,
      follow: data.follow,
    },
  },
  twitter: {
    title: data.title,
    description: data.description,
    images: {
      url: data.image,
      alt: data.title,
    },
  },
}
