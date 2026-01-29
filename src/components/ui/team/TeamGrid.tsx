import { cn } from '../_shared/utils';
import type { TeamGridProps, GridColumns, GridGap } from './types';

const COLUMN_CLASSES: Record<GridColumns, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
};

const GAP_CLASSES: Record<GridGap, string> = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
};

export function TeamGrid({
  children,
  columns = 4,
  gap = 'md',
  className
}: TeamGridProps) {
  const columnClass = COLUMN_CLASSES[columns];
  const gapClass = GAP_CLASSES[gap];

  return (
    <div className={cn('grid', columnClass, gapClass, className)}>
      {children}
    </div>
  );
}
