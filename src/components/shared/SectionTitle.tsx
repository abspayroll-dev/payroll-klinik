import { cn } from '@/lib/utils/cn';
import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionTitle({ 
  children, 
  subtitle, 
  className,
  centered = false 
}: SectionTitleProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <h2 className="text-3xl font-bold text-[#567354] sm:text-4xl">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-[#6B6B65]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
