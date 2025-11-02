import Link from "next/link"

const posts = [
  {
    slug: "scale-with-cro",
    title: "Scale Revenue Without Scaling Ad Spend",
    excerpt: "A practical CRO playbook for Shopify stores to unlock 20-40% more revenue from existing traffic.",
    badge: "CRO Playbook",
  },
  {
    slug: "26-principles-ecommerce",
    title: "26 Psychology Principles Applied to E‑commerce",
    excerpt:
      "A field guide to applying behavioral science—26 principles with practical playbooks for product pages, cart, and checkout.",
    badge: "Behavioral Science",
  },
]

export default function BlogIndexPage() {
  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-light text-balance">Insights to grow without more ad spend</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Essays and experiments from our CRO team.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((p) => (
            <article
              key={p.slug}
              className="rounded-xl border border-border bg-card/60 hover:bg-card transition-all duration-200 overflow-hidden"
            >
              <div className="aspect-[16/9] bg-secondary/40" aria-hidden="true">
                <img
                  src={`/.jpg?height=360&width=640&query=${encodeURIComponent(p.title)}`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="text-xs uppercase tracking-wide text-muted-foreground">{p.badge}</div>
                <h2 className="text-2xl font-medium leading-snug">
                  <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                </h2>
                <p className="text-sm text-muted-foreground">{p.excerpt}</p>
                <Link href={`/blog/${p.slug}`} className="text-primary hover:underline text-sm">
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
