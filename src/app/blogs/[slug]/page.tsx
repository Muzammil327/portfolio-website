import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'
import MainHero from '@/src/components/hero/MainHero'
import Container from '@/src/components/ui/Container'
import Navbar from '@/src/components/layout/navbar/page'
import ImageComp from '@/src/components/ui/Image'

const getPostContent = (slug: string, directories: string[]) => {
  for (const directory of directories) {
    const folder = path.join(process.cwd(), directory)
    const file = path.join(folder, `${slug}.md`)

    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8')
      const matterResult = matter(content)
      return matterResult
    }
  }

  return null
}

// Example usage
const directories = [
  'src/app/blogs/docs/cloudinary/',
  'src/app/blogs/docs/reactjs/',
]
const PostPage = (props: any) => {
  const slug = props.params.slug
  const post = getPostContent(slug, directories)

  return (
    <>
      <header className="bg-hero">
        <Navbar />
        <MainHero head={post?.data.title} para="" />
      </header>
      <div className="lg:py-6">
        <Container>
          <div className="grid lg:grid-cols-8 grid-cols-1 lg:gap-6">
            <div className="md:col-span-6">
              <div className="my-6">
                <ImageComp
                  imageName={post?.data.image}
                  alt={post?.data.title}
                  height={882}
                  width={1568}
                />
                <div className="flex mt-1">
                  <p className="t4">
                    by <span className="text-[#ff89ba]">Muzammil</span>
                  </p>
                  <span className="mx-1">-</span>
                  <p className="t4"> {post?.data.date}</p>
                </div>
              </div>

              <article className="prose">
                <Markdown>{post?.content || ''}</Markdown>
                <p className="py-6">Thanks for reading.</p>
              </article>
            </div>

            <div className="md:col-span-2">{/* <RightPost /> */}</div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default PostPage

export async function generateMetadata(props: any) {
  const slug = props.params.slug
  const post = getPostContent(slug, directories)
  return {
    title: post?.data.title,
    description: post?.data.para,
    keywords: post?.data.keyword,
    alternates: {
      canonical: `blogs/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: post?.data.title,
      description: post?.data.para,
      url: `blogs/${slug}`,
      images: [
        {
          url: post?.data.image,
          alt: post?.data.para,
        },
      ],
    },
    twitter: {
      title: post?.data.title,
      description: post?.data.para,
      images: {
        url: post?.data.image,
        alt: post?.data.para,
      },
    },
  }
}
