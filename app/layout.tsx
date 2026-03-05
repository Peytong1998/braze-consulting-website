import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Venture X - Expert Braze Consulting & Email Template Development",
  description: "12x Braze certified consultant specializing in email automation, campaign execution, and technical implementation. Former Braze Premium Support team member serving enterprise clients like Maven Clinic and Route.",
  keywords: "Braze consultant, Braze email templates, email automation, marketing automation, Braze implementation, customer lifecycle marketing, Braze campaigns, email personalization, liquid templating, marketing consultant",
  generator: 'v0.dev',
  authors: [{ name: "Peyton Griffin" }],
  creator: "Peyton Griffin",
  publisher: "Venture X Consulting",
  robots: "index, follow",
  icons: {
    icon: '/VX.png',
    shortcut: '/VX.png',
    apple: '/VX.png',
  },
  openGraph: {
    title: "Venture X - Expert Braze Consulting & Email Template Development",
    description: "12x Braze certified consultant specializing in email automation, campaign execution, and technical implementation. Former Braze Premium Support team member.",
    url: "https://venturex-consulting.com",
    siteName: "Venture X Consulting",
    images: [
      {
        url: "/VX.png",
        width: 1200,
        height: 630,
        alt: "Venture X Consulting - Braze Expert",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venture X - Expert Braze Consulting & Email Template Development",
    description: "12x Braze certified consultant specializing in email automation and campaign execution. Former Braze Premium Support team member.",
    images: ["/VX.png"],
    creator: "@venturexbraze",
  },
  alternates: {
    canonical: "https://venturex-consulting.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://venturex-consulting.com/#business",
        "name": "Venture X Consulting",
        "alternateName": "Venture X",
        "description": "Professional Braze consulting specializing in email automation, campaign execution, and technical implementation for enterprise clients.",
        "url": "https://venturex-consulting.com",
        "telephone": "+1-XXX-XXX-XXXX",
        "email": "contact@venturex-consulting.com",
        "foundingDate": "2025",
        "founder": {
          "@type": "Person",
          "@id": "https://venturex-consulting.com/#founder"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Worldwide"
        },
        "serviceType": [
          "Braze Email Template Development",
          "Marketing Automation Consulting", 
          "Campaign Execution",
          "Technical Implementation",
          "Email Personalization",
          "Customer Lifecycle Marketing"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Braze Consulting Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Flex Support Package",
              "description": "Direct Slack Connect Support and hands-on Braze assistance",
              "price": "4000",
              "priceCurrency": "USD",
              "priceValidUntil": "2026-12-31",
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer", 
              "name": "Execution Package",
              "description": "Comprehensive campaign execution with strategy sessions",
              "price": "7000",
              "priceCurrency": "USD", 
              "priceValidUntil": "2026-12-31",
              "availability": "https://schema.org/InStock"
            }
          ]
        }
      },
      {
        "@type": "Person",
        "@id": "https://venturex-consulting.com/#founder",
        "name": "Peyton Griffin",
        "jobTitle": "Braze Consultant & Email Marketing Expert",
        "description": "12x Braze certified expert and former Braze Premium Support team member with 5+ years experience serving enterprise clients including McDonald's, Maven Clinic, and Route.",
        "url": "https://venturex-consulting.com",
        "sameAs": [
          "https://www.linkedin.com/in/peyton-griffin/"
        ],
        "knowsAbout": [
          "Braze Platform",
          "Email Marketing Automation", 
          "Liquid Templating",
          "Customer Lifecycle Marketing",
          "Marketing Technology",
          "Campaign Optimization"
        ],
        "alumniOf": {
          "@type": "Organization",
          "name": "Braze"
        },
        "worksFor": {
          "@type": "Organization",
          "@id": "https://venturex-consulting.com/#business"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://venturex-consulting.com/#website", 
        "url": "https://venturex-consulting.com",
        "name": "Venture X Consulting",
        "description": "Professional Braze consultant specializing in email automation and campaign execution",
        "publisher": {
          "@type": "Person",
          "@id": "https://venturex-consulting.com/#founder"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://venturex-consulting.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://venturex-consulting.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Braze and why do I need a consultant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Braze is a customer engagement platform that enables sophisticated email automation, push notifications, and cross-channel messaging. A Braze consultant helps you maximize the platform's potential by implementing complex email templates, building automated campaigns, and optimizing your customer lifecycle marketing."
            }
          },
          {
            "@type": "Question", 
            "name": "How long does a typical Braze implementation take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Braze implementations vary based on complexity. Simple email template builds can take 1-2 weeks, while comprehensive communication architectures take 4-8 weeks. Enterprise clients typically see initial results within the first month, with full optimization achieved by month 2-3."
            }
          },
          {
            "@type": "Question",
            "name": "What makes your Braze consulting different?", 
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I'm a 12x Braze certified expert and former Braze Premium Support team member with direct experience supporting enterprise clients like McDonald's worldwide. My work with high-growth companies like Maven Clinic ($1.7B) and Route ($1.4B) demonstrates proven ability to handle complex, high-scale email systems."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help with email personalization and dynamic content?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": "Yes, email personalization is one of my core specialties. I've built sophisticated systems like Route's merchant-specific branding that dynamically adapts emails for different companies, using Braze's liquid templating and connected content features."
            }
          }
        ]
      }
    ]
  }

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-black min-h-screen antialiased`}>{children}</body>
    </html>
  )
}
