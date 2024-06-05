'use client'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Navbar from '@/src/components/layout/navbar/page'
import Container from '@/src/components/ui/Container'
import Heading from '@/src/components/ui/Heading'
import BlogCard from '@/src/components/blog/blogCard'
import Button from '@/src/components/ui/Button'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
import { FaHand } from 'react-icons/fa6'
const HomeHero = dynamic(() => import('@/src/components/hero/HomeHero'))
import { FcApproval } from 'react-icons/fc'
import PortfolioCard from '@/src/components/portfolio/portfolioCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { portfolioProps } from '@/src/types/page'
import { portfolio_data } from '@/src/data/portfolio'

export default function HomeTemplate() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  }
  return (
    <>
      <header className="bg-hero">
        <Navbar />
        <HomeHero />
      </header>
      {/* -----------------------------------------------------------------------------------
      ------------------------------- Portfolio portion start here --------------------------
      ------------------------------------------------------------------------------------*/}
      <section className="md:py-10 px-3">
        <Container>
          <Heading subhead={'Portfolio'} head={'See My Recent Projects'} />
          <div className="">
            <Slider {...settings}>
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
            </Slider>
          </div>
        </Container>
        <div className="flex items-center justify-center my-8">
          <Link href="/portfolios">
            <Button className="btnIcon px-10 gap-2 duration-300 ease-in-out">
              View All Projects
              <span className="btnIconhover opacity-0 duration-300 ease-in-out">
                <FaArrowRight />
              </span>
            </Button>
          </Link>
        </div>
      </section>

      {/* -----------------------------------------------------------------------------------
      ------------------------------- Call To Action portion start here ---------------------
      ------------------------------------------------------------------------------------*/}
      {/* 
      <div className="py-10 bg-gray-100 dark:bg-gray-900 lg:mb-20 md:mb-10 mb-4 bg-hero bg-hero-2">
        <Container>
          <div className="grid md:grid-cols-5 gap-8">
            <div className="flex pt-12 justify-center md:col-span-2">
              <Image
                src="/hero_img.jpg"
                alt=""
                height={750}
                width={750}
                className="sm:h-[520px] h-[400px] sm:w-[520px] w-[400px] rounded-[60px] lg:rotate-12 hover:rotate-0 duration-300 ease-in-out border-8 border-solid hover:border-color2 border-transparent hover:border-opacity-60"
              />
            </div>
            <div className="md:col-span-3 ml-6 flex flex-col justify-center">
              <div className="relative">
                <span className="opacity-10 text md:text-[8rem] text-[2rem] absolute md:-bottom-4 -bottom-1">
                  Hello
                </span>
                <span className="absolute bottom-4 -left-36">
                  <FcApproval size={80} />
                </span>
              </div>
              <h4 className="text font-bold lg:text-5xl md:text-4xl text-3xl pt-4 pb-8">
                If you have any project in mind?
              </h4>
              <span className="font-semibold text-2xl pb-8 text-gray-400 ">
                DM now! mmuzammil327off@gmail.com
              </span>
              <div>
                <Button className="btnIcon px-10 gap-2 duration-300 ease-in-out rounded-full">
                  Hire Me Now{' '}
                  <span className="btnIconhover opacity-0 duration-300 ease-in-out">
                    <FaArrowRight />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div> */}

      {/* -----------------------------------------------------------------------------------
      ------------------------------- Blog portion start here -------------------------------
      ------------------------------------------------------------------------------------*/}
      <section className="md:py-10 px-3">
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
