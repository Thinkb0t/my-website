import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import Thinkbot from '@/components/Thinkbot'
import Providers from '@/components/Providers'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bibhijith E A Portfolio',
  description: 'Independent researcher exploring neuroscience, quantum computing, AI, and more',
  keywords: 'Bibhijith E A, Research, Neuroscience, Quantum Computing, AI, Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} transition-colors duration-200`}>
        <Providers>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col">
            <Header />
            <main className="flex-grow">
              <div className="container mx-auto px-4 max-w-6xl">
                {children}
              </div>
            </main>
            <Footer />
            <Thinkbot />
            <CookieConsent />
          </div>
        </Providers>
      </body>
    </html>
  )
}
