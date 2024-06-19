import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import MainHero from '@/src/components/hero/MainHero'
import SkillCard from '@/src/components/skill/skillCard'
import Container from '@/src/components/ui/Container'
import HTML5 from '@/src/components/svg/html'
import CSS3 from '@/src/components/svg/css'
import Javascript from '@/src/components/svg/js'
import Typescript from '@/src/components/svg/ts'
import TailwindCSS from '@/src/components/svg/tailwindCss'
import ReactJs from '@/src/components/svg/react'
import NextJs from '@/src/components/svg/next'
import Git from '@/src/components/svg/git'
import Github from '@/src/components/svg/github'
import SCSS from '@/src/components/svg/scss'
import Vercel from '@/src/components/svg/vercel'
import AWS from '@/src/components/svg/aws'
import Mongodb from '@/src/components/svg/mongodb'
import Expressjs from '@/src/components/svg/expressjs'
import Nodejs from '@/src/components/svg/nodejs'
import Graphql from '@/src/components/svg/graphql'
import Redux from '@/src/components/svg/redux'
import PostgreSQL from '@/src/components/svg/postgresql'
import Cloudinary from '@/src/components/svg/cloudinary'

const data = {
  title: 'My Skills || Muzammil Portfolio',
  description:
    'I am a Full Stack Developer With Frontend Backend and Deveops Enginerr with Javascript, Typescript, Phython, PHP, Node JS and SQL.',
  canonical: '/skill',
  index: true,
  follow: true,
  image: '/opengraph-image.png',
  url: 'https://mmuzammil-portfolio.vercel.app/skill',
  keywords: [
    'mmuzammil-portfolio',
    'muzammil',
    'muzammil Safdar',
    'muzammil Safdar Portfolio',
    'muzammil portfolio',
  ],
}

export default function Skill() {
  return (
    <>
      <MainHero head="My Skills" para="" />
      <section>
        <Container>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 sm:py-6">
            <SkillCard icon={<HTML5 />} title="HTML5" />
            <SkillCard icon={<CSS3 />} title="CSS3" />
            <SkillCard icon={<SCSS />} title="SCSS" />
            <SkillCard icon={<TailwindCSS />} title="Tailwind CSS" />
            <SkillCard icon={<Javascript />} title="Javascript" />
            <SkillCard icon={<Typescript />} title="Typescript" />
            <SkillCard icon={<ReactJs />} title="React JS" />
            <SkillCard icon={<Redux />} title="Redux" />
            <SkillCard icon={<NextJs />} title="Next JS" />
            <SkillCard icon={<Git />} title="Git" />
            <SkillCard icon={<Github />} title="Github" />
            <SkillCard icon={<Nodejs />} title="Node JS" />
            <SkillCard icon={<Expressjs />} title="Express JS" />
            <SkillCard icon={<Mongodb />} title="Mongo DB" />
            <SkillCard image="/nextAuth.png" title="Next Auth" />
            <SkillCard icon={<Vercel />} title="Vercel" />
            <SkillCard icon={<Cloudinary />} title="Cloudinary" />
            <SkillCard icon={<Graphql />} title="Graphql" news />
            <SkillCard icon={<ReactJs />} title="React Native" news />
            <SkillCard icon={<AWS />} title="AWS" news />
            <SkillCard icon={<PostgreSQL />} title="Postgre SQL" news />
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <h2 className="md:text-2xl text-lg font-semibold py-1">Packages</h2>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 sm:py-6">
            <SkillCard title="axios" />
            <SkillCard title="bcrypt" />
            <SkillCard title="mongoose" />
            <SkillCard title="react-icons" />
            <SkillCard title="react-share" />
            <SkillCard title="swiper" />
            <SkillCard title="react-tagsinput" />
            <SkillCard title="react-select" />
            <SkillCard title="prettier" />
            <SkillCard title="react-slick" />
            <SkillCard title="react-toastify" />
            <SkillCard title="typewriter-effect" />

            <SkillCard title="nodemailer" news />
            <SkillCard title="render" news />
          </div>
        </Container>
      </section>
    </>
  )
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: data.keywords,
  openGraph: {
    title: data.title,
    description: data.description,
    url: data.url,
    images: [
      {
        url: data.image,
        alt: data.title,
      },
    ],
  },
  alternates: {
    canonical: data.canonical,
  },
  robots: {
    index: data.index,
    follow: data.follow,
    googleBot: {
      index: data.index,
      follow: data.follow,
    },
  },
  twitter: {
    title: data.title,
    description: data.description,
    images: {
      url: data.image,
      alt: data.title,
    },
  },
}
