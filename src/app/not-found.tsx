import React from 'react'
import dynamic from 'next/dynamic'
const MainHero = dynamic(() => import('@/components/hero/MainHero'))

export default function NotFound() {
  return (
    <>
      <MainHero head="Not Found" para="" />
    </>
  )
}
