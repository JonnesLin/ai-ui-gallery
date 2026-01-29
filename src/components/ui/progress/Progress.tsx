'use client';

import { cn } from '../_shared/utils';
import type { ProgressProps, ProgressColor, ProgressSize, ProgressVariant } from './Progress.types';

const colorStyles: Record<ProgressColor, { bg: string; track: string }> = {
  primary: {
    bg: 'bg-blue-600',
    track: 'bg-blue-100',
  },
  success: {
    bg: 'bg-green-600',
    track: 'bg-green-100',
  },
  warning: {
    bg: 'bg-amber-600',
    track: 'bg-amber-100',
  },
  error: {
    bg: 'bg-red-600',
    track: 'bg-red-100',
  },
  neutral: {
    bg: 'bg-gray-900',
    track: 'bg-gray-100',
  },
};

const sizeStyles: Record<ProgressSize, string> = {
  xs: 'h-1',
  sm: 'h-2',
  md: 'h-3',
  lg: 'h-4',
};

const getVariantStyles = (variant: ProgressVariant): string => {
  if (variant === 'striped') {
    return 'bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]';
  }
  if (variant === 'animated') {
    return 'bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[progress-stripes_1s_linear_infinite]';
  }
  return '';
};

export function Progress({
  value,
  max = 100,
  size = 'md',
  color = 'primary',
  variant = 'solid',
  showValue = false,
  label,
  className,
}: ProgressProps) {
  const percentage = value === undefined ? undefined : Math.min(100, Math.max(0, (value / max) * 100));
  const isIndeterminate = value === undefined;

  const colors = colorStyles[color];

  // Unique ID for aria-labelledby
  const labelId = label ? `progress-label-${Math.random().toString(36).slice(2, 9)}` : undefined;

  return (
    <div className={cn('w-full', className)}>
      {(label || showValue) && (
        <div className="flex justify-between mb-2 text-sm">
          {label && <span id={labelId} className="text-gray-700">{label}</span>}
          {showValue && percentage !== undefined && (
            <span className="text-gray-500 font-medium">{Math.round(percentage)}%</span>
          )}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={isIndeterminate ? undefined : Math.round(percentage!)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-labelledby={labelId}
        aria-label={!label ? 'Progress' : undefined}
        className={cn(
          'w-full rounded-full overflow-hidden',
          sizeStyles[size],
          colors.track
        )}
      >
        <div
          className={cn(
            'h-full rounded-full transition-all duration-300 ease-out motion-reduce:transition-none',
            colors.bg,
            getVariantStyles(variant),
            isIndeterminate && 'w-1/3 animate-[progress-indeterminate_1.5s_ease-in-out_infinite] motion-reduce:animate-none motion-reduce:w-1/2'
          )}
          style={
            isIndeterminate
              ? undefined
              : { width: `${percentage}%` }
          }
        />
      </div>
    </div>
  );
}
