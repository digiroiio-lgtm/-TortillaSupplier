import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ProductSpecTable from '@/components/ProductSpecTable';
import FAQAccordion from '@/components/FAQAccordion';
import ContactForm from '@/components/ContactForm';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { SEOPageData } from '@/data/seoPages';
import seoPages from '@/data/seoPages';
import blogPosts from '@/data/blogPosts';
import BuyerPathways from '@/components/BuyerPathways';
import { products } from '@/data/products';

// Informational guides every landing page points to. Landing pages used to
// link only to /products and /contact, so the guides (which earn most of the
// site's impressions) received no links from the pages that sell.
const GUIDE_LINKS = [
  { label: 'Tortilla Size Chart', href: '/tortilla-size-chart', note: 'Diameters in cm and inches' },
  { label: 'Tortilla Shelf Life', href: '/tortilla-shelf-life', note: 'Ambient, chilled and frozen' },
  { label: 'How to Store Tortillas', href: '/how-to-store-tortillas', note: 'Fridge, freezer and pantry' },
  { label: 'How Tortillas Are Made', href: '/tortilla-manufacturing-process', note: 'Our production process' },
  { label: 'Tortilla Buyer\'s Guide', href: '/tortilla-guide', note: 'Sourcing reference for buyers' },
];

// Display names for market pages. Everything else is title-cased from the slug.
const MARKET_LABELS: Record<string, string> = { uae: 'UAE', usa: 'USA', uk: 'United Kingdom' };

function marketLabel(slug: string): string {
  const key = slug.replace('tortilla-supplier-', '');
  return (
    MARKET_LABELS[key] ??
    key
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ')
  );
}

// Which articles are worth reading from which landing pages. First match
// wins per rule; duplicates are removed and the list is capped at three.
// Gives the money pages a deeper-reading path and gives the articles
// inbound links from the pages that rank for the same topic.
const ARTICLE_RULES: Array<[RegExp, string[]]> = [
  [/^(importing-tortillas-to-uk|tortilla-importer-supply|tortilla-import-distributor|tortilla-supplier-uk|tortilla-export-supplier)$/, ['importing-tortillas-uk', 'frozen-tortilla-supply-chain']],
  [/^(tortilla-supplier|tortilla-wholesale-supplier|bulk-tortilla-supplier)$/, ['how-to-choose-tortilla-supplier', 'tortilla-supplier-guide', 'wholesale-tortilla-supplier-distributors']],
  [/^(tortilla-wholesale|tortilla-distributor|flour-tortilla-distributor|corn-tortilla-distributor|flour-tortilla-wholesale|corn-tortilla-wholesale)$/, ['wholesale-tortilla-supplier-distributors', 'why-distributors-carry-tortillas']],
  [/private-label/, ['private-label-tortillas']],
  [/frozen/, ['frozen-tortilla-supply-chain', 'frozen-vs-fresh-tortillas', 'frozen-tortillas-global-foodservice']],
  [/(restaurant|qsr|catering|foodservice|burrito|street-taco|mexican|frying)/, ['tortillas-most-versatile-bread', 'frozen-tortillas-global-foodservice', 'tortilla-sizes-foodservice']],
  [/\d+cm/, ['tortilla-sizes-foodservice', 'frozen-vs-fresh-tortillas']],
];

function articlesFor(slug: string) {
  const wanted: string[] = [];
  for (const [rule, slugs] of ARTICLE_RULES) {
    if (rule.test(slug)) for (const s of slugs) if (!wanted.includes(s)) wanted.push(s);
  }
  return wanted
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 3);
}

// Regional hubs that sit outside seoPages but belong in the market list.
const MARKET_HUBS = [
  { label: 'United Kingdom', href: '/tortilla-supplier-uk' },
  { label: 'USA', href: '/tortilla-supplier-usa' },
  { label: 'Europe', href: '/tortilla-supplier-europe' },
];

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
  // Country pages (/tortilla-supplier-<market>) link to each other and the
  // three regional hubs so no market page depends on the footer alone.
  const isMarketPage = page.slug.startsWith('tortilla-supplier-');
  const articles = articlesFor(page.slug);

  // Same-category pages: parent, siblings under the same parent, and children.
  // Product pages used to depend on the footer for inbound links; this makes
  // each category a connected cluster. Pages already in relatedSlugs are
  // skipped so the same link is never shown twice.
  const family = seoPages
    .filter(
      (p) =>
        p.slug !== page.slug &&
        !page.relatedSlugs.includes(p.slug) &&
        (p.slug === page.parentSlug ||
          p.parentSlug === page.slug ||
          (page.parentSlug && p.parentSlug === page.parentSlug)),
    )
    .slice(0, 10);
  const otherMarkets = isMarketPage
    ? [
        ...MARKET_HUBS,
        ...seoPages
          .filter((p) => p.slug.startsWith('tortilla-supplier-') && p.slug !== page.slug)
          .map((p) => ({
            label: marketLabel(p.slug),
            href: `/${p.slug}`,
          })),
      ]
    : [];

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

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BuyerPathways
            excludeHref={`/${page.slug}`}
            showQuote={false}
            heading="Who we supply"
            intro="Find the supply option closest to your business."
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">Request a Quote</h3>
            <p className="text-sm text-gray-500 mb-6">
              BRCGS, IFS, ISO 22000, HACCP and Halal certified production. See our{' '}
              <Link href="/certifications" className="text-[#2d7a3a] hover:underline">certifications</Link>,{' '}
              <Link href="/our-factory" className="text-[#2d7a3a] hover:underline">factory</Link> and{' '}
              <Link href="/export-program" className="text-[#2d7a3a] hover:underline">export programme</Link>.
            </p>
            <ContactForm location="landing_page" />
          </div>
        </div>
      </section>

      {isMarketPage && (
        <section className="py-8 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Other Markets We Supply</h3>
            <div className="flex flex-wrap gap-3">
              {otherMarkets.map((m) => (
                <Link
                  key={m.href}
                  href={m.href}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:border-[#2d7a3a] transition-colors"
                >
                  {m.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-track="guide_link_click">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Helpful Guides</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {GUIDE_LINKS.map((g) => (
              <li key={g.href}>
                <Link
                  href={g.href}
                  className="block h-full px-4 py-3 border border-gray-200 rounded-lg hover:border-[#2d7a3a] transition-colors"
                >
                  <span className="block text-sm font-medium text-gray-900">{g.label}</span>
                  <span className="block text-xs text-gray-500">{g.note}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {articles.length > 0 && (
        <section className="py-8 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-track="article_link_click">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Related Articles</h3>
            <ul className="space-y-2">
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link href={`/blog/${a.slug}`} className="text-sm text-gray-600 hover:text-[#2d7a3a] transition-colors">
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {family.length > 0 && (
        <section className="py-8 bg-[#FAFAF8] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">More in This Category</h3>
            <div className="flex flex-wrap gap-3">
              {family.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:border-[#2d7a3a] transition-colors"
                >
                  {slugToLabel(p.slug)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
