'use client'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { FaLocationArrow, FaEnvelope, FaPhone } from 'react-icons/fa'
import { useTheme } from 'next-themes'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import styles from './form.module.css'
import Container from '../../ui/Container'
import { brandsProps } from '@/src/types/page'
import { brands_data } from '@/src/data/brand'
import ImageComp from '../../ui/Image'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const { systemTheme, theme, setTheme } = useTheme()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const currentTheme = theme === 'system' ? systemTheme : theme

  const [data, setData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    message: '',
  })

  const SubmitHandle = async (e: any) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      if (
        !data.fname ||
        !data.lname ||
        !data.email ||
        !data.phone ||
        !data.message
      ) {
        toast.warning('Please fill in all fields.')
        return
      }
      const res = await axios.post(`/api/contactForm`, data)
      toast.success(res.data.message)
      setData({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        message: '',
      })
    } catch (error) {
      setIsLoading(false)
      console.log(error)
      toast.warning('Error during Task Update')
    } finally {
      setIsLoading(false)
    }
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
    <div className="footer lg:pt-16 md:pt-20 sm:py-8 bg-hero-3">
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="left lg:pt-24 lg:pb-0 py-8">
            <div className="mr-6 relative">
              <motion.span
                className="text-color2 font-medium text-base"
                initial={{ y: '50%', opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                    duration: 0.8,
                  },
                }}
              >
                Stay Connected
              </motion.span>
              <motion.h3
                className="my-4 text font-bold lg:text-3xl text-2xl"
                initial={{ y: '50%', opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                    duration: 0.8,
                  },
                }}
              >
                Let’s Work Together!
              </motion.h3>
            </div>
            <div className="contact">
              <div className="phone mt-5 flex gap-6">
                <motion.div
                  className="icon btnIcon !py-3 !px-4"
                  initial={{ rotate: 360, opacity: 0 }}
                  whileInView={{
                    rotate: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.7,
                      duration: 0.8,
                    },
                  }}
                >
                  <FaPhone size={16} />
                </motion.div>
                <div className="body flex flex-col">
                  <motion.span
                    className="text-gray-400"
                    initial={{ y: '50%', opacity: 0 }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.6,
                        duration: 0.8,
                      },
                    }}
                  >
                    Phone
                  </motion.span>
                  <motion.span
                    className="text"
                    initial={{ y: '50%', opacity: 0 }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.7,
                        duration: 0.8,
                      },
                    }}
                  >
                    0314 4878266
                  </motion.span>
                </div>
              </div>
              <div className="phone mt-7 flex gap-6">
                <motion.div
                  className="icon btnIcon !py-3 !px-4"
                  initial={{ rotate: 360, opacity: 0 }}
                  whileInView={{
                    rotate: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.7,
                      duration: 0.8,
                    },
                  }}
                >
                  <FaEnvelope size={16} />
                </motion.div>
                <div className="body flex flex-col">
                  <motion.span
                    className="text-gray-400"
                    initial={{ y: '50%', opacity: 0 }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.6,
                        duration: 0.8,
                      },
                    }}
                  >
                    Email
                  </motion.span>
                  <motion.span
                    className="text"
                    initial={{ y: '50%', opacity: 0 }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.7,
                        duration: 0.8,
                      },
                    }}
                  >
                    mmuzammil327off@gmail.com
                  </motion.span>
                </div>
              </div>
              <div className="phone mt-7 flex gap-6">
                <motion.div
                  className="icon btnIcon !py-3 !px-4"
                  initial={{ rotate: 360, opacity: 0 }}
                  whileInView={{
                    rotate: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.7,
                      duration: 0.8,
                    },
                  }}
                >
                  <FaLocationArrow size={16} />
                </motion.div>
                <div className="body flex flex-col">
                  <motion.span
                    className="text-gray-400"
                    initial={{ y: '50%', opacity: 0 }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.6,
                        duration: 0.8,
                      },
                    }}
                  >
                    Address
                  </motion.span>
                  <motion.span
                    className="text"
                    initial={{ y: '50%', opacity: 0 }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.7,
                        duration: 0.8,
                      },
                    }}
                  >
                    Faisalbad, Punjab, Pakistan
                  </motion.span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative p-7 rounded-md text-left bg-opacity-0">
            <div className="absolute inset-0 bg-color2 opacity-60 rounded-md z-0"></div>
            <div className="relative z-10">
              <div className="text-center my-4">
                <motion.h2
                  className="text-white md:text-2xl text-xl mb-6 font-bold"
                  initial={{ y: '-50%', opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.7,
                      duration: 0.8,
                    },
                  }}
                >
                  Contact Us for Any Information
                </motion.h2>
              </div>
              <form onSubmit={SubmitHandle}>
                <div className="grid md:grid-cols-2 gap-5 grid-cols-1">
                  <motion.input
                    initial={{ x: '-50%', opacity: 0 }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.4,
                        duration: 0.8,
                      },
                    }}
                    type="text"
                    className={styles.textArea}
                    placeholder="First name"
                    value={data.fname}
                    onChange={(e) =>
                      setData({ ...data, fname: e.target.value })
                    }
                  />
                  <motion.input
                    type="text"
                    value={data.lname}
                    onChange={(e) =>
                      setData({ ...data, lname: e.target.value })
                    }
                    className={styles.textArea}
                    placeholder="Last name"
                    initial={{ x: '50%', opacity: 0 }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.6,
                        duration: 0.8,
                      },
                    }}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-5 grid-cols-1">
                  <motion.input
                    type="email"
                    className={styles.textArea}
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    placeholder="Email"
                    initial={{ x: '-50%', opacity: 0 }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.7,
                        duration: 0.8,
                      },
                    }}
                  />
                  <motion.input
                    type="tel"
                    className={styles.textArea}
                    placeholder="Phone"
                    value={data.phone}
                    onChange={(e) =>
                      setData({ ...data, phone: e.target.value })
                    }
                    initial={{ x: '50%', opacity: 0 }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.7,
                        duration: 0.8,
                      },
                    }}
                  />
                </div>
                <motion.textarea
                  placeholder="Your Message"
                  maxLength={5000}
                  className={`min-h-[160px] ${styles.textArea}`}
                  value={data.message}
                  onChange={(e) =>
                    setData({ ...data, message: e.target.value })
                  }
                  initial={{ y: '50%', opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.7,
                      duration: 0.8,
                    },
                  }}
                />
                <motion.button
                  className="btnIcon block w-full !py-4 duration-300 ease-in-out"
                  initial={{ rotate: 180, opacity: 0 }}
                  whileInView={{
                    rotate: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.7,
                      duration: 0.8,
                    },
                  }}
                >
                  {isLoading ? 'Loading..' : 'Submit'}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </Container>
      {currentTheme === 'light' && (
        <section className="md:py-10 py-10">
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
    </div>
  )
}
