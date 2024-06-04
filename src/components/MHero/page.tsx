'use client'
import Slider from 'react-slick'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Button from '@/components/ui/Button'
import Container from '../ui/Container'

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
    <section>
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="lg:pt-40 pt-40 md:text-left text-center">
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
            <div className="mt-6 flex items-center md:justify-start justify-center gap-4">
              <Button className="btnIcon px-8 duration-300 ease-in">
                Hire Me
              </Button>
              <Button className="btnIcon px-6 duration-300 ease-in">
                Download CV
              </Button>
              {/* <Button href={'/hireme'} text={''} className={'py-2 px-6'} /> */}
              {/* <Button href={''} text={'Download CV'} className={'py-2 px-6'} /> */}
            </div>
          </div>
          <div className="md:pt-40 pt-8">
            <Slider {...settings}>
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
            </Slider>
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
