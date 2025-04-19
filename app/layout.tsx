import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import './globals.css'
import { Header } from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s - Chimex Sub',
    default: 'Chimex Sub - WhatsApp Audience Growth & Monetization with Chima Ugbaja',
  },
  description:
    'Learn how to grow your WhatsApp audience to 2,000+ views in 30 days, monetize your audience, and build a profitable WhatsApp business with the proven strategies from Chima Ugbaja at Chimex Sub.',
  keywords: 'WhatsApp growth, audience building, monetization, marketing, Chimex Sub, Chima Ugbaja, online marketing, small business, WhatsApp marketing',
  authors: { name: 'Chima Ugbaja' },
  robots: 'index, follow',
};


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth font-display  bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
