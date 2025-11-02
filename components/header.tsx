"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { BookingModal } from "@/components/booking-modal"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="inline-block h-5 w-5 rounded-[4px] bg-foreground" aria-hidden />
            <h1 className="text-xl font-semibold">Reach.ist</h1>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-center gap-8 text-sm">
              <a href="#services" className="text-foreground/90 hover:text-foreground transition-colors">
                Services
              </a>
              <a href="/blog" className="text-foreground/90 hover:text-foreground transition-colors">
                Case Studies
              </a>
              <a href="#cro-audit" className="text-foreground/90 hover:text-foreground transition-colors">
                CRO Test
              </a>
              <a href="#pricing" className="text-foreground/90 hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-foreground/90 hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <BookingModal>
              <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                Book Call
              </Button>
            </BookingModal>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <a href="#services" className="block px-3 py-2">
                Services
              </a>
              <a href="/blog" className="block px-3 py-2">
                Case Studies
              </a>
              <a href="#cro-audit" className="block px-3 py-2">
                CRO Test
              </a>
              <a href="#pricing" className="block px-3 py-2">
                Pricing
              </a>
              <a href="#contact" className="block px-3 py-2">
                Contact
              </a>
              <div className="px-3 py-2">
                <Button className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90">
                  Book Call
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
