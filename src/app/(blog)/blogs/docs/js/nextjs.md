---
title: 'Next JS Mindmap.'
para: 'After follow these steps, you can get master on Next JS beginner to master level.'
date: '7-02-2024'
cat: 'Next JS'
image: '/blog/nextjs.png'
keyword: ['Next JS', 'Next JS learning', 'Next JS learning path', 'Next JS master level']
---

# Next JS

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
