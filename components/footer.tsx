import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary/10 to-accent/10 py-12 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      <div className="container mx-auto max-w-full px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2">
            <div className="flex items-end gap-2 pb-2">
             <img src="https://ik.imagekit.io/90xvn3fidvl/g10_t2fO-xv6A.png" alt="Reach.ist logo" className="h-10 w-10" />
            <h3 className="text-xl sm:text-2xl font-semibold leading-none">Reach.ist</h3>
            </div>
            <p className=" mb-4 max-w-md leading-relaxed text-sm sm:text-base">
            We help e-commerce companies build long-term brand value and customer trust. Our expertise lies in Conversion Rate Optimization (CRO), Ad Performance Optimization, and Store Experience Enhancement.</p>
            <div className="text-xs sm:text-sm ">© 2025 Reach.ist. All rights reserved.</div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm ">
              <li>
                <a href="/#services" className="hover:text-primary-foreground transition-colors">
                  Foundation CRO
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-background transition-colors">
                  Dynamic CRO
                </a>
              </li>
               <li>
                <a href="/#services" className="hover:text-primary-foreground transition-colors">
                  Shopify Development
                </a>
              </li>
              <li>
                <a href="/#cro-audit" className="hover:text-primary-foreground transition-colors">
                  E-commerce Store Audit
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-primary-foreground transition-colors">
                 Meta Marketing Optimisation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="about" className="hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-primary-foreground transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
       
        </div>

        <Separator className="my-6 sm:my-8 bg-primary-foreground/20" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm">
          <div className="text-center sm:text-left">Empowering brands through meaningful customer experiences.
</div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            <a href="/privacy" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
