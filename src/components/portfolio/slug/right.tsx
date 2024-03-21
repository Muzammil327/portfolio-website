import dynamic from 'next/dynamic'
const Social = dynamic(() => import('@/components/elements/Social/page'))
import { Portfolio, Skill } from '@/src/types/page'
import { FaArrowRight } from 'react-icons/fa'
import ShareSocial from '../../elements/shareSocial/page'

interface Iprops {
  datas: Portfolio
}

export default function PortfolioRight({ datas }: Iprops) {
  return (
    <div>
      <div className="flex flex-col">
        <span className="my-3 text-[22px] font-semibold text-black leading-7">
          Date
        </span>
        <span className="mb-4 text-lg text-slate-500">{datas.date}</span>
      </div>

      <div className="flex flex-col">
        <span className="my-3 text-[22px] font-semibold text-black leading-7">
          Services
        </span>
        <span className="mb-4 text-lg text-slate-500">{datas.tag}</span>
      </div>

      <div className="flex flex-col mb-4">
        <span className="my-3 text-[22px] font-semibold text-black leading-7">
          Share on:
        </span>
        <span>
          <ShareSocial />
        </span>
      </div>
    </div>
  )
}
