import { NextRequest, NextResponse } from 'next/server';

const RESEND_API_URL = 'https://api.resend.com/emails';
const RECAPTCHA_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';
const EMAIL_SUBJECT = 'New Distributor Inquiry – TortillaSupplier';

function buildEmailText(fields: {
  name: string;
  company: string;
  country: string;
  email: string;
  phone?: string;
  product?: string;
  volume?: string;
  privateLabel?: string;
  message?: string;
}): string {
  const lines = [
    `Full Name:                  ${fields.name}`,
    `Company:                    ${fields.company}`,
    `Country:                    ${fields.country}`,
    `Email:                      ${fields.email}`,
    fields.phone        ? `Phone / WhatsApp:           ${fields.phone}`        : null,
    fields.product      ? `Product of Interest:        ${fields.product}`      : null,
    fields.volume       ? `Estimated Monthly Volume:   ${fields.volume}`       : null,
    fields.privateLabel ? `Private Label Required:     ${fields.privateLabel}` : null,
    fields.message      ? `\nMessage:\n${fields.message}`                       : null,
  ];
  return lines.filter(Boolean).join('\n');
}

function buildEmailHtml(fields: {
  name: string;
  company: string;
  country: string;
  email: string;
  phone?: string;
  product?: string;
  volume?: string;
  privateLabel?: string;
  message?: string;
}): string {
  const rows = [
    ['Full Name', fields.name],
    ['Company', fields.company],
    ['Country', fields.country],
    ['Email', `<a href="mailto:${fields.email}">${fields.email}</a>`],
    fields.phone        ? ['Phone / WhatsApp', fields.phone]        : null,
    fields.product      ? ['Product of Interest', fields.product]   : null,
    fields.volume       ? ['Est. Monthly Volume', fields.volume]     : null,
    fields.privateLabel ? ['Private Label', fields.privateLabel]     : null,
  ].filter(Boolean) as [string, string][];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;white-space:nowrap;color:#555;">${label}</td>` +
        `<td style="padding:6px 12px;color:#111;">${value}</td></tr>`
    )
    .join('');

  const messageSection = fields.message
    ? `<div style="margin-top:20px;padding:12px;background:#f9f9f9;border-left:3px solid #2d7a3a;border-radius:4px;">
        <strong style="display:block;margin-bottom:6px;color:#555;">Message</strong>
        <p style="margin:0;color:#111;white-space:pre-wrap;">${fields.message}</p>
       </div>`
    : '';

  return `
<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif;font-size:14px;color:#111;max-width:600px;margin:0 auto;padding:20px;">
  <h2 style="color:#2d7a3a;margin-bottom:4px;">New Distributor Inquiry</h2>
  <p style="color:#555;margin-top:0;margin-bottom:20px;">Submitted via TortillaSupplier.com</p>
  <table style="border-collapse:collapse;width:100%;">${tableRows}</table>
  ${messageSection}
  <hr style="margin-top:30px;border:none;border-top:1px solid #eee;" />
  <p style="font-size:12px;color:#999;">This email was sent automatically from the TortillaSupplier.com inquiry form.</p>
</body>
</html>`;
}

async function verifyRecaptcha(token: string, secretKey: string): Promise<boolean> {
  const minScore = parseFloat(process.env.RECAPTCHA_MIN_SCORE ?? '0.5');
  const params = new URLSearchParams({ secret: secretKey, response: token });
  const res = await fetch(RECAPTCHA_VERIFY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });
  if (!res.ok) return false;
  const data = await res.json() as { success: boolean; score?: number };
  // Require a minimum score threshold for v3 (default 0.5, configurable via RECAPTCHA_MIN_SCORE)
  return data.success && (data.score === undefined || data.score >= minScore);
}

async function sendWebhook(webhookUrl: string, payload: Record<string, unknown>): Promise<void> {
  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, submittedAt: new Date().toISOString() }),
    });
  } catch (err) {
    console.error('[Inquiry webhook error]', err);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as Record<string, unknown>;

    // ── Honeypot check ───────────────────────────────────────────────────────
    // If the hidden _gotcha field has been filled in, a bot submitted the form.
    // Return 200 silently so bots don't learn the rejection criteria.
    if (body._gotcha) {
      console.warn('[Inquiry] Honeypot triggered — bot submission discarded');
      return NextResponse.json({ success: true });
    }

    // ── Required field validation ────────────────────────────────────────────
    const name        = typeof body.name    === 'string' ? body.name.trim()    : '';
    const company     = typeof body.company === 'string' ? body.company.trim() : '';
    const country     = typeof body.country === 'string' ? body.country.trim() : '';
    const email       = typeof body.email   === 'string' ? body.email.trim()   : '';
    const phone       = typeof body.phone   === 'string' ? body.phone.trim()   : undefined;
    const product     = typeof body.product === 'string' ? body.product.trim() : undefined;
    const volume      = typeof body.volume  === 'string' ? body.volume.trim()  : undefined;
    const privateLabel = typeof body.privateLabel === 'string' ? body.privateLabel.trim() : undefined;
    const message     = typeof body.message === 'string' ? body.message.trim() : undefined;

    if (!name || !company || !country || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Basic email format guard
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // ── reCAPTCHA v3 verification ────────────────────────────────────────────
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecretKey) {
      const recaptchaToken = typeof body.recaptchaToken === 'string' ? body.recaptchaToken : '';
      if (!recaptchaToken) {
        return NextResponse.json({ error: 'reCAPTCHA verification required' }, { status: 400 });
      }
      const isHuman = await verifyRecaptcha(recaptchaToken, recaptchaSecretKey);
      if (!isHuman) {
        return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
      }
    }

    const fields = { name, company, country, email, phone, product, volume, privateLabel, message };

    // ── Email delivery ────────────────────────────────────────────────────────
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail      = process.env.CONTACT_EMAIL    ?? 'info@tortillasupplier.com';
    const ccEmail      = process.env.CONTACT_EMAIL_CC ?? 'oguzyumuk@gmail.com';
    const fromDomain   = process.env.FROM_EMAIL_DOMAIN ?? 'tortillasupplier.com';

    if (resendApiKey) {
      const res = await fetch(RESEND_API_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: `TortillaSupplier Inquiry <noreply@${fromDomain}>`,
          to: [toEmail],
          cc: [ccEmail],
          reply_to: email,
          subject: EMAIL_SUBJECT,
          text: buildEmailText(fields),
          html: buildEmailHtml(fields),
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error('[Inquiry] Resend error:', err);
        return NextResponse.json({ error: 'Email delivery failed' }, { status: 500 });
      }
    } else {
      // No API key configured — log for local development
      console.log('[Inquiry Form Submission]', fields);
    }

    // ── Webhook relay (Google Sheets / Airtable via Zapier / Make / n8n) ─────
    const webhookUrl = process.env.WEBHOOK_URL;
    if (webhookUrl) {
      await sendWebhook(webhookUrl, fields as Record<string, unknown>);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Inquiry API error]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
