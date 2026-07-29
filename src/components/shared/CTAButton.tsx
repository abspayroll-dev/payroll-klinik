import { cn } from '@/lib/utils/cn';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'lg';
}

export const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-[#567354] focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-[#567354] text-white hover:bg-[#4A6248]': variant === 'primary',
            'border-2 border-[#567354] text-[#567354] bg-transparent hover:bg-[#567354] hover:text-white':
              variant === 'secondary',
            'px-6 py-3 text-base': size === 'default',
            'px-8 py-4 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CTAButton.displayName = 'CTAButton';
