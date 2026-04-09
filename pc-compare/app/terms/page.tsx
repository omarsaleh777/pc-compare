import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — PC Compare",
  description:
    "Terms and conditions for using the PC Compare component comparison and affiliate referral service.",
};

export default function TermsOfServicePage() {
  return (
    <main className="max-w-[800px] mx-auto px-6 lg:px-8 py-16">
      <h1 className="font-headline text-4xl font-black tracking-hero text-on-surface mb-2">
        Terms of Service
      </h1>
      <p className="text-on-surface-variant text-sm font-label tracking-wide mb-12">
        Last updated: January 1, 2025
      </p>

      <div className="space-y-10 text-on-surface text-sm leading-relaxed">

        {/* 1 */}
        <section>
          <h2 className="font-headline font-bold text-lg text-on-surface mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using PC Compare (&quot;the Service&quot;), you agree to be bound by these
            Terms of Service. If you do not agree to these terms, please do not use the Service.
            We reserve the right to update these terms at any time, and your continued use of the
            Service constitutes acceptance of any changes.
          </p>
        </section>

        {/* 2 */}
        <section>
          <h2 className="font-headline font-bold text-lg text-on-surface mb-3">
            2. Description of Service
          </h2>
          <p className="mb-3">
            PC Compare is a free price comparison and affiliate referral platform for PC components.
            The Service allows you to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-on-surface-variant ml-2">
            <li>Browse and search PC components across categories (CPUs, GPUs, RAM, storage, motherboards, cases, cooling, power supplies).</li>
            <li>Compare specifications and prices of up to 4 products side by side.</li>
            <li>Use the bottleneck calculator to analyze CPU/GPU pairing efficiency.</li>
            <li>Access affiliate links to purchase products from third-party retailers.</li>
          </ul>
        </section>

        {/* 3 */}
        <section>
          <h2 className="font-headline font-bold text-lg text-on-surface mb-3">
            3. Affiliate Disclosure
          </h2>
          <p className="mb-3">
            PC Compare participates in affiliate advertising programs with retailers including, but
            not limited to, Amazon Associates, Newegg, and Best Buy. This means:
          </p>
          <ul className="list-disc list-inside space-y-2 text-on-surface-variant ml-2">
            <li>
              <strong className="text-on-surface">Commission:</strong> We earn a small commission when
              you purchase a product through our affiliate links, at no additional cost to you.
            </li>
            <li>
              <strong className="text-on-surface">No endorsement:</strong> Affiliate relationships do
              not influence our product rankings, ratings, or &quot;Best Value&quot; calculations. These are
              based solely on price-to-performance ratios and user review data.
            </li>
            <li>
              <strong className="text-on-surface">Third-party purchases:</strong> When you click a
              &quot;Buy Now&quot; link, you leave PC Compare and complete your purchase on the retailer&apos;s
              website. We are not responsible for the retailer&apos;s pricing, availability, shipping,
              returns, or customer service.
            </li>
          </ul>
        </section>

        {/* 4 */}
        <section>
          <h2 className="font-headline font-bold text-lg text-on-surface mb-3">
            4. Accuracy of Information
          </h2>
          <p className="mb-3">
            We strive to provide accurate and up-to-date product information, but we cannot guarantee
            that all details are error-free at all times:
          </p>
          <ul className="list-disc list-inside space-y-2 text-on-surface-variant ml-2">
            <li>
              <strong className="text-on-surface">Prices:</strong> Product prices are fetched from
              retailer APIs and may be delayed. Always verify the final price on the retailer&apos;s
              website before purchasing.
            </li>
            <li>
              <strong className="text-on-surface">Specifications:</strong> Product specs are sourced
              from manufacturer data and retailer listings. We are not liable for inaccuracies in
              third-party data.
            </li>
            <li>
              <strong className="text-on-surface">Availability:</strong> In-stock status may change
              between the time you view a product on PC Compare and when you visit the retailer.
            </li>
            <li>
              <strong className="text-on-surface">Bottleneck Calculator:</strong> The bottleneck
              analysis provides approximate estimates for educational purposes. Actual system
              performance depends on many factors including drivers, software, thermals, and workload.
            </li>
          </ul>
        </section>

        {/* 5 */}
        <section>
          <h2 className="font-headline font-bold text-lg text-on-surface mb-3">
            5. User Conduct
          </h2>
          <p className="mb-3">When using PC Compare, you agree not to:</p>
          <ul className="list-disc list-inside space-y-2 text-on-surface-variant ml-2">
            <li>Scrape, crawl, or use automated tools to extract data from the Service without written permission.</li>
            <li>Attempt to interfere with, disrupt, or overload the Service&apos;s infrastructure.</li>
            <li>Use the Service for any unlawful purpose or in violation of any applicable laws.</li>
            <li>Reverse engineer, decompile, or attempt to extract the source code of the Service (beyond what is publicly available on our open-source repository).</li>
          </ul>
        </section>

        {/* 6 */}
        <section>
          <h2 className="font-headline font-bold text-lg text-on-surface mb-3">
            6. Intellectual Property
          </h2>
          <p>
            The PC Compare name, logo, design, and original content are the property of PC Compare.
            Product names, logos, and images belong to their respective manufacturers and are used
            for informational purposes only. Use of these trademarks does not imply endorsement by
            the trademark holders.
          </p>
        </section>

        {/* 7 */}
        <section>
          <h2 className="font-headline font-bold text-lg text-on-surface mb-3">
            7. Limitation of Liability
          </h2>
          <p>
            PC Compare is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
            either express or implied. To the fullest extent permitted by law, PC Compare shall not
            be liable for any indirect, incidental, special, consequential, or punitive damages
            arising from your use of the Service, including but not limited to purchasing decisions
            made based on information displayed on the Service.
          </p>
        </section>

        {/* 8 */}
        <section>
          <h2 className="font-headline font-bold text-lg text-on-surface mb-3">
            8. Third-Party Links
          </h2>
          <p>
            The Service contains links to third-party websites (retailers, manufacturers, etc.).
            These links are provided for your convenience. We do not control, endorse, or assume
            responsibility for the content, privacy policies, or practices of any third-party
            websites. You access third-party sites at your own risk.
          </p>
        </section>

        {/* 9 */}
        <section>
          <h2 className="font-headline font-bold text-lg text-on-surface mb-3">
            9. Termination
          </h2>
          <p>
            We reserve the right to restrict or terminate access to the Service at any time, for
            any reason, without prior notice. All provisions of these Terms that by their nature
            should survive termination shall survive, including intellectual property provisions
            and limitations of liability.
          </p>
        </section>

        {/* 10 */}
        <section>
          <h2 className="font-headline font-bold text-lg text-on-surface mb-3">
            10. Governing Law
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with applicable laws,
            without regard to conflict of law principles. Any disputes arising from these Terms
            or your use of the Service shall be resolved through good-faith negotiation before
            pursuing formal legal action.
          </p>
        </section>

        {/* 11 */}
        <section>
          <h2 className="font-headline font-bold text-lg text-on-surface mb-3">
            11. Contact
          </h2>
          <p>
            If you have questions about these Terms of Service, you can reach us by opening an
            issue on our{" "}
            <a
              href="https://github.com/omarsaleh777/pc-compare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline underline-offset-2"
            >
              GitHub repository
            </a>
            .
          </p>
        </section>

      </div>
    </main>
  );
}
