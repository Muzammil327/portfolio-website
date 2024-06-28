import React from 'react'
import dynamic from 'next/dynamic'
import Navbar from '../components/layout/navbar/page'
const MainHero = dynamic(() => import('@/components/hero/MainHero'))

export default function NotFound() {
  return (
    <>
      <Navbar />
      <MainHero head="Not Found" para="" />
    </>
  )
}
