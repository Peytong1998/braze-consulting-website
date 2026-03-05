import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Braze Case Studies - Maven Clinic, Route & BrazeSmith | Venture X",
  description: "Real Braze implementation case studies by 12x certified expert featuring Maven Clinic ($1.7B), Route ($1.4B), and custom tool development. 50M+ emails sent, enterprise-scale results.",
  keywords: "Braze case studies, email automation case studies, Maven Clinic Braze, Route email templates, Braze implementation examples, marketing automation results",
  openGraph: {
    title: "Braze Case Studies - Enterprise Results at Scale",
    description: "Real Braze implementations for enterprise companies Maven Clinic and Route, plus innovative tool development. See 50M+ email results.",
    url: "https://venturex-consulting.com/case-studies",
    images: [
      {
        url: "/Route Tracking Series Emails.png",
        width: 1200,
        height: 630,
        alt: "Route's Braze email tracking series - 50M+ people reached",
      },
    ],
  },
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}