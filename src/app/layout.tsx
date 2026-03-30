import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import JsonLd from '@/components/JsonLd';

const BASE_URL = 'https://www.tortillasupplier.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Tortilla Supplier | Wholesale Tortillas for UK, USA & Europe',
    template: '%s | TortillaSupplier',
  },
  description: 'Premium wholesale tortilla and flatbread supplier for UK, USA and European markets. Export-ready, private label available, BRCGS certified.',
  openGraph: {
    type: 'website',
    siteName: 'TortillaSupplier',
    locale: 'en_GB',
    url: BASE_URL,
    title: 'Tortilla Supplier | Wholesale Tortillas for UK, USA & Europe',
    description: 'Premium wholesale tortilla and flatbread supplier for UK, USA and European markets. Export-ready, private label available, BRCGS certified.',
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
    title: 'Tortilla Supplier | Wholesale Tortillas for UK, USA & Europe',
    description: 'Premium wholesale tortilla and flatbread supplier for UK, USA and European markets. Export-ready, private label available, BRCGS certified.',
    images: ['/images/og-default.png'],
  },
  alternates: {
    canonical: BASE_URL,
  },
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
  description: 'Premium wholesale tortilla and flatbread supplier for UK, USA and European markets. Export-ready, private label available, BRCGS certified.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationSchema} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
