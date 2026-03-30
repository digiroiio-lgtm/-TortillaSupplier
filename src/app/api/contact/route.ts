import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, country, email, phone, product, volume, message } = body;

    if (!name || !company || !country || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL ?? 'info@tortillasupplier.com';

    if (resendApiKey) {
      const emailBody = [
        `Name: ${name}`,
        `Company: ${company}`,
        `Country: ${country}`,
        `Email: ${email}`,
        phone ? `Phone/WhatsApp: ${phone}` : null,
        product ? `Product of Interest: ${product}` : null,
        volume ? `Estimated Monthly Volume: ${volume}` : null,
        message ? `\nMessage:\n${message}` : null,
      ]
        .filter(Boolean)
        .join('\n');

      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'TortillaSupplier Inquiry <noreply@tortillasupplier.com>',
          to: [toEmail],
          reply_to: email,
          subject: `Wholesale Inquiry from ${company} (${country})`,
          text: emailBody,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error('Resend error:', err);
        return NextResponse.json({ error: 'Email delivery failed' }, { status: 500 });
      }
    } else {
      // Fallback: log to console when no API key is configured
      console.log('[Contact Form Submission]', { name, company, country, email, phone, product, volume, message });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
