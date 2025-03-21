import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { BloodEffect } from "@/components/blood-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "pasifixc coorporation",
  description: "psfx",
  generator: 'v0.dev',
  icons: {
    icon: '/images/pasifixc.webp'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#0a0000] text-white min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <BloodEffect />
          <div className="fixed inset-0 bg-gradient-radial from-transparent via-transparent to-black/70 pointer-events-none z-30"></div>
          <main className="relative z-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
