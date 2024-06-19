import React from 'react'
import Image from 'next/image'

interface ImageProps {
  imageName: any
  class_name?: string
  alt: string
  height: number
  width: number
  priority?: boolean
}

export default function ImageComp({
  imageName,
  alt,
  height,
  width,
  class_name,
  priority,
}: ImageProps) {
  return (
    <Image
      src={imageName}
      alt={alt}
      title={alt}
      height={height}
      width={width}
      className={class_name}
      priority={priority}
      sizes="(max-width: 200px) 100vw, 400px"
    />
  )
}
