import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Breadcrumb from '@/components/Breadcrumb';
import FAQAccordion from '@/components/FAQAccordion';
import JsonLd from '@/components/JsonLd';

const contactFAQs = [
  { question: 'How quickly will I get a response?', answer: 'Our export team responds within 1–2 business days with pricing and product information.' },
  { question: 'What information should I include in my inquiry?', answer: 'Include the products you need, target quantities, and destination country so our team can prepare accurate container pricing.' },
  { question: 'Which markets do you export to?', answer: 'We export to the United Kingdom, United States, European Union, and Middle East & GCC markets.' },
  { question: 'Can I reach the export team on WhatsApp?', answer: 'Yes — you can message our export team directly on WhatsApp for a faster response.' },
];

const contactFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: contactFAQs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

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
      <JsonLd data={contactFaqSchema} />
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

          <div className="mt-16 max-w-3xl">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Frequently Asked Questions</h2>
            <FAQAccordion items={contactFAQs} />
          </div>
        </div>
      </section>
    </>
  );
}
