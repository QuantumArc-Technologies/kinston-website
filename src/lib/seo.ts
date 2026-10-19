import { site } from '../data/site';

export const abs = (path: string) => new URL(path, site.url).toString();

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: abs('/brand/kinston-logo.png'),
    foundingDate: String(site.founded),
    contactPoint: [{ '@type': 'ContactPoint', telephone: site.phone, contactType: 'sales', email: site.email, availableLanguage: ['en'] }],
    sameAs: Object.values(site.social),
  };
}

export function breadcrumbLd(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.href) })),
  };
}

export function productLd(p: { name: string; code: string; summary: string; material: string; category: string; slug: string; art: string; image?: string; specificationNote?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    sku: p.code,
    description: p.summary,
    ...(!p.specificationNote && {
      material: p.material,
      brand: { '@type': 'Brand', name: site.name },
      manufacturer: { '@type': 'Organization', name: site.name },
    }),
    url: abs(`/products/${p.category}/${p.slug}`),
    image: abs(p.image ?? '/brand/kinston-logo.png'),
  };
}

export function articleLd(a: { title: string; date: string; excerpt: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: a.title,
    datePublished: a.date,
    description: a.excerpt,
    author: { '@type': 'Organization', name: site.name },
    publisher: { '@type': 'Organization', name: site.name, logo: { '@type': 'ImageObject', url: abs('/brand/kinston-logo.png') } },
    mainEntityOfPage: abs(`/news/${a.slug}`),
  };
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
  };
}
