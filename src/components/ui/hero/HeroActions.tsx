import { cn } from '../_shared/utils';
import type { HeroActionsProps } from './types';

export function HeroActions({ children, className }: HeroActionsProps) {
  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row gap-4 items-center',
        className
      )}
    >
      {children}
    </div>
  );
}
