import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { GeistPixelCircle } from "geist/font/pixel"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AnchoredToastProvider } from "@/components/ui/toast"
import { TooltipProvider } from "@/components/ui/tooltip"

export const metadata: Metadata = {
  title: "Tate — Hong Kong Weather Warnings for Your macOS Menu Bar",
  icons: {
    icon: "/icons/tate.svg",
  },
  description:
    "Live typhoon signals, rainstorm warnings, and thunderstorm alerts from the Hong Kong Observatory — right in your menu bar. Free & open source.",
  openGraph: {
    title: "Tate — Weather Warnings, Your Menu Bar",
    description:
      "Real-time Hong Kong weather warnings from the HKO in your macOS menu bar. Free, open source, bilingual.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tate — HK Weather Warnings",
      },
    ],
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
        <ThemeProvider>
          <TooltipProvider delay={0}>
            <AnchoredToastProvider>{children}</AnchoredToastProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
