import {
  BarChart3,
  ArrowRight,
  TrendingUp,
  Zap,
  Target,
  Users,
  ShoppingCart,
  Eye,
  MousePointer,
  Clock,
  Brain,
} from "lucide-react"

export function Services() {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Conversion Rate Optimization Section */}
      <div className="container mx-auto">
        {/* Hero Hook */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-6 text-balance">
            Turn More Visitors Into
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block font-medium">
              Paying Customers
            </span>
          </h2>
          <p className="text-2xl text-muted-foreground mb-4 text-pretty max-w-4xl mx-auto font-light">
            Without spending more on ads. Increase your Shopify conversion rate from 2% to 4-6%+ with our proven CRO
            strategies.
          </p>
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-3 text-primary font-medium">
            <TrendingUp className="w-5 h-5 mr-2" />
            Average client sees 40%+ revenue increase in 90 days
          </div>
        </div>

        {/* What CRO Is */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-4xl font-medium mb-6">We design to optimize conversions</h3>
            <h3 className="text-3xl font-medium mb-6">
              From trust badges to FOMO triggers, every detail taps into shopper psychology
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Every element is designed to push the shopper closer to “Buy Now”: clean visuals remove doubt, bold
              buttons grab attention, urgency badges spark FOMO, reviews and trust signals build confidence, and easy
              returns erase risk. Together, these <strong>micro-tweaks create a powerful subconscious nudge</strong>{" "}
              that turns casual browsers into loyal buyers.
            </p>

            {/* Flow diagram */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 sm:p-8 border border-primary/20 overflow-x-auto">
              <div className="flex items-center justify-between text-center min-w-max sm:min-w-0">
                <div className="flex-1 min-w-fit">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">Traffic</div>
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground mx-2 sm:mx-4 flex-shrink-0" />
                <div className="flex-1 min-w-fit">
                  <Eye className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">Engagement</div>
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground mx-2 sm:mx-4 flex-shrink-0" />
                <div className="flex-1 min-w-fit">
                  <ShoppingCart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">Conversion</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden border border-border/50 bg-secondary/50">
              <img
                src="https://ik.imagekit.io/90xvn3fidvl/basic-cro_hpdMcdHYWW.jpg"
                alt="Annotated ecommerce product card showing high-res image, clear description, ratings, trust badges, urgency, and a contrasting Buy Now button."
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Personalization Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden border border-border/50 bg-secondary/50 lg:order-1">
              <img
                src="https://ik.imagekit.io/90xvn3fidvl/image-cro_LA7O5uY_w.jpg"
                alt="Side-by-side mobile views comparing a generic site with a personalized experience for luxury handbags."
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            <div className="lg:order-2">
              <h3 className="text-4xl font-medium mb-6">All customers aren't alike, so why treat them same way?</h3>
              <h3 className="text-3xl font-medium mb-6"></h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We implement <strong>dynamic content and Calls-to-Action </strong> that adapt instantly to each visitor.
                Based on their location, browsing history, or how they found you, your site intelligently{" "}
                <strong>highlights the most relevant products, promotions, and messages.</strong> This personalized
                experience captures attention, reduces friction, and guides customers effortlessly to their next
                purchase. The result? <strong>personalized CTAs perform 202% better than generic ones </strong>.
              </p>

              <div className="mt-6 bg-secondary/40 border border-border/50 rounded-xl p-6">
                <h4 className="text-lg font-medium mb-3">Example: Real‑time Personalization User Journey</h4>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <div className="font-medium text-foreground mb-1">Visit 1: The Generic Experience</div>
                    <p>
                      A shopper searches for “Luxury Handbags” but sees a generic banner (“5% Off Storewide”) and a
                      homepage filled with random products. The result? She feels unseen and leaves.
                    </p>
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-1">Visit 2: The Personalized Journey</div>
                    <p>
                      When she returns, the site adapts: “10% Off Luxury Handbags” banner, product grid showing only
                      handbags, best‑value items up front. She feels understood, the path to purchase is clear — and
                      this time, she buys.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key CRO Elements */}
        <div className="mb-20">
          <h3 className="text-3xl font-medium text-center mb-12">Key Elements We Optimize</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: Zap,
                title: "Page Speed & Mobile",
                description:
                  "We optimize websites for lightning-fast load times and flawless mobile performance — ensuring every visitor experiences a smooth, conversion-ready journey.",
                image: "https://ik.imagekit.io/90xvn3fidvl/pagespeed_wKM8Tm2xMs.jpeg",
                alt: "Page Speed Insights dashboard showing performance metrics",
              },
              {
                icon: Target,
                title: "Calls-to-Action (CTAs)",
                description:
                  "We craft persuasive, strategically placed CTAs that guide users toward high-value actions and boost conversion rates without feeling pushy.",
                image: "https://ik.imagekit.io/90xvn3fidvl/cta_zz1uVIQ2-F.jpeg",
                alt: "Heatmap emphasizing Buy Now call-to-action on product page",
              },
              {
                icon: Clock,
                title: "Email & Retargeting",
                description:
                  "We build automated email flows and smart retargeting campaigns that re-engage visitors, recover lost sales, and turn one-time buyers into loyal customers.",
                image: "https://ik.imagekit.io/90xvn3fidvl/emailnotif_8tvhHimTZ.jpeg",
                alt: "Abandoned cart notification on a smartphone lock screen",
              },
              {
                icon: ShoppingCart,
                title: "Checkout Flow",
                description:
                  "We streamline the checkout process to minimize friction, reduce cart abandonment, and maximize completed purchases across devices.",
                image: "https://ik.imagekit.io/90xvn3fidvl/checkout_mnyO5ECUk.jpeg",
                alt: "Mobile checkout screen showing order summary and confirm button",
              },
              {
                icon: MousePointer,
                title: "A/B Testing & Messaging",
                description:
                  "We run data-driven A/B tests to refine headlines, copy, and layouts — uncovering what truly resonates with your audience and drives measurable growth.",
                image: "https://ik.imagekit.io/90xvn3fidvl/a:b%20test_CVJQE9Biz.jpeg",
                alt: "A/B test comparison of two conversion-focused designs",
              },
              {
                icon: Eye,
                title: "Product Pages",
                description:
                  "We transform product pages into conversion engines with optimized visuals, trust signals, and storytelling that inspires customers to buy.",
                image: "https://ik.imagekit.io/90xvn3fidvl/productpage_pH1bpzmk3.jpg",
                alt: "Mobile product page showing imagery, price, variants, and add to cart",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-secondary/30 rounded-xl p-0 border border-border/50 hover:border-primary/30 transition-colors overflow-hidden"
              >
                {/* image */}
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.alt}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                {/* content */}
                <div className="p-6">
                  <item.icon className="w-7 h-7 text-primary mb-3" />
                  <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our CRO Process */}
        <div className="mb-20">
          <h3 className="text-3xl font-medium text-center mb-12">Our Proven CRO Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Deep‑Dive Audit",
                description:
                  "Free, comprehensive website audit powered by behavioral analysis. Pinpoints friction, trust gaps, and lost sales opportunities you can’t see.",
                icon: BarChart3,
              },
              {
                step: "2",
                title: "Strategy & Hypothesis",
                description:
                  "We blend customer psychology with analytics to spot what holds buyers back. Build laser‑focused hypotheses designed to increase clicks, trust, and sales.",
                icon: Brain,
              },
              {
                step: "3",
                title: "Implementation & Testing",
                description:
                  "A/B tests, UX/UI refinements, copy rewrites, and persuasive CTAs. Every change is tested with real shoppers — no guesswork, only data.",
                icon: Zap,
              },
              {
                step: "4",
                title: "Growth & Scaling",
                description:
                  "Track results in real time to prove ROI. Scale the winning strategies across your funnel for compounding growth.",
                icon: TrendingUp,
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
