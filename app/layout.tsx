import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Venture X | Independent Braze Consulting",
  description: "Expert Braze consulting for high-performance teams. Campaign execution, lifecycle strategy, email development, and hands-on support. Flexible engagements from a former Braze support lead.",
  icons: {
    icon: '/VX.png',
    shortcut: '/VX.png',
    apple: '/VX.png',
  },
  openGraph: {
    title: "Venture X | Independent Braze Consulting",
    description: "Expert Braze consulting for high-performance teams. Campaign execution, lifecycle strategy, email development, and hands-on support.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-white text-black min-h-screen antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}