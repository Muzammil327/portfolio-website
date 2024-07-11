import Image from 'next/image'
import Container from '@/src/components/ui/Container'
import Button from '@/src/components/ui/Button'
import { FaArrowRight } from 'react-icons/fa'
import PortfolioHomeCard from '@/src/components/portfolio/portfolioHomeCard'
import ContactForm from '../components/layout/form/page'
import AboutUs from '../components/about/aboutUs'
import HomeHeader from '@/src/components/home/header'
import BlogHomeView from '../components/home/blogView'
import HomeBanner from '../components/home/banner'
import HomeSkill from '../components/home/skill'
import CallToAction from '../components/home/CallToAction'

export default function HomeView() {
  return (
    <>
      <HomeHeader />
      <AboutUs />
      <PortfolioHomeCard />
      <CallToAction />
      <HomeSkill />
      <ContactForm />
      <HomeBanner />
      <BlogHomeView />
    </>
  )
}
