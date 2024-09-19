# Clerk
[Clerk](https://clerk.com/) is a popular authentication and user management platform that can be easily integrated with Next.js. Here's a step-by-step guide on how to set up Next.js with Clerk:

## Step 1: Create a Clerk account
If you haven't already, create a Clerk account by signing up on the Clerk website. Follow the instructions to set up your account and create a new application.

## Step 2: Install the Clerk SDK
In your Next.js project, install the Clerk SDK using npm or yarn:

```bash
npm install @clerk/nextjs
```

## Step 3: Set your environment variables

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
CLERK_SECRET_KEY=YOUR_SECRET_KEY
```

## Step 4: Add Middleware to your application
`clerkMiddleware()` grants you access to user authentication state throughout your application, on any route or page. It also allows you to protect specific routes from unauthenticated users. To add clerkMiddleware() to your application, follow these steps:

Create a `middleware.ts` file.

- If you're using the `/src` directory, place middleware.ts in the /src directory.
- If you're not using the `/src` directory, place `middleware.ts` in the root directory alongside `.env.local`.

In your middleware.ts, export Clerk's clerkMiddleware() helper: [More Details Here](https://clerk.com/docs/quickstarts/nextjs#add-middleware-to-your-application)

```bash
import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
```

## Step 5: Add Clerk Provider

In Nextjs App Router
```bash
import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}
```

In Nextjs Page Router
```bash
import '@/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  )
}

export default MyApp
```