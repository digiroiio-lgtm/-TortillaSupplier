import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

const BASE_URL = 'https://tortillasupplier.com';

export const metadata: Metadata = {
  title: 'Cookie Policy | TortillaSupplier',
  description: 'Cookie Policy for TortillaSupplier.com — details on the cookies we use and how to manage your preferences.',
  alternates: { canonical: `${BASE_URL}/cookie-policy` },
};

export default function CookiePolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Cookie Policy' }]} />

      <section className="bg-[#FAFAF8] border-b border-gray-200 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
          <p className="text-sm text-gray-400">Last updated: 1 January 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray prose-sm max-w-none">

          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device when you visit a website.
            They are widely used to make websites work more efficiently and to provide basic analytical
            information to site owners.
          </p>

          <h3>2. How We Use Cookies</h3>
          <p>
            TortillaSupplier uses cookies to support the following purposes:
          </p>

          <h4>Essential Cookies</h4>
          <p>
            These cookies are necessary for the website to function correctly. They enable core
            functionality such as page navigation and access to secure areas. The website cannot
            function properly without these cookies. No consent is required for essential cookies.
          </p>

          <h4>Analytics Cookies</h4>
          <p>
            We use analytics cookies (such as those provided by Google Analytics) to understand how
            visitors interact with our website. These cookies collect anonymised information including
            pages visited, time spent on the site, and the source of traffic. This data helps us improve
            the site experience for wholesale buyers.
          </p>

          <h3>3. Third-Party Cookies</h3>
          <p>
            Some cookies on our site are set by third-party services. These may include:
          </p>
          <ul>
            <li>
              <strong>Google Analytics</strong> — used to collect anonymised usage data. You can opt out
              of Google Analytics by installing the{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#2d7a3a] hover:underline">
                Google Analytics Opt-out Browser Add-on
              </a>.
            </li>
            <li>
              <strong>WhatsApp</strong> — if you interact with our WhatsApp chat button, WhatsApp may
              set cookies or track interactions in accordance with their own privacy policy.
            </li>
          </ul>

          <h3>4. Managing Cookies</h3>
          <p>
            You can control and manage cookies through your browser settings. Most browsers allow you
            to block or delete cookies. Please note that disabling cookies may affect the functionality
            of some parts of our website.
          </p>
          <p>
            For guidance on managing cookies in your specific browser, please refer to your browser&apos;s
            help documentation.
          </p>

          <h3>5. Changes to This Policy</h3>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in the cookies we
            use or in applicable regulations. The date at the top of this page reflects the most recent
            revision.
          </p>

          <h3>6. Contact</h3>
          <p>
            For questions about our use of cookies, please contact us at{' '}
            <a href="mailto:info@tortillasupplier.com" className="text-[#2d7a3a] hover:underline">
              info@tortillasupplier.com
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
