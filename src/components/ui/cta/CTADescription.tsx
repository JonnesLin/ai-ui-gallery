import { cn } from '../_shared/utils';
import type { CTADescriptionProps } from './types';

export function CTADescription({ children, className }: CTADescriptionProps) {
  return (
    <p
      className={cn(
        'text-lg mb-10 max-w-2xl mx-auto leading-relaxed',
        className
      )}
    >
      {children}
    </p>
  );
}
