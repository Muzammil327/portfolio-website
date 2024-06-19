import React from 'react'
import './globals.scss'
import type { Metadata } from 'next'
import { inter } from '@/src/app/font'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Analytics } from '@vercel/analytics/react'

import Footer from '@/components/layout/footer/page'

import ThemeSwitcher from '../components/provider/ThemeSwitcher'

export const metadata: Metadata = {
  title: 'Muzammil Safdar || Full Stack Developer',
  description:
    'I am a Full Stack Developer With Frontend Backend and Deveops Enginerr with Javascript, Typescript, Phython, PHP, Node JS and SQL.',
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'muzammil',
    'muzmmil safdar',
    'muzammil Safdar',
    'muzammil safdar portfolio',
  ],
  openGraph: {
    title: 'Muzammil Safdar || Full Stack Developer',
    description:
      'I am a Full Stack Developer With Frontend Backend and Deveops Enginerr with Javascript, Typescript, Phython, PHP, Node JS and SQL.',
  },
  metadataBase: new URL('https://mmuzammil-portfolio.vercel.app'),
  twitter: {
    title: 'Muzammil Safdar || Full Stack Developer',
    description:
      'I am a Full Stack Developer With Frontend Backend and Deveops Enginerr with Javascript, Typescript, Phython, PHP, Node JS and SQL.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <meta name="application-name" content="Next.js" />
        <meta name="author" content="Muhammad Muzammil Safdar" />
        <link rel="author" href="https://mmuzammil-portfolio.vercel.app/" />
        <meta name="generator" content="Next.js" />
        <meta
          name="keywords"
          content="Next.js,React,JavaScript, muzammil, muzmmil safdar, muzammil portfolio, muzammil safdar portfolio"
        />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="color-scheme" content="dark" />
        <meta name="creator" content="mmuzammil-portfolio.vercel.app" />
        <meta name="publisher" content="mmuzammil-portfolio.vercel.app" />
        {/* og */}
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="mmuzammil-portfolio.vercel.app"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        {/* icon */}
        <meta name="theme-color" content="#f73e3e" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        <link
          rel="apple-touch-icon"
          href="/favicon/apple-touch-icon.png"
          type="image/png"
        />

        <link
          rel="apple-touch-icon"
          href="/favicon/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        {/* twitter */}

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:creator"
          content="@muzammilsafdarfullstackdeveloper"
        />
        <meta
          property="twitter:domain"
          content="mmuzammil-portfolio.vercel.app"
        />
      </head>
      <body className={inter.className}>
        <ThemeSwitcher>
          {children}
          <Footer />
          <SpeedInsights />
          <Analytics />
          <ToastContainer />
        </ThemeSwitcher>
      </body>
    </html>
  )
}
