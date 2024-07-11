'use client'
import React from 'react'
import ImageComp from '../ui/Image'
import { motion } from 'framer-motion'

export default function HomeBanner() {
  return (
    <motion.div
      className="bannerImage w-full"
      initial={{ x: '-100%', opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: {
          delay: 0.7,
          duration: 0.8,
        },
      }}
    >
      <ImageComp
        imageName="/Banner-home.png"
        alt={''}
        height={720}
        width={1280}
        class_name="w-full"
      />
    </motion.div>
  )
}
