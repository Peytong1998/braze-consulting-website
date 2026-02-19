'use client'

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const ACCENT = "#3EA8FF"

// SVG icons
const CampaignIcon = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke={ACCENT} strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
)
const TechIcon = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke={ACCENT} strokeWidth="2">
    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
  </svg>
)
const EmailIcon = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke={ACCENT} strokeWidth="2">
    <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
)
const SupportIcon = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke={ACCENT} strokeWidth="2">
    <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
  </svg>
)
const CheckIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#3EA8FF"><circle cx="12" cy="12" r="11" strokeWidth="2"/><path d="M7 13l3 3 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
)
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#0A66C2"/>
    <path d="M11.75 13.5H9.5V22.5H11.75V13.5ZM10.625 12.5C11.25 12.5 11.75 12 11.75 11.375C11.75 10.75 11.25 10.25 10.625 10.25C10 10.25 9.5 10.75 9.5 11.375C9.5 12 10 12.5 10.625 12.5ZM22.5 17.25C22.5 15.125 21.25 14 19.5 14C18.5 14 17.75 14.5 17.5 15H17.5V13.5H15.25V22.5H17.5V17.75C17.5 16.75 18 16.25 18.75 16.25C19.5 16.25 20 16.75 20 17.75V22.5H22.25V17.25H22.5Z" fill="white"/>
  </svg>
)

export default function Home() {
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const targetElement = e.currentTarget as HTMLAnchorElement | null;
      if (!targetElement) return;
      const href = targetElement.getAttribute('href');
      if (href && href.startsWith('#')) {
        const section = document.querySelector(href);
        if (section) {
          e.preventDefault();
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleSmoothScroll));
    return () => {
      links.forEach(link => link.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setFormStatus(null);
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("https://formspree.io/f/xlgwlrwa", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const result = await response.json();
      if (response.ok && !result.error) {
        setFormStatus("success");
        e.currentTarget.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center text-center py-32 px-4 relative bg-gray-100" style={{letterSpacing: '-0.01em'}}>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 max-w-4xl leading-tight">Expert Braze Execution for High-Performance Teams</h1>
        <p className="text-xl text-gray-600 mb-4 max-w-2xl">Independent Braze consulting, flexible engagements, no long-term contracts.</p>
        <p className="text-base text-gray-500 mb-10">Trusted by enterprise and high-growth brands like McDonald's, Walmart, GoFundMe, HIMS, and more.</p>
        <Link href="#contact" className="inline-block px-8 py-4 rounded-full text-lg font-semibold bg-[#3EA8FF] text-white shadow hover:opacity-90 transition">Get in Touch</Link>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-28 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
              <div className="mb-4">{CampaignIcon()}</div>
              <h3 className="font-semibold text-lg mb-2">Braze Campaign Execution</h3>
              <p className="text-gray-600">End-to-end campaign setup, template creation, and launch for Braze.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
              <div className="mb-4">{TechIcon()}</div>
              <h3 className="font-semibold text-lg mb-2">Technical Support & QA</h3>
              <p className="text-gray-600">Technical audits, troubleshooting, and ongoing optimization for results.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
              <div className="mb-4">{EmailIcon()}</div>
              <h3 className="font-semibold text-lg mb-2">Email HTML Development</h3>
              <p className="text-gray-600">Responsive, cross-client compatible email templates that look great everywhere.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
              <div className="mb-4">{SupportIcon()}</div>
              <h3 className="font-semibold text-lg mb-2">Personalized Support</h3>
              <p className="text-gray-600">Direct, one-on-one consulting and fast communication for your team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent h-px"></div>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-28 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Pricing</h2>
          <p className="text-gray-600 text-center mb-12">Flexible 4-week engagements. Choose the level of support that fits your team.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Flex Service */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-10 flex flex-col gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Flex</h3>
                <div className="flex items-end justify-center gap-2 mb-4">
                  <span className="text-5xl font-extrabold">$4,000</span>
                  <span className="text-gray-400 text-lg mb-1">/ 4 Weeks</span>
                </div>
              </div>
              <div>
                <div className="font-semibold mb-2">What's Included:</div>
                <ul className="flex flex-col gap-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5">{CheckIcon()}</span>
                    <span><strong>Direct Slack Connect Support</strong> from a team of Braze Experts (~10 hrs/4-weeks)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5">{CheckIcon()}</span>
                    <span><strong>30-Minute Recurring Sync</strong>, every other week</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5">{CheckIcon()}</span>
                    <span>Up to <strong>10 hours of Asynchronous, Hands-On Braze Support</strong>, providing technical setup, execution, audit, QA, etc.</span>
                  </li>
                </ul>
                <div className="font-semibold mb-2">Perfect For:</div>
                <ul className="flex flex-col gap-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5">{CheckIcon()}</span>
                    <span>Ad-hoc support and quick issue resolution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5">{CheckIcon()}</span>
                    <span>Exploration and investigation of Braze capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5">{CheckIcon()}</span>
                    <span>Teams needing flexible, on-demand Braze expertise</span>
                  </li>
                </ul>
                <a href="#contact" className="block w-full mt-4 px-8 py-4 rounded-lg text-lg font-semibold bg-[#181A1B] text-white text-center shadow hover:opacity-90 transition">Check Availability</a>
              </div>
            </div>

            {/* Execution Service */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-10 flex flex-col gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Execution</h3>
                <div className="flex items-end justify-center gap-2 mb-4">
                  <span className="text-5xl font-extrabold">$8,000</span>
                  <span className="text-gray-400 text-lg mb-1">/ 4 Weeks</span>
                </div>
              </div>
              <div>
                <div className="font-semibold mb-2">What's Included:</div>
                <ul className="flex flex-col gap-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5">{CheckIcon()}</span>
                    <span><strong>Everything in Flex</strong>, plus:</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5">{CheckIcon()}</span>
                    <span><strong>Weekly 1-Hour Sync</strong> to align on goals and progress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5">{CheckIcon()}</span>
                    <span><strong>Up to 25 hours of hands-on, in-platform work</strong> for campaign and Canvas execution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5">{CheckIcon()}</span>
                    <span><strong>Campaign and Canvas build-out</strong> including audience segmentation, journey setup, and hands-on execution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5">{CheckIcon()}</span>
                    <span><strong>Performance review and optimization</strong> with detailed reporting and insights</span>
                  </li>
                </ul>
                <div className="font-semibold mb-2">Perfect For:</div>
                <ul className="flex flex-col gap-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5">{CheckIcon()}</span>
                    <span>Teams launching new campaigns or initiatives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5">{CheckIcon()}</span>
                    <span>Teams that need hands-on Braze build and execution support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5">{CheckIcon()}</span>
                    <span>Ongoing campaign management and optimization</span>
                  </li>
                </ul>
                <a href="#contact" className="block w-full mt-4 px-8 py-4 rounded-lg text-lg font-semibold bg-[#3EA8FF] text-white text-center shadow hover:opacity-90 transition">Check Availability</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent h-px"></div>

      {/* About Section */}
      <section id="about" className="w-full py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Personal Photo */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-black shadow-lg">
                <Image 
                  src="/personal-photo.jpeg" 
                  alt="Peyton Griffin" 
                  width={192} 
                  height={192} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Personal Story */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Hello! I'm <strong>Peyton Griffin</strong>, a 12x Braze certified consultant with over 5 years of experience. I spent 4+ years at Braze, starting in Technical Support where I supported hundreds of Braze customers globally, then moving into Premium Support, where I acted as a dedicated technical lead for enterprise customers like <strong>McDonald's (Global), Walmart, DoorDash, DraftKings, Yum Brands, Dutch Bros, and more</strong>. I later became Team Lead for the Support Engagement team, managing white-glove support for Braze's largest global accounts and working with product and engineering on escalations, integrations, and platform optimization.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today I work as an embedded Braze consultant and am a founding member of For Now Marketing. I'm more execution-focused than strategy: I help teams bring their strategies to life: campaign and Canvas execution, Figma-to-HTML email builds, and QA across channels. I work with brands like GoFundMe, HIMS, Route, Maven Clinic, and other high-growth and enterprise companies. I also take on a limited number of direct consulting engagements for teams that need extra Braze expertise.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  If you'd like to connect, feel free to reach out here or DM me on LinkedIn. I'd love the chance to work with you!
                </p>
              </div>
              
              {/* Bio CTAs: LinkedIn + Resume */}
              <div className="pt-4 flex flex-wrap gap-4">
                <a 
                  href="https://www.linkedin.com/in/peyton-griffin/details/experience/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-[#3EA8FF] text-white rounded-lg font-semibold hover:opacity-90 transition-colors"
                >
                  <span>Connect with me</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10"/>
                    <path d="M7 17 17 7"/>
                  </svg>
                </a>
                <a 
                  href="/resume.pdf" 
                  download
                  className="inline-flex items-center gap-3 px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors"
                >
                  <span>Download resume</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent h-px"></div>

      {/* Contact Section */}
      <section id="contact" className="w-full py-28 px-4 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
          <form onSubmit={handleContactSubmit} className="flex flex-col gap-6 bg-white p-10 rounded-xl shadow-sm border border-gray-100">
            <input type="text" name="name" placeholder="Name" className={`px-4 py-3 rounded border border-gray-200 focus:border-[${ACCENT}] outline-none text-base`} required />
            <input type="email" name="email" placeholder="Email" className={`px-4 py-3 rounded border border-gray-200 focus:border-[${ACCENT}] outline-none text-base`} required />
            <input type="text" name="company" placeholder="Company (optional)" className={`px-4 py-3 rounded border border-gray-200 focus:border-[${ACCENT}] outline-none text-base`} />
            <select name="interested_in" className={`px-4 py-3 rounded border border-gray-200 focus:border-[${ACCENT}] outline-none text-base bg-white text-gray-700`}>
              <option value="">Interested in... (optional)</option>
              <option value="Flex">Flex, ad-hoc support</option>
              <option value="Execution">Execution, full engagement</option>
              <option value="Exploring">Just exploring</option>
            </select>
            <textarea name="message" placeholder="Message" rows={5} className={`px-4 py-3 rounded border border-gray-200 focus:border-[${ACCENT}] outline-none text-base resize-none`} required />
            <button type="submit" className="mt-2 px-8 py-3 rounded-full bg-[#3EA8FF] text-white font-semibold text-lg shadow hover:opacity-90 transition" disabled={submitting}>{submitting ? "Sending..." : "Send Message"}</button>
          </form>
          {formStatus === "success" && (
            <div className="mt-4 text-green-600 text-center font-semibold">Thank you! Your message has been sent.</div>
          )}
          {formStatus === "error" && (
            <div className="mt-4 text-red-600 text-center font-semibold">Oops! Something went wrong. Please try again.</div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 px-4 border-t border-gray-100 bg-white mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} Venture X. All rights reserved.</div>
          <nav className="flex gap-6 text-sm text-gray-500">
            <Link href="/" className={`hover:text-[${ACCENT}]`}>Home</Link>
            <Link href="/#services" className={`hover:text-[${ACCENT}]`}>Services</Link>
            <Link href="/#pricing" className={`hover:text-[${ACCENT}]`}>Pricing</Link>
            <Link href="/blog" className={`hover:text-[${ACCENT}]`}>Blog</Link>
            <Link href="/#about" className={`hover:text-[${ACCENT}]`}>About</Link>
            <Link href="/#contact" className={`hover:text-[${ACCENT}]`}>Contact</Link>
          </nav>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/peyton-griffin/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80">{LinkedInIcon()}</a>
          </div>
        </div>
      </footer>
    </div>
  )
}