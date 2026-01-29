'use client';

import { cn } from '../_shared/utils';
import type { CircularProgressProps, ProgressColor } from './Progress.types';

const colorStyles: Record<ProgressColor, { stroke: string; track: string }> = {
  primary: {
    stroke: '#2563eb',
    track: '#dbeafe',
  },
  success: {
    stroke: '#16a34a',
    track: '#dcfce7',
  },
  warning: {
    stroke: '#d97706',
    track: '#fef3c7',
  },
  error: {
    stroke: '#dc2626',
    track: '#fee2e2',
  },
  neutral: {
    stroke: '#111827',
    track: '#f3f4f6',
  },
};

export function CircularProgress({
  value,
  max = 100,
  size = 64,
  strokeWidth = 8,
  color = 'primary',
  showValue = false,
  className,
}: CircularProgressProps) {
  const percentage = value === undefined ? undefined : Math.min(100, Math.max(0, (value / max) * 100));
  const isIndeterminate = value === undefined;

  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = percentage === undefined ? 0 : circumference - (percentage / 100) * circumference;

  const colors = colorStyles[color];

  return (
    <div className={cn('relative inline-flex items-center justify-center', className)}>
      <svg
        width={size}
        height={size}
        className={cn('-rotate-90', isIndeterminate && 'animate-spin')}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={colors.track}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={colors.stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={isIndeterminate ? `${circumference * 0.75} ${circumference * 0.25}` : circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={cn(!isIndeterminate && 'transition-all duration-300 ease-out')}
        />
      </svg>
      {showValue && percentage !== undefined && (
        <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-900">
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  );
}
