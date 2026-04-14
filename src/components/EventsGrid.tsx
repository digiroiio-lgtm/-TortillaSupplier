'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { TradeEvent, EventRegion } from '@/data/events';

const REGIONS: Array<EventRegion | 'All'> = ['All', 'Europe', 'United Kingdom', 'Americas', 'Middle East', 'Asia'];

interface EventsGridProps {
  events: TradeEvent[];
}

export default function EventsGrid({ events }: EventsGridProps) {
  const [activeRegion, setActiveRegion] = useState<EventRegion | 'All'>('All');

  const filtered =
    activeRegion === 'All'
      ? events
      : events.filter((e) => e.location.region === activeRegion);

  return (
    <>
      {/* Region filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {REGIONS.map((region) => (
          <button
            key={region}
            onClick={() => setActiveRegion(region)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
              activeRegion === region
                ? 'bg-[#2d7a3a] text-white border-[#2d7a3a]'
                : 'bg-white text-gray-600 border-gray-200 hover:border-[#2d7a3a] hover:text-[#2d7a3a]'
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      {/* Cards */}
      {filtered.length === 0 ? (
        <p className="text-sm text-gray-500">No events found for this region yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filtered.map((event) => (
            <div
              key={event.slug}
              className="flex flex-col border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-sm transition-all bg-white"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest">
                    {event.location.region}
                  </span>
                  <h2 className="text-base font-bold text-gray-900 mt-1 leading-snug">
                    {event.name}
                  </h2>
                </div>
                <span className="text-3xl leading-none">{event.emoji}</span>
              </div>

              <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-500">
                <span>📅 {event.displayDate}</span>
                <span>📍 {event.location.city}, {event.location.country}</span>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5 line-clamp-3">
                {event.description}
              </p>

              <div className="flex items-center gap-3">
                <Link
                  href={`/events/${event.slug}`}
                  className="inline-flex px-4 py-2 bg-[#2d7a3a] text-white font-semibold rounded-lg hover:bg-[#245f2d] transition-colors text-xs"
                >
                  View Details
                </Link>
                <a
                  href={event.officialUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex px-4 py-2 border border-gray-200 text-gray-600 font-semibold rounded-lg hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors text-xs"
                >
                  Official Website ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
