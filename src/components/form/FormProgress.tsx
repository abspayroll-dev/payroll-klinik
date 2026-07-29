import { cn } from '@/lib/utils/cn';
import { Check } from 'lucide-react';

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

export function FormProgress({ currentStep, totalSteps, steps }: FormProgressProps) {
  return (
    <div id="form-progress" className="mb-8 scroll-mt-24">
      {/* Step Indicators */}
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div key={index} className="flex items-center flex-1 last:flex-0">
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors',
                    isCompleted && 'bg-[#567354] text-white',
                    isCurrent && 'bg-[#567354]/10 text-[#567354] ring-2 ring-[#567354]',
                    !isCompleted && !isCurrent && 'bg-gray-100 text-gray-400'
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    stepNumber
                  )}
                </div>
                <span className="mt-2 text-xs font-medium text-gray-600 hidden sm:block">
                  {step}
                </span>
              </div>

              {/* Connector Line */}
              {index < totalSteps - 1 && (
                <div className="flex-1 mx-2 sm:mx-4">
                  <div
                    className={cn(
                      'h-0.5 transition-colors',
                      isCompleted ? 'bg-[#567354]' : 'bg-gray-200'
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
