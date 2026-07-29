import { Container } from '@/components/shared/Container';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getArticles } from '@/lib/utils/articles';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';

export default async function ArtikelPage() {
  const ARTICLES = await getArticles();
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <Container>
          <SectionTitle
            subtitle="Artikel edukatif seputar payroll, BPJS, PPh 21, dan compliance untuk perusahaan Indonesia."
            centered
          >
            Artikel & Insight Payroll
          </SectionTitle>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={`/artikel/${article.slug}`}
                className="group"
              >
                <Card className="h-full transition-all hover:shadow-xl">
                  <CardHeader>
                    <div className="mb-3 flex items-center justify-between text-sm">
                      <span className="rounded-full bg-[#567354]/10 px-3 py-1 text-xs font-medium text-[#567354]">
                        {article.topic}
                      </span>
                      <span className="flex items-center gap-1 text-[#6B6B65]">
                        <Clock className="h-3 w-3" />
                        {article.readTime} min
                      </span>
                    </div>
                    <CardTitle className="group-hover:text-[#567354] transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {article.excerpt}
                    </CardDescription>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span className="text-[#6B6B65]">
                        {new Date(article.publishedAt).toLocaleDateString('id-ID', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1 font-medium text-[#567354] group-hover:gap-2 transition-all">
                        Baca <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-[#567354] to-[#4A6248] p-8 text-center text-white">
            <h3 className="text-2xl font-bold">Butuh Konsultasi Personal?</h3>
            <p className="mt-3 text-white/90">
              Diskusikan masalah payroll Anda langsung dengan praktisi berpengalaman.
            </p>
            <div className="mt-6">
              <Link
                href="/#daftar-periksa"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-white text-[#567354] hover:bg-transparent hover:text-white transition-all duration-200 px-8 py-4 text-lg font-semibold"
              >
                Daftar Konsultasi Gratis
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
