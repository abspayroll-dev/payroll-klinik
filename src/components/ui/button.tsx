import { cn } from '@/lib/utils/cn';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-colors',
          'min-h-[44px]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#567354] focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-[#567354] text-white hover:bg-[#4A6248]': variant === 'default',
            'border border-[#D1D5DB] bg-transparent hover:bg-[#F3F4F6]': variant === 'outline',
            'hover:bg-[#F3F4F6]': variant === 'ghost',
            'h-11 px-4 py-2': size === 'default',
            'h-11 px-3 text-sm': size === 'sm',
            'h-12 px-8': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };