import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://payrollklinik.id';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/artikel`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/kebijakan-privasi`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ];

  const articleSlugs = await getArticleSlugs();

  const articlePages = articleSlugs.map((item: { slug: string }) => ({
    url: `${BASE_URL}/artikel/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...articlePages];
}

async function getArticleSlugs() {
  try {
    const { client } = await import('@/lib/sanity/client');
    const slugs = await client.fetch<{ slug: string }[]>(
      `*[_type == "article" && defined(slug.current)]{ "slug": slug.current }`
    );
    return slugs || [];
  } catch {
    return [];
  }
}
