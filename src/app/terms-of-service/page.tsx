import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

const BASE_URL = 'https://tortillasupplier.com';

export const metadata: Metadata = {
  title: 'Terms of Service | TortillaSupplier',
  description: 'Terms of Service for TortillaSupplier.com — governing the use of our website and wholesale services.',
  alternates: { canonical: `${BASE_URL}/terms-of-service` },
};

export default function TermsOfServicePage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]} />

      <section className="bg-[#FAFAF8] border-b border-gray-200 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-400">Last updated: 1 January 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray prose-sm max-w-none">

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the TortillaSupplier website (&ldquo;Site&rdquo;), you agree to be
            bound by these Terms of Service. If you do not agree to these terms, please do not use the Site.
          </p>

          <h3>2. Use of the Site</h3>
          <p>
            This Site is intended for wholesale buyers, food distributors, importers, and foodservice
            professionals seeking information about our tortilla and flatbread products and export
            programmes. You agree to use the Site only for lawful purposes.
          </p>

          <h3>3. Information Accuracy</h3>
          <p>
            We endeavour to ensure that information on this Site is accurate and up to date. However,
            product specifications, pricing, and availability are subject to change. All pricing provided
            via the Site or contact forms is indicative and subject to formal quotation. Final terms are
            governed by written agreements between TortillaSupplier and the buyer.
          </p>

          <h3>4. Wholesale Enquiries</h3>
          <p>
            Submitting an enquiry through our contact form or WhatsApp does not constitute a binding
            order or contract. Orders are only binding when confirmed in writing by both parties.
            TortillaSupplier reserves the right to decline any enquiry or order at its discretion.
          </p>

          <h3>5. Intellectual Property</h3>
          <p>
            All content on this Site, including text, images, and design, is the property of
            TortillaSupplier or its licensors and is protected by applicable intellectual property laws.
            You may not reproduce or distribute content from this Site without prior written permission.
          </p>

          <h3>6. Limitation of Liability</h3>
          <p>
            To the maximum extent permitted by law, TortillaSupplier shall not be liable for any
            indirect, incidental, or consequential damages arising from your use of this Site or
            reliance on information published herein.
          </p>

          <h3>7. External Links</h3>
          <p>
            This Site may contain links to third-party websites. These links are provided for
            convenience only. TortillaSupplier has no control over, and accepts no responsibility
            for, the content of those sites.
          </p>

          <h3>8. Governing Law</h3>
          <p>
            These Terms of Service shall be governed by and construed in accordance with applicable
            commercial law. Any disputes arising from use of this Site shall be subject to the
            exclusive jurisdiction of the relevant courts.
          </p>

          <h3>9. Changes to These Terms</h3>
          <p>
            We may update these Terms of Service at any time. The date at the top of this page will
            reflect the most recent revision. Continued use of the Site constitutes acceptance of
            the revised terms.
          </p>

          <h3>10. Contact</h3>
          <p>
            For questions regarding these Terms of Service, please contact us at{' '}
            <a href="mailto:info@tortillasupplier.com" className="text-[#2d7a3a] hover:underline">
              info@tortillasupplier.com
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
