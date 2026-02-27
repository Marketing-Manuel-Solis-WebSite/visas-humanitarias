import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://visas-humanitarias.com';
  const lastModified = new Date();

  const routes = [
    '',
    '/eligibility-vawa',
    '/eligibility-sijs',
    '/eligibility-visa-t',
    '/process-vawa',
    '/process-sijs',
    '/process-visa-t',
    '/faq-vawa',
    '/faq-sijs',
    '/faq-visa-t',
    '/privacy',
    '/terms',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const lang of ['en', 'es']) {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified,
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : route.startsWith('/eligibility') ? 0.9 : route.startsWith('/process') ? 0.9 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            es: `${baseUrl}/es${route}`,
          },
        },
      });
    }
  }

  return sitemapEntries;
}
