import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import EventsGrid from '@/components/EventsGrid';
import JsonLd from '@/components/JsonLd';
import events from '@/data/events';

const BASE_URL = 'https://tortillasupplier.com';
const PAGE_URL = `${BASE_URL}/events/global-food-beverage-trade-shows-2026`;

export const metadata: Metadata = {
  title: { absolute: '2026 Global Food & Beverage Trade Shows for Tortilla Distributors | TortillaSupplier' },
  description:
    'Complete directory of 2026 food & beverage trade shows — Gulfood, Alimentaria, NRA Show, SIAL Paris, IFE Manufacturing, Food & Drink Expo and more. Dates, venues and tortilla supply chain relevance for distributors and importers.',
  openGraph: {
    title: '2026 Global Food & Beverage Trade Shows for Tortilla Distributors | TortillaSupplier',
    description:
      'Complete 2026 trade show directory for tortilla suppliers, distributors and food importers — with dates, venues and tortilla industry relevance for every major global event.',
    url: PAGE_URL,
  },
  alternates: { canonical: PAGE_URL },
};

const sortedEvents = [...events].sort((a, b) => a.startDate.localeCompare(b.startDate));

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: '2026 Global Food & Beverage Trade Shows — Tortilla Industry Directory',
  description:
    'A curated directory of the world\'s leading 2026 food and beverage trade shows for tortilla distributors, importers and wholesale buyers.',
  url: PAGE_URL,
  numberOfItems: events.length,
  itemListElement: sortedEvents.map((event, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: event.name,
    url: `${BASE_URL}/events/${event.slug}`,
    item: {
      '@type': 'Event',
      name: event.name,
      startDate: event.startDate,
      endDate: event.endDate,
      location: {
        '@type': 'Place',
        name: event.location.venue,
        address: {
          '@type': 'PostalAddress',
          addressLocality: event.location.city,
          addressCountry: event.location.country,
        },
      },
      url: event.officialUrl,
    },
  })),
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the most important food trade shows for tortilla suppliers in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most important 2026 food trade shows for tortilla suppliers are: Gulfood (Dubai, January), IFE Manufacturing (London, March), Alimentaria (Barcelona, March), NRA Show (Chicago, May), Speciality & Fine Food Fair (London, September), Lunch! (London, September) and SIAL Paris (October). Each event connects tortilla distributors with international retail, foodservice and wholesale buyers.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is Gulfood 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gulfood 2026 is scheduled for January 26–30, 2026, at the Dubai World Trade Centre, Dubai, UAE. It is the world\'s largest annual food and beverage trade show, attracting over 5,000 exhibitors and 97,000+ trade visitors from 190+ countries.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is SIAL Paris 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SIAL Paris 2026 is scheduled for October 18–22, 2026, at Paris Nord Villepinte, France. SIAL is the world\'s largest food innovation exhibition and a key event for international tortilla supply chain professionals connecting with European retail and foodservice buyers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What UK food trade shows are happening in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key UK food and beverage trade shows in 2026 include: IFE Manufacturing (March 17–19, ExCeL London), The Food & Drink Expo (April 27–29, NEC Birmingham), London Wine Fair (May 18–20, Olympia London), Imbibe Live (June 29–30, Olympia London), Speciality & Fine Food Fair (September 7–9, Olympia London) and Lunch! (September 24–25, ExCeL London).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I arrange a meeting with TortillaSupplier at a food trade show?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. TortillaSupplier tracks and participates in key global food and beverage trade shows. If you are attending any of the events listed on this page and would like to arrange a meeting with our export team, please contact us in advance via our contact page or WhatsApp. We can arrange distributor pricing discussions, product samples and container supply quotes at or around the event.',
      },
    },
  ],
};

const certBadges = [
  { abbr: 'BRCGS', label: 'Grade A' },
  { abbr: 'IFS', label: 'Certified' },
  { abbr: 'ISO\n22000', label: 'Certified' },
  { abbr: 'HALAL', label: 'On request' },
];

export default function EventsHubPage() {
  return (
    <>
      <JsonLd data={collectionSchema} />
      <JsonLd data={faqSchema} />

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
            2026 Food &amp; Beverage Trade Shows: Global Expo Directory for Tortilla Distributors &amp; Importers
          </h1>
          <p className="text-base text-gray-500 leading-relaxed max-w-2xl mb-4">
            A curated directory of the world&rsquo;s {events.length} most important food and beverage trade shows
            in 2026 — with dates, venues and supply chain relevance for tortilla distributors, importers
            and wholesale buyers across Europe, the United Kingdom, the Americas and the Middle East.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {['Europe', 'United Kingdom', 'Americas', 'Middle East'].map((region) => (
              <span
                key={region}
                className="px-3 py-1.5 bg-[#2d7a3a]/10 text-[#2d7a3a] text-xs font-semibold rounded-full"
              >
                {region}
              </span>
            ))}
          </div>
          {/* Date accuracy notice */}
          <div className="inline-flex items-start gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs text-gray-500 max-w-xl">
            <svg className="w-4 h-4 text-[#2d7a3a] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              <strong className="text-gray-700">Dates verified April 2026.</strong> Event schedules may change — always confirm with the official event website before booking travel.
            </span>
          </div>
        </div>
      </section>

      {/* Events grid with filter */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EventsGrid events={events} />
        </div>
      </section>

      {/* Quick-reference date table */}
      <section className="py-14 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            2026 Food &amp; Beverage Trade Show Calendar — Quick Reference
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-6 text-xs font-semibold text-gray-400 uppercase tracking-widest">Event</th>
                  <th className="text-left py-3 pr-6 text-xs font-semibold text-gray-400 uppercase tracking-widest">Dates</th>
                  <th className="text-left py-3 pr-6 text-xs font-semibold text-gray-400 uppercase tracking-widest">Venue</th>
                  <th className="text-left py-3 pr-6 text-xs font-semibold text-gray-400 uppercase tracking-widest hidden md:table-cell">Region</th>
                </tr>
              </thead>
              <tbody>
                {sortedEvents.map((event) => (
                  <tr key={event.slug} className="border-b border-gray-100 hover:bg-white transition-colors">
                    <td className="py-3 pr-6 font-medium text-gray-900">
                      <Link href={`/events/${event.slug}`} className="hover:text-[#2d7a3a] transition-colors">
                        {event.name}
                      </Link>
                    </td>
                    <td className="py-3 pr-6 text-gray-600 whitespace-nowrap">{event.displayDate}</td>
                    <td className="py-3 pr-6 text-gray-600">{event.location.venue}, {event.location.city}</td>
                    <td className="py-3 pr-6 text-gray-400 text-xs hidden md:table-cell">{event.location.region}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why this matters */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Why Global Food Trade Shows Matter for Tortilla Supply Chain Professionals
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mb-6">
            International food and beverage expos are the primary venue where wholesale buyers, importers
            and distributors discover new suppliers, benchmark product quality and establish long-term
            supply partnerships. For the global tortilla and flatbread sector, events such as Gulfood,
            SIAL Paris, Alimentaria and the NRA Show provide direct access to decision-makers across
            retail, foodservice and QSR channels.
          </p>
          <h3 className="text-base font-bold text-gray-900 mb-3">
            UK Food Supply Chain Events &amp; London Food Technology Developments
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mb-6">
            The United Kingdom is one of the world&rsquo;s most important hubs for food technology, retail
            chains and specialty food markets. UK Food Supply Chain events — including IFE Manufacturing,
            the Food &amp; Drink Expo, Speciality &amp; Fine Food Fair and Lunch! — are essential reference points
            for London Food Technology developments and Specialty Food Distribution UK. TortillaSupplier
            tracks UK&rsquo;s rapidly growing demand for authentic Mexican food products and tortilla innovations
            across these events.
          </p>
          <h3 className="text-base font-bold text-gray-900 mb-3">
            Middle East &amp; Global Tortilla Export Opportunities
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
            Gulfood in Dubai remains the world&rsquo;s largest annual food trade show and the definitive venue
            for tortilla suppliers targeting GCC, MENA and wider Asian export markets. TortillaSupplier
            monitors all listed events to ensure our product portfolio — including BRCGS-certified flour
            tortillas, corn tortillas and frozen formats — aligns with the latest demand signals from
            international retail, foodservice and QSR buyers.
          </p>
        </div>
      </section>

      {/* Brand trust: certifications + distributor markets */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest text-center mb-6">
            TortillaSupplier — Certified Exporter Trusted by Distributors in 30+ Markets
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {certBadges.map((cert) => (
              <div
                key={cert.abbr}
                className="flex flex-col items-center justify-center w-20 h-20 bg-white border border-gray-200 rounded-2xl shadow-sm"
              >
                <span className="text-[11px] font-bold text-[#2d7a3a] text-center leading-tight whitespace-pre-line">
                  {cert.abbr}
                </span>
                <span className="text-[10px] text-gray-400 mt-0.5">{cert.label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-2">
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
          <p className="text-center mt-4">
            <Link
              href="/certifications"
              className="text-xs font-semibold text-[#2d7a3a] hover:underline"
            >
              View all food safety certifications →
            </Link>
          </p>
        </div>
      </section>

      {/* CTA — upgraded to triple */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Attending a 2026 Food Trade Show? Let&rsquo;s Connect.
          </h2>
          <p className="text-sm text-gray-500 mb-8 max-w-xl mx-auto">
            If you&rsquo;re attending any of these expos and would like to arrange a meeting with our export
            team — or simply want distributor pricing and product samples ahead of the event — get in
            touch now.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#2d7a3a] text-white font-semibold rounded-lg hover:bg-[#245f2d] transition-colors text-sm"
            >
              Arrange a Meeting at the Expo
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors text-sm"
            >
              Request Distributor Pricing
            </Link>
            <a
              href="https://wa.me/905531229372?text=Hello%2C%20I%20am%20attending%20a%20food%20trade%20show%20and%20would%20like%20to%20discuss%20tortilla%20supply%20options."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors text-sm"
            >
              WhatsApp Sales Team
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
