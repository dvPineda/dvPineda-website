import './globals.css'
import type { Metadata } from 'next'
import { Martian_Mono } from 'next/font/google'

const inter = Martian_Mono({ 
  subsets: ['latin'],
  weight: ['300', '700'],
})

export const metadata: Metadata = {
  title: 'vitodev | Portfolio',
  description: 'AI Scientist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
