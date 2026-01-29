import { Skeleton } from './Skeleton';
import type { SkeletonProps } from './Skeleton.types';

interface SkeletonCircleProps extends Omit<SkeletonProps, 'variant'> {
  size?: string | number;
}

export function SkeletonCircle({
  size = '4rem',
  width,
  height,
  ...props
}: SkeletonCircleProps) {
  const circleSize = width || height || size;

  return (
    <Skeleton
      variant="circular"
      width={circleSize}
      height={circleSize}
      {...props}
    />
  );
}
