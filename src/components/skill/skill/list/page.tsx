import Container from '@/src/components/ui/Container'
import dynamic from 'next/dynamic'
const SkillCard = dynamic(() => import('@/components/skill/skill/item/page'))

export default function SkillCardList() {
  return (
    <Container>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 md:gap-5 gap-2 my-40">
        {data.map((data: Skills) => (
          <>
            <SkillCard datas={data} />
          </>
        ))}
      </div>
    </Container>
  )
}

interface Skills {
  id: number
  title: string
  image: string
}

const data: Skills[] = [
  {
    id: 0,
    title: 'VScode',
    image: '/skill/vscode.jpeg',
  },
  {
    id: 1,
    title: 'HTML 5',
    image: '/skill/html.png',
  },
  {
    id: 2,
    title: 'CSS 3',
    image: '/skill/css.png',
  },
  {
    id: 3,
    title: 'SCSS',
    image: '/skill/scss.jpg',
  },
  {
    id: 4,
    title: 'Tailwind CSS',
    image: '/skill/tailwindcss.png',
  },
  {
    id: 5,
    title: 'Javascript',
    image: '/skill/js.jpg',
  },
  {
    id: 6,
    title: 'Typescript',
    image: '/skill/ts.png',
  },
  {
    id: 7,
    title: 'React JS',
    image: '/skill/react.png',
  },
  {
    id: 8,
    title: 'Next JS',
    image: '/skill/nextjs.png',
  },
  {
    id: 9,
    title: 'Git',
    image: '/skill/git.png',
  },
  {
    id: 10,
    title: 'Github',
    image: '/skill/github.png',
  },
  {
    id: 13,
    title: 'Axios',
    image: '/skill/axios.png',
  },
  {
    id: 14,
    title: 'Node JS',
    image: '/skill/nodejs.png',
  },
  {
    id: 15,
    title: 'Express JS',
    image: '/skill/expressjs.png',
  },
  {
    id: 16,
    title: 'MongoDB',
    image: '/skill/mongodb.png',
  },
  {
    id: 17,
    title: 'JSON',
    image: '/skill/json.jpg',
  },
  {
    id: 18,
    title: 'Rest API',
    image: '/skill/restapi.png',
  },
  // {
  //   id: 19,
  //   title: "Apollo Graphql API",
  //   image: "/skill/apollographql.png",
  // },
  // {
  //   id: 20,
  //   title: "Astro JS",
  //   image: "/skill/astrojs.jpg",
  // },
  // {
  //   id: 21,
  //   title: "Remix JS",
  //   image: "/skill/remix.png",
  // },
  // {
  //   id: 22,
  //   title: "Svelte JS",
  //   image: "/skill/svelte.jpeg",
  // },
  // {
  //   id: 25,
  //   title: "React Native",
  //   image: "/skill/reactnative.png",
  // },
]
