import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/providers/theme-provider'
import Navigation from '@/components/Navigation'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Kazari Acessórios | Semijoias | Artesanatos',
  description: 'A beleza da variedade de cores e formas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <head>
          <link rel='icon' href='/favicon.ico' sizes='any' />
        </head>

        <body
          className={`${inter.variable} font-sans min-h-screen antialiased`}
        >
          <div className='flex h-screen relative flex-col md:flex-row md:overflow-hidden'>
            <div className='w-20 flex-none lg:w-64 md:border-r'>
              <Navigation />
            </div>
            <ThemeProvider
              attribute='class'
              defaultTheme='system'
              enableSystem
              disableTransitionOnChange
            >
              <main className='flex-grow mt-12 md:mt-0 flex-1 w-full md:overflow-y-auto sm:p-6 md:p-8 max-w-7xl mx-auto'>
                {children}
              </main>
            </ThemeProvider>
          </div>
        </body>
      </html>
    </>
  )
}
