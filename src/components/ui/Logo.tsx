'use client'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  const { theme } = useTheme()

  return (
    <>
      {theme === 'light' && (
        <Link href="/" className="-m-1.5 p-1.5 py-2">
          <Image
            src="/logo/muzammil-safdar-light-mode.png"
            alt="Muzammil Safdar"
            title="Muzammil Safdar"
            height="120"
            width="200"
            priority
          />
        </Link>
      )}
      {theme === 'dark' && (
        <Link href="/" className="-m-1.5 p-1.5 py-2">
          <Image
            src="/logo/muzammil-safdar-dark-mode.png"
            alt="Muzammil Safdar"
            title="Muzammil Safdar"
            height="165"
            width="170"
            priority
          />
        </Link>
      )}
    </>
  )
}
