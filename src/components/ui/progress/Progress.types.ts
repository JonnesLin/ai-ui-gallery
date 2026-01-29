export type ProgressColor = 'primary' | 'success' | 'warning' | 'error' | 'neutral';
export type ProgressSize = 'xs' | 'sm' | 'md' | 'lg';
export type ProgressVariant = 'solid' | 'striped' | 'animated';

export interface ProgressProps {
  value?: number;
  max?: number;
  size?: ProgressSize;
  color?: ProgressColor;
  variant?: ProgressVariant;
  showValue?: boolean;
  label?: string;
  className?: string;
}

export interface CircularProgressProps {
  value?: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  color?: ProgressColor;
  showValue?: boolean;
  className?: string;
}
