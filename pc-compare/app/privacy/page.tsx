import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — PC Compare",
  description:
    "How PC Compare collects, uses, and protects your data when you use our PC component comparison service.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-[800px] mx-auto px-6 lg:px-8 py-16">
      <h1 className="font-headline text-4xl font-black tracking-hero text-on-surface mb-2">
        Privacy Policy
      </h1>
      <p className="text-on-surface-variant text-sm font-label tracking-wide mb-12">
        Last updated: January 1, 2025
      </p>

      <div className="space-y-10 text-on-surface text-sm leading-relaxed">

        {/* 1 */}
        <section>
          <h2 className="font-headline font-bold text-lg text-on-surface mb-3">
            1. Information We Collect
          </h2>
          <p className="mb-3">
            PC Compare is a price comparison and affiliate referral service. We collect minimal data to
            provide and improve our service:
          </p>
          <ul className="list-disc list-inside space-y-2 text-on-surface-variant ml-2">
            <li>
              <strong className="text-on-surface">Usage Data:</strong> Pages visited, components compared,
              search queries, and filters applied. This data is anonymous and aggregated.
            </li>
            <li>
              <strong className="text-on-surface">Local Storage:</strong> Your comparison list, theme
              preference (light/dark), and filter settings are stored locally on your device using
              browser localStorage. This data never leaves your browser.
            </li>
            <li>
              <strong className="text-on-surface">Cookies:</strong> We use essential cookies for basic site
              functionality. We do not use advertising or tracking cookies.
            </li>
          </ul>
        </section>

        {/* 2 */}
        <section>
          <h2 className="font-headline font-bold text-lg text-on-surface mb-3">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-2 text-on-surface-variant ml-2">
            <li>To display and compare PC component prices, specifications, and ratings.</li>
            <li>To remember your comparison list and display preferences between sessions.</li>
            <li>To analyze aggregate usage patterns and improve our service.</li>
            <li>To maintain and optimize site performance and security.</li>
          </ul>
        </section>

        {/* 3 */}
        <section>
          <h2 className="font-headline font-bold text-lg text-on-surface mb-3">
            3. Affiliate Links & Third Parties
          </h2>
          <p className="mb-3">
            PC Compare participates in affiliate programs with retailers including Amazon, Newegg, and
            Best Buy. When you click a &quot;Buy Now&quot; link, you are redirected to the retailer&apos;s website
            through our affiliate link.
          </p>
          <ul className="list-disc list-inside space-y-2 text-on-surface-variant ml-2">
            <li>
              We earn a small commission on qualifying purchases made through these links at no
              additional cost to you.
            </li>
            <li>
              Once you leave PC Compare, the retailer&apos;s own privacy policy governs how your data is handled.
            </li>
            <li>
              We do not share any personal data with affiliate partners. Affiliate tracking is handled
              through URL parameters only.
            </li>
          </ul>
        </section>

        {/* 4 */}
        <section>
          <h2 className="font-headline font-bold text-lg text-on-surface mb-3">
            4. Data Storage & Security
          </h2>
          <p>
            Your comparison lists and preferences are stored exclusively in your browser&apos;s local
            storage. We do not maintain user accounts or store personal information on our servers.
            Product data (prices, specs, ratings) is stored in our database and sourced from publicly
            available retailer information.
          </p>
        </section>

        {/* 5 */}
        <section>
          <h2 className="font-headline font-bold text-lg text-on-surface mb-3">
            5. Your Rights
          </h2>
          <ul className="list-disc list-inside space-y-2 text-on-surface-variant ml-2">
            <li>
              <strong className="text-on-surface">Clear your data:</strong> You can clear all locally
              stored data at any time by clearing your browser&apos;s localStorage or using your browser&apos;s
              &quot;Clear Site Data&quot; feature.
            </li>
            <li>
              <strong className="text-on-surface">Opt out of analytics:</strong> You can disable
              JavaScript or use browser extensions to prevent analytics collection.
            </li>
            <li>
              <strong className="text-on-surface">No account required:</strong> PC Compare does not
              require registration. You can use all features anonymously.
            </li>
          </ul>
        </section>

        {/* 6 */}
        <section>
          <h2 className="font-headline font-bold text-lg text-on-surface mb-3">
            6. Children&apos;s Privacy
          </h2>
          <p>
            PC Compare is not directed at children under 13. We do not knowingly collect any personal
            information from children.
          </p>
        </section>

        {/* 7 */}
        <section>
          <h2 className="font-headline font-bold text-lg text-on-surface mb-3">
            7. Changes to This Policy
          </h2>
          <p>
            We may update this privacy policy from time to time. Changes will be posted on this page
            with an updated &quot;Last updated&quot; date. Your continued use of PC Compare after changes
            constitutes acceptance of the revised policy.
          </p>
        </section>

        {/* 8 */}
        <section>
          <h2 className="font-headline font-bold text-lg text-on-surface mb-3">
            8. Contact
          </h2>
          <p>
            If you have questions about this privacy policy, you can reach us by opening an issue on
            our{" "}
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
