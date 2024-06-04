import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode:"class",

  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        color1: 'var(--color1)', // Use a custom CSS variable
        color2: 'var(--color2)', // Use a custom CSS variable
        border1: 'var(--border1)', // Use a custom CSS variable
        border1dark: 'var(--border1dark)', // Use a custom CSS variable
        border2: 'var(--border2)', // Use a custom CSS variable
        color3: 'var(--color3)', // Use a custom CSS variable
        color3h: 'var(--color3h)', // Use a custom CSS variable
      },
    },
  },
  plugins: [],
}
export default config
