import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BookingModal } from "@/components/booking-modal"

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="space-y-6 text-center">
            <div className="flex flex-col items-center">
          <img src="https://ik.imagekit.io/90xvn3fidvl/g10_t2fO-xv6A.png" alt="Reach.ist logo" className="h-12 w-12" />
          <h1 className="text-2xl md:text-3xl font-semibold text-foreground text-balance pt-5">Work With Us</h1>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Join a team that's shaping the future of e-commerce through creativity, data, and design. At our core, we
            believe that every click tells a story — and our mission is to turn those stories into meaningful,
            measurable growth for the brands we work with.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="w-full py-8 md:py-16 px-4 md:px-8 bg-secondary/30">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">What You'll Do</h2>
            <p className="text-muted-foreground leading-relaxed">
              Working with us means collaborating with ambitious, fast-growing e-commerce brands, helping them create
              impactful customer journeys, and understanding the psychology behind every purchase decision. You'll get
              to explore how design, technology, and marketing come together to drive real business outcomes.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Our Culture</h2>
            <p className="text-muted-foreground leading-relaxed">
              We value curiosity, precision, and problem-solving. Whether you're passionate about CRO, marketing
              strategy, or user experience design, you'll be part of a team that experiments, learns, and builds for
              impact.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      {/* <section className="w-full py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Why Join AppWharf?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Impact-Driven Work",
                description: "Every strategy you create directly increases revenue for our clients.",
              },
              {
                title: "Continuous Learning",
                description: "Work with cutting-edge tools and stay ahead of CRO trends.",
              },
              {
                title: "Collaborative Culture",
                description: "Work alongside specialists in design, analytics, and copywriting.",
              },
              {
                title: "Remote-Friendly",
                description: "Flexible work arrangements with a focus on results, not hours.",
              },
            ].map((item, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Join Section */}
      <section className="w-full py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Join Us To:</h2>
          <div className="space-y-4">
            {[
              "Work with exciting brands across diverse industries",
              "Build data-driven and design-led e-commerce experiences",
              "Develop a deep understanding of consumer psychology and growth mechanics",
              "Contribute to projects that directly influence revenue, performance, and brand value",
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <span className="text-accent font-bold text-lg">✓</span>
                <p className="text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="w-full py-12 md:py-20 px-4 md:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Open Positions</h2>
          <div className="space-y-6">
            {[
              {
                title: "CRO Specialist",
                location: "Remote",
                type: "Full-time",
                description:
                  "Design and execute A/B tests, analyze user behavior, and develop optimization strategies for e-commerce stores.",
              },
              {
                title: "UX/UI Designer",
                location: "Remote",
                type: "Full-time",
                description:
                  "Create high-converting design solutions and conduct user research to improve e-commerce experiences.",
              },
              {
                title: "Data Analyst",
                location: "Remote",
                type: "Full-time",
                description:
                  "Analyze conversion funnels, track KPIs, and provide actionable insights to drive business growth.",
              },
              {
                title: "Content Strategist",
                location: "Remote",
                type: "Part-time",
                description:
                  "Craft persuasive copy, optimize headlines, and develop messaging strategies that convert visitors.",
              },
            ].map((job, index) => (
              <div key={index} className="border border-border rounded-lg p-6 md:p-8 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{job.title}</h3>
                    <p className="text-muted-foreground mt-2">
                      {job.location} • {job.type}
                    </p>
                  </div>
                  <BookingModal>
                    <Button className="whitespace-nowrap">Apply Now</Button>
                  </BookingModal>
                </div>
                <p className="text-foreground">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-20 px-4 md:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Who We Are</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're a team of growth enthusiasts, data analysts, designers, and strategists united by one mission:
                helping e-commerce businesses thrive through conversion rate optimization. With combined expertise
                spanning 50+ successful projects, we bring both creativity and rigor to every client engagement.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Our Values</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>
                    <strong>Results First:</strong> We measure success by client ROI
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>
                    <strong>Data-Driven:</strong> Decisions backed by analytics
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>
                    <strong>Continuous Growth:</strong> Always learning and evolving
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>
                    <strong>Transparency:</strong> Clear communication with clients and team
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to Make an Impact?</h2>
          <p className="text-lg text-muted-foreground">
            If you're driven by results and inspired by innovation, we'd love to hear from you.
          </p>
          <BookingModal>
            <Button size="lg">Get In Touch</Button>
          </BookingModal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
