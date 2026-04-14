import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import EventsGrid from '@/components/EventsGrid';
import JsonLd from '@/components/JsonLd';
import events from '@/data/events';

const BASE_URL = 'https://tortillasupplier.com';
const PAGE_URL = `${BASE_URL}/events/global-food-beverage-trade-shows-2026`;

export const metadata: Metadata = {
  title: { absolute: '2026 Food & Beverage Expos for the Tortilla Industry | TortillaSupplier' },
  description:
    'A directory of the world\'s top 2026 food and beverage trade shows — Gulfood, Alimentaria, NRA Show, SIAL Paris, IFE Manufacturing, Food & Drink Expo, and more UK events — with dates, locations, and relevance to the global tortilla supply chain.',
  openGraph: {
    title: '2026 Food & Beverage Expos for the Tortilla Industry | TortillaSupplier',
    description:
      'Discover the most important 2026 Food & Beverage Expos for tortilla suppliers, distributors and food importers.',
    url: PAGE_URL,
  },
  alternates: { canonical: PAGE_URL },
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: '2026 Global Food & Beverage Trade Shows',
  url: PAGE_URL,
  numberOfItems: events.length,
  itemListElement: events.map((event, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: event.name,
    url: `${BASE_URL}/events/${event.slug}`,
  })),
};

export default function EventsHubPage() {
  return (
    <>
      <JsonLd data={collectionSchema} />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Events', href: '/events/global-food-beverage-trade-shows-2026' },
          { label: 'Global Food & Beverage Trade Shows 2026' },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#FAFAF8] border-b border-gray-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">
            Industry Events &amp; Expos
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4 max-w-3xl">
            2026 Food &amp; Beverage Expos: Global Trade Show Directory for the Tortilla Industry
          </h1>
          <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
            A curated directory of the world&apos;s most important food and beverage trade shows in 2026.
            Each event represents a key networking opportunity for tortilla distributors, importers and
            wholesale buyers across Europe, the United Kingdom, the Americas and the Middle East.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {['Europe', 'United Kingdom', 'Americas', 'Middle East'].map((region) => (
              <span
                key={region}
                className="px-3 py-1.5 bg-[#2d7a3a]/10 text-[#2d7a3a] text-xs font-semibold rounded-full"
              >
                {region}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Events grid with filter */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EventsGrid events={events} />
        </div>
      </section>

      {/* Why this matters */}
      <section className="py-14 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Why Trade Shows Matter for Tortilla Supply Chain Professionals
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mb-6">
            International food and beverage expos are the primary venue where wholesale buyers, importers
            and distributors discover new suppliers, benchmark product quality and establish long-term
            supply partnerships. For the global tortilla and flatbread sector, events such as Gulfood,
            SIAL Paris, Alimentaria and the NRA Show provide direct access to decision-makers across
            retail, foodservice and QSR channels.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mb-6">
            The United Kingdom is one of the world&apos;s most important hubs for food technology, retail
            chains and specialty food markets. UK Food Supply Chain events — including IFE Manufacturing,
            the Food &amp; Drink Expo and Lunch! — are essential reference points for London Food Technology
            developments and Specialty Food Distribution UK. We track UK&apos;s rapidly growing demand for
            authentic Mexican food products and tortilla innovations across these events.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
            TortillaSupplier monitors these events to ensure our product portfolio and export capabilities
            align with the latest market demands and innovation trends in the global tortilla supply chain.
          </p>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest text-center mb-6">
            Connecting with Industry Leaders at Global Expos
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              'Gulfood – Dubai',
              'Alimentaria – Barcelona',
              'NRA Show – Chicago',
              'SIAL Paris',
              'IFE Manufacturing – London',
              'Food & Drink Expo – Birmingham',
              'Speciality & Fine Food Fair – London',
              'Lunch! – London',
            ].map((show) => (
              <span key={show} className="text-xs text-gray-400 font-medium">
                {show}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Meeting at One of These Events?
          </h2>
          <p className="text-sm text-gray-500 mb-6 max-w-xl mx-auto">
            If you&apos;re attending any of these trade shows and would like to arrange a meeting with our
            export team, please get in touch in advance.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-6 py-3 bg-[#2d7a3a] text-white font-semibold rounded-lg hover:bg-[#245f2d] transition-colors text-sm"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
