import type React from "react"
import type { Metadata } from "next"
import { Merriweather, Great_Vibes } from "next/font/google"
import "./globals.css"

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  variable: "--font-merriweather",
})

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
})

export const metadata: Metadata = {
  title: "SUREQUINOS - Talabartería",
  description: "El arte de ensillar - Talabartería SUREQUINOS",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${merriweather.variable} ${greatVibes.variable} font-merriweather`}>{children}</body>
    </html>
  )
}
