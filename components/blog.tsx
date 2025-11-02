import Link from "next/link"

export function Blog() {
  const posts = [
    {
      title: "Scale Revenue Without Scaling Ad Spend",
      excerpt: "A practical CRO playbook for Shopify stores to unlock 20-40% more revenue from existing traffic.",
      href: "/blog/scale-with-cro",
      badge: "CRO Playbook",
    },
    {
      title: "26 Psychology Principles Applied to E‑commerce",
      excerpt: "26 evidence-backed patterns you can deploy across PDP, cart, and checkout.",
      href: "/blog/26-principles-ecommerce",
      badge: "Behavioral Science",
    },
    {
      title: "10 A/B Tests That Consistently Win",
      excerpt: "From trust heuristics to checkout clarity—tests you can run this month to lift conversion rate.",
      href: "/blog",
      badge: "Testing",
    },
    {
      title: "Fix the Leaks in Your Funnel",
      excerpt: "How to diagnose drop-offs across PDP, cart, and checkout—and apply surgical improvements.",
      href: "/blog",
      badge: "Funnels",
    },
  ]

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-medium text-balance mb-3">From our blog</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proven CRO insights, experiments, and frameworks for Shopify stores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group rounded-xl border border-border bg-card/60 hover:bg-card transition-all duration-200 overflow-hidden"
            >
              <div className="aspect-[16/9] bg-secondary/40" aria-hidden="true">
                <img
                  src={`/.jpg?height=360&width=640&query=${encodeURIComponent(post.title)}`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="text-xs uppercase tracking-wide text-muted-foreground">{post.badge}</div>
                <h3 className="text-xl font-medium leading-snug group-hover:text-primary transition-colors">
                  <Link href={post.href}>{post.title}</Link>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                <div>
                  <Link
                    href={post.href}
                    className="text-primary hover:underline inline-flex items-center gap-1 text-sm"
                  >
                    Read article →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
