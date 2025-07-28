import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luigi's Portfolio",
  description: "무언가를 만들어가는 그 순간을 즐기는 백엔드 개발자 김주엽입니다.",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: "/images/meta/favicon.ico" },
      { url: "/images/meta/favicon.svg", type: "image/svg+xml" },
      { url: "/images/meta/favicon-96x96.png", sizes: "96x96", type: "image/png" }
    ],
    apple: { url: "/images/meta/apple-touch-icon.png" },
  },
  manifest: "/images/meta/site.webmanifest",
  openGraph: {
    title: "Luigi's Portfolio",
    description: "무언가를 만들어가는 그 순간을 즐기는 백엔드 개발자 김주엽입니다.",
    type: "website",
    locale: "ko_KR",
    url: "https://luigi-portfolio.vercel.app/",
    siteName: "Luigi's Portfolio",
    images: [
      {
        url: "/images/meta/og.png",
        width: 1200,
        height: 630,
        alt: "Luigi's Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Luigi's Portfolio",
    description: "무언가를 만들어가는 그 순간을 즐기는 백엔드 개발자 김주엽입니다.",
    images: ["/images/meta/og.png"]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
