import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import seoPages from '@/data/seoPages';
import SEOLandingPage from '@/components/SEOLandingPage';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return seoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = seoPages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function SlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = seoPages.find((p) => p.slug === slug);
  if (!page) notFound();
  return <SEOLandingPage page={page} />;
}
