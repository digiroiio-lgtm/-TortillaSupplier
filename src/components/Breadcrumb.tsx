import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://www.tortillasupplier.com${item.href}` } : {}),
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="py-3 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-gray-500">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-1">
                {index > 0 && <span className="text-gray-300">/</span>}
                {item.href && index < items.length - 1 ? (
                  <Link href={item.href} className="hover:text-[#2d7a3a] transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className={index === items.length - 1 ? 'text-gray-700' : ''}>{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
