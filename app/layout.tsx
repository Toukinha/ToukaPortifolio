import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import Header from './components/header/Header'
import ContactForm from './components/contact-form/ContactForm'
import BackToTop from './components/back-to-top'
import Toaster from './components/toaster'

export const metadata = {
  title: {
    default: 'Home',
    template: '%s | Touka',
  },
}
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body suppressHydrationWarning={true}>
        <Toaster />
        <Header />
        {children}
        <ContactForm />
        <BackToTop />
      </body>
    </html>
  )
}
