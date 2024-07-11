import React from 'react'
import PostMetadata from '../blog/PostMetadata'
import { BlogCard2 } from '../blog/blogCard'

export default async function BlogHomeView() {
  const postMetadata = await PostMetadata()

  return <BlogCard2 postMetadata={postMetadata} />
}
