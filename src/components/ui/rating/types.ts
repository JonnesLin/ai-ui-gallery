import type { ReactNode } from 'react';

export type RatingSize = 'sm' | 'md' | 'lg';
export type RatingPrecision = 0.5 | 1;

export interface RatingProps {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  max?: number;
  size?: RatingSize;
  precision?: RatingPrecision;
  readOnly?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  emptyIcon?: ReactNode;
  color?: string;
  emptyColor?: string;
  showValue?: boolean;
  className?: string;
}

export interface RatingStarProps {
  index: number;
  fillPercentage: number;
  size: RatingSize;
  color: string;
  emptyColor: string;
  icon?: ReactNode;
  emptyIcon?: ReactNode;
  onClick?: () => void;
  onMouseMove?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: () => void;
  disabled?: boolean;
  readOnly?: boolean;
}
