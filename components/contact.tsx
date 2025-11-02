"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight, Star } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setIsSubmitting(true)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error("Failed to submit")
      toast({ title: "Message received", description: "We will get back to you shortly." })
      // Reset form
      setFormData({ name: "", email: "", company: "", service: "", message: "" })
    } catch (err: any) {
      toast({ title: "Something went wrong", description: err?.message ?? "Please try again.", variant: "destructive" })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      {/* Pricing Section */}
      <div className="mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4">Choose Your CRO Path</h3>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
            Select the optimization approach that matches your store's needs and growth stage
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Path A: Foundation CRO */}
          <div className="bg-gradient-to-br from-secondary/50 to-secondary/30 rounded-2xl p-6 sm:p-8 border border-border/50 hover:border-primary/30 transition-all hover:shadow-xl">
            <div className="mb-6">
              <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
                Path A
              </div>
              <h4 className="text-2xl font-medium mb-3">Foundation CRO</h4>
              <p className="text-muted-foreground text-sm mb-2">Design-Based</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium mb-1">High-Fidelity Site & Trust</p>
                  <p className="text-sm text-muted-foreground">
                    A premium, professional, fast-loading, and trustworthy store that gives all visitors a world-class
                    experience
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">Mobile-optimized design & speed</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">Trust signals & social proof integration</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">Strategic CTA placement & hierarchy</p>
              </div>
            </div>

            <div className="pt-6 border-t border-border/50">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-medium">$100 - $500</span>
                <span className="text-sm text-muted-foreground">per project</span>
              </div>
              <Button className="w-full" size="lg">
                Start with Foundation CRO
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Path B: Dynamic CRO */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 sm:p-8 border-2 border-primary/30 hover:border-primary/50 transition-all hover:shadow-xl relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                RECOMMENDED
              </div>
            </div>

            <div className="mb-6">
              <div className="inline-flex items-center bg-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
                Path B
              </div>
              <h4 className="text-2xl font-medium mb-3">Dynamic CRO</h4>
              <p className="text-muted-foreground text-sm mb-2">Behaviour-Based</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium mb-1">Adaptive Intelligence & Increased AOV/LTV</p>
                  <p className="text-sm text-muted-foreground">
                    A website that is smart, adapting to individual user intent to show them the perfect product, offer,
                    or message, maximizing every visit's value
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">Real-time personalization engine</p>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">Behavioral targeting & dynamic content</p>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">Advanced A/B testing & analytics</p>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">Includes all Foundation CRO features</p>
              </div>
            </div>

            <div className="pt-6 border-t border-primary/20">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-medium">$1,000 - $5,000</span>
                <span className="text-sm text-muted-foreground">per project</span>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                Start with Dynamic CRO
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="container mx-auto px-0">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance mb-4">Ready to Grow Your Business?</h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Let's discuss your Shopify project and create a strategy that drives results. Get in touch for a free
            consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="px-4 sm:px-6">
                <CardTitle>Start Your Project</CardTitle>
                <CardDescription>Tell us about your needs and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="h-10"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="h-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      className="h-10"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
                    <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                      <SelectTrigger className="h-10">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="development">Shopify Development</SelectItem>
                        <SelectItem value="migration">Store Migration</SelectItem>
                        <SelectItem value="app">Custom App Development</SelectItem>
                        <SelectItem value="marketing">Meta Marketing</SelectItem>
                        <SelectItem value="optimization">Store Optimization</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us about your project, timeline, and goals..."
                      required
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-11" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader className="px-4 sm:px-6">
                <CardTitle className="text-lg">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="font-medium text-sm">Email</div>
                    <div className="text-xs sm:text-sm text-muted-foreground break-all">team@reach.ist</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="font-medium text-sm">Phone</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="font-medium text-sm">Location</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Remote & Global</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Free Consultation</h3>
                <p className="text-xs sm:text-sm opacity-90 mb-4">
                  Book a 30-minute strategy call to discuss your Shopify goals and get expert advice.
                </p>
                <Button variant="secondary" size="sm" className="w-full h-9">
                  Schedule Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
