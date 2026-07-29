import { Container } from '@/components/shared/Container';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { TOPICS } from '@/lib/utils/constants';
import { 
  Calculator, Shield, Heart, Briefcase, 
  Receipt, Users, Monitor, Building 
} from 'lucide-react';

const iconComponents = {
  Calculator,
  Shield,
  Heart,
  Briefcase,
  Receipt,
  Users,
  Monitor,
  Building,
} as const;

export function Topics() {
  return (
    <section id="topik" className="py-12 md:py-20 bg-white">
      <Container>
        <SectionTitle 
          subtitle="8 topik konsultasi spesifik untuk membantu masalah payroll Anda."
          centered
        >
          Topik Konsultasi Payroll &amp; Tax Compliance
        </SectionTitle>

        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#567354]/10 text-[#567354] font-medium">
            <span>Gratis</span>
            <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
            <span>Edukatif</span>
            <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
            <span>Non-binding</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOPICS.map((topic) => {
            const IconComponent = iconComponents[topic.icon as keyof typeof iconComponents];
            
            return (
              <div
                key={topic.id}
                className="group relative overflow-hidden rounded-xl border border-[#E5E5E0] bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#567354]/10">
                  <IconComponent className="h-6 w-6 text-[#567354]" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-[#2E2E2A]">
                  {topic.title}
                </h3>
                
                <p className="text-sm text-[#6B6B65] leading-relaxed">
                  {topic.description}
                </p>

                {/* Hover Background */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent to-[#FDFBF7] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-[#6B6B65]">
          <p className="max-w-2xl mx-auto">
            Setiap topik dibahas dalam sesi konsultasi personal dengan praktisi yang spesialis di bidang tersebut.
          </p>
        </div>
      </Container>
    </section>
  );
}
