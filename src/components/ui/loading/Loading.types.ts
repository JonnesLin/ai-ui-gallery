import type { ThemeName } from '../_themes/types';

export type LoadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type LoadingVariant = 'spinner' | 'dots' | 'bars' | 'pulse';
export type LoadingColor = 'primary' | 'white' | 'current';

export interface BaseLoadingProps {
  size?: LoadingSize;
  theme?: ThemeName;
  color?: LoadingColor;
  className?: string;
  /** Custom aria-label for screen readers. Defaults to "Loading". */
  'aria-label'?: string;
}

export interface LoadingProps extends BaseLoadingProps {
  variant?: LoadingVariant;
  label?: string;
  fullScreen?: boolean;
  overlay?: boolean;
}

export interface SpinnerProps extends BaseLoadingProps {
  thickness?: 'thin' | 'normal' | 'thick';
}

export interface DotsProps extends BaseLoadingProps {
  count?: 3 | 4 | 5;
}

export interface BarsProps extends BaseLoadingProps {
  count?: 3 | 4 | 5;
}

export interface PulseProps extends BaseLoadingProps {
  shape?: 'circle' | 'square';
}
