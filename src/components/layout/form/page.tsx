'use client'
import Link from 'next/link'
import axios from 'axios'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { FaClock, FaLocationArrow, FaEnvelope, FaPhone } from 'react-icons/fa'

const Container = dynamic(() => import('@/components/elements/container/page'))
import styles from './form.module.css'

export default function FooterForm() {
  const [data, setData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    message: '',
  })

  const SubmitHandle = async (e: any) => {
    e.preventDefault();

    try {
      const { fname, lname, email, phone, message } = data;
      const res = await axios.post(`/api/contactForm`, data)
      toast.success(res.data.message)

    } catch (error) {
      console.log(error)
      toast.warning('Error during Task Update')
    }
  }

  return (
    <div className="footer lg:pt-16 md:py-20 py-8">
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="left pt-24">
            <div className="grid grid-cols-2 gap-y-8">
              <div className="text-center">
                <span className="flex items-center justify-center mb-2">
                  <FaPhone className={styles.circle} />
                </span>
                <h5 className="text-lg text-center">Phone</h5>
                <div className="text-center">
                  <Link href="tel:(314)487-8266" className={styles.circleicon}>
                    (92) 314-4878266
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <span className="flex items-center justify-center mb-2">
                  <FaEnvelope className={styles.circle} />
                </span>
                <h5 className="text-lg text-center">Email</h5>
                <div className="text-center">
                  <Link
                    href="mailto:muzammilsafdar528982@gmail.com"
                    className={styles.circleicon}
                  >
                    mmuzammiloff327@gmail.com
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <span className="flex items-center justify-center mb-2">
                  <FaLocationArrow className={styles.circle} />
                </span>
                <h5 className="text-lg text-center">Location</h5>
                <div className="text-center">
                  <Link
                    href="https://www.google.com/maps/place/New+Jersey,+USA/@40.0677539,-76.0434655,8z/data=!3m1!4b1!4m10!1m2!2m1!1s2464+Royal+Ln.+Mesa,+New+Jersey+45463!3m6!1s0x89c0fb959e00409f:0x2cd27b07f83f6d8d!8m2!3d40.0583238!4d-74.4056612!15sCiUyNDY0IFJveWFsIExuLiBNZXNhLCBOZXcgSmVyc2V5IDQ1NDYzkgEIdXNfc3RhdGXgAQA!16zL20vMDVmamY?entry=ttu"
                    target="_blank"
                    className={styles.circleicon}
                  >
                    Lahore, Punjab, Pakistan
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <span className="flex items-center justify-center mb-2">
                  <FaClock className={styles.circle} />
                </span>
                <h5 className="text-lg text-center">Work Hours</h5>
                <div className="text-center">
                  <div className={styles.circleicon}>9:00am to 5:00pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.RightForm}>
            <div className="text-center my-4">
              <div className="subtitle-text text-white c1 text-lg font-semibold">
                Contact Us
              </div>
              <h2 className="c1 md:text-2xl text-xl mb-6 font-bold">
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
                  onChange={(e) => setData({ ...data, fname: e.target.value })}
                />
                <input
                  type="text"
                  value={data.lname}
                  onChange={(e) => setData({ ...data, lname: e.target.value })}
                  className={styles.textArea}
                  placeholder="Last name"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5 grid-cols-1">
                <input
                  type="email"
                  className={styles.textArea}
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  placeholder="Email"
                />
                <input
                  type="tel"
                  className={styles.textArea}
                  placeholder="Phone"
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                />
              </div>
              <textarea
                placeholder="Your Message"
                maxLength={5000}
                className={`${styles.textarea} ${styles.textArea}`}
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
              />
              <button className={styles.button}>Submit</button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  )
}
