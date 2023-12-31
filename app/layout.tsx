import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Data Fest',
  description: 'Data Fest UNN',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
        
        <link rel="icon" href="/img/logo.svg" />
      </head>
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
