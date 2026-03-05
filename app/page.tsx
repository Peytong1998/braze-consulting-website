'use client'
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import CalendlyWidget from "@/components/calendly-widget"
import { config } from "@/lib/config"

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

const FAQAccordion = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqData = [
    {
      question: "What is Braze and why do I need a consultant?",
      answer: "Braze is a customer engagement platform that enables sophisticated email automation, push notifications, and cross-channel messaging. A Braze consultant helps you maximize the platform's potential by implementing complex email templates, building automated campaigns, and optimizing your customer lifecycle marketing. As a former Braze Premium Support team member, I bring deep technical expertise to help enterprise teams execute campaigns efficiently."
    },
    {
      question: "How long does a typical Braze implementation take?",
      answer: "Braze implementations vary based on complexity. Simple email template builds can take 1-2 weeks, while comprehensive communication architectures like Maven Clinic's reimbursement system take 4-8 weeks. My enterprise clients typically see initial results within the first month, with full optimization achieved by month 2-3. The key is starting with clear requirements and proper data architecture planning."
    },
    {
      question: "What makes your Braze consulting different?",
      answer: "I'm a 12x Braze certified expert and former Braze Premium Support team member with direct experience supporting enterprise clients like McDonald's worldwide. This means I understand both the technical depth and business requirements needed for successful implementations. My work with high-growth companies like Maven Clinic ($1.7B) and Route ($1.4B) demonstrates proven ability to handle complex, high-scale email systems. I also build tools like BrazeSmith to advance the entire Braze ecosystem."
    },
    {
      question: "Can you help with email personalization and dynamic content?",
      answer: "Yes, email personalization is one of my core specialties. I've built sophisticated systems like Route's merchant-specific branding that dynamically adapts emails for different companies, and Maven's reimbursement templates that display different content based on member status. Using Braze's liquid templating and connected content features, I can create highly personalized email experiences that feel custom-built for each recipient."
    },
    {
      question: "Do you work with small businesses or only enterprise clients?",
      answer: "While my case studies feature large enterprise clients, I offer flexible engagement models including my \"Flex\" package designed for growing teams. Whether you're a startup scaling your email program or an enterprise optimizing complex workflows, I can provide the right level of Braze expertise. My goal is helping any team unlock Braze's potential for better customer engagement and operational efficiency."
    },
    {
      question: "How do you measure success in Braze consulting projects?",
      answer: "Success metrics depend on your goals, but common KPIs include reduced support ticket volume (like Maven's 33% reduction), increased email engagement rates, faster campaign launch times, and improved operational efficiency. For enterprise clients, I also measure success through system scalability - like Route's email series reaching 50M+ people while maintaining performance. Every project includes clear success criteria established upfront."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqData.map((item, index) => (
        <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900 pr-8">{item.question}</span>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                openItem === index ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openItem === index && (
            <div className="px-6 pb-5">
              <div className="border-t border-gray-100 pt-4">
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const targetElement = e.currentTarget as HTMLAnchorElement | null;
      if (!targetElement) return;
      const href = targetElement.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const section = document.querySelector(href);
        if (section) {
          e.preventDefault();
          section.scrollIntoView({ behavior: 'smooth' });
          setMenuOpen(false); // close menu on mobile after click
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
    formData.set("access_key", config.contact.web3formsKey);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
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
      {/* Header */}
      <header className="w-full py-6 px-8 flex items-center justify-between border-b border-gray-100 bg-white">
        <div className="flex items-center gap-3">
          <Image src="/VX.png" alt="Venture X Logo" width={36} height={36} className="rounded" />
          <span className="font-bold text-2xl tracking-tight">Venture X</span>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-base font-medium">
          <Link href="#" className={`hover:text-[${ACCENT}] transition-colors`}>Home</Link>
          <Link href="#services" className={`hover:text-[${ACCENT}] transition-colors`}>Services</Link>
          <Link href="/case-studies" className={`hover:text-[${ACCENT}] transition-colors`}>Case Studies</Link>
          <Link href="#about" className={`hover:text-[${ACCENT}] transition-colors`}>About</Link>
          <Link href="#faq" className={`hover:text-[${ACCENT}] transition-colors`}>FAQ</Link>
          <Link href="#contact" className={`hover:text-[${ACCENT}] transition-colors`}>Contact</Link>
        </nav>
        {/* Hamburger Icon for Mobile */}
        <button
          className={`md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-[${ACCENT}] z-50`}
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Menu Overlay and Drawer */}
        {menuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            {/* Drawer */}
            <nav
              className="fixed top-0 right-0 z-50 w-64 h-full bg-white shadow-lg flex flex-col gap-8 text-lg font-medium p-10 transition-transform duration-200 md:hidden"
              style={{ transform: menuOpen ? 'translateX(0)' : 'translateX(100%)' }}
              aria-label="Mobile menu"
            >
              <button
                className="self-end mb-8 text-3xl font-bold text-gray-400 hover:text-black focus:outline-none"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                &times;
              </button>
              <Link href="#" onClick={() => setMenuOpen(false)} className={`hover:text-[${ACCENT}] transition-colors`}>Home</Link>
              <Link href="#services" onClick={() => setMenuOpen(false)} className={`hover:text-[${ACCENT}] transition-colors`}>Services</Link>
              <Link href="/case-studies" onClick={() => setMenuOpen(false)} className={`hover:text-[${ACCENT}] transition-colors`}>Case Studies</Link>
              <Link href="#about" onClick={() => setMenuOpen(false)} className={`hover:text-[${ACCENT}] transition-colors`}>About</Link>
              <Link href="#faq" onClick={() => setMenuOpen(false)} className={`hover:text-[${ACCENT}] transition-colors`}>FAQ</Link>
              <Link href="#contact" onClick={() => setMenuOpen(false)} className={`hover:text-[${ACCENT}] transition-colors`}>Contact</Link>
            </nav>
          </>
        )}
      </header>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center text-center py-24 md:py-32 px-4 relative bg-white" style={{letterSpacing: '-0.01em'}}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Expert Braze Execution for High-Performance Teams
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Former Braze Premium Support specialist and 12x Braze certified expert delivering enterprise-scale email automation 
            for leading companies like Maven Clinic and Route.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="#contact" 
              className="inline-block px-8 py-4 rounded-lg text-lg font-semibold bg-[#3EA8FF] text-white shadow-sm hover:shadow-md hover:opacity-90 transition-all"
            >
              Start Your Project
            </Link>
            <Link 
              href="/case-studies" 
              className="inline-block px-8 py-4 rounded-lg text-lg font-semibold text-gray-700 border border-gray-300 hover:bg-gray-50 transition-all"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">How I Help Teams Execute with Braze</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              As a 12x Braze certified expert, I provide the hands-on execution your team needs for complex email automation and enterprise-scale implementations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">{CampaignIcon()}</div>
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Campaign Execution</h3>
              <p className="text-gray-600 text-sm leading-relaxed">End-to-end campaign setup, template creation, and launch with proven enterprise methodologies.</p>
            </div>
            <div className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">{TechIcon()}</div>
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Technical Implementation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Advanced liquid logic, API integrations, and technical audits for optimal performance.</p>
            </div>
            <div className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">{EmailIcon()}</div>
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Email Development</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Responsive, cross-client compatible HTML templates with dynamic personalization.</p>
            </div>
            <div className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">{SupportIcon()}</div>
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Technical Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Direct technical consulting with Slack Connect access and hands-on implementation support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent h-px"></div>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Flexible Engagement Options</h2>
            <p className="text-lg text-gray-600">Choose the level of support that fits your team's needs</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Flex Service */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 hover:border-blue-200 transition-colors">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-gray-600">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Flex</h3>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-4xl font-bold text-gray-900">$4,000</span>
                  <span className="text-gray-500 text-lg">/ 4 weeks</span>
                </div>
                <p className="text-gray-600">Perfect for ongoing support and quick issue resolution</p>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-4 text-gray-900">What's Included</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5">{CheckIcon()}</span>
                      <span className="text-gray-700"><strong>Direct Slack Connect Support</strong> from Braze expert (~10 hrs/4-weeks)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5">{CheckIcon()}</span>
                      <span className="text-gray-700"><strong>Bi-weekly 30-minute syncs</strong> to align on priorities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5">{CheckIcon()}</span>
                      <span className="text-gray-700"><strong>Up to 10 hours hands-on support</strong> for technical setup, execution, and QA</span>
                    </li>
                  </ul>
                </div>
                <a href="#contact" className="block w-full px-6 py-3 rounded-lg text-center font-semibold bg-gray-900 text-white hover:bg-gray-800 transition-colors">Check Availability</a>
              </div>
            </div>

            {/* Execution Service */}
            <div className="bg-white rounded-2xl border-2 border-blue-200 p-8 relative hover:border-blue-300 transition-colors">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-blue-600">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Execution</h3>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-4xl font-bold text-gray-900">$7,000</span>
                  <span className="text-gray-500 text-lg">/ 4 weeks</span>
                </div>
                <p className="text-gray-600">Complete campaign execution with technical guidance</p>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-4 text-gray-900">Everything in Flex, plus</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5">{CheckIcon()}</span>
                      <span className="text-gray-700"><strong>Weekly 1-hour execution syncs</strong> to align on goals and progress</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5">{CheckIcon()}</span>
                      <span className="text-gray-700"><strong>Up to 25 hours hands-on support</strong> for comprehensive campaign execution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5">{CheckIcon()}</span>
                      <span className="text-gray-700"><strong>Campaign setup & execution</strong> with audience segmentation and journey implementation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5">{CheckIcon()}</span>
                      <span className="text-gray-700"><strong>Performance analysis & optimization</strong> with detailed reporting and insights</span>
                    </li>
                  </ul>
                </div>
                <a href="#contact" className="block w-full px-6 py-3 rounded-lg text-center font-semibold bg-[#3EA8FF] text-white hover:bg-blue-600 transition-colors">Check Availability</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent h-px"></div>

      {/* About Section */}
      <section id="about" className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">About Me</h2>
            <p className="text-lg text-gray-600">Former Braze Premium Support specialist turned independent consultant</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Personal Photo */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/personal-photo.jpeg" 
                  alt="Peyton Griffin" 
                  width={256} 
                  height={256} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Personal Story */}
            <div className="lg:col-span-3 space-y-6">
              <div className="space-y-5">
                <p className="text-gray-700 leading-relaxed">
                  Hello! I'm <strong>Peyton Griffin</strong>, a Braze expert with over 5 years of platform experience. During my 4.5 years at Braze, I progressed from Technical Support to Premium Support (working directly with McDonald's worldwide strategy) to Team Lead, guiding Braze's largest global enterprise customers through complex implementations.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  For the past year, I've been working as an independent Braze consultant and founding member of For Now Marketing. I help enterprise companies like Maven Clinic ($1.7B) and Route ($1.4B) build sophisticated email automation systems that reach millions of users.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  My passion and skillset center around Braze—I'm <strong>12x Braze certified</strong> and enjoy helping marketing teams leverage Braze's full potential.
                </p>
              </div>
              
              {/* LinkedIn Button */}
              <div className="pt-2">
                <a 
                  href="https://www.linkedin.com/in/peyton-griffin/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-lg font-medium hover:bg-[#004182] transition-colors"
                >
                  {LinkedInIcon()}
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent h-px"></div>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about working with a Braze expert</p>
          </div>
          
          <FAQAccordion />
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent h-px"></div>

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600">Let's discuss your Braze needs and how I can help your team succeed</p>
          </div>
          
          {/* Contact Form - Full Width */}
          <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Send us a message</h3>
            <form onSubmit={handleContactSubmit} className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input type="text" name="name" placeholder="Name" className={`px-4 py-3 rounded border border-gray-200 focus:border-[${ACCENT}] outline-none text-base`} required />
                <input type="email" name="email" placeholder="Email" className={`px-4 py-3 rounded border border-gray-200 focus:border-[${ACCENT}] outline-none text-base`} required />
              </div>
              <textarea name="message" placeholder="Message" rows={4} className={`w-full px-4 py-3 rounded border border-gray-200 focus:border-[${ACCENT}] outline-none text-base resize-none mb-6`} required />
              <div className="text-center">
                <button type="submit" className="px-8 py-3 rounded-full bg-[#3EA8FF] text-white font-semibold text-lg shadow hover:opacity-90 transition" disabled={submitting}>
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </div>
              <input type="hidden" name="access_key" value={config.contact.web3formsKey} />
              {/* Honeypot field for spam protection */}
              <input type="text" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
            </form>
            {formStatus === "success" && (
              <div className="mt-4 text-green-600 text-center font-semibold">Thank you! Your message has been sent.</div>
            )}
            {formStatus === "error" && (
              <div className="mt-4 text-red-600 text-center font-semibold">Oops! Something went wrong. Please try again.</div>
            )}
          </div>

          {/* Calendly Section - Full Width */}
          <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Schedule a consultation</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Book a time that works for you to discuss your Braze needs. Choose from available 30-minute consultation slots below.</p>
              <a 
                href={config.calendly.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#3EA8FF] text-white rounded-lg font-semibold hover:opacity-90 transition-colors shadow-sm"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 2v4"/>
                  <path d="M16 2v4"/>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <path d="M3 10h18"/>
                </svg>
                Open Calendar in New Tab
              </a>
            </div>
            
            {/* Calendly Inline Widget */}
            <div className="border-t border-gray-100 pt-8">
              <CalendlyWidget 
                url={config.calendly.url}
                style={{ minHeight: '700px', height: '700px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-4 border-t border-gray-100 bg-gray-50 mt-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Image src="/VX.png" alt="Venture X Logo" width={32} height={32} className="rounded" />
              <span className="font-bold text-xl text-gray-900">Venture X</span>
            </div>
            <nav className="flex gap-8 text-sm text-gray-600">
              <Link href="#" className={`hover:text-[${ACCENT}] transition-colors`}>Home</Link>
              <Link href="#services" className={`hover:text-[${ACCENT}] transition-colors`}>Services</Link>
              <Link href="/case-studies" className={`hover:text-[${ACCENT}] transition-colors`}>Case Studies</Link>
              <Link href="#about" className={`hover:text-[${ACCENT}] transition-colors`}>About</Link>
              <Link href="#faq" className={`hover:text-[${ACCENT}] transition-colors`}>FAQ</Link>
              <Link href="#contact" className={`hover:text-[${ACCENT}] transition-colors`}>Contact</Link>
            </nav>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/peyton-griffin/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn" 
                className="hover:opacity-80 transition-opacity"
              >
                {LinkedInIcon()}
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Venture X Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
