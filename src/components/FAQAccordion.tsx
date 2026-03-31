'use client';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
      {items.map((item, i) => (
        <div key={i} className="bg-white">
          <button
            className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="font-medium text-[#1a1a1a] text-sm">{item.question}</span>
            <svg
              className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
