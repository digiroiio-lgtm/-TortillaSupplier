import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: { absolute: 'Contact | Wholesale Tortilla Pricing | TortillaSupplier' },
  description: 'Send a wholesale inquiry for tortillas and flatbreads. Export supply to UK, USA and Europe.',
  openGraph: {
    title: 'Contact | Wholesale Tortilla Pricing | TortillaSupplier',
    description: 'Send a wholesale inquiry for tortillas and flatbreads. Export supply to UK, USA and Europe.',
    url: 'https://tortillasupplier.com/contact',
  },
  alternates: { canonical: 'https://tortillasupplier.com/contact' },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
      <section className="bg-[#FAFAF8] border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#1a1a1a] mb-2">Contact Our Export Team</h1>
          <p className="text-gray-500 text-sm max-w-xl">Submit your wholesale inquiry and our team will respond within 1–2 business days with pricing and product information.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Send an Inquiry</h2>
              <div className="mb-8 p-5 bg-[#FAFAF8] border border-gray-200 rounded-xl">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">For a faster, more accurate quote, tell us:</h3>
                <ul className="space-y-1.5 text-sm text-gray-600 list-disc pl-5">
                  <li>Product type: flour, corn, wrap, flatbread, fresh or frozen</li>
                  <li>Size and pack format (for example 20cm, 25cm, 30cm; retail or catering pack)</li>
                  <li>Expected volume per month, or pallets and containers per order</li>
                  <li>Destination country and port or delivery address</li>
                  <li>Standard range or private label (with your branding requirements)</li>
                </ul>
                <p className="mt-3 text-xs text-gray-500">
                  Not sure about sizes or storage? See the{' '}
                  <Link href="/tortilla-size-chart" className="text-[#2d7a3a] hover:underline">tortilla size chart</Link>
                  {' '}and{' '}
                  <Link href="/tortilla-shelf-life" className="text-[#2d7a3a] hover:underline">shelf life guide</Link>.
                </p>
              </div>
              <ContactForm />
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">What happens next</h3>
                <ol className="space-y-2 text-sm text-gray-600 list-decimal pl-5">
                  <li>Our export team reviews your requirements.</li>
                  <li>We reply within 1–2 business days with pricing and product information.</li>
                  <li>We agree specifications, packaging and documentation for your market.</li>
                </ol>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">Email</h3>
                  <a href="mailto:info@tortillasupplier.com" className="text-sm text-[#2d7a3a] hover:underline">info@tortillasupplier.com</a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">WhatsApp</h3>
                  <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="text-sm text-[#2d7a3a] hover:underline">+90 535 399 89 99</a>
                </div>
                <div className="mt-6 p-4 bg-[#FAFAF8] border border-gray-200 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Export Markets</h3>
                  <ul className="space-y-1 text-sm text-gray-500">
                    <li>United Kingdom</li>
                    <li>United States</li>
                    <li>European Union</li>
                    <li>Middle East &amp; GCC</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
