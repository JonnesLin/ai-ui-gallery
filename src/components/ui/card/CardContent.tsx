import { cn } from '../_shared/utils';
import type { CardSectionProps } from './Card.types';

export function CardContent({ className, children }: CardSectionProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {children}
    </div>
  );
}
