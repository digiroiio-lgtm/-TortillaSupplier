import { NextRequest, NextResponse } from 'next/server';
import { BUYER_GUIDE_PATH } from '@/lib/buyerGuide';

const RESEND_API_URL = 'https://api.resend.com/emails';

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const str = (v: unknown, max = 200) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

/**
 * Buyer's guide download: records the lead (team email + optional webhook)
 * and returns the PDF link. Delivery problems never block the download —
 * the visitor already gave their details.
 */
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    // Honeypot — bots fill hidden fields; answer as if it worked.
    if (body._gotcha) {
      return NextResponse.json({ success: true, downloadUrl: BUYER_GUIDE_PATH });
    }

    const name = str(body.name);
    const email = str(body.email);
    const company = str(body.company);
    const country = str(body.country);
    const buyerType = str(body.buyerType);
    const source = str(body.source);

    if (!name || !email || !country) {
      return NextResponse.json({ error: 'Please fill in your name, email and country.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const fields: [string, string][] = [
      ['Name', name],
      ['Email', email],
      ['Company', company || '—'],
      ['Country', country],
      ['Buyer type', buyerType || '—'],
      ['Downloaded from', source || '—'],
    ];

    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const toEmail = process.env.CONTACT_EMAIL ?? 'info@tortillasupplier.com';
      const fromDomain = process.env.FROM_EMAIL_DOMAIN ?? 'tortillasupplier.com';
      const rows = fields
        .map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:600;color:#555;">${k}</td><td style="padding:6px 12px;">${escapeHtml(v)}</td></tr>`)
        .join('');
      const res = await fetch(RESEND_API_URL, {
        method: 'POST',
        headers: { Authorization: `Bearer ${resendApiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: `TortillaSupplier Leads <noreply@${fromDomain}>`,
          to: [toEmail],
          reply_to: email,
          subject: `Buyer's guide download – ${company || name} (${country})`,
          text: fields.map(([k, v]) => `${k}: ${v}`).join('\n') +
            '\n\nThis lead downloaded the wholesale buyer\'s guide. A follow-up within 48 hours converts best.',
          html: `<p style="font-family:sans-serif">New buyer's guide download — follow up within 48 hours.</p><table style="font-family:sans-serif;border-collapse:collapse">${rows}</table>`,
        }),
      }).catch((err) => {
        console.error('[Lead magnet] Resend request failed', err);
        return null;
      });
      if (res && !res.ok) console.error('[Lead magnet] Resend error:', await res.text());
    } else {
      console.log('[Lead magnet download]', Object.fromEntries(fields));
    }

    const webhookUrl = process.env.WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'buyer_guide_download',
          name, email, company, country, buyerType, source,
          submittedAt: new Date().toISOString(),
        }),
      }).catch((err) => console.error('[Lead magnet webhook error]', err));
    }

    return NextResponse.json({ success: true, downloadUrl: BUYER_GUIDE_PATH });
  } catch (err) {
    console.error('[Lead magnet API error]', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
