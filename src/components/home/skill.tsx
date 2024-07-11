'use client'
import React from 'react'
import SkillCard from '../../components/skill/skillCard'
import TailwindCSS from '../../components/svg/tailwindCss'
import Javascript from '../../components/svg/js'
import Typescript from '../../components/svg/ts'
import ReactJs from '../../components/svg/react'
import NextJs from '../../components/svg/next'
import Git from '../../components/svg/git'
import AWS from '../../components/svg/aws'
import Nodejs from '../../components/svg/nodejs'
import Expressjs from '../../components/svg/expressjs'
import Mongodb from '../../components/svg/mongodb'
import Container from '../ui/Container'
import Heading from '../ui/Heading'
import Link from 'next/link'
import Button from '../ui/Button'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function HomeSkill() {
  return (
    <section>
      <Heading
        subhead={'My Skills'}
        head={'Hello there, My name is Muhammad Muzammil.'}
      />

      <Container>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 sm:py-6">
          <SkillCard
            icon={<TailwindCSS />}
            title="Tailwind CSS"
            slug="/blogs/tailwind-css-mindmap/"
          />{' '}
          <SkillCard
            icon={<Javascript />}
            title="Javascript"
            slug="/blogs/javascript-mindmap/"
          />
          <SkillCard
            icon={<Typescript />}
            title="Typescript"
            slug="/blogs/typescript-mindmap/"
          />
          <SkillCard
            icon={<ReactJs />}
            title="React JS"
            slug="/blogs/reactjs-mindmap/"
          />
          <SkillCard
            icon={<NextJs />}
            title="Next JS"
            slug="/blogs/nextjs-mindmap/"
          />{' '}
          <SkillCard icon={<Git />} title="Git" slug={`${URL}/git_README.md`} />
          <SkillCard
            icon={<Nodejs />}
            title="Node JS"
            slug="/blogs/nodejs-mindmap/"
          />
          <SkillCard
            icon={<Expressjs />}
            title="Express JS"
            slug="/blogs/express-mindmap/"
          />{' '}
          <SkillCard
            icon={<Mongodb />}
            title="Mongo DB"
            slug="/blogs/mongodb-mindmap/"
          />{' '}
          <SkillCard icon={<AWS />} title="AWS" news slug="/blogs/aws/" />
        </div>
      </Container>
      <motion.div
        className="flex items-center justify-center my-8"
        initial={{ x: '40%', opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            delay: 0.7,
            duration: 0.8,
          },
        }}
      >
        <Link href="/skill">
          <Button className="btnIcon px-10 gap-2 duration-300 ease-in-out">
            View All Skills
            <span className="btnIconhover opacity-0 duration-300 ease-in-out">
              <FaArrowRight />
            </span>
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}
