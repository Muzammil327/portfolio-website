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
import { brandsProps, portfolioProps } from '@/src/types/page'
import { portfolio_data } from '@/src/data/portfolio'
import { brands_data } from '@/src/data/brand'
import ImageComp from '@/src/components/ui/Image'
import { useTheme } from 'next-themes'

export default function HomeView() {
  const { systemTheme, theme, setTheme } = useTheme()

  const currentTheme = theme === 'system' ? systemTheme : theme

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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  }
  var settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
      <section className="md:py-10">
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

      <div className="bg-color4 dark:bg-gray-900 lg:mb-20 md:mb-10 mb-4 bg-hero bg-hero-2">
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
      </div>

      {/* -----------------------------------------------------------------------------------
      ------------------------------- Blog portion start here -------------------------------
      ------------------------------------------------------------------------------------*/}
      <section className="px-3">
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

      {/* -----------------------------------------------------------------------------------
      ------------------------------- Brands portion start here -----------------------------
      ------------------------------------------------------------------------------------*/}

      {currentTheme === 'light' && (
        <section className="md:py-10 py-5">
          <Container>
            <div className="">
              <Slider {...settings2}>
                {brands_data.map((data: brandsProps) => {
                  return (
                    <div key={data.id}>
                      <ImageComp
                        imageName={`${data.image}`}
                        alt={data.name}
                        height={91}
                        width={205}
                        class_name="mx-auto border-none outline-none opacity-20 hover:opacity-100 duration-300 dark:opacity-100 dark:hover:opacity-20 duration-300"
                      />
                    </div>
                  )
                })}
              </Slider>
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
