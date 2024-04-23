import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Kazari Acessórios | Semijoia | Artesanato',
  description: 'A beleza da variedade de cores e formas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} font-sans min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  )
}
