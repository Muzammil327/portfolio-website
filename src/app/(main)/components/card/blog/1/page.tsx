import React from 'react'
import MainHero from '@/src/components/hero/MainHero'
import Container from '@/src/components/ui/Container'
import Image from 'next/image'
import MarkdownRenderer from '@/src/components/ui/MarkdownRenderer'
import { Metadata } from 'next'

const data = {
  title: 'Blog Card 1 Component || Muzammil Safdar',
  description:
    'I am created a stylish blog card using Tailwind CSS. Check it out!',
  canonical: '/components/card/blog/1/',
  index: true,
  follow: true,
  image: '/components/card/blog/1.png',
  url: 'https://mmuzammil-portfolio.vercel.app/components/card/blog/1/',
  keywords: ['blog card', 'blog card muzammil', 'muzammil card blog'],
}

export default function BlogCard1() {
  return (
    <main>
      <MainHero head="Blog 1 Cards Components" para="" />
      <section>
        <Image
          src="/components/card/blog/1.png"
          alt="Blog Card 1 Componentss"
          height={720}
          width={1280}
          className="rounded-tl-lg rounded-tr-lg duration-300 ease-in-out w-full"
        />
        <Container>
          <h1 className="text-3xl leading-9 font-semibold py-5 mt-5 mb-8">
            HTML & CSS
          </h1>

          <h1 className="text-3xl leading-9 font-semibold py-5 mb-8">
            HTML & TAILWIND CSS
          </h1>
          <MarkdownRenderer markdown={markdownContent1} />

          <h1 className="text-3xl leading-9 font-semibold py-5 mb-8">
            HTML & SCSS
          </h1>
          <h1 className="text-3xl leading-9 font-semibold py-5 mb-8">
            HTML & Material UI
          </h1>
          <h1 className="text-3xl leading-9 font-semibold py-5 mb-12">
            HTML & SHADCN UI
          </h1>
        </Container>
      </section>
    </main>
  )
}

const markdownContent1 = `
\`\`\`html
<section class="my-10">
  <div class="container px-4 mx-auto grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
    <div class="card p-3 border-2 border-solid hover:border-gray-200 border-transparent duration-300 ease-in-out rounded-xl">
      <div class="image">
        <img src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg" alt="" class="rounded-2xl">
      </div>
      <div class="body">
        <h3 class="py-2 font-semibold text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, odio.</h3>
        <div class="flex items-center justify-between py-2">
          <span class="text-sm font-medium"><span class="text-slate-400 mr-1 font-normal">By</span>Muzammil</span>
          <span class="text-slate-400 mr-1 font-normal text-sm">1h ago</span>
        </div>
      </div>
    </div>
    <div class="card p-3 border-2 border-solid hover:border-gray-200 border-transparent duration-300 ease-in-out rounded-xl">
      <div class="image">
        <img src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg" alt="" class="rounded-2xl">
      </div>
      <div class="body">
        <h3 class="py-2 font-semibold text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, odio.</h3>
        <div class="lower flex items-center justify-between py-2">
          <span class="text-sm font-medium"><span class="text-slate-400 mr-1 font-normal">By</span>Muzammil</span>
          <span class="text-slate-400 mr-1 font-normal text-sm">1h ago</span>
        </div>
      </div>
    </div>
    <div class="card p-3 border-2 border-solid hover:border-gray-200 border-transparent duration-300 ease-in-out rounded-xl">
      <div class="image">
        <img src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg" alt="" class="rounded-2xl">
      </div>
      <div class="body">
        <h3 class="py-2 font-semibold text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, odio.</h3>
        <div class="lower flex items-center justify-between py-2">
          <span class="text-sm font-medium"><span class="text-slate-400 mr-1 font-normal">By</span>Muzammil</span>
          <span class="text-slate-400 mr-1 font-normal text-sm">1h ago</span>
        </div>
      </div>
    </div>
  </div>
</section>
\`\`\`
`

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
