import Link from 'next/link';
import { BUYER_GUIDE_PAGE } from '@/lib/buyerGuide';

/** Compact promo for the free buyer's guide, for informational pages. */
export default function BuyerGuideCTA({ ctaId }: { ctaId: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 max-w-3xl border border-[#d6e6d8] bg-[#f4f8f4] rounded-xl px-5 py-4">
      <div className="text-3xl" aria-hidden="true">📘</div>
      <div className="flex-1">
        <p className="text-sm font-bold text-gray-900">Free: Wholesale Tortilla Buyer&apos;s Guide (PDF)</p>
        <p className="text-sm text-gray-600">Specs for every size, MOQ, lead times, container capacities and a landed-cost checklist.</p>
      </div>
      <Link
        href={BUYER_GUIDE_PAGE}
        data-cta={ctaId}
        className="shrink-0 px-4 py-2 bg-white border border-[#2d7a3a] text-[#2d7a3a] font-semibold rounded-lg hover:bg-[#2d7a3a] hover:text-white transition-colors text-sm text-center"
      >
        Get the Free Guide
      </Link>
    </div>
  );
}
