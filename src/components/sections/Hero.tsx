'use client';

import { Container } from '@/components/shared/Container';
import { CTAButton } from '@/components/shared/CTAButton';
import { Stethoscope } from 'lucide-react';
import { useEffect, useState } from 'react';

function StethoscopeIllustration() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <div className="relative w-full max-w-md mx-auto lg:mx-0">
        {/* Main stethoscope */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Earpieces */}
            <div className="absolute -top-8 -left-16 w-16 h-16 border-4 border-[#567354]/20 rounded-full"></div>
            <div className="absolute -top-8 -right-16 w-16 h-16 border-4 border-[#567354]/20 rounded-full"></div>
            
            {/* Tube */}
            <div className="relative">
              <div className="absolute -left-8 -top-4 w-32 h-32 border-4 border-[#567354]/20 rounded-full"></div>
              <div className="absolute -right-8 -top-4 w-32 h-32 border-4 border-[#567354]/20 rounded-full"></div>
              
              {/* Main tube */}
              <div className="relative mx-auto">
                <div className="w-4 h-32 bg-gradient-to-b from-[#567354]/40 to-[#567354]/10 rounded-full mx-auto"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#567354]/20 rounded-full"></div>
              </div>
            </div>
            
            {/* Chestpiece */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
              <div className="w-20 h-12 bg-gradient-to-t from-[#567354]/30 to-[#567354]/10 rounded-full flex items-center justify-center">
                <div className="w-12 h-6 bg-[#567354]/40 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Alternative: Simple icon */}
        <div className="flex items-center justify-center lg:justify-end">
          <Stethoscope className="w-48 h-48 text-[#567354]/30" />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const scrollToForm = () => {
    const formProgress = document.querySelector('#form-progress');
    if (formProgress) {
      formProgress.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToProcess = () => {
    const processSection = document.querySelector('#cara-kerja');
    if (processSection) {
      processSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-12 lg:pb-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#567354] leading-tight lg:leading-snug">
              Klinik Diagnosa Payroll Perusahaan:
              <span className="block text-[#2E2E2A] mt-2 sm:mt-3">
                Selesaikan Masalah PPh 21 TER, BPJS, &amp; Kepatuhan Bersama Praktisi
              </span>
            </h1>
            
            <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg lg:text-xl text-[#6B6B65] leading-relaxed">
              Sesi konsultasi 1-on-1 gratis selama 50 menit. Dapatkan diagnosa mendalam dan rekomendasi solusi tanpa biaya &amp; tanpa kewajiban.
            </p>
            
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <CTAButton 
                onClick={scrollToForm}
                size="lg"
                className="min-h-[48px]"
              >
                Jadwalkan Konsultasi Gratis (50 Mnt)
              </CTAButton>
              
              <CTAButton 
                variant="secondary"
                onClick={scrollToProcess}
                size="lg"
                className="min-h-[48px]"
              >
                Lihat Cara Kerja
              </CTAButton>
            </div>
            
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs sm:text-sm text-[#6B6B65]">
              <span className="inline-flex items-center gap-1.5">
                <svg className="h-4 w-4 text-[#567354] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>100% Gratis &amp; Non-binding</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="h-4 w-4 text-[#567354] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Online / On-site</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="h-4 w-4 text-[#567354] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Didukung ABS Payroll</span>
              </span>
            </div>
          </div>
          
          {/* Illustration */}
          <div className="lg:pl-8 order-1 lg:order-2">
            <StethoscopeIllustration />
          </div>
        </div>
      </Container>
    </section>
  );
}
