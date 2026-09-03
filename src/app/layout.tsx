import type { Metadata } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import JsonLd from '@/components/JsonLd';

const BASE_URL = 'https://tortillasupplier.com';

// GA4 measurement ID for the tortillasupplier.com property.
// Stream: "Tortilla Supplier Akış" — Stream ID 14366577453.
// Injected once here in RootLayout so every route under /app inherits the tag
// (App Router shares the root layout across all pages).
const GA_MEASUREMENT_ID = 'G-R9W0BV1FRL';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Global Tortilla Supplier for Distributors | TortillaSupplier',
    template: '%s | TortillaSupplier',
  },
  icons: {
    apple: '/images/og-default.png',
  },
  description: 'BRCGS-certified wholesale tortilla supplier for distributors and importers. Flour, corn and frozen tortillas for UK, USA and European markets. Private label available.',
  openGraph: {
    type: 'website',
    siteName: 'TortillaSupplier',
    locale: 'en_GB',
    url: BASE_URL,
    title: 'Global Tortilla Supplier for Distributors | TortillaSupplier',
    description: 'BRCGS-certified wholesale tortilla supplier for distributors and importers. Flour, corn and frozen tortillas for UK, USA and European markets.',
    images: [
      {
        url: '/images/og-default.png',
        width: 1200,
        height: 630,
        alt: 'TortillaSupplier – Wholesale Tortilla & Flatbread Supplier',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@TortillaSupply',
    creator: '@TortillaSupply',
    title: 'Global Tortilla Supplier for Distributors | TortillaSupplier',
    description: 'BRCGS-certified wholesale tortilla supplier for distributors and importers. Flour, corn and frozen tortillas for UK, USA and European markets.',
    images: ['/images/og-default.png'],
  },
  // No global canonical here — every page sets its own self-referencing canonical
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TortillaSupplier',
  url: BASE_URL,
  logo: `${BASE_URL}/images/og-default.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'info@tortillasupplier.com',
    availableLanguage: 'English',
  },
  sameAs: [],
  description: 'BRCGS-certified wholesale tortilla supplier for distributors and importers. Flour, corn and frozen tortillas for UK, USA and European markets. Private label available.',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'TortillaSupplier',
  url: BASE_URL,
  // Publisher tie-back so search engines / AI overviews can attribute the
  // site to the same Organization node above without a second lookup.
  publisher: { '@type': 'Organization', name: 'TortillaSupplier', url: BASE_URL },
  // Declares the site's internal search endpoint for Google's Sitelinks
  // Search Box (see schema.org/SearchAction). The /blog route already
  // supports free-text browsing; this simply advertises the pattern.
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
        <Analytics />
        {/*
          GA4 gtag.js. `afterInteractive` fires after hydration so it does not
          block LCP. `send_page_view: true` is the default but stated
          explicitly so future edits do not accidentally disable it, and
          `transport_type: 'beacon'` ensures pageviews survive route changes
          in the App Router.
        */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              send_page_view: true,
              transport_type: 'beacon',
            });
          `}
        </Script>
      </body>
    </html>
  );
}
