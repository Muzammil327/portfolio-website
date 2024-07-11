'use client'
import React from 'react'
import Button from '../ui/Button'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
import Container from '../ui/Container'
import { motion } from 'framer-motion'

export default function CallToAction() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 lg:mb-20 md:mb-10 mb-4 bg-hero bg-hero-2">
      <Container>
        <div className="grid lg:grid-cols-6 gap-8 items-center py-10">
          <div className="flex pt-12 justify-center md:col-span-2">
            <Image
              src="/hero_img.jpg"
              alt=""
              height={400}
              width={400}
              className="md:rounded-full rounded-3xl lg:rotate-12 hover:rotate-0 duration-300 ease-in-out border-8 border-solid hover:border-color2 border-transparent hover:border-opacity-60"
            />
          </div>
          <div className="lg:col-span-4 lg:text-left text-center lg:ml-6 flex flex-col justify-center relative">
            <span className="opacity-10 md:text-8xl sm:text-7xl text-6xl font-bold absolute inset-0 md:bottom-auto md:left-16 md:transform md:-translate-y-1/2 md:-translate-x-1/2 text-center pb-8">
              Hello
            </span>
            <motion.h4
              className="text font-bold lg:text-5xl md:text-3xl text-2xl leading-9 pt-4 pb-8"
              initial={{ y: '40%', opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.6,
                  duration: 0.5,
                },
              }}
            >
              If you have any project in mind?
            </motion.h4>
            <motion.span
              className="font-semibold sm:text-2xl text-xl pb-8 text-gray-400"
              initial={{ y: '40%', opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.6,
                  duration: 0.5,
                },
              }}
            >
              DM now! mmuzammil327off@gmail.com
            </motion.span>
            <motion.div
              initial={{ y: '40%', opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.6,
                  duration: 0.5,
                },
              }}
            >
              <Button className="btnIcon px-10 gap-2 duration-300 ease-in-out rounded-full lg:m-0 mx-auto">
                Hire Me Now{' '}
                <span className="btnIconhover opacity-0 duration-300 ease-in-out">
                  <FaArrowRight />
                </span>
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
