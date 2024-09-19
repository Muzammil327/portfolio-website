---
id: 9,
title: 'Next JS Mindmap.'
para: 'After follow these steps, you can get master on Next JS beginner to master level.'
date: '18-09-2024'
cat: 'Next JS'
image: '/blog/nextjs.png'
keyword: ['Next JS', 'Next JS learning', 'Next JS learning path', 'Next JS master level']
---

# Next JS
[Next.js](https://nextjs.org/) is a popular [React](https://react.dev/) framework used for building server-side rendered (SSR) and statically generated web applications. Developed by [Vercel](https://vercel.com/) (formerly known as ZEIT), Next.js provides a range of features and optimizations out of the box, making it a powerful tool for modern web development.

### Resorces
- [Next JS Installation](https://blog-website-pink-chi.vercel.app/posts/creating-your-first-next-js-application-a-step-by-step-guide)
- [Interview Question](https://github.com/Muzammil327/portfolio-website/tree/main/src/learning/interview/nextjs_interview_README.md)

## Functions

#### usePathname

```bash
import { usePathname } from 'next/navigation'

const pathname = usePathname()
```

#### useSearchParams

```bash
import { useSearchParams } from 'next/navigation'

const searchParams = useSearchParams()
const search = searchParams.get('search')
// in api 
const searchParams = req.nextUrl.searchParams;
const orderId = searchParams.get("orderId");
```

#### useParams

```bash
import { useParams } from 'next/navigation'

const params = useParams()
```

#### redirect

```bash
import { redirect } from 'next/navigation'

redirect("/posts")
```
