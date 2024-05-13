import Link from 'next/link'
import dynamic from 'next/dynamic'
import { PortfolioH } from '../portfolio/page'
import Resume from '@/src/components/about/resume/page'
const MHero = dynamic(() => import('@/components/MHero/page'))

export default function HomeTemplate() {
  return (
    <>
      <MHero />
      <Resume />

      <PortfolioH />
      <div className="flex items-center justify-center">
        <Link href="/portfolio" className="btn btn2">
          See All Projects
        </Link>
      </div>
    </>
  )
}
