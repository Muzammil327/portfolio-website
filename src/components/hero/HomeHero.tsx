'use client'
import Typewriter from 'typewriter-effect'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import Container from '@/src/components/ui/Container'
import Button from '@/components/ui/Button'
import Social from '@/src/components/ui/Social'
import ImageComp from '../ui/Image'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

export default function HomeHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })
  const handleDownload = () => {
    const pdfUrl =
      '/MUHAMMAD MUZAMMIL SAFDAR NEXTJS  Typescript  MERN STACK Developer.pdf' // Replace with your actual file path

    // Create an anchor element
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'muhamad-muzammil-safdar.pdf' // Specify the file name

    // Append to the document body (necessary for Firefox)
    document.body.appendChild(link)

    // Programmatically click the link to trigger the download
    link.click()

    // Remove the link from the document
    document.body.removeChild(link)
  }
  return (
    <section className="bg-hero-2 relative py-16">
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          {/* Content Section */}
          <div className="lg:pt-48 pt-40 lg:text-left text-center">
            <motion.div
              ref={ref}
              initial={{ y: '100%', opacity: 0, scale: 0.5 }}
              whileInView={{
                y: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 0.5,
                  duration: 0.5,
                },
              }}
            >
              <span className="py-2 px-3 rounded-full border-2 border1">
                👋 Welcome to my portfolio
              </span>
            </motion.div>
            <motion.h1
              className="mt-8 mb-4 lg:text-4xl md:text-2xl text-3xl uppercase font-semibold text"
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.6,
                },
              }}
            >
              I&lsquo;m Muzammil Safdar.
            </motion.h1>
            <motion.span
              className="text-color2 text-2xl"
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.4,
                  duration: 0.7,
                },
              }}
            >
              {' '}
              <Typewriter
                options={{
                  strings: [
                    'Javascript Developer.',
                    'React JS Developer.',
                    'Next JS Developer.',
                    'Frontend Developer.',
                    'Backend Developer.',
                    'Node JS Developer.',
                    'SQL Developer.',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.span>
            <motion.p
              className=""
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.5,
                  duration: 0.8,
                },
              }}
            >
              I am a Javascript developer with expertise in full-stack web
              development. I have a strong understanding of the Javascript
              framework and its ecosystem. I am passionate about creating
              efficient, scalable, and user-friendly web applications.
            </motion.p>
            <div className="mt-6 flex sm:flex-row flex-col items-center lg:justify-start justify-center gap-4">
              <motion.div
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 0.6,
                  },
                }}
              >
                <Button
                  onClick={handleDownload}
                  className="btnIcon px-12 duration-300 ease-in rounded-full flex gap-2 items-center"
                >
                  Download CV{' '}
                  <motion.div
                    initial={{ y: 0 }} // Starting position
                    whileInView={{
                      y: [0, -10, 0], // Define the animation keyframes: start at 0, move up to -50, then back to 0
                    }}
                    transition={{
                      duration: 2, // Duration of the entire animation cycle
                      repeat: Infinity, // Repeat the animation indefinitely
                      repeatType: 'loop', // Loop the animation
                      ease: 'linear',
                    }}
                  >
                    <FaCloudDownloadAlt size={20} />
                  </motion.div>
                </Button>
              </motion.div>
              <Social />
            </div>
          </div>
          {/* Image Section */}
          <div className="md:pt-16 pt-8 relative md:ml-8">
            <motion.div
              className="flex justify-center w-full h-auto"
              initial={{ y: 0 }} // Starting position
              whileInView={{
                y: [0, -20, 0], // Define the animation keyframes: start at 0, move up to -50, then back to 0
              }}
              transition={{
                duration: 2, // Duration of the entire animation cycle
                repeat: Infinity, // Repeat the animation indefinitely
                repeatType: 'loop', // Loop the animation
                ease: 'linear',
              }}
            >
              <ImageComp
                imageName="/hero_img.jpg"
                alt="{imagealt}"
                height={550}
                width={550}
                class_name="rounded-[60px] lg:rotate-12 hover:rotate-0 duration-300 ease-in-out border-8 border-solid hover:border-color2 border-transparent hover:border-opacity-60"
                priority
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
