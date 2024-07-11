'use client'
import Link from 'next/link'
import Container from '@/src/components/ui/Container'
import Logo from '@/src/components/ui/Logo'
import Social from '@/src/components/ui/Social'
import { FaChevronUp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const aboutData = {
  description:
    'I am a Javascript developer with expertise in full-stack web development. I have strong understanding of the Javascript framework and its ecosystem. I am passionate about creating efficient, scalable, and user-friendly web applications.',
}

interface TypeProps {
  title: string
  href: string
  delay: number
}

export default function Footer() {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <>
      <footer className="mt-8 bg-hero !pb-4">
        <Container>
          <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 md:gap-4 md:pt-16 pt-8 md:pb-10">
            <div className="lg:col-span-2 col-span-1 md:ml-5 ml-0 mb-8">
              <Logo />
              <motion.p
                className="leading-7 text-base !mt-0"
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                    duration: 0.3,
                  },
                }}
              >
                {aboutData.description}
              </motion.p>
              <Social />
            </div>
            <div className="col-span-1 md:ml-5 ml-0 mb-8">
              <motion.h3
                className="mb-5 text-lg font-bold text-color2"
                initial={{ x: '-100%', opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                    duration: 0.3,
                  },
                }}
              >
                Useful Links
              </motion.h3>
              <ul>
                {data1.map((data: TypeProps) => {
                  return (
                    <motion.li
                      className="mb-5"
                      key={data.title}
                      initial={{ y: '100%', opacity: 0 }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                          delay: data.delay,
                          duration: 0.3,
                        },
                      }}
                    >
                      <Link href={data.href} className="link">
                        {data.title}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
            </div>
            <div className="lg:col-span-2 col-span-1 md:ml-5 ml-0 mb-8">
              <motion.h3
                className="mb-5 text-lg font-bold text-color2"
                initial={{ x: '-100%', opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                    duration: 0.3,
                  },
                }}
              >
                Skills
              </motion.h3>
              <ul className="grid grid-cols-2 gap-2">
                {data2.map((data: TypeProps) => {
                  return (
                    <motion.li
                      className="mb-3"
                      key={data.title}
                      initial={{ y: '100%', opacity: 0 }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                          delay: data.delay,
                          duration: 0.3,
                        },
                      }}
                    >
                      <Link href={data.href} className="link">
                        {data.title}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
            </div>
          </div>
        </Container>

        <div className="text-center border-t-2 border-solid pt-4 border-border1">
          <p className="mb-0 font-normal text-sm text !my-0">
            Copyright © 2024 | by{' '}
            <Link href="/" target="_blank" className="text-color2">
              Muzammil Safdar
            </Link>
          </p>
        </div>
      </footer>
      <section className="topBtn fixed bottom-8 right-5">
        <button
          className="bg-color2 text-white rounded-md p-3 btnIcon"
          onClick={scrollToTop}
        >
          <FaChevronUp />
        </button>
      </section>
    </>
  )
}

const data1: TypeProps[] = [
  {
    title: 'Home',
    href: '/',
    delay: 0.3,
  },
  {
    title: 'About',
    href: '/about',
    delay: 0.4,
  },
  {
    title: 'Contact',
    href: '/contact',
    delay: 0.5,
  },
  // {
  //   title: 'Services',
  //   href: '/services',
  // },
  {
    title: 'Portfolios',
    href: '/portfolios',
    delay: 0.6,
  },
  {
    title: 'Blogs',
    href: '/blogs',
    delay: 0.7,
  },
]

const data2: TypeProps[] = [
  {
    title: 'Javascript',
    href: '/',
    delay: 0.3,
  },
  {
    title: 'Typescript',
    href: '/',
    delay: 0.3,
  },
  {
    title: 'Tailwind CSS',
    href: '/',
    delay: 0.4,
  },
  {
    title: 'SCSS',
    href: '/',
    delay: 0.4,
  },
  {
    title: 'React JS',
    href: '/',
    delay: 0.5,
  },
  {
    title: 'Next JS',
    href: '/',
    delay: 0.5,
  },
  {
    title: 'Node JS',
    href: '/',
    delay: 0.6,
  },
  {
    title: 'Express JS',
    href: '/',
    delay: 0.6,
  },
  {
    title: 'MongoDB',
    href: '/',
    delay: 0.7,
  },
  {
    title: 'Axios',
    href: '/',
    delay: 0.7,
  },
]
