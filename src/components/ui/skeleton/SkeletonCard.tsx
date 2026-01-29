import { cn } from '../_shared/utils';
import { Skeleton } from './Skeleton';
import { SkeletonText } from './SkeletonText';
import type { SkeletonProps } from './Skeleton.types';

interface SkeletonCardProps extends Pick<SkeletonProps, 'animation' | 'className'> {
  imageHeight?: string | number;
  showImage?: boolean;
  textLines?: number;
}

export function SkeletonCard({
  imageHeight = '12rem',
  showImage = true,
  textLines = 3,
  animation = 'pulse',
  className,
}: SkeletonCardProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {showImage && (
        <Skeleton
          variant="rounded"
          height={imageHeight}
          width="100%"
          animation={animation}
        />
      )}
      <Skeleton
        variant="text"
        height="1rem"
        width="75%"
        animation={animation}
      />
      <SkeletonText
        lines={textLines}
        animation={animation}
      />
    </div>
  );
}
