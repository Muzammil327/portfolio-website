'use client'

import { ThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react'

type Props = {
  children: React.ReactNode
}

const ThemeSwitcher = ({ children }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // if (!mounted) {
  //   return <>{children}</>
  // }

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {mounted ? children : <div className="dark">{children}</div>}
    </ThemeProvider>
  )
}

export default ThemeSwitcher
