import { Container } from '@/components/shared/Container';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';

export function FollowUp() {
  return (
    <section className="py-16 lg:py-24 bg-[#FDFBF7]">
      <Container>
        <SectionTitle 
          subtitle="Setelah sesi konsultasi, tim kami akan memberikan rekomendasi yang relevan."
          centered
        >
          Apa yang Terjadi Selanjutnya?
        </SectionTitle>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Scenario 1 */}
          <div className="rounded-xl bg-white p-6 border border-[#E5E5E0] shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#10B981]/10">
              <CheckCircle className="h-6 w-6 text-[#10B981]" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#2E2E2A]">
              Jika Tidak Ada Kebutuhan Lanjutan
            </h3>
            <p className="mt-2 text-sm text-[#6B6B65]">
              Sesi konsultasi selesai — tidak ada kewajiban apapun. Anda mendapatkan insight gratis.
            </p>
          </div>

          {/* Scenario 2 */}
          <div className="rounded-xl bg-white p-6 border border-[#E5E5E0] shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#567354]/10">
              <ArrowRight className="h-6 w-6 text-[#567354]" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#2E2E2A]">
              Jika Ada Kebutuhan Relevan
            </h3>
            <p className="mt-2 text-sm text-[#6B6B65]">
              Akan ditawarkan meeting lanjutan, demo layanan ABS Payroll, atau proposal terpisah.
            </p>
          </div>

          {/* Scenario 3 */}
          <div className="rounded-xl bg-white p-6 border border-[#E5E5E0] shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F59E0B]/10">
              <Phone className="h-6 w-6 text-[#F59E0B]" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#2E2E2A]">
              Transparansi Penuh
            </h3>
            <p className="mt-2 text-sm text-[#6B6B65]">
              Tidak ada sales pitch di sesi gratis. Proposal/quotasi dikirim terpisah setelah persetujuan Anda.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[#6B6B65] italic">
            "Konsultasi ini bersifat non-binding. Keputusan ada di tangan Anda."
          </p>
        </div>
      </Container>
    </section>
  );
}