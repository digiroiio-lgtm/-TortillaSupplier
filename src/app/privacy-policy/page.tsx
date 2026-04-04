import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

const BASE_URL = 'https://tortillasupplier.com';

export const metadata: Metadata = {
  title: 'Privacy Policy | TortillaSupplier',
  description: 'Privacy Policy for TortillaSupplier.com — how we collect, use and protect your personal data.',
  alternates: { canonical: `${BASE_URL}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />

      <section className="bg-[#FAFAF8] border-b border-gray-200 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-400">Last updated: 1 January 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray prose-sm max-w-none">

          <h2>1. Introduction</h2>
          <p>
            TortillaSupplier (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the website
            at <strong>tortillasupplier.com</strong>. This Privacy Policy explains how we collect, use, and
            protect information that you provide when using our website or contacting us for wholesale enquiries.
          </p>

          <h3>2. Information We Collect</h3>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Contact information</strong> — name, email address, phone number, and company name when
              you submit a wholesale inquiry or contact form.
            </li>
            <li>
              <strong>Usage data</strong> — anonymised data about how visitors interact with our website,
              including pages viewed, time on site, and referring URLs, collected via analytics tools.
            </li>
            <li>
              <strong>Communication records</strong> — records of emails or WhatsApp messages you send us
              in connection with a wholesale enquiry.
            </li>
          </ul>

          <h3>3. How We Use Your Information</h3>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to wholesale enquiries and provide pricing information</li>
            <li>Process sample requests and export orders</li>
            <li>Improve the content and functionality of our website</li>
            <li>Send product updates or trade information to buyers who have opted in</li>
          </ul>
          <p>We do not sell or share your personal information with third parties for marketing purposes.</p>

          <h3>4. Data Retention</h3>
          <p>
            We retain contact information submitted through our inquiry forms for as long as is necessary
            to manage the business relationship, or for a maximum of 3 years from the date of last contact,
            unless a longer retention period is required by law.
          </p>

          <h3>5. Cookies</h3>
          <p>
            Our website uses cookies to support basic functionality and analytics. Please see our{' '}
            <Link href="/cookie-policy" className="text-[#2d7a3a] hover:underline">Cookie Policy</Link> for details
            on the types of cookies we use and how to manage them.
          </p>

          <h3>6. Your Rights</h3>
          <p>
            Depending on your location, you may have rights under applicable data protection law to access,
            correct, or request deletion of your personal data. To exercise any of these rights, please
            contact us at <a href="mailto:info@tortillasupplier.com" className="text-[#2d7a3a] hover:underline">info@tortillasupplier.com</a>.
          </p>

          <h3>7. Third-Party Services</h3>
          <p>
            Our website may use third-party services such as Google Analytics for website usage analytics.
            These services may set cookies and collect usage data in accordance with their own privacy policies.
          </p>

          <h3>8. Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. The date at the top of this page will reflect
            the most recent update. Continued use of the website after changes constitutes acceptance of the
            updated policy.
          </p>

          <h3>9. Contact</h3>
          <p>
            For questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:info@tortillasupplier.com" className="text-[#2d7a3a] hover:underline">
              info@tortillasupplier.com
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
