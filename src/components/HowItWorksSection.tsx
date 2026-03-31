import Link from 'next/link';

/* ── Step icon illustrations ── */

function IconInquiry() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      {/* Paper / form */}
      <rect x="16" y="12" width="38" height="48" rx="4" fill="#e8f4ec" stroke="#2d7a3a" strokeWidth="2" />
      <rect x="22" y="22" width="26" height="3" rx="1.5" fill="#2d7a3a" opacity="0.4" />
      <rect x="22" y="30" width="20" height="3" rx="1.5" fill="#2d7a3a" opacity="0.4" />
      <rect x="22" y="38" width="24" height="3" rx="1.5" fill="#2d7a3a" opacity="0.4" />
      {/* Chat bubble */}
      <rect x="38" y="42" width="26" height="20" rx="4" fill="#2d7a3a" />
      <path d="M44 60l-4 4v-4h4z" fill="#2d7a3a" />
      <circle cx="47" cy="52" r="2" fill="white" />
      <circle cx="54" cy="52" r="2" fill="white" />
      <circle cx="61" cy="52" r="2" fill="white" />
    </svg>
  );
}

function IconSamples() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      {/* Box */}
      <path d="M16 34l24-14 24 14v28l-24 8-24-8V34z" fill="#fff9ec" stroke="#f59e0b" strokeWidth="2" />
      <path d="M16 34l24 14 24-14" stroke="#f59e0b" strokeWidth="2" />
      <path d="M40 48v22" stroke="#f59e0b" strokeWidth="2" />
      {/* Tortilla stack inside */}
      <ellipse cx="40" cy="36" rx="10" ry="3" fill="#f59e0b" opacity="0.5" />
      <ellipse cx="40" cy="32" rx="10" ry="3" fill="#f59e0b" opacity="0.7" />
      <ellipse cx="40" cy="28" rx="10" ry="3" fill="#f59e0b" />
      {/* Ribbon */}
      <path d="M30 48h20" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
    </svg>
  );
}

function IconTerms() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      {/* Document */}
      <rect x="14" y="10" width="36" height="48" rx="4" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
      <rect x="20" y="20" width="24" height="2.5" rx="1.25" fill="#3b82f6" opacity="0.4" />
      <rect x="20" y="28" width="18" height="2.5" rx="1.25" fill="#3b82f6" opacity="0.4" />
      <rect x="20" y="36" width="22" height="2.5" rx="1.25" fill="#3b82f6" opacity="0.4" />
      {/* Handshake / signature */}
      <path d="M22 50 Q32 44 42 50" stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Green tick overlay */}
      <circle cx="54" cy="54" r="14" fill="#2d7a3a" />
      <path d="M47 54l5 5 9-9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconDispatch() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      {/* Container truck */}
      <rect x="8" y="32" width="44" height="26" rx="3" fill="#e8f4ec" stroke="#2d7a3a" strokeWidth="2" />
      <rect x="52" y="42" width="20" height="16" rx="3" fill="#2d7a3a" />
      <path d="M52 50h20" stroke="white" strokeWidth="1.5" />
      {/* Cabin window */}
      <rect x="55" y="44" width="10" height="6" rx="1.5" fill="#a7f3d0" />
      {/* Wheels */}
      <circle cx="20" cy="60" r="6" fill="#1f2937" />
      <circle cx="20" cy="60" r="3" fill="#9ca3af" />
      <circle cx="52" cy="60" r="6" fill="#1f2937" />
      <circle cx="52" cy="60" r="3" fill="#9ca3af" />
      <circle cx="68" cy="60" r="6" fill="#1f2937" />
      <circle cx="68" cy="60" r="3" fill="#9ca3af" />
      {/* Speed lines */}
      <path d="M4 40h8M4 46h6M4 52h8" stroke="#2d7a3a" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      {/* Stacked tortilla hint on container */}
      <ellipse cx="30" cy="38" rx="10" ry="2.5" fill="#f59e0b" opacity="0.6" />
      <ellipse cx="30" cy="35" rx="10" ry="2.5" fill="#f59e0b" opacity="0.8" />
      <ellipse cx="30" cy="32" rx="10" ry="2.5" fill="#f59e0b" />
    </svg>
  );
}

/* ── Curved arrows (SVG, alternating down / up) ── */

function ArrowDown() {
  // Curves from top-right of step N down to top-left of step N+1
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-10 text-gray-300"
      aria-hidden="true"
    >
      <path
        d="M10 10 C50 10 70 50 110 50"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="5 4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M105 43 L110 50 L103 53"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function ArrowUp() {
  // Curves from bottom-right of step N up to bottom-left of step N+1
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-10 text-gray-300"
      aria-hidden="true"
    >
      <path
        d="M10 50 C50 50 70 10 110 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="5 4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M105 17 L110 10 L103 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/* ── Step data ── */

const steps = [
  {
    num: '1',
    title: 'Submit Inquiry',
    description: 'Fill out the inquiry form or contact us via WhatsApp with your product, volume and destination requirements.',
    icon: <IconInquiry />,
    bg: 'bg-[#f0faf3]',
    ring: 'ring-[#c6e8cf]',
  },
  {
    num: '2',
    title: 'Receive Samples',
    description: 'We dispatch product samples with full technical datasheets and allergen declarations for your evaluation.',
    icon: <IconSamples />,
    bg: 'bg-[#fffbeb]',
    ring: 'ring-[#fde68a]',
  },
  {
    num: '3',
    title: 'Agree Terms',
    description: 'Confirm MOQ, pricing, packaging specification and delivery incoterms with our export team.',
    icon: <IconTerms />,
    bg: 'bg-[#eff6ff]',
    ring: 'ring-[#bfdbfe]',
  },
  {
    num: '4',
    title: 'Dispatch & Deliver',
    description: 'Your order is manufactured, packed and dispatched with full export documentation and cold-chain logistics.',
    icon: <IconDispatch />,
    bg: 'bg-[#f0faf3]',
    ring: 'ring-[#c6e8cf]',
    toast: true,
  },
];

// Arrows alternate: down on odd gaps, up on even gaps (matches reference pattern)
const arrows = [<ArrowDown key="a1" />, <ArrowUp key="a2" />, <ArrowDown key="a3" />];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Process</p>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">How It Works</h2>
        </div>

        {/* Steps row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-0">
          {steps.map((step, i) => (
            <div key={step.num} className="flex lg:flex-col items-start gap-6 lg:gap-0 mb-12 lg:mb-0">
              {/* Column content */}
              <div className="flex flex-col items-center lg:items-start flex-1">
                {/* Icon circle */}
                <div className={`relative w-28 h-28 rounded-full ${step.bg} ring-2 ${step.ring} flex items-center justify-center mb-6 flex-shrink-0`}>
                  {step.icon}

                  {/* Toast notification card on last step */}
                  {step.toast && (
                    <div className="absolute -bottom-4 -right-4 bg-white border border-gray-100 shadow-lg rounded-xl px-3 py-2 flex items-center gap-2 w-48">
                      <div className="w-8 h-8 rounded-full bg-[#2d7a3a] flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-900 leading-none">Order Confirmed</p>
                        <p className="text-[10px] text-gray-400 mt-0.5 leading-none">Container dispatched</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Text */}
                <div className="lg:mt-0 mt-0">
                  <h3 className="font-bold text-gray-900 mb-2 text-base">
                    {step.num}. {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">{step.description}</p>
                </div>
              </div>

              {/* Arrow connector (desktop only, not after last step) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center w-24 mt-10 flex-shrink-0 -mr-4 z-10">
                  {arrows[i]}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#2d7a3a] text-white font-semibold rounded-xl hover:bg-[#245f2d] transition-colors text-sm"
          >
            Start Your Inquiry
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/bulk-tortilla-supplier"
            className="inline-flex items-center gap-2 px-7 py-3 border border-gray-200 text-gray-700 font-medium rounded-xl hover:border-gray-300 hover:text-gray-900 transition-colors text-sm"
          >
            View container specs
          </Link>
        </div>
      </div>
    </section>
  );
}
