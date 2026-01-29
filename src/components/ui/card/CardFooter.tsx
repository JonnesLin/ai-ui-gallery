import { cn } from '../_shared/utils';
import type { CardSectionProps } from './Card.types';

export function CardFooter({ className, children }: CardSectionProps) {
  return (
    <div className={cn('flex items-center gap-3 mt-4', className)}>
      {children}
    </div>
  );
}
