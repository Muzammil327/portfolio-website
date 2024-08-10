import {
  FaYoutube,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from 'react-icons/fa'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Social() {
  return (
    <ul className="flex gap-4">
      <motion.li
        className="btnIcon"
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.4,
            duration: 0.3,
          },
        }}
      >
        <Link href="https://github.com/Muzammil327" target="_blank">
          <FaGithub size={16} />
        </Link>
      </motion.li>
      <motion.li
        className="btnIcon"
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 0.4,
          },
        }}
      >
        <Link href="https://www.linkedin.com/in/muzammil327/" target="_blank">
          <FaLinkedinIn size={16} />
        </Link>
      </motion.li>
      <motion.li
        className="btnIcon"
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.6,
            duration: 0.5,
          },
        }}
      >
        <Link href="https://web.facebook.com/profile.php?id=61559852416600">
          <FaFacebookF size={16} />
        </Link>
      </motion.li>
      <motion.li
        className="btnIcon"
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.7,
            duration: 0.6,
          },
        }}
      >
        <Link href="https://www.youtube.com/channel/UCQub8LAnm9ljHbec5PLDMhQ">
          <FaYoutube size={16} />
        </Link>
      </motion.li>
      <motion.li
        className="btnIcon"
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.8,
            duration: 0.7,
          },
        }}
      >
        <Link href="https://www.instagram.com/mmuzammil327/">
          <FaInstagram size={16} />
        </Link>
      </motion.li>
      <motion.li
        className="btnIcon"
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.9,
            duration: 0.8,
          },
        }}
      >
        <Link href="https://x.com/mmuzammil327">
          <FaTwitter size={16} />
        </Link>
      </motion.li>
    </ul>
  )
}
