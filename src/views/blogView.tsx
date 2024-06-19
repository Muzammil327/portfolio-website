'use client'
import React, { useEffect, useState } from 'react'
import Container from '@/src/components/ui/Container'
import BlogCard from '@/src/components/blog/blogCard'
import PostMetadata from '../components/blog/PostMetadata'
import { PostCard } from '../types/page'
import Navbar from '../components/layout/navbar/page'
import MainHero from '@/src/components/hero/MainHero'

export default function BlogView() {
  const [postMetadata, setPostMetadata] = useState<PostCard[]>([])

  useEffect(() => {
    const fetchPostMetadata = async () => {
      const metadata = await PostMetadata()
      setPostMetadata(metadata)
    }

    fetchPostMetadata()
  }, [])
  return (
    <>
      <header className="bg-hero">
        <Navbar />
        <MainHero head="Blog Posts" para="" />
      </header>
      <section className="py-10 px-3">
        <Container>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-4 gap-2 items-center">
            {postMetadata.map((data: PostCard) => (
              <BlogCard datas={data} key={data.title} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
