import { Container } from '@/components/shared/Container';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Users, BadgeCheck, Clock, ShieldCheck, Lock } from 'lucide-react';
import Image from 'next/image';
import { getConsultants } from '@/lib/sanity/queries';

// Define the expected shape of the consultant data from Sanity
interface Consultant {
  _id: string;
  name: string;
  title?: string;
  photo?: string;
  bio?: string;
  expertise?: string[];
  experience?: string;
}

function getInitials(name: string): string {
  if (!name) return '??';
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export async function Team() {
  const consultants: Consultant[] = await getConsultants();

  return (
    <section id="tim" className="py-12 md:py-20 bg-[#FDFBF7]">
      <Container>
        <SectionTitle 
          subtitle="Tim Payroll Klinik adalah praktisi berpengalaman dari ABS Payroll dengan pengalaman bertahun-tahun menangani payroll perusahaan di berbagai industri."
          centered
        >
          Tim Praktisi &amp; Konsultan Payroll
        </SectionTitle>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {consultants.map((consultant) => (
            <div key={consultant._id} className="flex flex-col items-center text-center rounded-xl bg-white p-6 border border-[#E5E5E0] shadow-sm hover:shadow-lg transition-shadow duration-300">
              {/* Avatar from Sanity or Placeholder */}
              <div className="relative mb-6 h-28 w-28 rounded-full border-4 border-white shadow-lg">
                {consultant.photo ? (
                  <Image
                    src={consultant.photo}
                    alt={consultant.name}
                    width={112}
                    height={112}
                    className="h-full w-full object-cover rounded-full"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#567354]/20 to-[#567354]/5">
                    <span className="text-3xl font-bold text-[#567354]/80">
                      {getInitials(consultant.name)}
                    </span>
                  </div>
                )}
              </div>

              <h3 className="text-xl font-semibold text-[#2E2E2A]">
                {consultant.name}
              </h3>
              
              {consultant.title && (
                <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#567354]/10 px-3 py-1">
                  <BadgeCheck className="h-3.5 w-3.5 text-[#567354]" />
                  <span className="text-sm font-medium text-[#567354]">
                    {consultant.title}
                  </span>
                </div>
              )}

              {/* Expertise Tags from Sanity */}
              {consultant.expertise && consultant.expertise.length > 0 && (
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {consultant.expertise.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-[#FDFBF7] border border-[#E5E5E0] px-2.5 py-0.5 text-xs font-medium text-[#6B6B65]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {consultant.experience && (
                <div className="mt-4 flex items-center gap-1.5 text-sm text-[#6B6B65]">
                  <Clock className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>{consultant.experience}</span>
                </div>
              )}

              {consultant.bio && !consultant.experience && (
                 <div className="mt-4 flex items-center gap-1.5 text-sm text-[#6B6B65]">
                  <span>{consultant.bio}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-white p-6 border border-[#E5E5E0] shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#567354]/10">
              <ShieldCheck className="h-6 w-6 text-[#567354]" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#2E2E2A]">
                Tentang ABS Payroll
              </h4>
              <p className="mt-2 text-[#6B6B65] leading-relaxed">
                Payroll Klinik diinisiasi oleh <strong>ABS Payroll</strong> sebagai wujud kontribusi edukasi regulasi, perpajakan PPh 21, dan administrasi payroll di Indonesia. Tim praktisi kami dipilih dari internal ABS Payroll yang berpengalaman menangani klien dari berbagai sektor industri.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}