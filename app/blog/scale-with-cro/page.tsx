import Link from "next/link"

export default function SampleBlogPage() {
  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <article className="container mx-auto prose prose-neutral max-w-3xl prose-headings:font-medium">
        <p className="text-xs text-muted-foreground mb-3">CRO Playbook</p>
        <h1 className="text-balance leading-tight font-light">Scale revenue without scaling ad spend</h1>
        <p className="lead !text-base text-muted-foreground">
          How to unlock 20–40% more revenue by optimizing what happens after the click—no new campaigns required.
        </p>

        <hr />

        <h2>1) Fix the first impression</h2>
        <p>
          Above-the-fold clarity wins. Make value proposition, primary outcome, and proof obvious in 3 seconds. Remove
          distractions, compress hero copy, and make the CTA unmissable.
        </p>

        <h2>2) Reduce friction across the funnel</h2>
        <ul>
          <li>Product discovery: filters, search, and ranking tuned to shopper intent.</li>
          <li>PDP clarity: hierarchy, options, shipping/returns, and trust signals.</li>
          <li>Cart review: incentives, reassurance, and clear next steps.</li>
          <li>Checkout: fewer fields, fewer errors, fewer surprises.</li>
        </ul>

        <h2>3) Prove it continuously</h2>
        <p>
          Build compounding wins with A/B tests: start with high-traffic, high-impact templates (HP, PLP, PDP, cart,
          checkout), then iterate fast with a tight learn-measure-deploy loop.
        </p>

        <blockquote>“What gets measured gets improved.” — focus on lift per week, not perfect experiments.</blockquote>

        <h2>Example results</h2>
        <ul>
          <li>+28% checkout completion after streamlining address and payment steps</li>
          <li>+17% PDP add-to-cart with clearer sizing and shipping info</li>
          <li>+11% AOV with smart bundles and progressive incentives</li>
        </ul>

        <hr />

        <p className="text-sm text-muted-foreground">
          Want tailored recommendations for your store?{" "}
          <Link href="/cro-tool" className="text-primary hover:underline">
            Try the free CRO tool
          </Link>
          .
        </p>
      </article>
    </main>
  )
}
