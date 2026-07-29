import { client } from './client';

const ARTICLES_QUERY = `*[_type == "article"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "coverImage": coverImage.asset->url,
  "author": author->{name, title, "photo": photo.asset->url},
  publishedAt,
  "topic": topic->title,
  "readTime": round(length(pt::text(body)) / 1500)
}`;

const ARTICLE_BY_SLUG_QUERY = `*[_type == "article" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "coverImage": coverImage.asset->url,
  "author": author->{name, title, "photo": photo.asset->url},
  publishedAt,
  "topic": topic->title,
  "readTime": round(length(pt::text(body)) / 1500),
  body,
  seo
}`;

const ARTICLE_SLUGS_QUERY = `*[_type == "article" && defined(slug.current)]{ "slug": slug.current }`;

const CONSULTANTS_QUERY = `*[_type == "consultant"] | order(order asc) {
  _id,
  name,
  title,
  "photo": photo.asset->url,
  bio,
  expertise,
  experience
}`;

const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]`;

export async function getArticles() {
  return client.fetch(ARTICLES_QUERY);
}

export async function getArticleBySlug(slug: string) {
  return client.fetch(ARTICLE_BY_SLUG_QUERY, { slug });
}

export async function getArticleSlugs() {
  return client.fetch(ARTICLE_SLUGS_QUERY);
}

export async function getConsultants() {
  return client.fetch(CONSULTANTS_QUERY, {}, { cache: 'no-store' });
}

export async function getSiteSettings() {
  return client.fetch(SITE_SETTINGS_QUERY);
}
