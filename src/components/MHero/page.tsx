'use client'
import Slider from 'react-slick'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Button from '@/components/ui/Button'
import Container from '../ui/Container'
import {
  FaCloudDownloadAlt,
  FaDownload,
  FaFacebookF,
  FaFileDownload,
  FaInstagram,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import Link from 'next/link'

export default function MHero() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  }

  return (
    <section className="bg-hero-2 relative">
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="lg:pt-48 pt-40 lg:text-left text-center">
            <span className="py-2 px-3 rounded-full border-2 border1">
              👋 Welcome to my portfolio
            </span>
            <h1 className="mt-8 mb-4 lg:text-4xl md:text-2xl text-3xl uppercase font-semibold text">
              I&lsquo;m Muzammil Safdar.
            </h1>
            <span className="text-color2 text-2xl">
              {' '}
              <Typewriter
                options={{
                  strings: [
                    'Javascript Developer.',
                    'React JS Developer.',
                    'Next JS Developer.',
                    'Frontend Developer.',
                    'Backend Developer.',
                    'Node JS Developer.',
                    'SQL Developer.',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <p className="font-normal text-lg my-5 leading-8 text text-gray-500">
              I am a Javascript developer with expertise in full-stack web
              development. I have a strong understanding of the Javascript
              framework and its ecosystem. I am passionate about creating
              efficient, scalable, and user-friendly web applications.
            </p>
            <div className="mt-6 flex items-center lg:justify-start justify-center gap-4">
              <Button className="btnIcon px-12 duration-300 ease-in rounded-full flex gap-2 items-center">
                Download CV <FaCloudDownloadAlt size={20} />
              </Button>
              <ul className="flex gap-4">
                <li className="btnIcon">
                  <Link href="/">
                    <FaFacebookF size={16} />
                  </Link>
                </li>
                <li className="btnIcon">
                  <Link href="/">
                    <FaYoutube size={16} />
                  </Link>
                </li>
                <li className="btnIcon">
                  <Link href="/">
                    <FaInstagram size={16} />
                  </Link>
                </li>
                <li className="btnIcon">
                  <Link href="/">
                    <FaTwitter size={16} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:pt-20 pt-8 relative">
            {/* <Slider {...settings}>
              {SliderImage.map((data: any) => {
                return (
                  <div className="relative rounded-lg" key={data.id}>
                    <Image
                      key={data.id}
                      src={data.image}
                      alt=""
                      height={720}
                      width={1280}
                      className="w-full px-2 h-auto rounded-lg"
                    />
                  </div>
                )
              })}
            </Slider> */}
            <div className="flex pt-12 justify-center">
              <Image
                src="/hero_img.jpg"
                alt=""
                height={750}
                width={750}
                className="h-[520px] w-[520px] rounded-[60px] lg:rotate-12 hover:rotate-0 duration-300 ease-in-out border-8 border-solid hover:border-color2 border-transparent hover:border-opacity-60"
              />
            </div>
            <div className="">
              <div className="sm:absolute flex items-center sm:gap-4 gap-2 md:mt-0 sm:mt-4 mt-2 md:mx-0 sm:mx-6 mx-3 bg-cyan-50 dark:bg-gray-700 py-3 px-4 rounded-md max-w-[280px] border1 duration-300 ease-in-out 2xl:right-[15rem] xl:right-[10rem] md::right-[7rem] bottom-0">
                <span className="btnIcon lg:px-4 md:px-3 px-2 lg:py-4 md:py-3 py-2">
                  <FaPhone />{' '}
                </span>
                <div>
                  <h5 className="text-color2 sm:pb-1 sm:text-base text-xs">
                    Customer Service
                  </h5>
                  <span className="text sm:text-base text-xs">
                    +92 314 4878266
                  </span>
                </div>
              </div>
              <div className="sm:absolute flex items-center sm:gap-4 gap-2 md:mt-0 sm:mt-4 mt-2 md:mx-0 sm:mx-6 mx-3 bg-cyan-50 dark:bg-gray-700 py-3 px-4 rounded-md max-w-[280px] border1 duration-300 ease-in-out right-[25rem] bottom-[32rem]">
                <span className="btnIcon lg:px-4 md:px-3 px-2 lg:py-4 md:py-3 py-2">
                  <FaReact />{' '}
                </span>
                <div>
                  <span className="text-color2 sm:text-base text-xs">
                    Frontend Developer
                  </span>
                </div>
              </div>
              <div className="sm:absolute flex items-center sm:gap-4 gap-2 md:mt-0 sm:mt-4 mt-2 md:mx-0 sm:mx-6 mx-3 bg-cyan-50 dark:bg-gray-700 py-3 px-4 rounded-md max-w-[280px] border1 duration-300 ease-in-out right-[4rem] bottom-[32rem]">
                <span className="btnIcon lg:px-4 md:px-3 px-2 lg:py-4 md:py-3 py-2">
                  <FaNodeJs />{' '}
                </span>
                <div>
                  <span className="text-color2 sm:text-base text-xs">
                    Backend Developer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

const SliderImage = [
  {
    id: '0',
    image: '/slider/tools.png',
  },
  {
    id: '1',
    image: '/slider/structure.png',
  },
  {
    id: '2',
    image: '/slider/styling.png',
  },
  {
    id: '3',
    image: '/slider/framework.png',
  },
  {
    id: '4',
    image: '/slider/backend.png',
  },
]
