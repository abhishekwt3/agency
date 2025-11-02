import Link from "next/link"

export default function PrinciplesEcommercePage() {
  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <article className="container mx-auto prose prose-neutral max-w-3xl prose-headings:font-medium">
        <p className="text-xs text-muted-foreground mb-3">Behavioral Science</p>
        <h1 className="text-balance leading-tight font-light">26 Psychology Principles Applied to E‑commerce</h1>
        <p className="lead !text-base text-muted-foreground">
          A practical field guide for applying behavioral science across your storefront—from product discovery to
          checkout—so more visitors become customers without increasing ad spend.
        </p>

        <hr />

        <h2>1) Scarcity and Urgency</h2>
        <p>
          <strong>What it is:</strong> People act faster when availability or time is limited.
        </p>
        <ul>
          <li>Low-stock and limited-time messaging on PDP and cart.</li>
          <li>Countdowns for shipping cutoffs (“Order in 02:14:33 for same-day dispatch”).</li>
          <li>Limited-quantity drops or waitlists for high-demand items.</li>
        </ul>

        <h2>2) Social Proof</h2>
        <p>
          <strong>What it is:</strong> Decisions are influenced by others’ actions and endorsements.
        </p>
        <ul>
          <li>High-quality reviews with images, Q&A, and verified badges.</li>
          <li>“X people bought this today” or live sales tickers (use judiciously).</li>
          <li>Press logos and expert endorsements above the fold.</li>
        </ul>

        <h2>3) Visual Hierarchy</h2>
        <p>
          <strong>What it is:</strong> Design guides attention and comprehension.
        </p>
        <ul>
          <li>Clear, scannable PDP: title → price → benefits → CTA → reassurance.</li>
          <li>Primary CTA distinct; secondary actions visually subordinate.</li>
          <li>Consistent spacing and typographic rhythm for quick reading.</li>
        </ul>

        <h2>4) Color Psychology</h2>
        <p>
          <strong>What it is:</strong> Colors influence emotion and prioritization.
        </p>
        <ul>
          <li>Use brand primary for purchase CTAs; keep palette minimal and consistent.</li>
          <li>Warning and success states use accessible contrasts.</li>
          <li>Avoid color as sole informational cue—pair with text/icons.</li>
        </ul>

        <h2>5) Whitespace</h2>
        <p>
          <strong>What it is:</strong> Space improves comprehension and perceived quality.
        </p>
        <ul>
          <li>Generous spacing around benefits and guarantees.</li>
          <li>Decompress checkout; group fields logically with breathing room.</li>
          <li>Short paragraphs and lists instead of walls of text.</li>
        </ul>

        <h2>6) Consistency</h2>
        <p>
          <strong>What it is:</strong> Familiar patterns reduce cognitive load.
        </p>
        <ul>
          <li>Reusable component styles for buttons, badges, and cards.</li>
          <li>Consistent sizing, spacing, and states across templates.</li>
          <li>Navigation, filters, and forms behave the same everywhere.</li>
        </ul>

        <h2>7) Reciprocity</h2>
        <p>
          <strong>What it is:</strong> People return value when they receive value.
        </p>
        <ul>
          <li>Value-first lead magnets: sizing guides, bundles, quiz personalization.</li>
          <li>Free shipping thresholds or first-order bonuses after engagement.</li>
          <li>Useful post-purchase content that encourages repeat buys.</li>
        </ul>

        <h2>8) FOMO (Fear of Missing Out)</h2>
        <p>
          <strong>What it is:</strong> Loss of a potential gain motivates action.
        </p>
        <ul>
          <li>Limited-time bundles and seasonal collections with clear end dates.</li>
          <li>Notify-me and waitlist flows for restocks.</li>
          <li>“Only 2 left in your size” tied to actual inventory.</li>
        </ul>

        <h2>9) Authority</h2>
        <p>
          <strong>What it is:</strong> Expert validation increases trust.
        </p>
        <ul>
          <li>Credentials, certifications, clinical testing, awards.</li>
          <li>Founder story and craftsmanship to signal domain expertise.</li>
          <li>Use real names, photos, and third-party validation where possible.</li>
        </ul>

        <h2>10) Emotional Triggers</h2>
        <p>
          <strong>What it is:</strong> Emotions drive buying more than logic.
        </p>
        <ul>
          <li>Lead with outcomes: “sleep better,” “glow,” “save time.”</li>
          <li>Use storytelling visuals that show the after state.</li>
          <li>Support emotion with specifics (proof, specs, policies).</li>
        </ul>

        <h2>11) Consistency and Commitment</h2>
        <p>
          <strong>What it is:</strong> Small commitments increase likelihood of larger ones.
        </p>
        <ul>
          <li>Low-friction quiz or sample → personalized bundle.</li>
          <li>Save cart/size to encourage return and completion.</li>
          <li>“Remind me later” nudges rather than hard closes.</li>
        </ul>

        <h2>12) Loss Aversion</h2>
        <p>
          <strong>What it is:</strong> Losses feel worse than equivalent gains feel good.
        </p>
        <ul>
          <li>“Don’t miss free shipping—add $12 more.”</li>
          <li>“Lock in launch pricing—price increases in 48h.”</li>
          <li>Show what’s forfeited by not buying (warranty, perks).</li>
        </ul>

        <h2>13) Simplicity</h2>
        <p>
          <strong>What it is:</strong> Fewer choices and clearer paths increase conversions.
        </p>
        <ul>
          <li>One primary CTA per screen; reduce field count in forms.</li>
          <li>Collapse dense specs; reveal on demand.</li>
          <li>Summaries and defaults that remove thinking.</li>
        </ul>

        <h2>14) Zeigarnik Effect</h2>
        <p>
          <strong>What it is:</strong> People want to complete unfinished tasks.
        </p>
        <ul>
          <li>Progress bars in multi-step checkout.</li>
          <li>Saved progress states for returns and exchanges.</li>
          <li>“Complete your routine” bundles with partial completion highlighted.</li>
        </ul>

        <h2>15) Peak‑End Rule</h2>
        <p>
          <strong>What it is:</strong> People remember peak and final moments most.
        </p>
        <ul>
          <li>Delightful post-purchase page and packaging experience.</li>
          <li>Fast, proactive shipping updates and resolution.</li>
          <li>Memorable unboxing and welcome sequence.</li>
        </ul>

        <h2>16) Pratfall Effect</h2>
        <p>
          <strong>What it is:</strong> Admitting imperfections increases credibility.
        </p>
        <ul>
          <li>“Ships in 3–5 days due to small-batch roasting.”</li>
          <li>Transparent material sourcing and limitations.</li>
          <li>Honest comparisons that show tradeoffs.</li>
        </ul>

        <h2>17) Halo Effect</h2>
        <p>
          <strong>What it is:</strong> One strong attribute colors all others.
        </p>
        <ul>
          <li>Hero SKU sets the quality tone for the brand.</li>
          <li>Premium photography and typography elevate perceived value.</li>
          <li>Strong guarantee creates confidence across catalog.</li>
        </ul>

        <h2>18) Bandwagon Effect</h2>
        <p>
          <strong>What it is:</strong> People follow the crowd.
        </p>
        <ul>
          <li>“Bestseller,” “Most gifted,” and “Trending” tags.</li>
          <li>Collections sorted by popularity by default.</li>
          <li>UGC sections featuring real customers.</li>
        </ul>

        <h2>19) Recency Effect</h2>
        <p>
          <strong>What it is:</strong> Latest information weighs heavier in decisions.
        </p>
        <ul>
          <li>Surface most recent reviews and Q&A first (with filters).</li>
          <li>Highlight new arrivals and fresh variants.</li>
          <li>Use “Just dropped” and “Back in stock” cues appropriately.</li>
        </ul>

        <h2>20) Contrast Principle</h2>
        <p>
          <strong>What it is:</strong> Choices are judged relative to alternatives.
        </p>
        <ul>
          <li>Price anchoring with compare-at and tiered bundles.</li>
          <li>Side-by-side plan or size comparisons.</li>
          <li>Before/after visuals for results-driven products.</li>
        </ul>

        <h2>21) Foot‑in‑the‑Door</h2>
        <p>
          <strong>What it is:</strong> Start with a small ask to earn a bigger one.
        </p>
        <ul>
          <li>“See your fit” quiz → account creation at the end.</li>
          <li>Free sample → subscription upgrade.</li>
          <li>Bookmark/save → back-in-stock alerts.</li>
        </ul>

        <h2>22) Recency Bias</h2>
        <p>
          <strong>What it is:</strong> Recent experiences dominate memory.
        </p>
        <ul>
          <li>Reinforce reassurance messages during checkout (returns, support).</li>
          <li>Post-purchase emails remind of value and care instructions.</li>
          <li>Smooth last mile reduces churn and increases LTV.</li>
        </ul>

        <h2>23) Confirmation Bias</h2>
        <p>
          <strong>What it is:</strong> People seek information that supports current beliefs.
        </p>
        <ul>
          <li>Align copy with the shopper’s job-to-be-done and objections.</li>
          <li>Segmented landing pages match ad promise and intent.</li>
          <li>Address skeptics with proof: data, third-party tests, and demos.</li>
        </ul>

        <h2>24) Mere Exposure Effect</h2>
        <p>
          <strong>What it is:</strong> Familiarity breeds liking.
        </p>
        <ul>
          <li>Consistent brand cues across ads, PDP, and packaging.</li>
          <li>Retarget with helpful, not repetitive, messages.</li>
          <li>Use owned channels to reinforce identity (email/SMS).</li>
        </ul>

        <h2>25) Endowment Effect</h2>
        <p>
          <strong>What it is:</strong> People value what they feel they own.
        </p>
        <ul>
          <li>Customization and try‑before‑you‑buy increase attachment.</li>
          <li>AR try‑on and “see it in your room” tools.</li>
          <li>Free returns reduce perceived risk to “own.”</li>
        </ul>

        <h2>26) Paradox of Choice</h2>
        <p>
          <strong>What it is:</strong> Too many options reduce action.
        </p>
        <ul>
          <li>Curated bundles and guided selling over exhaustive lists.</li>
          <li>Hide rarely used filters behind “More filters.”</li>
          <li>Default to best-sellers and recommended variants.</li>
        </ul>

        <hr />

        <h2>Bringing it together</h2>
        <p>
          Start with the highest‑leverage templates (HP, PLP, PDP, cart, checkout). Apply 3–5 principles at a time,
          measure the lift, and compound wins across your funnel. Less theory, more experiments.
        </p>

        <p className="text-sm text-muted-foreground">
          Want tailored recommendations for your store?{" "}
          <Link href="/cro-tool" className="text-primary hover:underline">
            Try the free CRO tool
          </Link>{" "}
          and get a quick plan based on your current storefront.
        </p>
      </article>
    </main>
  )
}
