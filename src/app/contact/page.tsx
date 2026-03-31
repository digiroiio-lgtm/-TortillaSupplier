import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: { absolute: 'Contact | Request Wholesale Tortilla Pricing | TortillaSupplier' },
  description: 'Send a wholesale inquiry for tortillas and flatbreads. Export supply to UK, USA and Europe.',
  openGraph: {
    title: 'Contact | Request Wholesale Tortilla Pricing | TortillaSupplier',
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
              <ContactForm />
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
                  <a href="https://wa.me/905531229372" target="_blank" rel="noopener noreferrer" className="text-sm text-[#2d7a3a] hover:underline">+90 553 122 93 72</a>
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
