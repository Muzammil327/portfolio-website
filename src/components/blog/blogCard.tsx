'use client'
import Link from 'next/link'
import React from 'react'
import ImageComp from '@/src/components/ui/Image'
import Container from '../ui/Container'
import Heading from '../ui/Heading'
import Button from '../ui/Button'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

export interface Article {
  id: string
  date: string
  title: string
  slug: string // Changed from String to string
  para: string
  cat: string
  image: string
}

export function BlogCard1({ datas }: { datas: Article }) {
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
export function BlogCard2({ postMetadata }: { postMetadata: any }) {
  return (
    <section className="px-3">
      <Container>
        <Heading subhead={'DAILY UPDATE'} head={'Latest News & Blogs'} />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-4 gap-2 items-center">
          {postMetadata.slice(0, 3).map((datas: any) => (
            <motion.div
              initial={{ y: '40%', opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.7,
                  duration: 0.8,
                },
              }}
              key={datas.title}
            >
              <div
                className="rounded-bl-md rounded-br-md mt-5 relative"
                key={datas.id}
              >
                <div className="image relative overflow-hidden w-full h-auto">
                  <ImageComp
                    imageName={datas.image}
                    alt={datas.title}
                    height={1280}
                    width={720}
                    class_name="rounded-tl-lg rounded-tr-lg duration-300 ease-in-out blogCard-img"
                  />
                </div>
                <span className="absolute flex justify-center items-center top-2 left-4 bg-color2 rounded-full text-white py-1 text-xs px-3">
                  {datas.cat}
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
                    <span className="text-gray-500">{datas.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
      <motion.div
        className="flex items-center justify-center my-8"
        initial={{ x: '40%', opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            delay: 0.7,
            duration: 0.8,
          },
        }}
      >
        <Link href="/blogs">
          <Button className="btnIcon px-10 gap-2 duration-300 ease-in-out">
            View All Posts
            <span className="btnIconhover opacity-0 duration-300 ease-in-out">
              <FaArrowRight />
            </span>
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}
