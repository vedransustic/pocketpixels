import { Inter } from 'next/font/google'
import './globals.css'
import { Footer, Navbar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PocketPixels',
  description: 'Next.js blog app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel='icon' href='/favicon.png' sizes='any'/>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}