import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ProductSpecTable from '@/components/ProductSpecTable';
import FAQAccordion from '@/components/FAQAccordion';
import ContactForm from '@/components/ContactForm';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { SEOPageData } from '@/data/seoPages';
import { products } from '@/data/products';

const BASE_URL = 'https://tortillasupplier.com';

// Human-readable product categories for Product schema, keyed by the same
// filter the spec table uses so the two never drift apart.
const CATEGORY_LABELS: Record<NonNullable<SEOPageData['specTableFilter']>, string> = {
  flour: 'Flour Tortillas',
  corn: 'Corn Tortillas',
  frozen: 'Frozen Tortillas',
  wrap: 'Wrap Flatbreads',
  flatbread: 'Flatbreads',
};

// Pick the catalogue item a product page actually represents: same product
// type, and same diameter when the slug encodes one (e.g. "…-30cm-12-inch").
function representativeProduct(page: SEOPageData) {
  if (!page.specTableFilter) return undefined;
  const ofType = products.filter((p) => p.type === page.specTableFilter);
  const cm = page.slug.match(/(\d+)cm/);
  return (cm && ofType.find((p) => p.diameterCm === Number(cm[1]))) || ofType[0];
}

// Map slug labels to human-readable text for related links
function slugToLabel(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
    .replace(/(\d+)Cm/g, '$1cm')
    .replace(/(\d+)Inch/g, '$1"');
}

interface SEOLandingPageProps {
  page: SEOPageData;
}

export default function SEOLandingPage({ page }: SEOLandingPageProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // Build breadcrumb items (2 or 3 levels)
  const breadcrumbItems = page.parentSlug
    ? [
        { label: 'Home', href: '/' },
        { label: page.parentLabel ?? slugToLabel(page.parentSlug), href: `/${page.parentSlug}` },
        { label: page.heroTitle },
      ]
    : [
        { label: 'Home', href: '/' },
        { label: page.heroTitle },
      ];

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.heroTitle,
    description: page.heroSubtitle,
    url: `${BASE_URL}/${page.slug}`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: item.label,
        ...(item.href ? { item: `${BASE_URL}${item.href}` } : { item: `${BASE_URL}/${page.slug}` }),
      })),
    },
  };

  // No `offers` node: schema.org requires an Offer to carry `price` or
  // `priceSpecification`, and this is a quote-based B2B catalogue with no
  // published prices. The previous Offer declared only `priceCurrency`,
  // which made Product invalid on all 13 product pages and suppressed the
  // rich result. `image`, `category`, `manufacturer` and `audience` are the
  // properties we can state factually, and they also give answer engines a
  // clearer picture of what is sold and to whom.
  const representative = page.isProductPage ? representativeProduct(page) : undefined;
  const productSchema = page.isProductPage
    ? {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: page.heroTitle,
        description: page.heroSubtitle,
        url: `${BASE_URL}/${page.slug}`,
        ...(representative ? { image: `${BASE_URL}${representative.image}` } : {}),
        ...(page.specTableFilter ? { category: CATEGORY_LABELS[page.specTableFilter] } : {}),
        brand: {
          '@type': 'Brand',
          name: 'TortillaSupplier',
        },
        manufacturer: {
          '@type': 'Organization',
          name: 'TortillaSupplier',
          url: BASE_URL,
        },
        audience: {
          '@type': 'BusinessAudience',
          name: 'Food importers, wholesale distributors and foodservice operators',
        },
      }
    : null;

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={webPageSchema} />
      {productSchema && <JsonLd data={productSchema} />}
      <Breadcrumb items={breadcrumbItems} />
      <HeroSection
        title={page.heroTitle}
        subtitle={page.heroSubtitle}
        badges={page.heroBadges}
        primaryCTA={{ label: page.primaryCTALabel, href: '/contact' }}
        secondaryCTA={{ label: 'View Products', href: '/products' }}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">{page.introHeading}</h2>
            {page.introParagraphs.map((p, i) => (
              <p key={i} className="text-gray-600 text-sm leading-relaxed mb-4">{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.features.map((f) => (
              <div key={f.title} className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-[#1a1a1a] mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {page.showSpecTable && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">Product Specifications</h3>
            <p className="text-gray-500 text-sm mb-8">
              Full specification details for our wholesale tortilla and flatbread range.
            </p>
            <ProductSpecTable filterType={page.specTableFilter} />
          </div>
        </section>
      )}

      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-8">Frequently Asked Questions</h3>
          <div className="max-w-3xl">
            <FAQAccordion items={page.faqs} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">Request a Quote</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {page.relatedSlugs.length > 0 && (
        <section className="py-8 bg-[#FAFAF8] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Related Pages</h3>
            <div className="flex flex-wrap gap-3">
              {page.relatedSlugs.map((slug) => (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:border-[#2d7a3a] transition-colors"
                >
                  {slugToLabel(slug)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
