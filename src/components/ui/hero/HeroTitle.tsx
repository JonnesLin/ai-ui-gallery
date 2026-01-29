import { cn } from '../_shared/utils';
import type { HeroTitleProps } from './types';

export function HeroTitle({ children, className }: HeroTitleProps) {
  return (
    <h1
      className={cn(
        'text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6',
        className
      )}
    >
      {children}
    </h1>
  );
}
