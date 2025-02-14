import type { Metadata } from "next"
import type React from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "PICI was here",
  description: "A Valentine's Day proposal with cats and Pokéballs",
  metadataBase: new URL("https://sambemyvalentine.vercel.app"),
  openGraph: {
    title: "PICI was here",
    description: "A Valentine's Day proposal with cats and Pokéballs",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}



import './globals.css'