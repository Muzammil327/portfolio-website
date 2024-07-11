'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaArrowRight } from 'react-icons/fa'
import Button from '../ui/Button'
import Link from 'next/link'
import Container from '../ui/Container'
import Heading from '../ui/Heading'
import PortfolioCard from './portfolioCard'
import { portfolioProps } from '@/src/types/page'
import { portfolio_data } from '@/src/data/portfolio'
import { motion } from 'framer-motion'

export default function PortfolioHomeCard() {
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

  return (
    <section className="py-20">
      <Container>
        <Heading subhead={'Portfolio'} head={'See My Recent Projects'} />
        <div className="">
          <Slider {...settings}>
            {portfolio_data.map((data: portfolioProps) => {
              return (
                <motion.div
                  key={data.id}
                  initial={{ y: '40%', opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.6,
                      duration: 0.5,
                    },
                  }}
                >
                  <PortfolioCard
                    para={data.para}
                    name={data.name}
                    liveLink={data.liveLink}
                    githubLink={data.githubLink}
                    image={data.image}
                    imagealt={data.imagealt}
                    link={data.link}
                  />
                </motion.div>
              )
            })}
          </Slider>
        </div>
      </Container>
      <motion.div
        className="flex items-center justify-center my-8"
        initial={{ x: '40%', opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            delay: 0.7,
            duration: 0.8,
          },
        }}
      >
        <Link href="/portfolios">
          <Button className="btnIcon px-10 gap-2 duration-300 ease-in-out">
            View All Projects
            <span className="btnIconhover opacity-0 duration-300 ease-in-out">
              <FaArrowRight />
            </span>
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}
