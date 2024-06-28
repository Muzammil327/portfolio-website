import React from 'react'
import MainHero from '@/src/components/hero/MainHero'
import Container from '@/src/components/ui/Container'
import Image from 'next/image'

export default function BlogCard2() {
  return (
    <main>
      <MainHero head="Blog 2 Cards Components" para="" />
      <section>
        <Image
          src="/components/card/blog/2.png"
          alt="Blog Card 2 Componentss"
          height={720}
          width={1280}
          className="rounded-tl-lg rounded-tr-lg duration-300 ease-in-out w-full"
        />
        <Container>
          <h1 className="text-3xl leading-9 font-semibold py-5 mt-5 mb-8">
            HTML & CSS
          </h1>
          <code>
            <pre>
              <h1 className="text-3xl leading-9 font-semibold py-5 mt-5 mb-8">
                HTML & CSS
              </h1>
            </pre>
          </code>
          <h1 className="text-3xl leading-9 font-semibold py-5 mb-8">
            HTML & TAILWIND CSS
          </h1>
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
