export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  body: string[]
}

export const posts: Post[] = [
  {
    slug: "when-to-hire-a-braze-consultant",
    title: "When to Hire a Braze Consultant",
    date: "2026-02-01",
    excerpt: "Not every team needs a full-time Braze expert. Here's how to decide when to bring in an independent consultant vs. when to build in-house.",
    body: [
      "You've invested in Braze and you're committed to making it work. But your team is stretched thin, your roadmap is packed, or you're not sure how to get from \"we have Braze\" to \"we're running sophisticated lifecycle programs.\" Sound familiar?",
      "An independent Braze consultant can fill the gap without the cost of a full-time hire. The right time to bring one in is usually when you need focused expertise for a defined period: a big launch, an audit, a migration, or a push to mature your messaging and automation.",
      "Consider hiring a consultant when: you're launching a major campaign or Canvas and want it built and QA'd by someone who's done it hundreds of times; your team is small and could use a few weeks of hands-on support to level up; you need an objective audit of your setup, segmentation, or message logic; or you're exploring Braze and want to validate use cases before committing more resources.",
      "You might not need one if you already have a strong in-house Braze owner with bandwidth, or if your needs are mostly one-off questions that Braze Support or documentation can handle. The sweet spot is \"we have clear goals and some capacity, but we need an expert to execute or unblock us.\"",
      "If that's where you are, a flexible engagement (like Flex or Execution) lets you get that expertise without a long-term commitment. You get Braze execution and strategy from someone who's supported enterprise brands at scale—and you keep control of your roadmap and team.",
    ],
  },
  {
    slug: "getting-more-from-braze-canvas",
    title: "Getting More from Braze Canvas",
    date: "2026-01-15",
    excerpt: "Canvas is one of Braze's most powerful tools. A few practical tips to structure flows, improve performance, and avoid common pitfalls.",
    body: [
      "Braze Canvas is built for lifecycle messaging: welcome series, re-engagement, post-purchase flows, and everything in between. But \"set it and forget it\" often leads to underused or messy flows. Here's how to get more out of it.",
      "Start with a clear goal and a simple journey map. Who's in this flow? What's the trigger? What's the next best action at each step? Naming conventions and a lightweight doc (even a spreadsheet) for your Canvases will save you and your team hours when you're debugging or optimizing later.",
      "Use entry rules and filters deliberately. Avoid sending the same message to people who are in different lifecycle stages. Segment at entry and use step filters so each message is relevant. That usually means better engagement and fewer unsubscribes.",
      "Plan for experimentation. A/B test message copy, send time, or step logic where it matters. Even one or two tests per Canvas can give you data to improve conversion or retention over time.",
      "Finally, keep an eye on performance and fallout. Use Canvas analytics to see where people drop off, and combine that with your product or CRM data when you can. Iterating on the steps that underperform is where many teams see the biggest gains. If you'd like help designing, building, or auditing your Canvases, get in touch—I work with teams on exactly this.",
    ],
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug)
}