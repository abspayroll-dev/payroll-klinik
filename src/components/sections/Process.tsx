import { Container } from '@/components/shared/Container';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { PROCESS_PHASES } from '@/lib/utils/constants';
import { Search, PieChart, ClipboardList, ArrowRight } from 'lucide-react';

const phaseIcons = {
  Search,
  PieChart,
  ClipboardList,
  ArrowRight,
} as const;

export function Process() {
  return (
    <section id="cara-kerja" className="py-12 md:py-20 bg-white">
      <Container>
        <SectionTitle 
          subtitle="Sesi konsultasi 30-60 menit yang terstruktur untuk memberikan hasil maksimal."
          centered
        >
          Alur &amp; Metode Diagnosa Payroll (50 Menit)
        </SectionTitle>

        <div className="relative mt-12">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            {/* Connection Line */}
            <div className="absolute top-16 left-[calc(16.67%+30px)] right-[calc(16.67%+30px)] h-0.5 bg-gradient-to-r from-[#567354]/30 via-[#567354] to-[#567354]/30" />

            <div className="grid grid-cols-4 gap-8">
              {PROCESS_PHASES.map((phase, index) => {
                const IconComponent = phaseIcons[phase.icon as keyof typeof phaseIcons];
                
                return (
                  <div key={phase.id} className="relative flex flex-col items-center text-center">
                    {/* Phase Number */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-sm font-bold text-[#567354]">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Icon */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FDFBF7] border-2 border-[#567354]">
                      <IconComponent className="h-7 w-7 text-[#567354]" />
                    </div>

                    {/* Duration Badge */}
                    <div className="mt-4 inline-flex items-center rounded-full bg-[#567354] px-3 py-1">
                      <span className="text-xs font-medium text-white">{phase.duration}</span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="mt-3 text-lg font-semibold text-[#2E2E2A]">
                      {phase.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#6B6B65] leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {PROCESS_PHASES.map((phase, index) => {
              const IconComponent = phaseIcons[phase.icon as keyof typeof phaseIcons];
              
              return (
                <div key={phase.id} className="relative flex gap-6">
                  {/* Left Column: Icon */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#FDFBF7] border-2 border-[#567354]">
                      <IconComponent className="h-6 w-6 text-[#567354]" />
                    </div>
                    {index < PROCESS_PHASES.length - 1 && (
                      <div className="mt-2 w-0.5 flex-1 bg-gradient-to-b from-[#567354]/40 to-transparent" />
                    )}
                  </div>

                  {/* Right Column: Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-[#567354]">
                        Step {index + 1}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-[#567354] px-2.5 py-0.5">
                        <span className="text-xs font-medium text-white">{phase.duration}</span>
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-[#2E2E2A]">
                      {phase.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#6B6B65]">
                      {phase.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Total Time Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-xl bg-[#FDFBF7] px-6 py-4 border border-[#E5E5E0]">
            <svg className="h-5 w-5 text-[#567354]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[#2E2E2A]">
              Total sesi: <strong>50 menit</strong> — diskusi intensif, bukan presentasi
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
