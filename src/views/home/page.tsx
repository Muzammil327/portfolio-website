import Link from 'next/link'
import dynamic from 'next/dynamic'
import { PortfolioH } from '../portfolio/page'
import Resume from '@/src/components/about/resume/page'
import Navbar from '@/src/components/layout/navbar/page'
import Container from '@/src/components/ui/Container'
import Heading from '@/src/components/ui/Heading'
import BlogCard from '@/src/components/blog/blogCard'
import Button from '@/src/components/ui/Button'
import { FaArrowRight } from 'react-icons/fa'
const MHero = dynamic(() => import('@/components/MHero/page'))

export default function HomeTemplate() {
  return (
    <>
      <header className="bg-hero">
        <Navbar />
        <MHero />
      </header>
      {/* -----------------------------------------------------------------------------------
      ------------------------------- Blog portion start here -------------------------------
      ------------------------------------------------------------------------------------*/}
      <section className="py-10 px-3">
        <Container>
          <Heading subhead={'DAILY UPDATE'} head={'Latest News & Blogs'} />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-4 gap-2 items-center">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </Container>
        <div className="flex items-center justify-center my-8">
          <Link href="/blogs">
            <Button className="btnIcon px-10 gap-2 duration-300 ease-in-out">
              View All Posts
              <span className="btnIconhover opacity-0 duration-300 ease-in-out">
                <FaArrowRight />
              </span>
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
