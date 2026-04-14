import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import ContactForm from '@/components/ContactForm';
import events from '@/data/events';

const BASE_URL = 'https://tortillasupplier.com';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return {};
  return {
    title: { absolute: event.metaTitle },
    description: event.metaDescription,
    openGraph: {
      title: event.metaTitle,
      description: event.metaDescription,
      url: `${BASE_URL}/events/${slug}`,
    },
    alternates: { canonical: `${BASE_URL}/events/${slug}` },
  };
}

export default async function EventPage({ params }: PageProps) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.metaDescription,
    location: {
      '@type': 'Place',
      name: event.location,
    },
    organizer: {
      '@type': 'Organization',
      name: 'TortillaSupplier',
      url: BASE_URL,
    },
    url: `${BASE_URL}/events/${slug}`,
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Trade Shows & Events', href: '/events/global-food-beverage-trade-shows-2026' },
    { label: event.name },
  ];

  return (
    <>
      <JsonLd data={eventSchema} />
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <section className="bg-[#FAFAF8] border-b border-gray-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">
            Trade Show
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4 max-w-3xl">
            {event.name}
          </h1>
          <p className="text-base text-gray-500 leading-relaxed max-w-2xl mb-6">
            {event.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700">
              📍 {event.location}
            </span>
            <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700">
              🗓 {event.dates}
            </span>
            <Link
              href="/contact"
              className="px-3 py-1.5 bg-[#2d7a3a] text-white rounded-full text-xs font-semibold hover:bg-[#245f2d] transition-colors"
            >
              Schedule a Meeting
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Hub page: list of events */}
        {event.isHubPage && event.hubEvents && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">2026 Food &amp; Beverage Trade Shows</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {event.hubEvents.map((hub) => (
                <Link
                  key={hub.slug}
                  href={`/events/${hub.slug}`}
                  className="group flex flex-col bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#2d7a3a] hover:shadow-sm transition-all"
                >
                  <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-[#2d7a3a] transition-colors">
                    {hub.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed flex-1">{hub.blurb}</p>
                  <span className="mt-3 text-xs font-semibold text-[#2d7a3a] group-hover:underline">
                    View event →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* About the Event */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{event.aboutHeading}</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-3xl">{event.aboutIntro}</p>
          <ul className="space-y-2">
            {event.aboutDetails.map((detail) => (
              <li key={detail} className="flex items-start gap-2.5 text-sm text-gray-600">
                <svg
                  className="w-4 h-4 text-[#2d7a3a] mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {detail}
              </li>
            ))}
          </ul>
        </section>

        {/* Why It Matters */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{event.industryHeading}</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-3xl">{event.industryIntro}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {event.industryPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 bg-[#FAFAF8] border border-gray-100 rounded-xl p-4"
              >
                <div className="w-6 h-6 rounded-full bg-[#2d7a3a]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-[#2d7a3a]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact / CTA */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Meet TortillaSupplier at {event.isHubPage ? 'Our 2026 Events' : event.name}
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-2xl">
            Schedule a meeting with our export team{event.isHubPage ? ' at any of our 2026 trade show appearances' : ` at ${event.name}`}. We can discuss wholesale tortilla supply, private label programmes, container pricing and export documentation.
          </p>
          <div className="max-w-2xl">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Request a Meeting or Quote</h3>
            <ContactForm />
          </div>
        </section>

        {/* Related pages */}
        {event.relatedSlugs.length > 0 && (
          <section className="border-t border-gray-100 pt-8">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Related Pages</h3>
            <div className="flex flex-wrap gap-3">
              {event.relatedSlugs.map((relSlug) => (
                <Link
                  key={relSlug}
                  href={`/${relSlug}`}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors"
                >
                  {relSlug
                    .split('-')
                    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                    .join(' ')}
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
