'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { TradeEvent, EventRegion } from '@/data/events';

const REGIONS: Array<EventRegion | 'All'> = ['All', 'Europe', 'United Kingdom', 'Americas', 'Middle East', 'Asia'];

const TODAY = new Date().toISOString().slice(0, 10);

interface EventsGridProps {
  events: TradeEvent[];
}

export default function EventsGrid({ events }: EventsGridProps) {
  const [activeRegion, setActiveRegion] = useState<EventRegion | 'All'>('All');

  const filtered =
    activeRegion === 'All'
      ? events
      : events.filter((e) => e.location.region === activeRegion);

  const upcomingCount = filtered.filter((e) => e.endDate >= TODAY).length;
  const pastCount = filtered.filter((e) => e.endDate < TODAY).length;

  return (
    <>
      {/* Region filter */}
      <div className="flex flex-wrap gap-2 mb-6">
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

      {/* Summary counts */}
      {filtered.length > 0 && (
        <div className="flex items-center gap-4 mb-8 text-xs text-gray-500">
          <span>
            <span className="font-semibold text-[#2d7a3a]">{upcomingCount}</span> upcoming
          </span>
          {pastCount > 0 && (
            <span>
              <span className="font-semibold text-gray-400">{pastCount}</span> past
            </span>
          )}
          <span className="ml-auto text-gray-400 italic">
            Dates verified April 2026 — always confirm with the official event website.
          </span>
        </div>
      )}

      {/* Cards */}
      {filtered.length === 0 ? (
        <p className="text-sm text-gray-500">No events found for this region yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filtered.map((event) => {
            const isPast = event.endDate < TODAY;
            return (
              <div
                key={event.slug}
                className={`flex flex-col border rounded-2xl p-6 transition-all bg-white ${
                  isPast
                    ? 'border-gray-100 opacity-70 hover:opacity-90'
                    : 'border-gray-100 hover:border-gray-200 hover:shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest">
                        {event.location.region}
                      </span>
                      {isPast && (
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] font-semibold rounded-full uppercase tracking-wide">
                          Past Event
                        </span>
                      )}
                      {!isPast && (
                        <span className="px-2 py-0.5 bg-[#2d7a3a]/10 text-[#2d7a3a] text-[10px] font-semibold rounded-full uppercase tracking-wide">
                          Upcoming
                        </span>
                      )}
                    </div>
                    <h2 className="text-base font-bold text-gray-900 leading-snug">
                      {event.name}
                    </h2>
                  </div>
                  <span className="text-3xl leading-none flex-shrink-0">{event.emoji}</span>
                </div>

                <div className="flex flex-col gap-1 mb-4 text-xs text-gray-500">
                  <span>📅 {event.displayDate}</span>
                  <span>🏛 {event.location.venue}</span>
                  <span>📍 {event.location.city}, {event.location.country}</span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5 line-clamp-3">
                  {event.description}
                </p>

                <div className="flex items-center gap-3 flex-wrap">
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
                    Verify Dates ↗
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
