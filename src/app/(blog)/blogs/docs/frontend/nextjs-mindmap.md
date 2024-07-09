---
id: 10,
title: 'Next JS Mindmap.'
para: 'After follow these steps, you can get master on Next JS beginner to master level.'
date: '3-07-2024'
cat: 'Next JS'
image: '/blog/nextjs.png'
keyword: ['Next JS', 'Next JS learning', 'Next JS learning path', 'Next JS master level']
---

# Next JS
[Next.js](https://nextjs.org/) is a popular React framework used for building server-side rendered (SSR) and statically generated web applications. Developed by Vercel (formerly known as ZEIT), Next.js provides a range of features and optimizations out of the box, making it a powerful tool for modern web development.

```bash
npx create-next-app@latest next-app
cd next-app
mkdir src
mkdir src/app src/components src/types src/utils src/models
mkdir src/utils/constant.ts src/utils/db.ts
mkdir src/components/layout src/components/ui src/components/elements
mkdir src/app/api src/app/error.tsx src/app/global-error.tsx src/app/not-found.tsx
code .
```

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

### Resorces

- [Next JS Official](https://nextjs.org/docs)
