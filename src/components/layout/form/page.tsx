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

export default function ContactForm() {
  const { systemTheme, theme, setTheme } = useTheme()

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
      console.log(error)
      toast.warning('Error during Task Update')
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
              <span className="text-color2 font-medium text-base">
                Stay Connected
              </span>
              <h3 className="my-4 text font-bold lg:text-3xl text-2xl">
                Let’s Work Together!
              </h3>
            </div>
            <div className="contact">
              <div className="phone mt-5 flex gap-6">
                <div className="icon btnIcon !py-3 !px-4">
                  <FaPhone size={16} />
                </div>
                <div className="body flex flex-col">
                  <span className="text-gray-400">Phone</span>
                  <span className="text">0314 4878266</span>
                </div>
              </div>
              <div className="phone mt-7 flex gap-6">
                <div className="icon btnIcon !py-3 !px-4">
                  <FaEnvelope size={16} />
                </div>
                <div className="body flex flex-col">
                  <span className="text-gray-400">Email</span>
                  <span className="text">mmuzammil327off@gmail.com</span>
                </div>
              </div>
              <div className="phone mt-7 flex gap-6">
                <div className="icon btnIcon !py-3 !px-4">
                  <FaLocationArrow size={16} />
                </div>
                <div className="body flex flex-col">
                  <span className="text-gray-400">Address</span>
                  <span className="text">Faisalbad, Punjab, Board</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative p-7 rounded-md text-left bg-opacity-0">
            <div className="absolute inset-0 bg-color2 opacity-60 rounded-md z-0"></div>
            <div className="relative z-10">
              <div className="text-center my-4">
                <h2 className="text-white md:text-2xl text-xl mb-6 font-bold">
                  Contact Us for Any Information
                </h2>
              </div>
              <form onSubmit={SubmitHandle}>
                <div className="grid md:grid-cols-2 gap-5 grid-cols-1">
                  <input
                    type="text"
                    className={styles.textArea}
                    placeholder="First name"
                    value={data.fname}
                    onChange={(e) =>
                      setData({ ...data, fname: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    value={data.lname}
                    onChange={(e) =>
                      setData({ ...data, lname: e.target.value })
                    }
                    className={styles.textArea}
                    placeholder="Last name"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-5 grid-cols-1">
                  <input
                    type="email"
                    className={styles.textArea}
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    placeholder="Email"
                  />
                  <input
                    type="tel"
                    className={styles.textArea}
                    placeholder="Phone"
                    value={data.phone}
                    onChange={(e) =>
                      setData({ ...data, phone: e.target.value })
                    }
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  maxLength={5000}
                  className={`min-h-[160px] ${styles.textArea}`}
                  value={data.message}
                  onChange={(e) =>
                    setData({ ...data, message: e.target.value })
                  }
                />
                <button className="btnIcon block w-full !py-4 duration-300 ease-in-out">
                  Submit
                </button>
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
