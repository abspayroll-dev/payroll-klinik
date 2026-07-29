import { cn } from '@/lib/utils/cn';
import { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  error?: boolean;
}

const Checkbox = ({ className, error, ...props }: CheckboxProps) => {
  return (
    <input
      type="checkbox"
      className={cn(
        'h-5 w-5 rounded border-[#D1D5DB] text-[#567354]',
        'focus:ring-2 focus:ring-[#567354] focus:ring-offset-2',
        error ? 'border-[#EF4444] focus:ring-[#EF4444]' : '',
        className
      )}
      {...props}
    />
  );
};

Checkbox.displayName = 'Checkbox';

export { Checkbox };
