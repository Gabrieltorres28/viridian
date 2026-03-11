import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: 'Viridian Core | Sistemas para ordenar operaciones',
  description: 'Viridian Core diseña sistemas digitales, automatización e inteligencia aplicada para ordenar operaciones reales con control, trazabilidad y escala.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/eagle-real.png',
        sizes: '512x512',
      },
      {
        url: '/eagle-real.png',
        sizes: '256x256',
      },
      {
        url: '/eagle-real.png',
        sizes: '64x64',
      }
    ],
    apple: '/eagle-real.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
