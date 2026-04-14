'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

const GA_MEASUREMENT_ID = 'G-R9W0BV1FRL';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialized = useRef(false);

  useEffect(() => {
    // Only fires on route changes after initial load (gtag guaranteed ready by then)
    if (!initialized.current) return;
    if (typeof window.gtag !== 'function') return;
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
    window.gtag('config', GA_MEASUREMENT_ID, { page_path: url });
  }, [pathname, searchParams]);

  function handleLoad() {
    // Fires initial pageview once gtag/js is confirmed loaded
    if (initialized.current) return;
    initialized.current = true;
    if (typeof window.gtag !== 'function') return;
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
    window.gtag('config', GA_MEASUREMENT_ID, { page_path: url });
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={handleLoad}
      />
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  );
}
