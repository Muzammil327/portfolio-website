import React from 'react'
import MainHero from '@/src/components/hero/MainHero'
import PortfolioCard from '@/src/components/portfolio/portfolioCard'
import Container from '@/src/components/ui/Container'

export default function EcommerceCard() {
  return (
    <main>
      <MainHero head="Ecommerce Cards Components" para="" />
      <section>
        <Container>
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 items-center justify-center">
            {portfolio_data.map((data: any) => {
              return (
                <div key={data.id}>
                  <PortfolioCard
                    name={data.name}
                    image={data.image}
                    imagealt={data.imagealt}
                    link={data.link}
                  />
                </div>
              )
            })}
          </div>
        </Container>
      </section>
    </main>
  )
}

const portfolio_data: any[] = [
  {
    id: 0,
    name: 'Ecommerce Card 1',
    image: '/projects/portfolio-website.png',
    imagealt: 'Portfolio website',
    link: '/portfolios/portfolio-website',
  },
]
