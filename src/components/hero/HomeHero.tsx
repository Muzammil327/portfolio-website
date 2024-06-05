'use client'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import Container from '@/src/components/ui/Container'
import Button from '@/components/ui/Button'
import Social from '@/src/components/ui/Social'

export default function HomeHero() {
  return (
    <section className="bg-hero-2 relative">
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="lg:pt-48 pt-40 lg:text-left text-center">
            <span className="py-2 px-3 rounded-full border-2 border1">
            👋 Welcome to my portfolio
            </span>
            <h1 className="mt-8 mb-4 lg:text-4xl md:text-2xl text-3xl uppercase font-semibold text">
              I&lsquo;m Muzammil Safdar.
            </h1>
            <span className="text-color2 text-2xl">
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
            </span>
            <p className="">
              I am a Javascript developer with expertise in full-stack web
              development. I have a strong understanding of the Javascript
              framework and its ecosystem. I am passionate about creating
              efficient, scalable, and user-friendly web applications.
            </p>
            <div className="mt-6 flex sm:flex-row flex-col items-center lg:justify-start justify-center gap-4">
              <Button className="btnIcon px-12 duration-300 ease-in rounded-full flex gap-2 items-center">
                Download CV <FaCloudDownloadAlt size={20} />
              </Button>
              <Social />
            </div>
          </div>
          <div className="md:pt-20 pt-8 relative">
            <div className="flex pt-12 justify-center">
              <Image
                src="/hero_img.jpg"
                alt=""
                height={750}
                width={750}
                className="sm:h-[520px] h-[400px] sm:w-[520px] w-[400px] rounded-[60px] lg:rotate-12 hover:rotate-0 duration-300 ease-in-out border-8 border-solid hover:border-color2 border-transparent hover:border-opacity-60"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
