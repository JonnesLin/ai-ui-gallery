import { cn } from '../_shared/utils';
import type { CTAActionsProps } from './types';

export function CTAActions({ children, className }: CTAActionsProps) {
  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row gap-4 justify-center',
        className
      )}
    >
      {children}
    </div>
  );
}
