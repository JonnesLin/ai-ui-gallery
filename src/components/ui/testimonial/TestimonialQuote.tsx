import { cn } from '../_shared/utils';
import type { TestimonialQuoteProps } from './types';

export function TestimonialQuote({ children, className }: TestimonialQuoteProps) {
  return (
    <blockquote className={cn('text-lg leading-relaxed', className)}>
      {children}
    </blockquote>
  );
}
