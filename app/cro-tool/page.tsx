import { CroAudit } from "@/components/cro-audit"

export default function CroToolPage() {
  return (
    <main className="pt-24 pb-20">
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-3xl mb-10">
          <h1 className="text-4xl sm:text-5xl font-light text-balance">Free CRO report for your store</h1>
          <p className="text-muted-foreground mt-3">
            Enter your URL to get actionable insights to lift conversion without increasing ad spend.
          </p>
        </div>
        <div className="container mx-auto">
          <CroAudit />
        </div>
      </section>
    </main>
  )
}
