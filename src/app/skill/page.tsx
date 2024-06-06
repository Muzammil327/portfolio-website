import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import MainHero from '@/src/components/hero/MainHero'
import SkillCardList from '@/src/components/skill/skill/list/page'

const data = {
  title: 'My Skills || Muzammil Portfolio',
  description:
    'I am a Full Stack Developer With Frontend Backend and Deveops Enginerr with Javascript, Typescript, Phython, PHP, Node JS and SQL.',
  canonical: '/skill',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
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
      <SkillCardList />
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
