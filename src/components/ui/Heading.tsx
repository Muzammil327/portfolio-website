'use client'
import { motion } from 'framer-motion'

interface Iprops {
  head: string
  subhead: string
}

export default function Heading({ head, subhead }: Iprops) {
  return (
    <>
      <div className="text-center my-20 mr-6 relative">
        <motion.span
          className="text-color2 font-medium text-base"
          initial={{ y: '100%', opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.6,
              duration: 0.5,
            },
          }}
        >
          {subhead}
        </motion.span>
        <motion.h3
          className="my-4 text font-bold lg:text-3xl text-2xl"
          initial={{ y: '100%', opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.8,
              duration: 0.5,
            },
          }}
        >
          {head}
        </motion.h3>
      </div>
    </>
  )
}
