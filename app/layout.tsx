import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Viridian Core | Sistemas digitales para operar mejor',
  description: 'Viridian Core diseña sistemas internos, automatización, portales y herramientas inteligentes para operaciones reales con más control, trazabilidad y criterio técnico.',
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
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
