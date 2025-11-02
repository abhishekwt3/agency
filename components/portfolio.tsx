import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, TrendingUp, Users, Zap, Star } from "lucide-react"

const projects = [
  {
    title: "Fashion E-commerce Store",
    description: "Complete Shopify Plus store with custom theme, advanced filtering, and Meta advertising integration.",
    image: "/modern-fashion-ecommerce.png",
    tags: ["Shopify Plus", "Custom Theme", "Meta Ads"],
    results: "300% increase in conversions",
    icon: TrendingUp,
    gradient: "from-pink-500/20 to-purple-500/20",
  },
  {
    title: "Inventory Management App",
    description: "Published Shopify app for advanced inventory tracking and automated reordering.",
    image: "/inventory-management-dashboard-interface.jpg",
    tags: ["Published App", "API Integration", "Automation"],
    results: "1000+ active installations",
    icon: Zap,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Beauty Brand Migration",
    description: "Migrated from WooCommerce to Shopify with custom checkout and subscription features.",
    image: "/beauty-cosmetics-online-store.jpg",
    tags: ["Migration", "Subscriptions", "Custom Checkout"],
    results: "50% faster page load times",
    icon: Star,
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Electronics Store Optimization",
    description: "Performance optimization and Meta advertising campaign for electronics retailer.",
    image: "/electronics-gadgets-online-store.jpg",
    tags: ["Performance", "Meta Campaigns", "CRO"],
    results: "200% ROAS improvement",
    icon: Users,
    gradient: "from-orange-500/20 to-red-500/20",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-2xl animate-float delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-float delay-2000" />
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4 animate-slide-up">Our Success Stories</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto animate-slide-up">
            From custom development to marketing campaigns, see how we've helped businesses achieve remarkable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br ${project.gradient} border-0 hover:border hover:border-primary/30 group cursor-pointer animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/20 transition-all duration-300" />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <project.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-4 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <div className="text-sm font-medium text-accent group-hover:text-primary transition-colors duration-300">
                      {project.results}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
