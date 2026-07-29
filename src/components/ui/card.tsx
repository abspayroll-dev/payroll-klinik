import { cn } from '@/lib/utils/cn';
import { HTMLAttributes } from 'react';

const Card = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'rounded-xl border border-[#E5E5E0] bg-white text-[#2E2E2A] shadow-sm',
        'transition-all duration-200 hover:shadow-lg hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Card.displayName = 'Card';

const CardHeader = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('p-6', className)} {...props}>
      {children}
    </div>
  );
};

CardHeader.displayName = 'CardHeader';

const CardTitle = ({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3 className={cn('font-semibold leading-none tracking-tight', className)} {...props}>
      {children}
    </h3>
  );
};

CardTitle.displayName = 'CardTitle';

const CardDescription = ({ className, children, ...props }: HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className={cn('mt-2 text-sm text-[#6B6B65]', className)} {...props}>
      {children}
    </p>
  );
};

CardDescription.displayName = 'CardDescription';

const CardContent = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('p-6 pt-0', className)} {...props}>
      {children}
    </div>
  );
};

CardContent.displayName = 'CardContent';

export { Card, CardHeader, CardTitle, CardDescription, CardContent };
