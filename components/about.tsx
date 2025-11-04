import { CheckCircle, Award, Users, Rocket, Sparkles, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: CheckCircle,
    label: "Projects Completed",
    value: "150+",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-600",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Award,
    label: "Apps Published",
    value: "10+",
    gradient: "from-yellow-500/10 to-orange-500/10",
    iconColor: "text-yellow-600",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Users,
    label: "Happy Clients",
    value: "75+",
    gradient: "from-blue-500/10 to-indigo-500/10",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Rocket,
    label: "Years Experience",
    value: "5+",
    gradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-500/10",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-1/4 w-3 h-3 bg-primary/20 rounded-full animate-bounce delay-500" />
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-accent/20 rounded-full animate-bounce delay-1000" />
        <div className="absolute top-1/3 left-10 w-4 h-4 bg-primary/10 rounded-full animate-bounce delay-1500" />
        <Sparkles className="absolute top-20 left-1/3 h-4 w-4 text-accent/30 animate-pulse" />
        <TrendingUp className="absolute bottom-20 right-1/3 h-5 w-5 text-primary/30 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto">
        <div className="animate-slide-up max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-balance mb-6">About us</h2>
          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            <p className="relative pl-4">
              We are a conversion-focused e-commerce agency committed to helping brands achieve measurable, long-term
              growth. Our expertise lies in <strong className="font-semibold">Conversion Rate Optimization (CRO), ad performance optimization, and store
              experience enhancement </strong>— ensuring every visitor, click, and campaign contributes directly to revenue
              growth.
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full opacity-30" />
            </p>
            <p>
              We work on design precision, behavioral analytics, and marketing intelligence to improve key growth
              metrics such as <strong className="font-semibold">Average Order Value (AOV), Order Volume (OV), and Brand Equity.</strong> We focus on
              creating a seamless ecosystem where your store design, user experience, and paid media strategy work
              together to drive consistent, scalable results.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Core Services</h3>
              <ul className="space-y-3 text-sm sm:text-base">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Foundation CRO (Design-Based):</strong> Build a high-performing, trustworthy, and visually
                    optimized storefront designed for fast loading, intuitive navigation, and conversion-focused
                    layouts.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Dynamic CRO (Behavior-Based):</strong> Implement adaptive personalization, behavioral
                    targeting, and A/B testing to enhance engagement and boost AOV and lifetime value.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Ad Optimization:</strong> Refine Meta campaign structures, targeting, and creatives to
                    maximize ROAS and align ad performance with on-site conversion goals.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Store Performance Enhancement:</strong> Conduct comprehensive audits to identify performance
                    bottlenecks, optimize page speed, and improve the end-to-end customer experience.
                  </span>
                </li>
              </ul>
            </div>
            <p className="pt-4">
              Though we are a young agency, our team brings deep expertise in e-commerce growth strategy, CRO, and
              marketing optimization — helping brands convert better, scale faster, and strengthen their overall market
              presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
