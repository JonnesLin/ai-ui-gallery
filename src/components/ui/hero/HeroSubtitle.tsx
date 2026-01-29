import { cn } from '../_shared/utils';
import type { HeroSubtitleProps } from './types';

export function HeroSubtitle({ children, className }: HeroSubtitleProps) {
  return (
    <p
      className={cn(
        'text-lg md:text-xl max-w-2xl leading-relaxed mb-8',
        className
      )}
    >
      {children}
    </p>
  );
}
