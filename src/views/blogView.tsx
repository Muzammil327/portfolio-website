import React from 'react'
import Container from '@/src/components/ui/Container'
import BlogCard from '@/src/components/blog/blogCard'

export default function BlogView() {
  return (
    <section className="py-10 px-3">
      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-4 gap-2 items-center">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </Container>
    </section>
  )
}
