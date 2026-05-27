import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { GeistPixelCircle } from "geist/font/pixel"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Tate — Hong Kong Weather Warnings in Your Menu Bar",
  icons: {
    icon: "/icons/tate.svg",
  },
  description:
    "Real-time Hong Kong weather warnings from the HKO Open Data API, right in your macOS menu bar.",
  openGraph: {
    title: "Tate — HK Weather Warnings",
    description:
      "Real-time Hong Kong weather warnings in your macOS menu bar.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${GeistPixelCircle.variable} antialiased`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
