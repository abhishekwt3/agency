import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
export default function TermsPage() {
  const effectiveDate = "October 5, 2025"
  return (
    <>
    <div className="pb-10"><Header /></div>
    
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-pretty">Terms of Service</h1>
        <p className="text-muted-foreground mt-2">Effective: {effectiveDate}</p>
        <p className="text-sm text-muted-foreground mt-1">
          These Terms of Service (“Terms”) govern your access to and use of services provided by appwharf (“we”, “us”,
          “our”). By engaging our CRO services or using our website, you agree to these Terms.
        </p>
      </header>

      <section className="space-y-6 leading-relaxed">
        <div>
          <h2 className="text-xl font-medium">Services</h2>
          <p className="text-muted-foreground">
            We provide conversion rate optimization (CRO) services, including research, strategy, design, development,
            and experimentation. The scope, deliverables, timelines, and fees are defined in written proposals, SOWs, or
            order forms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">Client Responsibilities</h2>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Provide timely access to required systems, stakeholders, and assets.</li>
            <li>Review and approve deliverables within reasonable timeframes.</li>
            <li>Ensure you have the rights to any materials you supply to us.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-medium">Fees & Payment</h2>
          <p className="text-muted-foreground">
            Fees and payment schedules are set forth in the applicable proposal or SOW. Unless otherwise stated,
            invoices are due upon receipt. Late payments may incur interest or result in suspension of services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">Intellectual Property</h2>
          <p className="text-muted-foreground">
            Pre-existing IP owned by either party remains that party’s property. Upon full payment, you receive a
            license or ownership of deliverables as specified in the SOW. We may reuse generalized know‑how,
            non-confidential learnings, and non-attributable templates.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">Confidentiality</h2>
          <p className="text-muted-foreground">
            Each party agrees to protect the other’s confidential information and use it only for performing under these
            Terms or an SOW.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">Warranties & Disclaimers</h2>
          <p className="text-muted-foreground">
            Services are provided “as is.” While CRO aims to improve performance, we do not guarantee specific outcomes.
            To the maximum extent permitted by law, we disclaim all warranties not expressly stated in writing.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">Limitation of Liability</h2>
          <p className="text-muted-foreground">
            To the extent permitted by law, neither party is liable for indirect, incidental, special, or consequential
            damages. Our total liability for any claim will not exceed the amounts paid by you to us for the services
            giving rise to the claim during the twelve (12) months preceding the event.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">Termination</h2>
          <p className="text-muted-foreground">
            Either party may terminate an engagement for material breach if not cured within 14 days of written notice.
            Upon termination, you will pay for services rendered and non-cancellable commitments.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">Governing Law</h2>
          <p className="text-muted-foreground">
            These Terms are governed by the laws of your and our primary place of business unless otherwise specified in
            the SOW. Venue and jurisdiction will be set forth in the applicable agreement if required.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">Contact</h2>
          <p className="text-muted-foreground">
            Questions about these Terms? Contact appwharf at{" "}
            <a href="mailto:team@reach.ist" className="underline">
              team@reach.ist
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">Changes to These Terms</h2>
          <p className="text-muted-foreground">
            We may update these Terms from time to time. We will post the updated date at the top. Continued use of our
            services indicates acceptance of the updated Terms.
          </p>
        </div>

       
      </section>
    </main>
    <Footer />
    </>
  )
}
