'use client'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const ACCENT = "#3EA8FF"

// SVG icons
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#0A66C2"/>
    <path d="M11.75 13.5H9.5V22.5H11.75V13.5ZM10.625 12.5C11.25 12.5 11.75 12 11.75 11.375C11.75 10.75 11.25 10.25 10.625 10.25C10 10.25 9.5 10.75 9.5 11.375C9.5 12 10 12.5 10.625 12.5ZM22.5 17.25C22.5 15.125 21.25 14 19.5 14C18.5 14 17.75 14.5 17.5 15H17.5V13.5H15.25V22.5H17.5V17.75C17.5 16.75 18 16.25 18.75 16.25C19.5 16.25 20 16.75 20 17.75V22.5H22.25V17.25H22.5Z" fill="white"/>
  </svg>
)

export default function CaseStudies() {
  const [menuOpen, setMenuOpen] = useState(false);

  const caseStudiesStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Braze Case Studies - Enterprise Implementation Examples",
    "description": "Real Braze implementation case studies featuring Maven Clinic ($1.7B), Route ($1.4B), and custom tool development.",
    "url": "https://venturex-consulting.com/case-studies",
    "mainEntity": [
      {
        "@type": "CaseStudy",
        "name": "Maven Clinic Reimbursement Communication Architecture",
        "description": "State-driven communication architecture for healthcare reimbursement workflows, reducing support tickets by 33%",
        "client": {
          "@type": "Organization",
          "name": "Maven Clinic",
          "description": "$1.7B digital health platform serving 28 million lives"
        },
        "result": "33% reduction in support tickets, 12 automated campaigns launched",
        "datePublished": "2026-02-01"
      },
      {
        "@type": "CaseStudy", 
        "name": "Route Dynamic Email Tracking Series",
        "description": "8-email tracking series with dynamic merchant branding reaching 50M+ people",
        "client": {
          "@type": "Organization",
          "name": "Route",
          "description": "$1.4B post-purchase experience platform"
        },
        "result": "50M+ people reached, 8 dynamic email templates, 100% merchant branding coverage",
        "datePublished": "2026-01-01"
      },
      {
        "@type": "SoftwareApplication",
        "name": "BrazeSmith",
        "description": "API-friendly UI platform for Braze data management, testing, and audits",
        "applicationCategory": "MarketingAutomationSoftware",
        "operatingSystem": "Web Browser",
        "url": "https://brazesmith.fornowmarketing.com/",
        "author": {
          "@type": "Person",
          "name": "Peyton Griffin"
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseStudiesStructuredData),
        }}
      />
      
      <div className="min-h-screen flex flex-col bg-white text-black font-sans">
      {/* Header */}
      <header className="w-full py-6 px-8 flex items-center justify-between border-b border-gray-100 bg-white">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/VX.png" alt="Venture X Logo" width={36} height={36} className="rounded" />
          <span className="font-bold text-2xl tracking-tight">Venture X</span>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-base font-medium">
          <Link href="/" className={`hover:text-[${ACCENT}] transition-colors`}>Home</Link>
          <Link href="/#services" className={`hover:text-[${ACCENT}] transition-colors`}>Services</Link>
          <Link href="/case-studies" className={`text-[${ACCENT}] transition-colors`}>Case Studies</Link>
          <Link href="/#about" className={`hover:text-[${ACCENT}] transition-colors`}>About</Link>
          <Link href="/#contact" className={`hover:text-[${ACCENT}] transition-colors`}>Contact</Link>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className={`md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-[${ACCENT}] z-50`}
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <>
            <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setMenuOpen(false)} />
            <nav className="fixed top-0 right-0 z-50 w-64 h-full bg-white shadow-lg flex flex-col gap-8 text-lg font-medium p-10 transition-transform duration-200 md:hidden">
              <button className="self-end mb-8 text-3xl font-bold text-gray-400 hover:text-black focus:outline-none" onClick={() => setMenuOpen(false)}>
                &times;
              </button>
              <Link href="/" onClick={() => setMenuOpen(false)} className={`hover:text-[${ACCENT}] transition-colors`}>Home</Link>
              <Link href="/#services" onClick={() => setMenuOpen(false)} className={`hover:text-[${ACCENT}] transition-colors`}>Services</Link>
              <Link href="/case-studies" onClick={() => setMenuOpen(false)} className={`text-[${ACCENT}] transition-colors`}>Case Studies</Link>
              <Link href="/#about" onClick={() => setMenuOpen(false)} className={`hover:text-[${ACCENT}] transition-colors`}>About</Link>
              <Link href="/#contact" onClick={() => setMenuOpen(false)} className={`hover:text-[${ACCENT}] transition-colors`}>Contact</Link>
            </nav>
          </>
        )}
      </header>

      {/* Hero Section */}
      <section className="w-full py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Real results from Braze implementations. Here's how I've helped companies transform their customer communications.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          
          {/* Maven Case Study */}
          <article className="mb-16">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8 lg:p-12">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 font-bold text-xl">
                      M
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Maven Clinic</h2>
                      <p className="text-gray-600">Digital Health Platform ($1.7B Valuation) • February 2026</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Scaling Complex Healthcare Reimbursement Communications
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    How I provided Braze expertise to support Maven's enterprise-scale messaging transformation, building automated 
                    email templates and collaborating with engineering to create scalable communication workflows across their 
                    28 million member platform.
                  </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">The Challenge</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Maven Clinic is a $1.7B digital health platform focused on women's and family healthcare, operating a B2B2C model 
                    where they sell to employers and health plans who offer it as a benefit to their employees. Serving 28 million lives 
                    globally across 2,000+ enterprise clients including Amazon, Microsoft, and AT&T, Maven combines virtual care with 
                    30+ provider specialties and AI-driven population health tools.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    At this scale, Maven struggled with automating clear communication of complex reimbursement workflows for their members. 
                    Existing messaging was fragmented and difficult to scale as reimbursement states evolved across their vast enterprise 
                    client base. The support team was overwhelmed with questions about reimbursement status, and members lacked visibility 
                    into their journey.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">The Solution</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Working closely with Maven's cross-functional team, I provided Braze expertise to build a state-driven communication architecture:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>Collaborated with engineering to define custom events, attributes, and triggers needed to support automated reimbursement communications</li>
                    <li>Built scalable HTML email templates in Braze that could adapt to different reimbursement states and member attributes</li>
                    <li>Implemented complex Braze liquid logic for dynamic personalization, translating copy requirements into functional email templates with conditional content blocks</li>
                    <li>Established the technical Braze foundation to enable personalized member touchpoints throughout their reimbursement journey</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Results</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The collaborative effort resulted in a transformed reimbursement experience that improved member visibility 
                    and operational efficiency across Maven's 28 million member platform. The new Braze communication infrastructure 
                    supports automated, personalized outreach that replaced manual processes, enabling Maven to maintain their 
                    98% enterprise customer retention rate while scaling their family health benefits platform.
                  </p>
                  
                  {/* Simple Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 p-6 bg-gray-50 rounded-xl">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">33%</div>
                      <div className="text-sm text-gray-600">Fewer Support Tickets</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">12</div>
                      <div className="text-sm text-gray-600">Automated Campaigns</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">100%</div>
                      <div className="text-sm text-gray-600">Journey Coverage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">4x</div>
                      <div className="text-sm text-gray-600">Faster Setup</div>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">My Braze Contributions</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Technical Architecture</h5>
                      <p className="text-gray-700">Collaborated with engineering to define the Braze data structure and custom events needed to support Maven's complex reimbursement logic.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Email Template Development</h5>
                      <p className="text-gray-700">Built 12 automated email templates with sophisticated liquid logic to handle dynamic content based on reimbursement states and member attributes.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Personalization Framework</h5>
                      <p className="text-gray-700">Implemented the Braze foundation for scalable, personalized communications that could adapt as Maven's reimbursement processes evolved.</p>
                    </div>
                  </div>
                </div>

                {/* Technology Used */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-600 mb-2">Technology Stack:</p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">Braze</span>
                    <span className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">Liquid Templating</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Maven Case Study #2 */}
          <article className="mb-16">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8 lg:p-12">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 font-bold text-xl">
                      M
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Maven Clinic</h2>
                      <p className="text-gray-600">Digital Health Platform ($1.7B Valuation) • March 2026</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Building Maven's Reimbursement State Machine & Member Tracker
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    How I supported Maven's enterprise-scale reimbursement infrastructure project by building 30+ automated email templates 
                    and collaborating with engineering to implement the Braze data architecture for their comprehensive state machine 
                    serving millions of members.
                  </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">The Challenge</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    As Maven Clinic scaled their digital health platform to serve 28 million lives across 2,000+ enterprise clients 
                    (including Amazon, Microsoft, and AT&T), they faced significant operational challenges with reimbursement process 
                    transparency and efficiency. Member questions about reimbursement status updates and denials represented 
                    <strong>16% of Member Business Services (MBS) handling time</strong> and <strong>13% of all inbound questions</strong>. 
                    Even more critically, reimbursements drove the majority of member and client escalations at <strong>54%</strong>.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Operating at this scale with enterprise clients expecting seamless benefits administration, the existing system 
                    relied heavily on manual macros and processes, provided limited visibility for members trying to understand their 
                    reimbursement journey, and lacked the granular state tracking needed for efficient operations across their 
                    comprehensive women's and family healthcare programs.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">The Solution</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    As part of Maven's cross-functional initiative, I provided specialized Braze expertise to support their comprehensive reimbursement infrastructure overhaul:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li><strong>Collaborated with engineering</strong> to define the Braze data architecture needed for Maven's new reimbursement state machine, including custom events, attributes, and triggers</li>
                    <li><strong>Supported the member-facing Reimbursement Tracker</strong> by building the email communication layer that would sync with the app experience, ensuring consistent messaging across touchpoints</li>
                    <li><strong>Built and QA'd 30+ HTML email templates</strong> across Maven Wallet + Reimbursement Tracker, taking provided copy and translating it into functional Braze templates with dynamic content and personalization</li>
                    <li><strong>Implemented complex liquid logic</strong> to enable reimbursement-specific details, payout information, and denial reasons to populate automatically based on member state and attributes</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Results</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Maven's comprehensive reimbursement overhaul provided better process oversight and significantly reduced operational overhead 
                    across their enterprise client base. The new system, supported by automated email communications and member-facing tracking, 
                    successfully eliminated approximately one-third of related member questions and escalations while providing unprecedented 
                    transparency for their 28 million members. This operational efficiency supports Maven's continued growth and their ability 
                    to maintain enterprise clients like Amazon, Microsoft, and AT&T.
                  </p>
                  
                  {/* Simple Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 p-6 bg-gray-50 rounded-xl">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">33%</div>
                      <div className="text-sm text-gray-600">Reduction in Questions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">30+</div>
                      <div className="text-sm text-gray-600">Email Templates</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">54%</div>
                      <div className="text-sm text-gray-600">Escalations Addressed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">100%</div>
                      <div className="text-sm text-gray-600">Process Automation</div>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">My Braze Contributions</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Data Architecture Consultation</h5>
                      <p className="text-gray-700">Worked with Maven's engineering team to define the custom events, attributes, and triggers needed to support their new reimbursement state machine within Braze.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Email Template Production</h5>
                      <p className="text-gray-700">Built and meticulously QA'd 30+ HTML email templates, transforming copy requirements into functional Braze templates with dynamic content for reimbursement-specific details.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Automation Implementation</h5>
                      <p className="text-gray-700">Implemented sophisticated liquid logic to enable automated personalization, including payout details, required member actions, and denial explanations based on individual reimbursement states.</p>
                    </div>
                  </div>
                </div>

                {/* Technology Used */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-600 mb-2">Technology Stack:</p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">Braze</span>
                    <span className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">Liquid Templating</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Route Case Study */}
          <article className="mb-16">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8 lg:p-12">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 font-bold text-xl">
                      R
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Route</h2>
                      <p className="text-gray-600">Post-Purchase Experience Platform ($1.4B)</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Revamping Route's Dynamic Package Tracking Email Series
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    How I supported Route's mission to deliver "Amazon-level" post-purchase experiences by designing and building 
                    a sophisticated 8-email tracking series with dynamic merchant branding, reaching over 50M customers across 
                    their vast ecommerce platform network.
                  </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">The Challenge</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Route is a $1.4B company that operates as a post-purchase experience platform for ecommerce, sitting between 
                    online retailers and their customers to handle everything after purchase. With over $15 billion in protected 
                    merchandise and integrations across major platforms like Shopify, Salesforce Commerce Cloud, and BigCommerce, 
                    they serve both merchants (B2B) and shoppers (B2C) at massive scale.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Route needed to completely revamp their package tracking email communications to deliver an "Amazon-level" 
                    post-purchase experience while maintaining each merchant partner's unique branding. The challenge was creating 
                    a sophisticated 8-stage delivery journey (order confirmation, fulfillment delay, shipping, carrier pickup, 
                    in transit, carrier delay, delivery offer, and final delivery) that could scale across their vast merchant network.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">The Solution</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Working with Route's team, I provided comprehensive Braze expertise to rebuild their entire tracking communication system:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li><strong>Designed the complete email experience</strong> by creating Figma designs for all 8 tracking email templates, mapping out the user journey from order to delivery</li>
                    <li><strong>Built dynamic HTML email templates</strong> using a modular approach with one template per campaign, allowing for scalable content management across different tracking stages</li>
                    <li><strong>Implemented merchant-specific branding</strong> using connected content and liquid variables to dynamically populate emails with each merchant's branding, colors, and messaging</li>
                    <li><strong>Created modular content blocks</strong> that display conditionally based on event properties sent to Braze, ensuring relevant information appears for each package's unique circumstances</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Results</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The revamped tracking email series successfully delivers Route's vision of "Amazon-level" post-purchase 
                    experiences across their merchant network. Since launch in February 2025, <strong>the email series has 
                    reached over 50 million people</strong>, supporting Route's platform that protects over $15 billion in 
                    merchandise. The sophisticated modular system allows Route to maintain their high-quality brand experience 
                    while seamlessly adapting to the diverse branding needs of merchants across major ecommerce platforms.
                  </p>
                  
                  {/* Simple Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 p-6 bg-gray-50 rounded-xl">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">50M+</div>
                      <div className="text-sm text-gray-600">People Reached</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">8</div>
                      <div className="text-sm text-gray-600">Email Templates</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">100%</div>
                      <div className="text-sm text-gray-600">Dynamic Branding</div>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">My Braze Contributions</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Email Design & UX</h5>
                      <p className="text-gray-700">Created comprehensive Figma designs for the complete 8-email tracking journey, ensuring optimal user experience across all delivery stages.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Dynamic Template Development</h5>
                      <p className="text-gray-700">Built sophisticated HTML email templates using connected content and liquid logic to enable real-time merchant branding and content personalization.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Modular Architecture</h5>
                      <p className="text-gray-700">Implemented a flexible, event-driven email system where content modules display conditionally based on package-specific properties and tracking data.</p>
                    </div>
                  </div>
                </div>

                {/* Email Series Visual */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Email Series Overview</h4>
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <Image 
                      src="/Route Tracking Series Emails.png" 
                      alt="Route's 8-email tracking series showing different stages from order confirmation to delivery" 
                      width={800} 
                      height={600} 
                      className="w-full rounded-lg shadow-sm"
                    />
                    <p className="text-sm text-gray-600 mt-3 text-center">
                      Complete 8-email tracking journey with dynamic merchant branding and modular content blocks
                    </p>
                  </div>
                </div>

                {/* Technology Used */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-600 mb-2">Technology Stack:</p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">Braze</span>
                    <span className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">Connected Content</span>
                    <span className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">Liquid Templating</span>
                    <span className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">Figma</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Route Case Study #2 */}
          <article className="mb-16">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8 lg:p-12">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 font-bold text-xl">
                      R
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Route</h2>
                      <p className="text-gray-600">Post-Purchase Experience Platform ($1.4B)</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Migrating Route's Email Infrastructure from SendGrid to Braze
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    How I successfully migrated 26 email templates from SendGrid to Braze using an innovative 7-template 
                    modular system, creating a scalable architecture that supports multiple email types through liquid logic.
                  </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">The Challenge</h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Route needed to migrate their entire email infrastructure from SendGrid to Braze to better support their 
                    growing platform needs. With 26 different email templates serving their post-purchase experience platform, 
                    the migration required not only technical execution but also strategic consolidation. Route provided Figma 
                    designs for both their existing SendGrid emails and the new desired implementations in Braze, requiring 
                    a comprehensive approach to maintain functionality while improving scalability.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">The Solution</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Working with Route's team, I provided comprehensive Braze expertise to execute a strategic platform migration:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li><strong>Architected a 7-template modular system</strong> that consolidated 26 individual email templates into a more efficient, maintainable structure using advanced liquid variables</li>
                    <li><strong>Built intelligent template logic</strong> that displays different email sections based on email type, allowing one template to handle multiple use cases through conditional rendering</li>
                    <li><strong>Created self-documenting templates</strong> with built-in liquid logic instructions, enabling non-technical marketers to easily build campaigns in Braze by following the provided HTML instructions and variable configurations</li>
                    <li><strong>Collaborated with engineering</strong> to migrate custom event data and triggers from SendGrid to Braze, ensuring seamless transition of automated email workflows</li>
                    <li><strong>Maintained design consistency</strong> by working from Route's Figma specifications while optimizing the technical architecture for Braze's capabilities</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Results</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The migration successfully consolidated Route's email infrastructure while improving efficiency and maintainability. 
                    The new modular system reduced template complexity from 26 individual templates to 7 intelligent templates, 
                    making it easier for Route's team to create and manage emails while maintaining the sophisticated functionality 
                    required for their $1.4B platform.
                  </p>
                  
                  {/* Simple Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 p-6 bg-gray-50 rounded-xl">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">26</div>
                      <div className="text-sm text-gray-600">Emails Migrated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">7</div>
                      <div className="text-sm text-gray-600">Modular Templates</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">100%</div>
                      <div className="text-sm text-gray-600">Migration Success</div>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Modular Template System</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The purpose of building the modular templates this way was to empower non-technical marketers to come into Braze 
                    and build campaigns independently by following the instructions provided directly in the HTML with simple variable 
                    configurations. This approach eliminates the need for technical expertise while maintaining sophisticated functionality.
                  </p>
                  
                  {/* Template Screenshots */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <Image 
                          src="/Route Template Logic.png" 
                          alt="Route template logic showing liquid variables and instructions for non-technical users" 
                          width={400} 
                          height={500} 
                          className="w-full rounded-lg shadow-sm"
                        />
                        <p className="text-sm text-gray-600 mt-2 text-center">
                          Template logic with built-in instructions for marketers
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <Image 
                          src="/Route_email_1.jpg" 
                          alt="Route email template example 1" 
                          width={180} 
                          height={120} 
                          className="w-full max-w-[120px] mx-auto rounded-lg shadow-sm mb-2"
                        />
                        <p className="text-sm text-gray-600 text-center mb-4">
                          Email template example 1
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <Image 
                          src="/Route_email_2.jpg" 
                          alt="Route email template example 2" 
                          width={180} 
                          height={120} 
                          className="w-full max-w-[120px] mx-auto rounded-lg shadow-sm"
                        />
                        <p className="text-sm text-gray-600 text-center">
                          Email template example 2
                        </p>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">My Braze Contributions</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Platform Migration Strategy</h5>
                      <p className="text-gray-700">Successfully migrated 26 email templates from SendGrid to Braze while collaborating with engineering to transfer custom event data and automated triggers.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Modular Template Architecture</h5>
                      <p className="text-gray-700">Designed and built a sophisticated 7-template system using advanced liquid logic that consolidates multiple email types into maintainable, reusable templates.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Non-Technical User Empowerment</h5>
                      <p className="text-gray-700">Created self-documenting templates with built-in HTML instructions and simple variable configurations, enabling non-technical marketers to independently build campaigns in Braze following clear guidelines.</p>
                    </div>
                  </div>
                </div>

                {/* Technology Used */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-600 mb-2">Technology Stack:</p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">Braze</span>
                    <span className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">SendGrid Migration</span>
                    <span className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">Liquid Logic</span>
                    <span className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">Modular Architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* BrazeSmith Case Study */}
          <article className="mb-16">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8 lg:p-12">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 font-bold text-xl">
                      B
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">BrazeSmith</h2>
                      <p className="text-gray-600">For Now Marketing • Internal Tool Development</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Building BrazeSmith: A No-Code Braze Operations Tool
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    How I developed an API-friendly UI platform for day-to-day testing, reporting audits, and light 
                    manual user management tasks like deleting users, adjusting subscription status, and removing hard bounces.
                  </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">The Challenge</h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Marketing teams frequently need to perform day-to-day Braze operations like testing data flows, 
                    generating audit reports, and handling manual user management tasks (deleting users, adjusting subscription status, 
                    removing hard bounces), but lack the technical expertise to work directly with REST endpoints and API calls. 
                    At For Now Marketing, we identified the need for a simple UI tool that could handle these routine operations 
                    without requiring technical knowledge.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">The Solution</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    I developed BrazeSmith as an internal passion project in 2025, leveraging AI to build an efficient tool 
                    that bridges the gap between complex API operations and user-friendly interfaces:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li><strong>Built a no-code testing interface</strong> that allows marketing teams to send custom attributes, custom events, and purchase data to Braze profiles for testing purposes</li>
                    <li><strong>Implemented secure API integration</strong> supporting connection to Braze instances using API keys and REST URLs for day-to-day operations</li>
                    <li><strong>Created campaign audit functionality</strong> with keyword search capabilities across live campaigns and canvases, generating detailed spreadsheets for reporting</li>
                    <li><strong>Developed light user management tools</strong> for routine tasks like deleting Braze users, adjusting subscription status, and removing hard bounces</li>
                    <li><strong>Leveraged AI throughout development</strong> to build efficient, user-friendly solutions that streamline daily marketing operations</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Tool Features & Impact</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    BrazeSmith streamlines routine Braze operations, enabling marketing teams to handle day-to-day testing, 
                    generate audit reports, and perform light user management tasks independently. The tool serves as both 
                    a practical utility for everyday marketing operations and a demonstration of deep Braze API expertise 
                    applied to solve real workflow challenges.
                  </p>
                  
                  {/* BrazeSmith Interface */}
                  <div className="my-8 p-6 bg-gray-50 rounded-xl">
                    <div className="text-center mb-4">
                      <Image 
                        src="/BrazeSmith.png" 
                        alt="BrazeSmith interface showing no-code Braze API operations" 
                        width={700} 
                        height={500} 
                        className="w-full max-w-2xl mx-auto rounded-lg shadow-sm"
                      />
                      <p className="text-sm text-gray-600 mt-3">
                        BrazeSmith's intuitive interface for managing Braze API operations
                      </p>
                    </div>
                    <div className="text-center">
                      <a 
                        href="https://brazesmith.fornowmarketing.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#3EA8FF] text-white rounded-lg font-semibold hover:opacity-90 transition-colors"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 7h10v10"/>
                          <path d="M7 17 17 7"/>
                        </svg>
                        Try BrazeSmith
                      </a>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technical Capabilities Demonstrated</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Braze API Mastery</h5>
                      <p className="text-gray-700">Deep understanding of Braze's REST API endpoints, authentication, and data structures to create a seamless integration layer.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Tool Development & UI/UX</h5>
                      <p className="text-gray-700">Full-stack development capabilities to create intuitive interfaces that translate complex API operations into user-friendly workflows.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">AI-Powered Development</h5>
                      <p className="text-gray-700">Leveraged artificial intelligence throughout the development process to build efficient, scalable solutions that address real marketing team needs.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Community Impact</h5>
                      <p className="text-gray-700">Created an open-access tool that empowers marketing teams across the industry, demonstrating commitment to advancing the Braze ecosystem.</p>
                    </div>
                  </div>
                </div>

                {/* Technology Used */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-600 mb-2">Technology Stack:</p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">Braze REST API</span>
                    <span className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">AI Development</span>
                    <span className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">Full-Stack Development</span>
                    <span className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">UI/UX Design</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Call to Action */}
          <div className="text-center py-16 border-t border-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready to Transform Your Customer Communications?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help you build scalable, automated campaigns that drive real business results.
            </p>

            <Link 
              href="/#contact" 
              className={`inline-block px-8 py-4 bg-[#3EA8FF] text-white rounded-lg font-semibold hover:opacity-90 transition-colors`}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 px-4 border-t border-gray-100 bg-white mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} Venture X. All rights reserved.</div>
          <nav className="flex gap-6 text-sm text-gray-500">
            <Link href="/" className={`hover:text-[${ACCENT}]`}>Home</Link>
            <Link href="/#services" className={`hover:text-[${ACCENT}]`}>Services</Link>
            <Link href="/case-studies" className={`text-[${ACCENT}]`}>Case Studies</Link>
            <Link href="/#about" className={`hover:text-[${ACCENT}]`}>About</Link>
            <Link href="/#contact" className={`hover:text-[${ACCENT}]`}>Contact</Link>
          </nav>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/peyton-griffin/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80">{LinkedInIcon()}</a>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}