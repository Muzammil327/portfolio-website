'use client'
import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
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
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  // { name: "Blogs", href: "/blog" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
          <nav aria-label="Navbar" className={styles.nav}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <div className={styles.BarIcontoggle}>
              {/* </>
              ) : (
                <> */}
              <button
                type="button"
                className={`z-50 ${styles.BarIconbutton}`}
                onClick={() => setMobileMenuOpen(true)}
              >
                <BarIcon aria-hidden="true" />
              </button>
              {/* </> */}
            </div>
            <div className={styles.menu}>
              {navigation.map((item: Slug) => (
                <Link key={item.name} href={item.href} className={styles.link}>
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </Container>

        <Dialog
          as="div"
          className={styles.toggle}
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <Dialog.Panel className={styles.MdialogPanel}>
            <div className="flex justify-between">
              <Logo />
              <button
                type="button"
                className="-m-2.0 rounded-md text-gray-700 top-6 right-6 absolute"
                onClick={() => setMobileMenuOpen(false)}
              >
                <TimeIcon aria-hidden="true" />
              </button>
            </div>
            <div className="mt-10 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={styles.mobileLink}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </header>
  )
}
