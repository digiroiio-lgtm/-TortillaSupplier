import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import events from '@/data/events';

const BASE_URL = 'https://tortillasupplier.com';

interface PageProps {
  params: Promise<{ 'event-slug': string }>;
}

export async function generateStaticParams() {
  return events.map((e) => ({ 'event-slug': e.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { 'event-slug': slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return {};
  const url = `${BASE_URL}/events/${slug}`;
  return {
    title: {
      absolute: `${event.name} – ${event.location.city} ${event.startDate.slice(0, 4)} | TortillaSupplier`,
    },
    description: `${event.name}: ${event.displayDate} at ${event.location.venue}, ${event.location.city}. ${event.tortillaRelevance}`,
    openGraph: {
      title: `${event.name} – ${event.location.city} ${event.startDate.slice(0, 4)}`,
      description: event.description,
      url,
    },
    alternates: { canonical: url },
  };
}

export default async function EventPage({ params }: PageProps) {
  const { 'event-slug': slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  const eventSchema = {
    '@context': 'https://schema.org',
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
    description: event.description,
    organizer: {
      '@type': 'Organization',
      name: event.name,
      url: event.officialUrl,
    },
  };

  return (
    <>
      <JsonLd data={eventSchema} />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Events', href: '/events/global-food-beverage-trade-shows-2026' },
          { label: event.name },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#FAFAF8] border-b border-gray-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-5">
            <span className="text-5xl leading-none">{event.emoji}</span>
            <div>
              <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-2">
                {event.location.region} · Industry Event
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4 max-w-2xl">
                {event.name}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <span>📅 {event.displayDate}</span>
                <span>📍 {event.location.venue}, {event.location.city}, {event.location.country}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">

              {/* About the event */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-3">About the Event</h2>
                <p className="text-sm text-gray-600 leading-relaxed">{event.description}</p>
              </div>

              {/* Tortilla industry relevance */}
              <div className="border-l-4 border-[#2d7a3a] pl-5 py-1">
                <h2 className="text-base font-bold text-gray-900 mb-2">
                  Why It Matters to the Tortilla Industry
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">{event.tortillaRelevance}</p>
              </div>

              {/* Our presence / networking */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h2 className="text-base font-bold text-gray-900 mb-2">Our Presence &amp; Networking</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  TortillaSupplier tracks and participates in key industry events to stay aligned with
                  the latest trends in the global tortilla supply chain — including cold chain innovation,
                  private label demand and new distribution formats. If you are attending{' '}
                  <strong>{event.name}</strong> and would like to arrange a meeting, please contact our
                  export team in advance.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex px-5 py-2.5 bg-[#2d7a3a] text-white font-semibold rounded-lg hover:bg-[#245f2d] transition-colors text-sm"
                >
                  Get in Touch →
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Event details */}
              <div className="border border-gray-100 rounded-2xl p-5">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Event Details</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">Dates</dt>
                    <dd className="text-gray-700">{event.displayDate}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">Venue</dt>
                    <dd className="text-gray-700">{event.location.venue}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">Location</dt>
                    <dd className="text-gray-700">{event.location.city}, {event.location.country}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">Region</dt>
                    <dd className="text-gray-700">{event.location.region}</dd>
                  </div>
                </dl>
              </div>

              {/* Official website */}
              <div className="border border-gray-100 rounded-2xl p-5">
                <h3 className="text-sm font-bold text-gray-900 mb-3">Official Resources</h3>
                <a
                  href={event.officialUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#2d7a3a] font-semibold hover:underline"
                >
                  Official Website ↗
                </a>
                <p className="text-xs text-gray-400 mt-1">
                  Registration, floor plans and exhibitor information are available on the official event website.
                </p>
              </div>

              {/* Back to directory */}
              <div className="border border-gray-100 rounded-2xl p-5">
                <h3 className="text-sm font-bold text-gray-900 mb-3">Event Directory</h3>
                <Link
                  href="/events/global-food-beverage-trade-shows-2026"
                  className="text-sm text-[#2d7a3a] font-semibold hover:underline"
                >
                  ← View All 2026 Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
