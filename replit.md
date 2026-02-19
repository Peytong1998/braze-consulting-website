# Venture X - Braze Consulting Website

## Overview
A Next.js website for Venture X, an independent Braze consulting service. The site showcases services, pricing, blog posts, and contact information for enterprise and high-growth brands.

## Tech Stack
- **Framework**: Next.js 15.5.12 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with PostCSS
- **Font**: Inter (Google Fonts)
- **React**: v19

## Project Structure
- `app/` - Next.js App Router pages and layouts
  - `page.tsx` - Homepage
  - `layout.tsx` - Root layout with Header
  - `globals.css` - Global styles
  - `blog/` - Blog section
- `components/` - Reusable React components
  - `Header.tsx` - Site navigation header
- `lib/` - Utility functions
  - `posts.ts` - Blog post data/helpers
- `public/` - Static assets (images, PDF resume, SVGs)

## Development
- Dev server runs on port 5000 (`npm run dev`)
- Production build: `npm run build`
- Production start: `npm run start` (port 5000)

## Deployment
- Configured for autoscale deployment
- Build: `npm run build`
- Run: `npm run start`
