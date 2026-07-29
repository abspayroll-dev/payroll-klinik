import { Container } from '@/components/shared/Container';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { MultiStepForm } from '@/components/form/MultiStepForm';
import { ShieldCheck, Lock } from 'lucide-react';

export function FormSection() {
  return (
    <section id="daftar-periksa" className="py-12 md:py-20 bg-[#FDFBF7]">
      <Container>
        <SectionTitle 
          subtitle="Isi form singkat ini untuk memulai konsultasi. Tim kami akan menghubungi Anda dalam 2 hari kerja."
          centered
        >
          Formulir Pendaftaran Konsultasi
        </SectionTitle>

        <div className="mt-12">
          {/* Trust Badge */}
          <div className="mb-8 rounded-xl bg-[#567354]/5 border border-[#567354]/20 p-4">
            <div className="flex items-center gap-3 text-sm text-[#567354]">
              <Lock className="h-4 w-4 flex-shrink-0" />
              <span>
                <strong>Jaminan Kerahasiaan Data (Non-Disclosure Statement Included).</strong> Data payroll &amp; gaji perusahaan Anda 100% aman.
              </span>
            </div>
          </div>

          <MultiStepForm />

          <div className="mt-8 text-center space-y-3">
            <p className="text-sm text-[#6B6B65]">
              Atau hubungi kami langsung via{' '}
              <a
                href="https://wa.me/6281234567890"
                className="font-medium text-[#567354] hover:text-[#4A6248] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
