'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"

const ACCENT = "#3EA8FF"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <header className="w-full py-6 px-8 flex items-center justify-between border-b border-gray-100 bg-white">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/VX.png" alt="Venture X Logo" width={36} height={36} className="rounded" />
        <span className="font-bold text-2xl tracking-tight">Venture X</span>
      </Link>
      <nav className="hidden md:flex gap-8 text-base font-medium">
        <Link href="/" className={`hover:text-[${ACCENT}] transition-colors`}>Home</Link>
        <Link href={isHome ? "#services" : "/#services"} className={`hover:text-[${ACCENT}] transition-colors`}>Services</Link>
        <Link href={isHome ? "#pricing" : "/#pricing"} className={`hover:text-[${ACCENT}] transition-colors`}>Pricing</Link>
        <Link href="/blog" className={`hover:text-[${ACCENT}] transition-colors`}>Blog</Link>
        <Link href={isHome ? "#about" : "/#about"} className={`hover:text-[${ACCENT}] transition-colors`}>About</Link>
        <Link href={isHome ? "#contact" : "/#contact"} className={`hover:text-[${ACCENT}] transition-colors`}>Contact</Link>
      </nav>
      <button
        className={`md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-[${ACCENT}] z-50`}
        aria-label="Open menu"
        onClick={() => setMenuOpen(true)}
      >
        <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
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
            <Link href="/" onClick={() => setMenuOpen(false)} className={`hover:text-[${ACCENT}] transition-colors`}>Home</Link>
            <Link href={isHome ? "#services" : "/#services"} onClick={() => setMenuOpen(false)} className={`hover:text-[${ACCENT}] transition-colors`}>Services</Link>
            <Link href={isHome ? "#pricing" : "/#pricing"} onClick={() => setMenuOpen(false)} className={`hover:text-[${ACCENT}] transition-colors`}>Pricing</Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)} className={`hover:text-[${ACCENT}] transition-colors`}>Blog</Link>
            <Link href={isHome ? "#about" : "/#about"} onClick={() => setMenuOpen(false)} className={`hover:text-[${ACCENT}] transition-colors`}>About</Link>
            <Link href={isHome ? "#contact" : "/#contact"} onClick={() => setMenuOpen(false)} className={`hover:text-[${ACCENT}] transition-colors`}>Contact</Link>
          </nav>
        </>
      )}
    </header>
  )
}