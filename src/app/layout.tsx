import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import JsonLd from '@/components/JsonLd';

const BASE_URL = 'https://tortillasupplier.com';

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
      </body>
    </html>
  );
}
