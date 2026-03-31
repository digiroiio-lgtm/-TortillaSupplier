'use client';
import { useState, useEffect, useRef } from 'react';

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '';
const WA_NUMBER = '905531229372';
const WA_MESSAGE = encodeURIComponent(
  'Hello, I just submitted a distributor inquiry on TortillaSupplier.com'
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', company: '', country: '', email: '', phone: '', product: '', volume: '', privateLabel: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const recaptchaReady = useRef(false);

  // Load reCAPTCHA v3 script once if the site key is configured
  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) return;
    const scriptId = 'recaptcha-v3';
    if (document.getElementById(scriptId)) {
      recaptchaReady.current = true;
      return;
    }
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.onload = () => { recaptchaReady.current = true; };
    document.body.appendChild(script);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Obtain reCAPTCHA v3 token if configured
      let recaptchaToken = '';
      if (RECAPTCHA_SITE_KEY && recaptchaReady.current && window.grecaptcha) {
        try {
          recaptchaToken = await Promise.race<string>([
            new Promise<string>((resolve) => {
              window.grecaptcha!.ready(async () => {
                const token = await window.grecaptcha!.execute(RECAPTCHA_SITE_KEY, { action: 'inquiry' });
                resolve(token);
              });
            }),
            // Timeout after 5 s — degrade gracefully (server accepts missing token when key not set)
            new Promise<string>((_, reject) =>
              setTimeout(() => reject(new Error('reCAPTCHA timeout')), 5000)
            ),
          ]);
        } catch (recaptchaErr) {
          console.warn('reCAPTCHA token generation failed:', recaptchaErr);
          // Proceed without token — API will reject only if RECAPTCHA_SECRET_KEY is configured
        }
      }

      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          // Honeypot: always empty on genuine submissions (bots fill it)
          _gotcha: '',
          recaptchaToken,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null) as { error?: string } | null;
        throw new Error(data?.error ?? 'Submission failed. Please try again.');
      }

      // Google Analytics conversion event
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'inquiry_submit', {
          event_category: 'engagement',
          event_label: form.company || form.name,
          value: 1,
        });
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#2d7a3a]/10 border border-[#2d7a3a]/30 rounded-2xl p-8 text-center space-y-5">
        <div className="w-12 h-12 bg-[#2d7a3a] rounded-full flex items-center justify-center mx-auto">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-[#1a1a1a] text-lg mb-1">Inquiry Submitted</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Thank you. Our export team will contact you within 24–48 hours.
          </p>
        </div>
        <div className="pt-2">
          <p className="text-xs text-gray-500 mb-3">Want a faster response? Reach us directly on WhatsApp:</p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1ebe5d] transition-colors text-sm"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — hidden from real users, bots fill it in */}
      <input
        type="text"
        name="_gotcha"
        defaultValue=""
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input required name="name" value={form.name} onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d7a3a]/30 focus:border-[#2d7a3a]" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company *</label>
          <input required name="company" value={form.company} onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d7a3a]/30 focus:border-[#2d7a3a]" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
          <input required name="country" value={form.country} onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d7a3a]/30 focus:border-[#2d7a3a]" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input required type="email" name="email" value={form.email} onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d7a3a]/30 focus:border-[#2d7a3a]" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp</label>
          <input name="phone" value={form.phone} onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d7a3a]/30 focus:border-[#2d7a3a]" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Product of Interest</label>
          <select name="product" value={form.product} onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d7a3a]/30 focus:border-[#2d7a3a]">
            <option value="">Select product type</option>
            <option value="flour">Flour Tortillas</option>
            <option value="corn">Corn Tortillas</option>
            <option value="frozen">Frozen Tortillas</option>
            <option value="wrap">Wrap Flatbreads</option>
            <option value="flatbread">Lavash Flatbreads</option>
            <option value="mixed">Mixed / Multiple</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Monthly Volume</label>
        <input name="volume" value={form.volume} onChange={handleChange} placeholder="e.g. 5,000 units / month"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d7a3a]/30 focus:border-[#2d7a3a]" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Private Label Required?</label>
        <div className="flex gap-4">
          {['Yes', 'No', 'Not sure yet'].map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="privateLabel"
                value={opt}
                checked={form.privateLabel === opt}
                onChange={handleChange}
                className="accent-[#2d7a3a]"
              />
              <span className="text-sm text-gray-700">{opt}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={4}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d7a3a]/30 focus:border-[#2d7a3a]" />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto px-8 py-3 bg-[#2d7a3a] text-white font-semibold rounded-md hover:bg-[#245f2d] transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending…' : 'Send Inquiry'}
      </button>
      {error && (
        <p className="text-sm text-red-600 mt-2">{error}</p>
      )}
    </form>
  );
}
