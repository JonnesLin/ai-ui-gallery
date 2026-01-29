import { cn } from '../_shared/utils';
import type { CardSectionProps } from './Card.types';

export function CardHeader({ className, children }: CardSectionProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      {children}
    </div>
  );
}
