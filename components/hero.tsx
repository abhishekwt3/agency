import { Button } from "@/components/ui/button"
import { BookingModal } from "@/components/booking-modal"
export function Hero() {
  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-24 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: copy */}
          <div className="max-w-2xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 backdrop-blur px-3 py-1 text-xs text-muted-foreground">
              <span>🚀 Proven Growth Strategies for Every Business Size</span>
            </div>

            {/* Headline */}
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-balance">
              Don't just keep spending on Ads<span className="font-medium"> Uplift sales</span> within CRO
            </h1>

            {/* Subcopy */}
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              We implement data-driven optimizations that continuously learn from user behavior — from clicks to scrolls
              — enabling dynamic CTAs, adaptive product layouts, and personalized journeys that convert.
            </p>
            {/* <p>If your Return on Ad Spend isn't good enough, the problem isn't your ads, product, or even pricing. It usually the conversion funnel.</p> */}

            {/* CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" className="rounded-full px-4 py-5 text-background bg-teal-900 hover:bg-teal-950">
                <a href="#cro-audit">Get Your Free Report ✌️</a>
              </Button>
              {/* <BookingModal>
                <Button size="lg" className="rounded-full px-6 py-5 bg-black text-white hover:bg-gray-800">
                Book Call
                </Button>
              </BookingModal> */}
            </div>

            {/* Trust bar */}
            <div className="mt-10">
              <div className="text-xs text-muted-foreground mb-3">Trusted by the D2C e-commerce brands</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center opacity-80">
                {["afterpay", "Basecamp", "maze", "cocokind", "TOZO", "Bellefit"].map((b) => (
                  <div key={b} className="text-sm text-muted-foreground text-center tracking-wide">
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Gradient base + 4 floating images */}
          <div className="relative overflow-hidden p-2 sm:p-4 md:p-8 w-full max-w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-x-10 md:gap-y-10 place-items-center max-w-full">
              {/* Product Card */}
              <img
                src="https://ik.imagekit.io/90xvn3fidvl/smartwatch?updatedAt=1760523585616"
                alt="Product card with price and add-to-cart"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-lg ring-1 ring-black/5 object-cover transform rotate-[-2deg] sm:translate-y-2 transition-all duration-300 hover:rotate-0 hover:-translate-y-2 hover:shadow-xl"
              />

              {/* User Review with 5-star rating */}
              <img
                src="https://ik.imagekit.io/90xvn3fidvl/ctr-increase_sOheXrK6a.jpg"
                alt="Customer review with five-star rating"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-md ring-1 ring-black/5 object-cover transform rotate-[2deg] sm:-translate-y-4 transition-all duration-300 hover:rotate-0 hover:-translate-y-2 hover:shadow-xl"
              />

              {/* 40% Growth metric */}
              <img
                src="https://ik.imagekit.io/90xvn3fidvl/gnr-img_YUyg0Zqah.jpg"
                alt="Growth metric showing 40% increase"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-md ring-1 ring-black/5 object-cover transform rotate-[-1.5deg] sm:translate-y-4 transition-all duration-300 hover:rotate-0 hover:-translate-y-2 hover:shadow-xl"
              />

              {/* Smiling user portrait */}
              <img
                src="https://ik.imagekit.io/90xvn3fidvl/review_joPOhj61c.jpg"
                alt="Happy customer smiling"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl shadow-lg ring-1 ring-black/5 object-cover transform rotate-[1.5deg] sm:-translate-y-2 transition-all duration-300 hover:rotate-0 hover:-translate-y-2 hover:shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
