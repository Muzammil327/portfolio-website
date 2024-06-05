import {
  FaYoutube,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from 'react-icons/fa'
import Link from 'next/link'

export default function Social() {
  return (
    <ul className="flex gap-4">
      <li className="btnIcon">
        <Link href="/">
          <FaGithub size={16} />
        </Link>
      </li>
      <li className="btnIcon">
        <Link href="/">
          <FaLinkedinIn size={16} />
        </Link>
      </li>
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
  )
}
