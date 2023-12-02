import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './ui/Navbar/navbar'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hacker News',
  description: 'An Nextjs Project',
  icons: '/heart.png',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
