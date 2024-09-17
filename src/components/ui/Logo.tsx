'use client'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Logo() {
  const { theme } = useTheme()
  const [prefersDarkScheme, setPrefersDarkScheme] = useState(false)

  useEffect(() => {
    // Check the user's preferred color scheme on mount
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const updateScheme = (e: any) => setPrefersDarkScheme(e.matches)

    // Set initial value
    updateScheme(mediaQuery)

    // Listen for changes
    mediaQuery.addEventListener('change', updateScheme)

    // Clean up the event listener on unmount
    return () => mediaQuery.removeEventListener('change', updateScheme)
  }, [])

  // Determine the current logo based on the theme and prefersDarkScheme
  const isLightMode =
    theme === 'light' || (theme === 'system' && !prefersDarkScheme)
  const isDarkMode =
    theme === 'dark' || (theme === 'system' && prefersDarkScheme)

  return (
    <div>
      {isLightMode && (
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
      {isDarkMode && (
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
    </div>
  )
}
