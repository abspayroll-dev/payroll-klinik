import { Container } from '@/components/shared/Container';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { CTAButton } from '@/components/shared/CTAButton';
import { CheckCircle, Clock, FileText, MessageCircle, Lock, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function TerimaKasihPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            {/* Success Icon */}
            <div className="flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#10B981]/10">
                <CheckCircle className="h-12 w-12 text-[#10B981]" />
              </div>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-3xl md:text-4xl font-bold text-[#567354] leading-tight">
              Permintaan Konsultasi & Diagnosa Payroll Anda Telah Kami Terima!
            </h1>
            <p className="mt-4 text-lg text-[#6B6B65] max-w-2xl mx-auto">
              Terima kasih telah menghubungi Payroll Klinik. Tim praktisi kami sedang memproses data awal perusahaan Anda untuk mempersiapkan sesi konsultasi.
            </p>

            {/* Next Steps */}
            <div className="mt-12 rounded-xl bg-[#FDFBF7] border border-[#E5E5E0] p-6 md:p-8 text-left">
              <h2 className="text-xl font-semibold text-[#2E2E2A] mb-6 text-center">
                Apa Selanjutnya?
              </h2>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#567354]/10">
                    <span className="font-bold text-[#567354]">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2E2E2A]">Konfirmasi Jadwal (1x24 Jam Kerja)</h3>
                    <p className="mt-1 text-sm text-[#6B6B65]">
                      Tim kami akan menghubungi Anda via WhatsApp atau Email untuk menyepakati waktu dan tempat sesi konsultasi.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#567354]/10">
                    <span className="font-bold text-[#567354]">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2E2E2A]">Penyiapan Bahan Diagnosa</h3>
                    <p className="mt-1 text-sm text-[#6B6B65]">
                      Praktisi ABS Payroll akan meninjau fokus topik yang Anda pilih (PPh 21, BPJS, atau Kepatuhan) sebelum sesi dimulai.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#567354]/10">
                    <span className="font-bold text-[#567354]">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2E2E2A]">Sesi Diagnosa 1-on-1 (50 Menit)</h3>
                    <p className="mt-1 text-sm text-[#6B6B65]">
                      Diskusi interaktif sesuai preferensi Anda: Online (Zoom) atau Offline (AKMANI Hotel, Menteng, Jakarta Pusat).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Preparation Tips & Privacy */}
            <div className="mt-8 rounded-xl bg-white border border-[#E5E5E0] p-6 text-left">
              <h3 className="font-semibold text-[#2E2E2A] mb-4">Tips Persiapan Sesi Konsultasi:</h3>
              <ul className="space-y-2 text-sm text-[#6B6B65]">
                <li className="flex items-start gap-3">
                  <FileText className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#567354]" />
                  <span>Siapkan estimasi jumlah karyawan dan struktur komponen gaji.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#567354]" />
                  <span>Catat pertanyaan atau isu spesifik mengenai PPh 21 TER, BPJS, atau sistem payroll.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#567354]" />
                  <span>Siapkan sampel rekap payroll bulan terakhir jika ada kasus khusus yang ingin di-review.</span>
                </li>

              </ul>
              <div className="mt-6 pt-4 border-t border-[#E5E5E0]">
                <div className="flex items-start gap-3 text-sm text-[#6B6B65]">
                  <Lock className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#567354]" />
                  <span>
                    <strong>Jaminan Kerahasiaan Data:</strong> Seluruh informasi & data payroll perusahaan Anda dilindungi oleh Non-Disclosure Statement dan tidak akan dibagikan ke pihak mana pun.
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/6281234567890?text=Halo%20Payroll%20Klinik,%20saya%20butuh%20konfirmasi%20cepat%20mengenai%20jadwal%20konsultasi%20saya." target="_blank" rel="noopener noreferrer">
                <CTAButton>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Butuh Konfirmasi Cepat? Chat via WhatsApp
                </CTAButton>
              </a>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <CTAButton variant="secondary" size="default">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Kembali ke Beranda
                </CTAButton>
              </Link>
              <Link href="/artikel">
                <CTAButton variant="secondary" size="default">
                  Baca Artikel Payroll
                  <ArrowRight className="h-4 w-4 ml-2" />
                </CTAButton>
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
