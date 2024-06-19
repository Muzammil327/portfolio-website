import React from 'react'
import MainHero from '@/src/components/hero/MainHero'
import Container from '@/src/components/ui/Container'
import SkillCard from '@/src/components/skill/skillCard'
import HTML5 from '@/src/components/svg/html'
import CSS3 from '@/src/components/svg/css'
import SCSS from '@/src/components/svg/scss'
import TailwindCSS from '@/src/components/svg/tailwindCss'
import Typescript from '@/src/components/svg/ts'
import ReactJs from '@/src/components/svg/react'
import NextJs from '@/src/components/svg/next'
import Git from '@/src/components/svg/git'
import Github from '@/src/components/svg/github'
import Vercel from '@/src/components/svg/vercel'
import Cloudinary from '@/src/components/svg/cloudinary'

export default function page() {
  return (
    <main>
      <MainHero head="Portfolio Project" para="" />
      <section>
        <Container>
          <h2 className="md:text-2xl text-lg font-semibold py-1">Frontend:</h2>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 sm:py-6">
            <SkillCard icon={<HTML5 />} title="HTML5" />
            <SkillCard icon={<CSS3 />} title="CSS3" />
            <SkillCard icon={<SCSS />} title="SCSS" />
            <SkillCard icon={<TailwindCSS />} title="Tailwind CSS" />
            <SkillCard icon={<Typescript />} title="Typescript" />
            <SkillCard icon={<ReactJs />} title="React JS" />
            <SkillCard icon={<NextJs />} title="Next JS" />
          </div>
          <h2 className="md:text-2xl text-lg font-semibold py-1">Tools:</h2>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 sm:py-6">
            <SkillCard icon={<Git />} title="Git" />
            <SkillCard icon={<Github />} title="Github" />
          </div>
          <h2 className="md:text-2xl text-lg font-semibold py-1">
            Deployment:
          </h2>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 sm:py-6">
            <SkillCard icon={<Vercel />} title="Vercel" />
          </div>
          <h2 className="md:text-2xl text-lg font-semibold py-1">Package:</h2>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 sm:py-6">
            <SkillCard title="axios" />
            <SkillCard title="mongoose" />
            <SkillCard title="prettier" />
            <SkillCard title="react-icons" />
            <SkillCard title="react-slick" />
            <SkillCard title="react-toastify" />
            <SkillCard title="typewriter-effect" />
          </div>
        </Container>
      </section>
    </main>
  )
}
