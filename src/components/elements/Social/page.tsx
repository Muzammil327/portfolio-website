import {
  FaFacebook,
  FaYoutube,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
} from 'react-icons/fa'
import Link from 'next/link'
import { ReactNode } from 'react'
import styles from './social.module.css'

type TypeProps = {
  id: number
  icon: ReactNode
  link: string
}

export default function Social() {
  return (
    <div className={styles.social}>
      <ul className={styles.sociallist}>
        {data.map((data: TypeProps) => {
          return (
            <li key={data.id}>
              <Link
                href={data.link}
                className={styles.sociallink}
                key={data.id}
              >
                {data.icon}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const data: TypeProps[] = [
  {
    id: 0,
    icon: <FaLinkedinIn />,
    link: 'https://www.linkedin.com/in/muzammil-safdar/',
  },
  {
    id: 1,
    icon: <FaGithub />,
    link: 'https://github.com/Muzammil327',
  },
  {
    id: 2,
    icon: <FaWhatsapp />,
    link: 'https://wa.me/923144878266',
  },
  // {
  //   id: 3,
  //   icon: <FaFacebook />,
  //   link: '/',
  // },
  // {
  //   id: 4,
  //   icon: <FaInstagram />,
  //   link: '/',
  // },
]
