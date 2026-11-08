import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import BuyerGuideForm from '@/components/BuyerGuideForm';

const URL = 'https://tortillasupplier.com/tortilla-buyer-guide';
const TITLE = "Free Wholesale Tortilla Buyer's Guide (PDF) | TortillaSupplier";
const DESCRIPTION =
  'Download the free wholesale tortilla buyer’s guide: specifications for every size, MOQ, lead times, container capacities, import documents and a landed-cost checklist.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL },
  alternates: { canonical: URL },
};

const INSIDE = [
  { title: 'Supply at a glance', body: 'MOQ, lead times, private label timelines and sample delivery in one page.' },
  { title: 'Full specification tables', body: 'Diameter, weight, pieces per pack, cases per pallet and shelf life for flour, corn, frozen, wrap and flatbread lines.' },
  { title: 'Container capacities', body: '20ft and 40ft reefer loads, pallet counts and typical transit times to the EU, UK and North America.' },
  { title: 'Import documents', body: 'The certificates and paperwork UK and EU importers need, including commodity code and cold-chain records.' },
  { title: 'Landed-cost checklist', body: 'How wholesale tortilla pricing is built — product, packaging, incoterms, freight, duty and storage.' },
  { title: 'Request-for-quote checklist', body: 'The six details that get you an accurate container quote fastest.' },
];

export default function BuyerGuidePage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: "Buyer's Guide" }]} />
      <section className="bg-[#FAFAF8] border-b border-gray-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Free PDF · 6 pages</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Wholesale Tortilla Buyer&apos;s Guide
            </h1>
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              Everything distributors, importers and foodservice buyers need before ordering tortillas by the pallet or
              container — in one printable guide from a BRCGS-certified manufacturer.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Specs for 35+ tortilla and flatbread products</li>
              <li>✓ MOQ: 1 pallet per SKU · lead times 2–6 weeks</li>
              <li>✓ UK and EU import document checklist</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Get the free guide</h2>
            <BuyerGuideForm location="buyer_guide_page" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-8">What&apos;s inside</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INSIDE.map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
