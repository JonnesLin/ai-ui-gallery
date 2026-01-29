import { cn } from '../_shared/utils';
import { Skeleton } from './Skeleton';
import type { SkeletonProps } from './Skeleton.types';

interface SkeletonTextProps extends Omit<SkeletonProps, 'variant' | 'height'> {
  lines?: number;
  spacing?: string;
}

export function SkeletonText({
  lines = 3,
  spacing = 'space-y-2',
  className,
  ...props
}: SkeletonTextProps) {
  if (lines === 1) {
    return <Skeleton variant="text" height="0.75rem" className={className} {...props} />;
  }

  return (
    <div className={cn(spacing, className)}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          variant="text"
          height="0.75rem"
          width={index === lines - 1 ? '83.33%' : '100%'}
          {...props}
        />
      ))}
    </div>
  );
}
