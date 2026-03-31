'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', company: '', country: '', email: '', phone: '', product: '', volume: '', privateLabel: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Submission failed. Please try again.');
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
      <div className="bg-[#2d7a3a]/10 border border-[#2d7a3a]/30 rounded-lg p-8 text-center">
        <div className="text-3xl mb-3">✓</div>
        <h3 className="font-bold text-[#1a1a1a] text-lg mb-2">Inquiry Submitted</h3>
        <p className="text-gray-600 text-sm">Thank you for your inquiry. Our export team will contact you within 1–2 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
