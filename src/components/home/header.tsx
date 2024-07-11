'use client'
import Navbar from '@/src/components/layout/navbar/page'
import HomeHero from '@/src/components/hero/HomeHero'

export default function HomeHeader() {
  return (
    <header className="bg-hero">
      <Navbar />
      <HomeHero />
    </header>
  )
}
