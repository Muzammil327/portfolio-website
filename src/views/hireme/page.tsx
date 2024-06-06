import dynamic from 'next/dynamic'
const MainHero = dynamic(() => import('@/components/hero/MainHero'))
const HireCard = dynamic(() => import('@/components/hire/card/page'))

export default function HireTemplate() {
  return (
    <>
      <MainHero head="Hire Me" para="" />
      <HireCard />
    </>
  )
}
