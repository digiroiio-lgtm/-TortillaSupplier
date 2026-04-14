'use client';

import Link from 'next/link';
import events from '@/data/events';

const TODAY = '2026-04-14';

// Pick the next 4 upcoming events sorted by startDate
const upcomingEvents = events
  .filter((e) => e.startDate >= TODAY)
  .sort((a, b) => a.startDate.localeCompare(b.startDate))
  .slice(0, 4);

function trackCta(label: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'cta_click', {
      event_category: 'events_trust',
      event_label: label,
    });
  }
}

export default function EventsTrustSection() {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">
              Industry Events &amp; Expos
            </p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
              Where the Tortilla Industry Meets
            </h2>
            <p className="text-base text-gray-500 max-w-xl leading-relaxed">
              We track and attend the world&rsquo;s leading food &amp; beverage trade shows so our
              distributors stay ahead of supply chain trends and new product launches.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/events/global-food-beverage-trade-shows-2026"
              onClick={() => trackCta('view_all_events')}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-gray-700 text-sm font-semibold rounded-lg hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors"
            >
              View All 2026 Trade Shows
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Event cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {upcomingEvents.map((event) => (
            <div
              key={event.slug}
              className="flex flex-col bg-[#f8faf8] border border-gray-100 rounded-2xl p-5 hover:border-gray-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest leading-snug">
                  {event.location.region}
                </span>
                <span className="text-2xl leading-none">{event.emoji}</span>
              </div>

              <p className="text-sm font-bold text-gray-900 leading-snug mb-3">{event.name}</p>

              <div className="space-y-1 mb-4">
                <p className="text-xs text-gray-500">📅 {event.displayDate}</p>
                <p className="text-xs text-gray-500">
                  📍 {event.location.city}, {event.location.country}
                </p>
                <p className="text-xs text-gray-500">🏛 {event.location.venue}</p>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed flex-1 line-clamp-3 mb-5">
                {event.tortillaRelevance}
              </p>

              <div className="flex items-center gap-2 mt-auto">
                <Link
                  href={`/events/${event.slug}`}
                  onClick={() => trackCta(`event_detail_${event.slug}`)}
                  className="inline-flex px-3 py-1.5 bg-[#2d7a3a] text-white font-semibold rounded-lg hover:bg-[#245f2d] transition-colors text-xs"
                >
                  View Details
                </Link>
                <Link
                  href="/contact"
                  onClick={() => trackCta(`meet_at_${event.slug}`)}
                  className="inline-flex px-3 py-1.5 border border-gray-200 text-gray-600 font-semibold rounded-lg hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors text-xs"
                >
                  Meet Us There
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="bg-[#f8faf8] border border-gray-100 rounded-2xl px-7 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <p className="text-sm font-bold text-gray-900 mb-0.5">
              Attending a food trade show in 2026?
            </p>
            <p className="text-xs text-gray-500">
              Arrange a meeting with our export team at any of the events we track — or contact us
              directly for samples and container pricing.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link
              href="/events/global-food-beverage-trade-shows-2026"
              onClick={() => trackCta('events_hub_bottom')}
              className="px-5 py-2.5 bg-[#2d7a3a] text-white text-sm font-semibold rounded-lg hover:bg-[#245f2d] transition-colors"
            >
              See All 2026 Expos
            </Link>
            <Link
              href="/contact"
              onClick={() => trackCta('arrange_meeting_at_expo')}
              className="px-5 py-2.5 border border-gray-200 text-gray-700 text-sm font-semibold rounded-lg hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors"
            >
              Arrange a Meeting
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
