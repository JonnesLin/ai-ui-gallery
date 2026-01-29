import { cn } from '../_shared/utils';
import type { CTATitleProps } from './types';

export function CTATitle({ children, className }: CTATitleProps) {
  return (
    <h2
      className={cn(
        'text-4xl md:text-5xl font-bold mb-6 tracking-tight',
        className
      )}
    >
      {children}
    </h2>
  );
}
