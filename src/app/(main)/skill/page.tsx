import type { Metadata } from 'next'
import MainHero from '@/src/components/hero/MainHero'
import SkillCard from '@/src/components/skill/skillCard'
import Container from '@/src/components/ui/Container'
import HTML5 from '@/src/components/svg/html'
import CSS3 from '@/src/components/svg/css'
import Javascript from '@/src/components/svg/js'
import Typescript from '@/src/components/svg/ts'
import TailwindCSS from '@/src/components/svg/tailwindCss'
import ReactJs from '@/src/components/svg/react'
import NextJs from '@/src/components/svg/next'
import Git from '@/src/components/svg/git'
import Github from '@/src/components/svg/github'
import SCSS from '@/src/components/svg/scss'
import Vercel from '@/src/components/svg/vercel'
import AWS from '@/src/components/svg/aws'
import Mongodb from '@/src/components/svg/mongodb'
import Expressjs from '@/src/components/svg/expressjs'
import Nodejs from '@/src/components/svg/nodejs'
import Graphql from '@/src/components/svg/graphql'
import Redux from '@/src/components/svg/redux'
import PostgreSQL from '@/src/components/svg/postgresql'
import Cloudinary from '@/src/components/svg/cloudinary'
import { FaMarkdown } from 'react-icons/fa'
import Postman from '@/src/components/svg/postman'
import Firebase from '@/src/components/svg/firebase'
import VScode from '@/src/components/svg/vscode'
import Axios from '@/src/components/svg/axios'
import ReactQuery from '@/src/components/svg/reactQuery'
import SWR from '@/src/components/svg/swr'
import Clerk from '@/src/components/svg/clerk'
import NPM from '@/src/components/svg/npm'
import Yarn from '@/src/components/svg/yarn'

const data = {
  title: 'My Skills || Muzammil Portfolio',
  description:
    'I am a Full Stack Developer With Frontend Backend and Deveops Enginerr with Javascript, Typescript, Phython, PHP, Node JS and SQL.',
  canonical: '/skill',
  index: true,
  follow: true,
  image: '/opengraph-image.png',
  url: 'https://mmuzammil-portfolio.vercel.app/skill',
  keywords: [
    'mmuzammil-portfolio',
    'muzammil',
    'muzammil Safdar',
    'muzammil Safdar Portfolio',
    'muzammil portfolio',
  ],
}

export default function Skill() {
  const URL =
    'https://github.com/Muzammil327/portfolio-website/blob/main/src/learning'
  return (
    <>
      <MainHero head="My Skills" para="" />

      {/* Structure */}
      <Frame title="Website Structure">
        <SkillCard icon={<HTML5 />} title="HTML5" slug="/blogs/html-mindmap/" />
      </Frame>

      {/* Styling */}
      <Frame title="Website Styling and Framework">
        <SkillCard icon={<CSS3 />} title="CSS3" slug="/blogs/css-mindmap/" />
        <SkillCard icon={<SCSS />} title="SCSS" slug="/blogs/scss-mindmap/" />
        <SkillCard
          icon={<TailwindCSS />}
          title="Tailwind CSS"
          slug="/blogs/tailwind-css-mindmap/"
        />
      </Frame>

      {/* Language */}
      <Frame title="Website Programing Language and Framework">
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
        />
      </Frame>

      {/* State Management */}
      <Frame title="State Management">
        <SkillCard
          icon={<Redux />}
          title="Redux"
          slug={`${URL}/state-management/redux_README.md`}
        />
        <SkillCard
          icon={<ReactJs />}
          title="Context API"
          slug={`${URL}/state-management/context_api_README.md`}
        />
      </Frame>

      {/* Authentication */}
      <Frame title="Authentication">
        <SkillCard
          image="/nextAuth.png"
          title="Next Auth"
          slug={`${URL}/authentication/nextauth_README.md`}
        />
        <SkillCard
          icon={<Clerk />}
          title="Clerk"
          slug={`${URL}/authentication/clerk_README.md`}
          news
        />
      </Frame>

      {/* Backend and Framework */}
      <Frame title="Backend and Framework">
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
          icon={<Graphql />}
          title="Graphql"
          slug="/blogs/graphql-mindmap/"
          news
        />
      </Frame>

      {/* Database */}
      <Frame title="Database">
        <SkillCard
          icon={<Mongodb />}
          title="Mongo DB"
          slug="/blogs/mongodb-mindmap/"
        />
        <SkillCard
          icon={<PostgreSQL />}
          title="Postgre SQL"
          slug="/blogs/sql-mindmap/"
          news
        />
        <SkillCard
          icon={<Firebase />}
          title="Firebase"
          slug="/blogs/firebase-mindmap/"
          news
        />
      </Frame>

      {/* Mobile */}
      <Frame title="Mobile">
        <SkillCard
          icon={<ReactJs />}
          title="React Native"
          slug="/blogs/react-native-mindmap/"
          news
        />
      </Frame>

      {/* Tools */}
      <Frame title="Tools">
        <SkillCard
          icon={<VScode />}
          title="VScode"
          slug={`${URL}/vscode_README.md`}
        />
        <SkillCard icon={<Git />} title="Git" slug={`${URL}/git_README.md`} />
        <SkillCard
          icon={<Github />}
          title="Github"
          slug={`${URL}/github_README.md`}
        />
        <SkillCard
          icon={<FaMarkdown size={45} className="mx-auto" />}
          title="Markdown"
          slug={`${URL}/markdown_README.md`}
        />
        <SkillCard
          icon={<Cloudinary />}
          title="Cloudinary"
          slug={`${URL}/cloudinary_README.md`}
        />
        <SkillCard
          icon={<Postman />}
          title="Postman"
          slug={`${URL}/postman_README.md`}
        />
        <SkillCard icon={<NPM />} title="NPM" slug={`${URL}/npm_README.md`} />
        <SkillCard
          icon={<Yarn />}
          title="Yarn"
          news
          slug={`${URL}/yarn_README.md`}
        />
      </Frame>

      {/* Data Fetching */}
      <Frame title="Data Fetching">
        <SkillCard
          icon={<Axios />}
          title="Axios"
          slug={`${URL}/data-fetching/axios_README.md`}
        />
        <SkillCard
          title="Fetch"
          slug={`${URL}/data-fetching/fetch_README.md`}
        />
        <SkillCard
          icon={<SWR />}
          title="SWR"
          slug={`${URL}/data-fetching/swr_README.md`}
          news
        />
        <SkillCard
          icon={<ReactQuery />}
          title="React Query"
          slug={`${URL}/data-fetching/react_query_README.md`}
          news
        />
      </Frame>

      {/* Deployment */}
      <Frame title="Deployment">
        <SkillCard
          icon={<Vercel />}
          title="Vercel"
          slug={`${URL}/deployment/vercel_README.md`}
        />
      </Frame>

      {/* Cloud */}
      <Frame title="Cloud">
        <SkillCard icon={<AWS />} title="AWS" news slug="/blogs/aws/" />
      </Frame>

      {/* Packages */}
      <Frame title="Packages">
        <SkillCard title="bcrypt" slug={`${URL}/package/bcrypt_README.md`} />
        <SkillCard
          title="mongoose"
          slug={`${URL}/package/mongoose_README.md`}
        />
        <SkillCard title="swiper" slug={`${URL}/package/swiper_README.md`} />
        <SkillCard
          title="nodemailer"
          slug={`${URL}/package/nodemailer_README.md`}
        />
        <SkillCard
          title="prettier"
          slug={`${URL}/package/prettier_README.md`}
        />
        <SkillCard
          title="react-icons"
          slug={`${URL}/package/react_icons_README.md`}
        />
        <SkillCard
          title="react-share"
          slug={`${URL}/package/react_share_README.md`}
        />
        <SkillCard
          title="react-tagsinput"
          slug={`${URL}/package/react_tagsinput_README.md`}
        />
        <SkillCard
          title="react-select"
          slug={`${URL}/package/react_select_README.md`}
        />
        <SkillCard
          title="react-slick"
          slug={`${URL}/package/react_slick_README.md`}
        />
        <SkillCard
          title="react-toastify"
          slug={`${URL}/package/react_toastify_README.md`}
        />
        <SkillCard
          title="react-tabs"
          slug={`${URL}/package/react_tabs_README.md`}
        />
        <SkillCard title="rc-rate" slug={`${URL}/package/rc_rate_README.md`} />
        <SkillCard title="crypto" news />
        <SkillCard title="render" news />
      </Frame>
    </>
  )
}

function Frame({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <Container>
        <h2 className="md:text-2xl text-lg font-semibold py-1">{title}</h2>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 sm:py-6">
          {children}
        </div>
      </Container>
    </section>
  )
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: data.keywords,
  openGraph: {
    title: data.title,
    description: data.description,
    url: data.url,
    images: [
      {
        url: data.image,
        alt: data.title,
      },
    ],
  },
  alternates: {
    canonical: data.canonical,
  },
  robots: {
    index: data.index,
    follow: data.follow,
    googleBot: {
      index: data.index,
      follow: data.follow,
    },
  },
  twitter: {
    title: data.title,
    description: data.description,
    images: {
      url: data.image,
      alt: data.title,
    },
  },
}
