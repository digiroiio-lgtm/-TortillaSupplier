interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

// Native <details> keeps every answer in the server-rendered HTML. The pages
// that use this component publish the same Q&A as FAQPage JSON-LD, and Google
// requires that markup to match visible page content; crawlers that do not
// run JavaScript (most AI search bots) also need the answers in the HTML.
export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
      {items.map((item, i) => (
        <details key={i} className="group bg-white">
          <summary className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <span className="font-medium text-[#1a1a1a] text-sm">{item.question}</span>
            <svg
              className="w-4 h-4 text-gray-500 flex-shrink-0 transition-transform group-open:rotate-180"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
