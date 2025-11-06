import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from "@/components/ui/toaster"
import './globals.css'

export const metadata: Metadata = {
  title: 'Reach.ist - E-commerce CRO & Meta Marketing Agency',
  description: 'Helping e-commerce brands unlock measurable growth and build strong brand equity through CRO and meta marketing',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
        <Toaster /> {/* ✅ Required for toast messages */}
      </body>
    </html>
  )
}
