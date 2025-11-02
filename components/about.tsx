import { Card, CardContent } from "@/components/ui/card"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Your Trusted Shopify Partner</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p className="relative">
                We're a full-service Shopify development and Meta marketing agency dedicated to helping businesses
                succeed in the e-commerce space. Our team combines deep technical expertise with proven marketing
                strategies.
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full opacity-30" />
              </p>
              <p>
                From custom app development and store migrations to targeted Facebook advertising and conversion
                optimization, we handle every aspect of your Shopify success story.
              </p>
              <p>
                Our published apps in the Shopify App Store demonstrate our advanced capabilities, while our marketing
                campaigns have generated millions in revenue for our clients.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className={`text-center p-6 bg-gradient-to-br ${stat.gradient} border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="space-y-4">
                  <div
                    className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 group-hover:animate-glow`}
                  >
                    <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
                  </div>
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text group-hover:animate-gradient">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {stat.label}
                  </div>
                  <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
