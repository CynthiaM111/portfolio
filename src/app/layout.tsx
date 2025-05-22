import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../app/components/Navbar' 
import Footer from '../app/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cynthia Mujyambere - Portfolio',
  description: 'Full Stack Web & Mobile Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen px-4 py-8 md:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}