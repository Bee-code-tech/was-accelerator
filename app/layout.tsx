import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import './globals.css'
import { Header } from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

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
      <head>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1814140616148616');
          fbq('track', 'PageView');
        `,
      }}
    ></script>
    <noscript>
          <img
            height="1"
            width="1"
            
src="https://www.facebook.com/tr?id=1814140616148616&ev=PageView&noscript=1"
/>
</noscript>

      </head>
      <body className="flex h-full flex-col">
        <Header />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  )
}

