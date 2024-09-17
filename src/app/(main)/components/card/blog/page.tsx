import MainHero from '@/src/components/hero/MainHero'
import Container from '@/src/components/ui/Container'
import BlogCard1 from '@/src/app/(main)/components/card/blog/card-1'
import BlogCard2 from '@/src/app/(main)/components/card/blog/card-2'
import BlogCard3 from '@/src/app/(main)/components/card/blog/card-3'

const Page = () => {
  return (
    <main>
      <MainHero head="Blog Cards Components" para="" />
      <Container>
        <BlogCard1 />
        <BlogCard2 />
        <BlogCard3 />
      </Container>
    </main>
  )
}

export default Page
