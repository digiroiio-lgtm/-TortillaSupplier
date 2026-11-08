'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';
import { BUYER_TYPES } from '@/lib/buyerGuide';

const inputClass =
  'w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d7a3a]/30 focus:border-[#2d7a3a]';

export default function BuyerGuideForm({ location = 'buyer_guide_page' }: { location?: string }) {
  const [form, setForm] = useState({ name: '', email: '', company: '', country: '', buyerType: '' });
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const startedRef = useRef(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onFocus = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    trackEvent('buyer_guide_form_start', { form_location: location, page_path: window.location.pathname });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, _gotcha: '', source: `${window.location.pathname} (${location})` }),
      });
      const data = (await res.json().catch(() => null)) as { downloadUrl?: string; error?: string } | null;
      if (!res.ok || !data?.downloadUrl) throw new Error(data?.error ?? 'Something went wrong. Please try again.');
      trackEvent('buyer_guide_download', {
        form_location: location,
        page_path: window.location.pathname,
        buyer_type: form.buyerType || 'unspecified',
      });
      setDownloadUrl(data.downloadUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (downloadUrl) {
    return (
      <div className="bg-[#2d7a3a]/10 border border-[#2d7a3a]/30 rounded-2xl p-6 text-center space-y-4">
        <h3 className="font-bold text-gray-900 text-lg">Your guide is ready</h3>
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener"
          className="inline-block px-6 py-3 bg-[#2d7a3a] text-white font-semibold rounded-lg hover:bg-[#245f2d] transition-colors text-sm"
        >
          Download the Buyer&apos;s Guide (PDF)
        </a>
        <p className="text-sm text-gray-600">
          Want prices for your volumes?{' '}
          <Link href="/contact" className="text-[#2d7a3a] font-semibold hover:underline">Request a container quote</Link>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} onFocus={onFocus} className="space-y-3">
      <input
        type="text"
        name="_gotcha"
        defaultValue=""
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor={`bg-name-${location}`} className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
          <input id={`bg-name-${location}`} required name="name" autoComplete="name" value={form.name} onChange={onChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor={`bg-email-${location}`} className="block text-sm font-medium text-gray-700 mb-1">Work email *</label>
          <input id={`bg-email-${location}`} required type="email" name="email" autoComplete="email" value={form.email} onChange={onChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor={`bg-country-${location}`} className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
          <input id={`bg-country-${location}`} required name="country" autoComplete="country-name" value={form.country} onChange={onChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor={`bg-company-${location}`} className="block text-sm font-medium text-gray-700 mb-1">Company</label>
          <input id={`bg-company-${location}`} name="company" autoComplete="organization" value={form.company} onChange={onChange} className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor={`bg-type-${location}`} className="block text-sm font-medium text-gray-700 mb-1">I am a…</label>
        <select id={`bg-type-${location}`} name="buyerType" value={form.buyerType} onChange={onChange} className={inputClass}>
          <option value="">Select buyer type</option>
          {BUYER_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 bg-[#2d7a3a] text-white font-semibold rounded-md hover:bg-[#245f2d] transition-colors text-sm disabled:opacity-60"
      >
        {loading ? 'Preparing…' : 'Get the Free Guide'}
      </button>
      <p className="text-xs text-gray-500">
        Free PDF. Our export team may follow up once by email. See our{' '}
        <Link href="/privacy-policy" className="underline">privacy policy</Link>.
      </p>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </form>
  );
}
