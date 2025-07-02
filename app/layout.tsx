import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Novorix Solutions',
  description: 'An innovative digital agency offering cutting-edge software, web, and AI solutions for modern businesses.',
  generator: 'v0.dev',
  icons: {
    icon: [{ url: "/icon.png" }, { url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.png",
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
