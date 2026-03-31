import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

const BASE_URL = 'https://www.tortillasupplier.com';

export const metadata: Metadata = {
  title: { absolute: 'Food Safety Certifications | TortillaSupplier' },
  description:
    'TortillaSupplier holds BRCGS, IFS, ISO 22000, HACCP and Halal certifications. Learn how our food safety standards support international wholesale and private label buyers.',
  openGraph: {
    title: 'Food Safety Certifications | TortillaSupplier',
    description:
      'BRCGS, IFS, ISO 22000 and HACCP certified tortilla manufacturer for international wholesale and private label buyers.',
    url: `${BASE_URL}/certifications`,
  },
  alternates: { canonical: `${BASE_URL}/certifications` },
};

const certifications = [
  {
    name: 'BRCGS Global Food Safety Standard',
    description:
      'The BRCGS (Brand Reputation through Compliance Global Standards) Food Safety Standard is the most widely recognised food safety certification in the UK and European retail supply chain. Our facility is BRCGS certified, enabling us to supply major supermarket chains and foodservice operators that require this standard from their suppliers.',
    relevance: 'Required by most UK and European supermarket private label programmes.',
  },
  {
    name: 'IFS Food Certification',
    description:
      'The International Featured Standards (IFS) Food certification is a globally recognised standard with strong adoption in Germany, France, Italy, and other European markets. IFS certification demonstrates compliance with food safety and quality management systems.',
    relevance: 'Widely required by European retail buyers, particularly in DACH and Southern Europe.',
  },
  {
    name: 'ISO 22000 Food Safety Management',
    description:
      'ISO 22000 is an internationally recognised standard for food safety management systems. It provides a framework for identifying and controlling food safety hazards throughout the supply chain. Our ISO 22000 certification is recognised by B2B buyers globally.',
    relevance: 'Recognised globally; often required by institutional and government buyers.',
  },
  {
    name: 'HACCP Production Controls',
    description:
      'Hazard Analysis and Critical Control Points (HACCP) is the foundational food safety management methodology used throughout our production process. All critical control points are monitored and documented, with corrective action procedures in place.',
    relevance: 'Mandatory for food production in most regulated markets.',
  },
  {
    name: 'Halal Certification',
    description:
      'Our production facility holds Halal certification, enabling us to supply buyers serving Muslim consumer markets across the Middle East, Southeast Asia, Europe, and the United Kingdom. Halal certificates can be provided upon request for each shipment.',
    relevance: 'Required for supply to Middle Eastern, Southeast Asian, and Muslim-majority markets.',
  },
];

export default function CertificationsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About Us', href: '/about' }, { label: 'Certifications' }]} />

      <section className="bg-[#FAFAF8] border-b border-gray-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Certifications</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4 max-w-2xl">
            Food Safety Certifications for International Wholesale Supply
          </h1>
          <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
            Our manufacturing facility holds all major food safety certifications required by international
            wholesale buyers, retailers, and foodservice operators. Certification documents are available
            upon request.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {['BRCGS', 'IFS', 'ISO 22000', 'HACCP', 'Halal'].map((cert) => (
              <span key={cert} className="px-3 py-1.5 bg-[#2d7a3a]/10 text-[#2d7a3a] text-xs font-semibold rounded-full">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {certifications.map((cert) => (
              <div key={cert.name} className="border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-sm transition-all">
                <h2 className="text-base font-bold text-gray-900 mb-2">{cert.name}</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{cert.description}</p>
                <p className="text-xs text-[#2d7a3a] font-semibold">
                  <span className="text-gray-400 font-normal">Market relevance: </span>
                  {cert.relevance}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Request Certification Documents</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-5 max-w-xl">
              Wholesale buyers and private label customers can request copies of our current certification
              documents as part of the supplier onboarding process. Please contact our export team.
            </p>
            <Link href="/contact" className="inline-flex px-5 py-2.5 bg-[#2d7a3a] text-white font-semibold rounded-lg hover:bg-[#245f2d] transition-colors text-sm">
              Request Certificates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
