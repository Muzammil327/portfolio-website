import React from 'react'
import MainHero from '@/src/components/hero/MainHero'
import ImageComp from '@/src/components/ui/Image'
import Link from 'next/link'

export default function BlogCard() {
  return (
    <main>
      <MainHero head="Blog Cards Components" para="" />
      <section>
        <div className="grid 2xl:grid-cols-4 container px-4 mx-auto sm:grid-cols-2 grid-cols-1 gap-6 items-center justify-center">
          {portfolio_data.map((data: any) => {
            return (
              <div key={data.id}>
                <div className="image relative overflow-hidden w-full h-auto">
                  <Link href={data.link}>
                    <ImageComp
                      imageName={data.image}
                      alt={data.name}
                      height={720}
                      width={1280}
                      class_name="rounded-tl-lg rounded-tr-lg duration-300 ease-in-out blogCard-img"
                    />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
const portfolio_data: any[] = [
  {
    id: 0,
    name: 'Blog Card 1',
    image: '/components/card/blog/1.png',
    link: '/components/card/blog/1',
  },
  {
    id: 0,
    name: 'Blog Card 2',
    image: '/components/card/blog/2.png',
    link: '/components/card/blog/2',
  },
]
