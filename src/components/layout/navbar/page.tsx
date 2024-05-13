'use client'
import { useState, useEffect } from 'react'
import BarIcon from '@/components/elements/icon/bars/page'
import TimeIcon from '@/components/elements/icon/time/page'
import Link from 'next/link'
import Container from '@/components/elements/container/page'
import Logo from './logo/page'
import styles from './navbar.module.css'

type Slug = {
  name: string
  href: string
}

const navigation: Slug[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skill', href: '/skill' },
  { name: 'Portfolio', href: '/portfolio' },
  // { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: "Blogs", href: "https://blog-website-pink-chi.vercel.app/" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true)
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${scrolling ? `${styles.headerScrolled}` : ''}`}>
      <div
        className={`${styles.header} ${
          scrolling ? `${styles.navbarFixed}` : ''
        }`}
      >
        <Container>
          <nav aria-label="Navbar" className={`${styles.nav}`}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <div className={styles.BarIcontoggle}>
              <button
                type="button"
                className={`z-50 ${styles.BarIconbutton} transition-all`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <BarIcon aria-hidden="true" /> : <TimeIcon />}
              </button>
              <div className={styles.menu}>
                {navigation.map((item: Slug) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={styles.link}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </Container>
        <div className="md:hidden block relative transition-all">
          {!mobileMenuOpen && (
            <div className="absolute w-6/12 h-screen left-0 bg-white shadow-lg transition-all">
              <ul className="flex flex-col gap-y-2">
                {navigation.map((item: Slug) => (
                  <li key={item.name} className="ml-2">
                    <Link
                      href={item.href}
                      className=" block rounded-lg px-3 py-2 text-base md:text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(true)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
