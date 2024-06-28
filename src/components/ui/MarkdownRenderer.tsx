'use client'
import React, { useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import hljs from 'highlight.js'

interface MarkdownRendererProps {
  markdown: string
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdown }) => {
  const markdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (markdownRef.current) {
      markdownRef.current.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block as HTMLElement)
      })
    }
  }, [markdown])

  return (
    <div ref={markdownRef}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}

export default MarkdownRenderer
