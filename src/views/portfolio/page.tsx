import dynamic from 'next/dynamic'
const SHero = dynamic(() => import('@/components/SHero/page'))
import PortfolioItem from '@/src/components/portfolio/item/page'
import Container from '@/src/components/ui/Container'
import Heading from '@/src/components/ui/Heading/page'

export async function PortfolioAll() {
  return (
    <>
      <SHero head="My Portfolio" para="" />
      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {datas.map((data: any) => {
            return <PortfolioItem datas={data} key={data.id} />
          })}
        </div>
      </Container>
    </>
  )
}

export async function PortfolioH() {
  return (
    <>
      <Heading head="View All Projects" subhead="My Portfolio" />
      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {datas.slice(0, 3).map((data: any) => {
            return <PortfolioItem datas={data} key={data.id} />
          })}
        </div>
      </Container>
    </>
  )
}

const datas = [
  {
    id: 0,
    image: '/projects/ecommerce-website.webp',
    title: 'Full Stack Ecommerce Website',
    para: 'For this Ecommerce Website, I used Next JS Framework (Server Side Rendering ) and Styling With Tailwind CSS and Use Typescript for type-safe. And use Nextjs API . And deploy to Vercel with Github.',
    githubLink: 'https://github.com/Muzammil327/Full-Stack-Ecommerce-Website',
    liveLink: 'https://full-stack-ecommerce-website-five.vercel.app/',
  },
  {
    id: 1,
    image: '/projects/blog-website.webp',
    title: 'Blog Website',
    para: 'For this Blog Website, I used Next JS Framework (Server Side Rendering ) and Styling With Tailwind CSS and Use Typescript for type-safe. And use Sanity for Data management. And deploy to Vercel with Github.',
    githubLink: 'https://github.com/Muzammil327/frontend-blog',
    liveLink: 'https://blog-website-pink-chi.vercel.app/',
  },
  {
    id: 2,
    image: '/projects/portfolio-website.webp',
    title: 'Portfolio Website',
    para: 'For this Portfolio Website, I used Next JS Framework (Server Side Rendering ) and Styling With Tailwind CSS and Use Typescript for type-safe. And use Sanity for Data management. And deploy to Vercel with Github.',
    githubLink: 'https://github.com/Muzammil327/portfolio-website',
    liveLink: 'https://mmuzammil-portfolio.vercel.app/',
  },
]
