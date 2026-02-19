import Link from "next/link"
import { notFound } from "next/navigation"
import { getPostBySlug, getAllSlugs } from "@/lib/posts"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return { title: "Post Not Found | Venture X Blog" }
  }

  return {
    title: `${post.title} | Venture X Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-16">
      <article className="max-w-3xl mx-auto px-4 py-16">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-[#3EA8FF] hover:underline mb-8"
        >
          <svg width="16" height="16" className="mr-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Blog
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-600">{post.date}</div>
        </header>

        <div className="prose prose-lg max-w-none">
          {post.body.map((paragraph, index) => (
            <p key={index} className="mb-6 leading-relaxed text-gray-700">
              {paragraph}
            </p>
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link 
              href="/blog"
              className="text-[#3EA8FF] font-medium hover:underline"
            >
              ← Back to Blog
            </Link>
            <Link 
              href="/#contact"
              className="px-6 py-2 bg-[#3EA8FF] text-white rounded-lg font-medium hover:opacity-90 transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </footer>
      </article>
    </main>
  )
}