import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/src/components/layout/navbar/page'
import Container from '@/src/components/ui/Container'
import Heading from '@/src/components/ui/Heading'
import BlogCard from '@/src/components/blog/blogCard'
import Button from '@/src/components/ui/Button'
import { FaArrowRight } from 'react-icons/fa'
import PortfolioHomeCard from '@/src/components/portfolio/portfolioHomeCard'
import { PostCard } from '@/src/types/page'
import ContactForm from '../components/layout/form/page'
import ImageComp from '../components/ui/Image'
import AboutUs from '../components/about/aboutUs'
import SkillCard from '../components/skill/skillCard'
import TailwindCSS from '../components/svg/tailwindCss'
import Javascript from '../components/svg/js'
import Typescript from '../components/svg/ts'
import ReactJs from '../components/svg/react'
import NextJs from '../components/svg/next'
import Git from '../components/svg/git'
import PostMetadata from '../components/blog/PostMetadata'
import AWS from '../components/svg/aws'
import Nodejs from '../components/svg/nodejs'
import Expressjs from '../components/svg/expressjs'
import Mongodb from '../components/svg/mongodb'
import HomeHero from '../components/hero/HomeHero'

export default async function HomeView() {
  const postMetadata = await PostMetadata()

  return (
    <>
      <header className="bg-hero">
        <Navbar />
        <HomeHero />
      </header>
      <AboutUs />
      <PortfolioHomeCard />

      {/* -----------------------------------------------------------------------------------
      ------------------------------- Call To Action portion start here ---------------------
      ------------------------------------------------------------------------------------*/}

      <section className="bg-gray-50 dark:bg-gray-900 lg:mb-20 md:mb-10 mb-4 bg-hero bg-hero-2">
        <Container>
          <div className="grid lg:grid-cols-6 gap-8 items-center py-10">
            <div className="flex pt-12 justify-center md:col-span-2">
              <Image
                src="/hero_img.jpg"
                alt=""
                height={400}
                width={400}
                className="md:rounded-full rounded-3xl lg:rotate-12 hover:rotate-0 duration-300 ease-in-out border-8 border-solid hover:border-color2 border-transparent hover:border-opacity-60"
              />
            </div>
            <div className="lg:col-span-4 lg:text-left text-center lg:ml-6 flex flex-col justify-center relative">
              <span className="opacity-10 md:text-8xl sm:text-7xl text-6xl font-bold absolute inset-0 md:bottom-auto md:left-16 md:transform md:-translate-y-1/2 md:-translate-x-1/2 text-center pb-8">
                Hello
              </span>
              <h4 className="text font-bold lg:text-5xl md:text-3xl text-2xl leading-9 pt-4 pb-8">
                If you have any project in mind?
              </h4>
              <span className="font-semibold sm:text-2xl text-xl pb-8 text-gray-400">
                DM now! mmuzammil327off@gmail.com
              </span>
              <div>
                <Button className="btnIcon px-10 gap-2 duration-300 ease-in-out rounded-full lg:m-0 mx-auto">
                  Hire Me Now{' '}
                  <span className="btnIconhover opacity-0 duration-300 ease-in-out">
                    <FaArrowRight />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* -----------------------------------------------------------------------------------
      ------------------------------- Skills portion start here -----------------------------
      ------------------------------------------------------------------------------------*/}
      <section>
        <Heading
          subhead={'My Skills'}
          head={'Hello there, My name is Muhammad Muzammil.'}
        />

        <Container>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 sm:py-6">
            <SkillCard icon={<TailwindCSS />} title="Tailwind CSS" />
            <SkillCard icon={<Javascript />} title="Javascript" />
            <SkillCard icon={<Typescript />} title="Typescript" />
            <SkillCard icon={<ReactJs />} title="React JS" />
            <SkillCard icon={<NextJs />} title="Next JS" />
            <SkillCard icon={<Git />} title="Git" />
            <SkillCard icon={<Nodejs />} title="Node JS" />
            <SkillCard icon={<Expressjs />} title="Express JS" />
            <SkillCard icon={<Mongodb />} title="Mongo DB" />
            <SkillCard icon={<AWS />} title="AWS" news />
          </div>
        </Container>
        <div className="flex items-center justify-center my-8">
          <Link href="/skill">
            <Button className="btnIcon px-10 gap-2 duration-300 ease-in-out">
              View All Skills
              <span className="btnIconhover opacity-0 duration-300 ease-in-out">
                <FaArrowRight />
              </span>
            </Button>
          </Link>
        </div>
      </section>
      <ContactForm />

      <div className="bannerImage w-full">
        <ImageComp
          imageName="/Banner-home.png"
          alt={''}
          height={720}
          width={1280}
          class_name="w-full"
        />
      </div>

      {/* -----------------------------------------------------------------------------------
      ------------------------------- Blog portion start here -------------------------------
      ------------------------------------------------------------------------------------*/}
      <section className="px-3">
        <Container>
          <Heading subhead={'DAILY UPDATE'} head={'Latest News & Blogs'} />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-4 gap-2 items-center">
            {postMetadata.slice(0, 6).map((data: any) => (
              <BlogCard datas={data} key={data.title} />
            ))}
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
