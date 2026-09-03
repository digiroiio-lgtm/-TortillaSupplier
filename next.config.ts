import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  async redirects() {
    return [
      // Alias shorter slugs to canonical guide pages
      {
        source: '/tortilla-sizes',
        destination: '/tortilla-size-chart',
        permanent: true,
      },
      {
        source: '/tortilla-manufacturing',
        destination: '/tortilla-manufacturing-process',
        permanent: true,
      },
    ];
  },
  async headers() {
    // GA4 (measurement ID G-R9W0BV1FRL) requires googletagmanager.com to load
    // the gtag.js script, and google-analytics.com (plus regional endpoints
    // like region1.google-analytics.com) to POST hits and serve fallback GIF
    // beacons. Google Ads / Signals also uses google.com and doubleclick.net.
    // Without these entries the GA4 tag in RootLayout is blocked by CSP and
    // the property receives zero data — which matches the property's
    // "Last 48h: no data received" warning surfaced by the admin.
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://va.vercel-scripts.com/",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.google.com https://www.google.co.uk",
      "font-src 'self'",
      "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://stats.g.doubleclick.net https://www.google.com/recaptcha/ https://vitals.vercel-insights.com/",
      "frame-src https://www.google.com/recaptcha/ https://recaptcha.google.com/recaptcha/ https://www.googletagmanager.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ');

    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },
      {
        // Long-lived cache for static assets
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
