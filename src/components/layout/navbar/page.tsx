'use client'
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import Link from 'next/link'

import { FaBars, FaSun, FaTimes } from 'react-icons/fa'
import Container from '@/src/components/ui/Container'
import Logo from '@/src/components/ui/Logo'
import Button from '@/src/components/ui/Button'
import { Sections, Items, Pages } from '@/src/types/page'
import { FaMoon } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolling, setScrolling] = useState(false)

  const { theme, setTheme } = useTheme()
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
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
    <>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white dark:bg-gray-700 pb-12 shadow-xl">
                <div className="flex pb-2 px-4 absolute top-4 right-0">
                  <Button
                    className={`
                    btnIcon relative -m-2 inline-flex items-center justify-center rounded-md border-2 border-solid duration-300 ease-in`}
                    onClick={() => setOpen(false)}
                  >
                    <FaTimes size={16} />
                  </Button>
                </div>

                <Tab.Group as="div" className="mt-4">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? 'bg-slate-100 dark:bg-gray-900'
                                : 'link',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8"
                      >
                        {category.sections.map((section: any) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="flex items-center text-base font-semibold text"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item: any) => (
                                <li key={item.name} className="flow-root">
                                  <Link
                                    href={item.href}
                                    className="-m-2 block p-2 link"
                                    onClick={() => setOpen(false)}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border1 px-4 py-6">
                  {navigation.pages.map((page: any) => (
                    <div key={page.name} className="flow-root">
                      <Link
                        href={page.href}
                        className="flex items-center text-sm font-medium link"
                        onClick={() => setOpen(false)}
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="px-4 border-t border1"></div>
                <div
                  className={`my-4 flex lg:flex-row flex-col items-center gap-3 text-sm font-medium px-4`}
                >
                  <Button className="w-full link duration-300 ease-in my-3">
                    Sign In
                  </Button>
                  <Button className="btnIcon w-full duration-300 ease-in">
                    Register
                  </Button>
                </div>
                <div className="px-4 border-t border1 py-6"></div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <nav
        className={`relative border-b py-2 border1 ${
          scrolling ? `navbarFixed` : ''
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            <Logo />

            {/* Flyout menus */}
            <Popover.Group className="hidden lg:ml-24 lg:block lg:self-stretch">
              <div className="flex h-full space-x-8">
                <motion.div
                  initial={{ y: '100%', opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.4,
                      duration: 0.8,
                    },
                  }}
                  className="flex items-center"
                >
                  <Link href="/" className="text-sm font-medium link">
                    Home
                  </Link>
                </motion.div>
                {navigation.categories.map((category) => (
                  <Popover key={category.name} className="flex">
                    {({ open, close }) => (
                      <>
                        <motion.div
                          className="relative flex"
                          initial={{ y: '100%', opacity: 0 }}
                          whileInView={{
                            y: 0,
                            opacity: 1,
                            transition: {
                              delay: category.delay,
                              duration: 0.8,
                            },
                          }}
                        >
                          <Popover.Button
                            className={classNames(
                              open ? '' : 'border-transparent link',
                              'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                            )}
                          >
                            {category.name}
                          </Popover.Button>
                        </motion.div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Popover.Panel className="absolute z-50 inset-x-0 top-full text-sm">
                            <div
                              className="absolute inset-0 top-1/2 shadow"
                              aria-hidden="true"
                            />

                            <div className="relative bg-white dark:bg-gray-700">
                              <div className="mx-auto max-w-7xl px-8">
                                <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                  <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                    {category.sections.map(
                                      (section: Sections) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="flex items-center text-base font-semibold text"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map(
                                              (item: Items) => (
                                                <li
                                                  key={item.name}
                                                  className="flex"
                                                >
                                                  <Link
                                                    href={item.href}
                                                    className="link"
                                                    onClick={close}
                                                  >
                                                    {item.name}
                                                  </Link>
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ))}

                {navigation.pages.map((page: Pages) => (
                  <motion.div
                    initial={{ y: '100%', opacity: 0 }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: page.delay,
                        duration: 0.8,
                      },
                    }}
                    className="flex items-center"
                    key={page.name}
                  >
                    <Link
                      href={page.href}
                      className="flex items-center text-sm font-medium link"
                    >
                      {page.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </Popover.Group>

            <div className="flex lg:flex-row flex-col items-center gap-3 text-sm font-medium text-gray-700 px-4">
              <div className="lg:flex hidden items-center lg:gap-6">
                <motion.div
                  initial={{ y: '100%', opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.5,
                      duration: 1,
                    },
                  }}
                >
                  <Button className="link duration-300 ease-in">Sign In</Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, skewX: 1 }}
                  whileInView={{
                    // y: 0,
                    opacity: 1,
                    skewX: 0,
                    transition: {
                      delay: 0.5,
                      duration: 1,
                    },
                  }}
                >
                  <Button className="btnIcon duration-300 ease-in">
                    Register
                  </Button>
                </motion.div>
              </div>

              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ y: '100%', opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.4,
                      duration: 0.8,
                    },
                  }}
                >
                  <Button
                    className="btnIcon block lg:hidden border-2 border-solid duration-300 ease-in"
                    onClick={() => setOpen(true)}
                  >
                    <FaBars size={16} />
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ y: '100%', opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.4,
                      duration: 0.8,
                    },
                  }}
                >
                  <Button
                    className="btnIcon border-2 border-solid duration-300 ease-in"
                    onClick={() =>
                      setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                  >
                    {theme === 'dark' ? (
                      <FaMoon size={16} />
                    ) : (
                      <FaSun size={16} />
                    )}
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  )
}

const navigation = {
  categories: [
    {
      id: 'components',
      name: 'Components',
      delay: 0.6,
      sections: [
        {
          id: 'cards',
          name: 'Cards',
          items: [
            { name: 'Blogs Card', href: '/components/card/blog' },
            { name: 'Ecommerce Card', href: '/components/card/ecommerce' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Portfolios', href: '/portfolios', delay: 0.7 },
    { name: 'Skills', href: '/skill', delay: 0.8 },
    { name: 'Blogs', href: '/blogs', delay: 0.9 },
  ],
}
