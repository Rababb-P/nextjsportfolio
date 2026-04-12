import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rababb Pannu | ML, Robotics, and Full-Stack Portfolio',
  description: 'Portfolio for Rababb Pannu, featuring machine learning, robotics, and full-stack projects from Waterloo, BMO, and more.',
  icons: {
    icon: '/logo.svg',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
