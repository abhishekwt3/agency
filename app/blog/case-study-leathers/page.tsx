"use client"
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import Link from "next/link"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookingModal } from "@/components/booking-modal"
import { Button } from "@/components/ui/button"
import { CheckCircle2, TrendingUp, Users } from "lucide-react"

  const data = [
    { week: "Week 1",  aov: 121, abandonment: 66 },
    { week: "Week 2",  aov: 134, abandonment: 59 },
    { week: "Week 3",  aov: 134, abandonment: 55 },
    { week: "Week 4",  aov: 134, abandonment: 53 },
  ];

export default function LaticoLeathersCaseStudy() {
  return (
    <>
    <Header />
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <article className="container mx-auto max-w-4xl">
        {/* Header Section */}
        <header className="mb-12 space-y-4">
          <div className="inline-block">
            <span className="text-xs uppercase tracking-widest font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
              Case Study
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-light leading-tight text-balance">
            How Latico Leathers Boosted Conversions by 18% in 4 Weeks
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A strategic CRO sprint that transformed a premium leather brand's conversion funnel through
            psychology-driven design and user experience refinement.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground pt-4">
            <span>September 2025</span>
            <span className="hidden sm:inline">·</span>
            <span>4 min read</span>
          </div>
        </header>

        <hr className="mb-8" />

        {/* Quick Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Card className="border border-border/50 bg-gradient-to-br from-background to-secondary/5">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Conversion Lift</p>
                <p className="text-3xl sm:text-4xl font-semibold text-primary">+18%</p>
                <p className="text-sm text-muted-foreground">In 4 weeks</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border border-border/50 bg-gradient-to-br from-background to-secondary/5">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">AOV Increase</p>
                <p className="text-3xl sm:text-4xl font-semibold text-primary">+11%</p>
                <p className="text-sm text-muted-foreground">Average order value</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border border-border/50 bg-gradient-to-br from-background to-secondary/5">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">PLP Performance</p>
                <p className="text-3xl sm:text-4xl font-semibold text-primary">+24%</p>
                <p className="text-sm text-muted-foreground">Click-through rate</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Executive Summary */}
        <section className="prose prose-neutral max-w-none mb-12">
          <h2 className="text-2xl font-semibold mb-4">Executive Summary</h2>
          <p className="text-muted-foreground">
            Latico Leathers, a family-owned, award-winning brand on Shopify Plus, crafted premium leather goods but saw
            online conversion rates plateau. Despite a strong tech stack and 40+ years of heritage, the website wasn't
            effectively communicating brand value or guiding users to purchase. Through a targeted 4-week CRO sprint
            focused on consumer psychology and UX refinement, Latico achieved an 18% conversion lift and 11% AOV
            increase.
          </p>
        </section>

        {/* The Client */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">The Client</h2>
          <Card className="border border-border/50 bg-card/40 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Premium Positioning</p>
                    <p className="text-sm text-muted-foreground">
                      Full-grain leather handbags and accessories crafted over 40 years
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Strong Market Fit</p>
                    <p className="text-sm text-muted-foreground">40,000+ positive reviews and numerous design awards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Tech Stack</p>
                    <p className="text-sm text-muted-foreground">
                      Shopify Plus with Klaviyo email marketing integration
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Challenge */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">The Challenge</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Despite strong product-market fit and a robust tech stack, key performance metrics had stagnated. Our
              initial audit revealed three critical friction points across the conversion funnel:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-l-2 border-l-red-500/30 bg-red-50/30 dark:bg-red-950/10">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Weak Trust Communication</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Site failed to convey 40-year heritage, risk-free purchasing, and material quality upfront.
                </CardContent>
              </Card>
              <Card className="border-l-2 border-l-amber-500/30 bg-amber-50/30 dark:bg-amber-950/10">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Poor Product Discovery</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  PLP presented products randomly without psychological principles like contrast or curation.
                </CardContent>
              </Card>
              <Card className="border-l-2 border-l-orange-500/30 bg-orange-50/30 dark:bg-orange-950/10">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">High Checkout Friction</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Noticeable drop-off at final step indicated last-minute hesitation and missing trust signals.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">The Solution: 4-Week CRO Sprint</h2>
          <p className="text-muted-foreground mb-6">
            We implemented a strategic, phased approach across three core funnel areas, rolling out changes over four
            weeks with continuous testing.
          </p>

          {/* Week 1-2: Product Page */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="bg-primary text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                1
              </span>
              Product Page (PDP) Improvements
            </h3>
            <p className="text-muted-foreground mb-4">
              The PDP is where consideration becomes intent. We removed all doubt and highlighted product value.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong>Trust Badge Implementation:</strong> Custom-designed badges placed below the "Add to Cart"
                button to instantly answer objections: Easy Returns, Free US Shipping, Design Award Winner, Full-Grain
                Leather, Family Business, and 40,000+ Reviews.
              </li>
              <li>
                <strong>Flexible Payment Options:</strong> Prominent "Pay in 4" interest-free installments with Afterpay
                and Shop Pay to reduce price friction on premium items.
              </li>
              <li>
                <strong>Tactile Imagery:</strong> High-resolution close-ups of leather texture and stitching detail to
                digitally replicate the "touch and feel" experience.
              </li>
            </ul>
          </div>

          {/* Week 2: Product Listing Page */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="bg-primary text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                2
              </span>
              Product Listing Page (PLP) Improvements
            </h3>
            <p className="text-muted-foreground mb-4">
              Redesigned from a simple catalog to a guided, psychology-driven shopping experience.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong>Contrast Principle Grid Logic:</strong> Strategically placed premium products next to
                better-selling items, leveraging contrast to make target products appear more appealing and valuable.
              </li>
              <li>
                <strong>Horizontal Filter Tags:</strong> Quick-access categories ("New Arrivals," "30% Off," "Best
                Sellers") reduced navigation friction and increased intent-driven browsing.
              </li>
            </ul>
          </div>

          {/* Week 3-4: Checkout */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="bg-primary text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                3
              </span>
              Checkout Page Improvements
            </h3>
            <p className="text-muted-foreground mb-4">
              The checkout is the final conversion gate. We reassured shoppers and enhanced the brand experience.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong>Trust Reinforcement:</strong> Primary trust badges re-displayed in the checkout header to
                reinforce the decision and reduce second-guessing.
              </li>
              <li>
                <strong>Clarity & Progress Visualization:</strong> Visual progress bar and accepted payment options
                displayed clearly to guide users and reduce perceived complexity.
              </li>
              <li>
                <strong>Surprise & Delight:</strong> Free Leather Cardholder Charm automatically added to orders above a
                threshold, increasing AOV while enhancing the premium unboxing experience.
              </li>
            </ul>
          </div>
        </section>

        {/* Results */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">The Results</h2>
          <p className="text-muted-foreground mb-6">
            Within just 4 weeks of implementation, Latico Leathers saw immediate and significant uplift across all key
            metrics:
          </p>
          <Card className="border border-border/50 bg-card/40 mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                Average Order Value & Checkout Abandonment
              </h3>

              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis
                    dataKey="week"
                    tick={{ fontSize: 12 }}
                    label={{
                      value: "Time (Weeks)",
                      position: "insideBottom",
                      offset: -5,
                    }}
                  />
                  <YAxis
                    yAxisId="left"
                    orientation="left"
                    tickFormatter={(v) => `${v}%`}
                    domain={[50, 70]}
                    label={{
                      value: "Checkout Abandonment (%)",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    domain={[100, 140]}
                    label={{
                      value: "AOV ($)",
                      angle: -90,
                      position: "insideRight",
                    }}
                  />
                  <Tooltip />
                  <Legend />

                  {/* AOV Line */}
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="aov"
                    name="AOV ($)"
                    stroke="#22C55E"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />

                  {/* Checkout Abandonment Line */}
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="abandonment"
                    name="Checkout Abandonment (%)"
                    stroke="#EF4444"
                    strokeWidth={3}
                    strokeDasharray="5 3"
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Card className="border-t-2 border-t-primary bg-gradient-to-br from-background to-primary/5">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Conversion Metrics</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Overall Conversion Rate:</span>
                      <span className="font-medium">+18%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">AOV Increase:</span>
                      <span className="font-medium">+11%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Checkout Abandonment:</span>
                      <span className="font-medium">↓ 13%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-2 border-t-primary bg-gradient-to-br from-background to-primary/5">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Engagement Metrics</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">PLP to PDP CTR:</span>
                      <span className="font-medium">+24%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Add-to-Cart Rate:</span>
                      <span className="font-medium">+19%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Cart Value:</span>
                      <span className="font-medium">+9%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="text-muted-foreground">
            By focusing on the <strong>psychology of their user</strong>—not just the technology of their stack—Latico
            Leathers successfully translated their rich brand heritage into a high-performing online store.
          </p>
        </section>

        {/* Key Takeaways */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Key Takeaways</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm mb-1">Trust Before Transaction</p>
                <p className="text-sm text-muted-foreground">
                  Premium brands must communicate heritage, warranties, and social proof immediately to overcome
                  purchase hesitation.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm mb-1">Guided Discovery Outperforms Choice Overload</p>
                <p className="text-sm text-muted-foreground">
                  Curated, psychologically-optimized product merchandising (contrast, social proof, categorization)
                  drives higher engagement than random layouts.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm mb-1">Friction Points Compound Loss</p>
                <p className="text-sm text-muted-foreground">
                  Small UX improvements across PDP, PLP, and checkout compound into significant revenue lifts. Every
                  step matters.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm mb-1">Data-Driven Incremental Wins Build Confidence</p>
                <p className="text-sm text-muted-foreground">
                  Testing and validation at each phase allowed quick iteration, reinforced ROI, and earned internal
                  buy-in for further optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-8">
          <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-semibold mb-3">Ready to optimize your conversion funnel?</h3>
              <p className="text-muted-foreground mb-6">
                Get a free CRO audit and discover the friction points holding back your revenue. Our team will analyze
                your funnel and provide a personalized action plan.
              </p>
              <BookingModal>
                <Button size="lg" className="rounded-full">
                  Book Your Free Strategy Call
                </Button>
              </BookingModal>
            </CardContent>
          </Card>
        </section>

        {/* Related Articles */}
        <section className="border-t pt-8">
          <h3 className="text-lg font-semibold mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/scale-with-cro" className="group">
              <Card className="h-full hover:bg-card transition-colors">
                <CardContent className="pt-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
                    CRO Playbook
                  </p>
                  <h4 className="font-semibold group-hover:text-primary transition-colors mb-2">
                    Scale Revenue Without Scaling Ad Spend
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Practical CRO strategies to unlock 20-40% more revenue from existing traffic.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>
      </article>
    </main>
    <Footer />
    </>
  )
}
