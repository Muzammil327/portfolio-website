import Navbar from '@/src/components/layout/navbar/page'
import 'highlight.js/styles/github.css'; 
export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
