'use client';

import { useState } from 'react';
import {
  FormData,
  FormErrors,
  initialFormData,
  validateStep1,
  validateStep2,
  validateStep3,
} from '@/lib/utils/form';
import { FormProgress } from './FormProgress';
import { Step1Company } from './Step1Company';
import { Step2Contact } from './Step2Contact';
import { Step3Needs } from './Step3Needs';
import { CTAButton } from '@/components/shared/CTAButton';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

const STEPS = ['Informasi', 'Kontak', 'Kebutuhan'];

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleNext = () => {
    let stepErrors: FormErrors = {};
    if (currentStep === 1) stepErrors = validateStep1(formData);
    if (currentStep === 2) stepErrors = validateStep2(formData);

    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    setErrors({});
    if (currentStep < STEPS.length) {
      setCurrentStep((prev) => prev + 1);
      setTimeout(() => {
        const formProgressElement = document.getElementById('form-progress');
        if (formProgressElement) {
          formProgressElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
    }
  };

  const handleBack = () => {
    setErrors({});
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      setTimeout(() => {
        const formProgressElement = document.getElementById('form-progress');
        if (formProgressElement) {
          formProgressElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
    }
  };

  const getUtmParams = () => {
    if (typeof window === 'undefined') return {};
    const params = new URLSearchParams(window.location.search);
    return {
      utmSource: params.get('utm_source') || '',
      utmMedium: params.get('utm_medium') || '',
      utmCampaign: params.get('utm_campaign') || '',
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const stepErrors = validateStep3(formData);

    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const utmParams = getUtmParams();
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, ...utmParams }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message);
      }

      if (typeof window !== 'undefined') {
        window.location.href = '/terima-kasih';
      }
    } catch (error) {
      setSubmitError('Terjadi kesalahan. Silakan coba lagi.');
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
      <FormProgress currentStep={currentStep} totalSteps={3} steps={STEPS} />

      <div className="rounded-2xl border border-[#E5E5E0] bg-white p-6 sm:p-8 shadow-sm">
        {currentStep === 1 && (
          <Step1Company formData={formData} errors={errors} onChange={handleChange} />
        )}
        {currentStep === 2 && (
          <Step2Contact formData={formData} errors={errors} onChange={handleChange} />
        )}
        {currentStep === 3 && (
          <Step3Needs formData={formData} errors={errors} onChange={handleChange} />
        )}

        {submitError && (
          <div className="mt-6 rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/20 p-4 text-sm text-[#EF4444]">
            {submitError}
          </div>
        )}

        {/* Micro-copy */}
        <div className="mt-4 text-center text-xs text-[#6B6B65]">
          Tanpa biaya tersembunyi. Tim kami merespons dalam 1x24 jam kerja untuk konfirmasi jadwal.
        </div>

        {/* Navigation Buttons */}
        <div className="mt-4 flex items-center justify-between gap-4">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#567354] hover:text-[#4A6248] disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" />
              Kembali
            </button>
          ) : (
            <div />
          )}

          {currentStep < 3 ? (
            <CTAButton onClick={handleNext} type="button" disabled={isSubmitting}>
              Lanjutkan
              <ChevronRight className="ml-2 h-4 w-4" />
            </CTAButton>
          ) : (
            <CTAButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Mengirim...
                </>
              ) : (
                'Kirim &amp; Jadwalkan Konsultasi'
              )}
            </CTAButton>
          )}
        </div>
      </div>
    </form>
  );
}