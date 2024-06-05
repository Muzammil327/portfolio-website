import Image from 'next/image'
import React from 'react'
import { FaEye, FaGithub } from 'react-icons/fa'
import Button from '@/src/components/ui/Button'
import Link from 'next/link'
import { portfolioProps } from '@/src/types/page'

export default function PortfolioCard({
  para,
  name,
  liveLink,
  githubLink,
  image,
  imagealt,
}: portfolioProps) {
  return (
    <div className="relative mx-3">
      <div className="image w-full">
        <Image
          src={image}
          alt={imagealt}
          title={imagealt}
          height="640"
          width="360"
          className="w-full h-auto"
        />
      </div>
      <div className="btn">
        <Button className="btnIcon duration-300 ease-in-out absolute top-0 right-0 mr-3 mt-3">
          <Link href={`${liveLink}`}>
            <FaEye />
          </Link>
        </Button>
        <Button className="btnIcon duration-300 ease-in-out absolute top-0 left-0 ml-3 mt-3">
          <Link href={`${githubLink}`}>
            <FaGithub />
          </Link>
        </Button>
      </div>
      <div className="bg-slate-100 dark:bg-gray-900 p-4 rounded-bl-md rounded-br-md">
        <h4 className="text-2xl text-color2 mb-3">
          <Link href={`${liveLink}`}>{name}</Link>
        </h4>
        <p className="text-gray-400 dark:text-gray-500 !leading-7 !my-0">
          {para}
        </p>
      </div>
    </div>
  )
}
