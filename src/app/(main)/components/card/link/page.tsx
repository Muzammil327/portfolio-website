import React from 'react'
import MainHero from '@/src/components/hero/MainHero'
import Container from '@/src/components/ui/Container'
import LinkCard1 from './card-1'

export default function Page() {
  return (
    <main>
      <MainHero head="Link Cards Components" para="" />
      <Container>
        <LinkCard1 />
      </Container>
    </main>
  )
}
