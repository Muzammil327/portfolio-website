import dynamic from 'next/dynamic'
const Container = dynamic(() => import('@/components/elements/container/page'))
const ServiceItem = dynamic(() => import('@/components/services/item/page'))
import { Service } from '@/types/page'

interface IProps {
  datas: Service[]
}

export function ServiceList({ datas }: IProps) {
  return (
    <>
      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-16">
          {datas.map((data: Service) => (
            <>
              <ServiceItem datas={data} key={data._id} />
            </>
          ))}
        </div>
      </Container>
    </>
  )
}

export function ServiceHList({ datas }: IProps) {
  return (
    <>
      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-12">
          {datas.splice(0, 3).map((data: Service) => (
            <>
              <ServiceItem datas={data} key={data._id} />
            </>
          ))}
        </div>
      </Container>
    </>
  )
}
