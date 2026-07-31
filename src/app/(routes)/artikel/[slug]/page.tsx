import { Container } from '@/components/shared/Container';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { PortableTextRenderer } from '@/components/shared/PortableTextRenderer';
import { getArticleBySlug, renderContent, getArticleSlugs, getRelatedArticles } from '@/lib/utils/articles';
import { Clock, Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getArticleSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};
  const ogImage = article.ogImage || article.coverImage || undefined;
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
  };
}

export default async function ArtikelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = await getRelatedArticles(article.slug, article.topic, 3);

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <Container>
          {/* Back Link */}
          <Link
            href="/artikel"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#567354] hover:text-[#4A6248] mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Artikel
          </Link>

          <article className="mx-auto max-w-3xl">
            {/* Header */}
            <header>
              <div className="mb-4">
                <span className="inline-block rounded-full bg-[#567354]/10 px-4 py-1 text-sm font-medium text-[#567354]">
                  {article.topic}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E2E2A] leading-tight">
                {article.title}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#6B6B65]">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Tim Payroll Klinik</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(article.publishedAt).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime} menit baca</span>
                </div>
              </div>
            </header>

            {article.coverImage && (
              <div className="relative mt-8 aspect-video overflow-hidden rounded-xl">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            )}

            {/* Content */}
            <div className="mt-8">
              {article.body ? (
                <PortableTextRenderer value={article.body} />
              ) : (
                <div
                  className="article-content whitespace-pre-line text-[#2E2E2A] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: renderContent(article.content) }}
                />
              )}
            </div>

            {/* CTA Box */}
            <div className="mt-12 rounded-xl bg-[#FDFBF7] border border-[#E5E5E0] p-8">
              <h3 className="text-xl font-semibold text-[#2E2E2A]">
                Butuh Bantuan?
              </h3>
              <p className="mt-2 text-[#6B6B65]">
                Konsultasikan masalah payroll perusahaan Anda langsung dengan praktisi berpengalaman.
                Sesi konsultasi gratis dan non-binding.
              </p>
              <div className="mt-6">
                <Link
                  href="/#daftar-periksa"
                  className="inline-flex items-center justify-center rounded-lg bg-[#567354] text-white hover:bg-[#4A6248] transition-all duration-200 px-6 py-3 text-base font-medium"
                >
                  Daftar Konsultasi Gratis
                </Link>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-[#2E2E2A] mb-8">
                Artikel Terkait
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/artikel/${related.slug}`}
                    className="group block rounded-xl border border-[#E5E5E0] bg-white p-6 transition-all hover:shadow-lg hover:-translate-y-1"
                  >
                    <span className="inline-block rounded-full bg-[#567354]/10 px-3 py-1 text-xs font-medium text-[#567354] mb-3">
                      {related.topic}
                    </span>
                    <h3 className="text-lg font-semibold text-[#2E2E2A] group-hover:text-[#567354] transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#6B6B65] line-clamp-2">
                      {related.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span className="text-[#6B6B65]">{related.readTime} min baca</span>
                      <span className="flex items-center gap-1 font-medium text-[#567354] group-hover:gap-2 transition-all">
                        Baca <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
