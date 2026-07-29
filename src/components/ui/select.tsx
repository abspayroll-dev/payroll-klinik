import { cn } from '@/lib/utils/cn';
import { SelectHTMLAttributes, forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className={cn(
            'flex h-11 w-full appearance-none rounded-lg border bg-white px-4 py-2 pr-10 text-base',
            'min-h-[44px]',
            'placeholder:text-[#9CA3AF]',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error
              ? 'border-[#EF4444] focus:ring-[#EF4444]'
              : 'border-[#D1D5DB] focus:ring-[#567354]',
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ChevronDown className="h-5 w-5 text-[#6B6B65]" />
        </div>
      </div>
    );
  }
);

Select.displayName = 'Select';

export { Select };