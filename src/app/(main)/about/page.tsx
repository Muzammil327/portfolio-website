import type { Metadata } from 'next'
import MainHero from '@/src/components/hero/MainHero'
import AboutUs from '@/src/components/about/aboutUs'
import ContactForm from '@/src/components/layout/form/page'

const data = {
  title: 'About US || Muzammil Portfolio',
  description:
    'I am a Full Stack Developer With Frontend Backend and Deveops Enginerr with Javascript, Typescript, Phython, PHP, Node JS and SQL.',
  canonical: '/about',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://mmuzammil-portfolio.vercel.app/about',
  keywords: [
    'mmuzammil-portfolio',
    'muzammil',
    'muzammil Safdar',
    'muzammil Safdar Portfolio',
    'muzammil portfolio',
  ],
}

export default function About() {
  return (
    <>
      <MainHero head="About Us" para="" />
      <AboutUs />
      <ContactForm />
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
