import type { Metadata, Viewport } from 'next'
import { Archivo, IBM_Plex_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rababb Pannu | ML, Agentic AI, and Full-Stack Portfolio',
  description:
    'Portfolio for Rababb Pannu, featuring machine learning, agentic AI, and full-stack projects from Waterloo, BMO, and more.',
  icons: {
    icon: '/logo.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#F4F1E9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plexMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
