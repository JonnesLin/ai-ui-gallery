import type { ThemeName } from '../_themes/types';

export type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded';
export type SkeletonAnimation = 'pulse' | 'wave' | 'none';

export interface SkeletonProps {
  /** Width of the skeleton. Required for non-text variants. */
  width?: string | number;
  /** Height of the skeleton. Required - defaults to 16px if not provided. */
  height?: string | number;
  /** Shape variant of the skeleton. */
  variant?: SkeletonVariant;
  /** Animation type. 'wave' is not available on all browsers. */
  animation?: SkeletonAnimation;
  /** Theme name for color theming. */
  theme?: ThemeName;
  /** Additional CSS classes. */
  className?: string;
}

export interface ThemedSkeletonProps extends SkeletonProps {
  theme?: ThemeName;
}
