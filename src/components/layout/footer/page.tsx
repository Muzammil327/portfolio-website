'use client'
import Link from 'next/link'
import Container from '@/src/components/ui/Container'
import Logo from '@/src/components/ui/Logo'
import Social from '@/src/components/ui/Social'
import { FaChevronUp } from 'react-icons/fa'

const aboutData = {
  description:
    'I am a Javascript developer with expertise in full-stack web development. I have strong understanding of the Javascript framework and its ecosystem. I am passionate about creating efficient, scalable, and user-friendly web applications.',
}

interface TypeProps {
  title: string
  href: string
}

export default function Footer() {
    // Scroll to top function
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  return (
    <>
      <footer className="mt-8 bg-hero !pb-4">
        <Container>
          <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 md:gap-4 md:pt-16 pt-8 md:pb-10">
            <div className="lg:col-span-2 col-span-1 md:ml-5 ml-0 mb-8">
              <Logo />
              <p className="leading-7 text-base !mt-0">{aboutData.description}</p>
              <Social />
            </div>
            <div className="col-span-1 md:ml-5 ml-0 mb-8">
              <h3 className="mb-5 text-lg font-bold text-color2">
                Useful Links
              </h3>
              <ul>
                {data1.map((data: TypeProps) => {
                  return (
                    <li className="mb-5" key={data.title}>
                      <Link href={data.href} className="link">
                        {data.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="lg:col-span-2 col-span-1 md:ml-5 ml-0 mb-8">
              <h3 className="mb-5 text-lg font-bold text-color2">Skills</h3>
              <ul className="grid grid-cols-2 gap-2">
                {data2.map((data: TypeProps) => {
                  return (
                    <li className="mb-3" key={data.title}>
                      <Link href={data.href} className="link">
                        {data.title}
                      </Link>
                    </li>
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
        <button className='bg-color2 text-white rounded-md p-3 btnIcon' onClick={scrollToTop}><FaChevronUp /></button>
      </section>
    </>
  )
}

const data1: TypeProps[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
  // {
  //   title: 'Services',
  //   href: '/services',
  // },
  {
    title: 'Portfolios',
    href: '/portfolios',
  },
  {
    title: 'Blogs',
    href: '/blogs',
  },
]

const data2: TypeProps[] = [
  {
    title: 'Javascript',
    href: '/',
  },
  {
    title: 'Typescript',
    href: '/',
  },
  {
    title: 'Tailwind CSS',
    href: '/',
  },
  {
    title: 'SCSS',
    href: '/',
  },
  {
    title: 'React JS',
    href: '/',
  },
  {
    title: 'Next JS',
    href: '/',
  },
  {
    title: 'Node JS',
    href: '/',
  },
  {
    title: 'Express JS',
    href: '/',
  },
  {
    title: 'MongoDB',
    href: '/',
  },
  {
    title: 'Axios',
    href: '/',
  },
]
