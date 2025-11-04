import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
export default function PrivacyPage() {
  const effectiveDate = "October 5, 2025"
  return (
    <>
    <div className="pb-10"><Header /></div>
   
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-pretty">Privacy Policy</h1>
        <p className="text-muted-foreground mt-2">Effective: {effectiveDate}</p>
        <p className="text-sm text-muted-foreground mt-1">
          This Privacy Policy explains how Reach.ist (“we”, “us”, “our”) collects, uses, and protects information in
          connection with our conversion rate optimization (CRO) services and our website.
        </p>
      </header>

      <section className="space-y-6 leading-relaxed">
        <div>
          <h2 className="text-xl font-medium">Information We Collect</h2>
          <p className="text-muted-foreground">
            We may collect personal information you provide (name, email, company, project details) and technical data
            automatically (IP address, device/browser type, pages viewed, referral source) via cookies and analytics
            tools.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">How We Use Information</h2>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Deliver and improve our CRO services and website experience.</li>
            <li>Respond to inquiries, proposals, and support requests.</li>
            <li>Analyze aggregate usage to improve performance and content.</li>
            <li>Send service-related communications and optional marketing (with opt-out).</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-medium">Cookies & Analytics</h2>
          <p className="text-muted-foreground">
            We use cookies and similar technologies to remember preferences and measure performance. You can adjust
            cookie settings in your browser. Some features may not function without certain cookies.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">Data Sharing</h2>
          <p className="text-muted-foreground">
            We do not sell personal data. We may share limited data with trusted processors (e.g., hosting, analytics,
            communication) under contracts that require appropriate safeguards, or if required by law.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">Data Retention & Security</h2>
          <p className="text-muted-foreground">
            We retain data only as long as necessary for the purposes above and implement reasonable technical and
            organizational security measures. No method of transmission or storage is 100% secure.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">Your Rights</h2>
          <p className="text-muted-foreground">
            Depending on your region, you may have rights to access, correct, delete, or restrict processing of your
            personal data, and opt out of marketing. Contact us to exercise these rights.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">International Transfers</h2>
          <p className="text-muted-foreground">
            If data is transferred across borders, we rely on appropriate safeguards where required by law.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">Children’s Privacy</h2>
          <p className="text-muted-foreground">
            Our services are not directed to children under 13, and we do not knowingly collect their personal
            information.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">Contact</h2>
          <p className="text-muted-foreground">
            For questions or requests, contact reach at{" "}
            <a href="mailto:team@reach.ist" className="underline">
              team@reach.ist
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">Changes to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this Policy periodically. We will post the updated date at the top. Continued use of our
            site/services after changes indicates acceptance.
          </p>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
