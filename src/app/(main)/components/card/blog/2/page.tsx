import React from 'react'
import MainHero from '@/src/components/hero/MainHero'
import Container from '@/src/components/ui/Container'
import Image from 'next/image'
import MarkdownRenderer from '@/src/components/ui/MarkdownRenderer'

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
<section class="grid md:grid-cols-2 grid-cols-1 gap-4 items-center container mx-auto px-5 py-10 bg-pink-50">
  <div class="cards bg-white p-2 rounded-t-lg shadow-md">
    <div class="relative">
      <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" class="w-full rounded-t-lg" alt="Main Image">
      <img src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" class="h-16 w-16 border-2 border-white rounded-full absolute -bottom-8 right-6 shadow-xl" alt="Author Image">
    </div>
    <div class="p-4">
      <h3 class="my-4 text-xl font-semibold leading-7 tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, omnis?</h3>
      <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, tenetur delectus? Quia impedit iste in aliquam nulla tenetur repellat reiciendis.</p>
      <div class="flex items-center gap-5 pt-6 text-sm text-gray-500">
        <span>By <span class="border-b border-dotted border-red-300">Muzammil</span></span>
        <span>Feb 14, 2023</span>
      </div>
    </div>
  </div>
  <div class="cards bg-white p-2 rounded-t-lg shadow-md">
    <div class="relative">
      <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" class="w-full rounded-t-lg" alt="Main Image">
      <img src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" class="h-16 w-16 border-2 border-white rounded-full absolute -bottom-8 right-6 shadow-xl" alt="Author Image">
    </div>
    <div class="p-4">
      <h3 class="my-4 text-xl font-semibold leading-7 tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, omnis?</h3>
      <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, tenetur delectus? Quia impedit iste in aliquam nulla tenetur repellat reiciendis.</p>
      <div class="flex items-center gap-5 pt-6 text-sm text-gray-500">
        <span>By <span class="border-b border-dotted border-red-300">Muzammil</span></span>
        <span>Feb 14, 2023</span>
      </div>
    </div>
  </div>
</section>

\`\`\`
`
