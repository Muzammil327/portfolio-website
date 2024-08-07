'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export default function SkillCard({
  icon,
  image,
  title,
  news,
  slug,
}: {
  icon?: React.ReactNode
  title: string
  image?: string
  slug?: string
  news?: boolean
}) {
  return (
    <motion.div
      className="relative sm:py-10 py-2 bg-blue-50 dark:bg-gray-900 border border-solid border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center flex-col"
      initial={{ y: '40%', opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          delay: 0.7,
          duration: 0.8,
        },
      }}
    >
      <Link href={`${slug}`}>
        {icon && <div className="icon sm:my-5 mt-7 mb-3">{icon}</div>}
        {image && (
          <div className="icon sm:my-5 mt-7 mb-3">
            <Image
              src={image}
              alt={title}
              title={title}
              height={60}
              width={60}
            />
          </div>
        )}
        {news ? (
          <div className="new absolute flex items-center justify-between gap-2 lg:top-3 top-2 lg:right-3 right-2 border border-solid px-2 py-1 text-sm rounded-lg">
            <span className="relative flex sm:h-3 sm:w-3 h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full sm:h-3 sm:w-3 h-2 w-2 bg-sky-500"></span>
            </span>{' '}
            Learning
          </div>
        ) : null}
        <div className="text font-semibold text-lg">{title}</div>
      </Link>
    </motion.div>
  )
}
