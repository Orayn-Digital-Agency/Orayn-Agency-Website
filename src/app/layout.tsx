import type { Metadata } from 'next'
import { Sora, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Orayn Digital Agency — Custom Websites, Apps & Automation for Nigerian Businesses',
  description:
    'Orayn builds production-grade websites, mobile apps, SaaS platforms, and automation systems. Nigerian-founded. International-standard delivery. 13+ shipped applications.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://orayn.studio'
  ),
  openGraph: {
    title: 'Orayn Digital Agency',
    description:
      'Production-grade digital products for Nigerian businesses. Custom code, no templates, 7–10 day delivery.',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://orayn.studio',
    siteName: 'Orayn',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orayn Digital Agency',
    description:
      'Production-grade digital products for Nigerian businesses.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-orayn-darker text-orayn-text antialiased">{children}</body>
    </html>
  )
}
