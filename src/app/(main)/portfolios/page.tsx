import MainHero from '@/src/components/hero/MainHero'
import React from 'react'
import type { Metadata } from 'next'
import { portfolio_data } from '@/src/data/portfolio'
import { portfolioProps } from '@/src/types/page'
import PortfolioCard from '@/src/components/portfolio/portfolioCard'
import Container from '@/src/components/ui/Container'

const data = {
  title: 'My Portfolio || Muzammil Portfolio',
  description:
    'I am a Full Stack Developer With Frontend Backend and Deveops Enginerr with Javascript, Typescript, Phython, PHP, Node JS and SQL.',
  canonical: '/portfolio',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://mmuzammil-portfolio.vercel.app/portfolio',
  keywords: [
    'mmuzammil-portfolio',
    'muzammil',
    'muzammil Safdar',
    'muzammil Safdar Portfolio',
    'muzammil portfolio',
  ],
}
export default function Portfolio() {
  return (
    <>
      <MainHero head="My Portfolio" para="" />
      <section>
        <Container>
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 items-center justify-center">
            {portfolio_data.map((data: portfolioProps) => {
              return (
                <div key={data.id}>
                  <PortfolioCard
                    para={data.para}
                    name={data.name}
                    liveLink={data.liveLink}
                    githubLink={data.githubLink}
                    image={data.image}
                    imagealt={data.imagealt}
                  />
                </div>
              )
            })}
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
