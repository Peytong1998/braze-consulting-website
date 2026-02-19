import Link from "next/link"
import { posts } from "@/lib/posts"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Venture X",
}

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-gray-600">
            Braze tips, lifecycle strategy, and when it helps to bring in a consultant.
          </p>
        </header>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
              <div className="text-sm text-gray-500 mb-2">{post.date}</div>
              <h2 className="text-xl font-semibold mb-3">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-[#3EA8FF] transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-[#3EA8FF] font-medium hover:underline"
              >
                Read more
                <svg width="16" height="16" className="ml-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </article>
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Venture X. All rights reserved.
            </div>
            <nav className="flex gap-6 text-sm">
              <Link href="/" className="text-gray-600 hover:text-[#3EA8FF]">Home</Link>
              <Link href="/#services" className="text-gray-600 hover:text-[#3EA8FF]">Services</Link>
              <Link href="/#pricing" className="text-gray-600 hover:text-[#3EA8FF]">Pricing</Link>
              <Link href="/#about" className="text-gray-600 hover:text-[#3EA8FF]">About</Link>
              <Link href="/#contact" className="text-gray-600 hover:text-[#3EA8FF]">Contact</Link>
            </nav>
          </div>
        </footer>
      </div>
    </main>
  )
}