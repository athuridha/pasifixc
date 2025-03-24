'use client'
import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { BloodEffect } from "@/components/blood-effect"
import { useEffect, useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

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