import { cn } from '../_shared/utils';
import { getLoadingBgColor } from '../_shared/loading-colors';
import { pulseSizeTokens } from '../_shared/size-tokens';
import type { PulseProps } from './Loading.types';

const shapeMap = {
  circle: 'rounded-full',
  square: 'rounded-md',
} as const;

export function Pulse({
  size = 'md',
  theme = 'minimalist',
  color = 'primary',
  shape = 'circle',
  className,
  'aria-label': ariaLabel = 'Loading',
}: PulseProps) {
  const bgColor = getLoadingBgColor(color, theme);

  return (
    <div
      className={cn(
        'animate-pulse motion-reduce:animate-none',
        pulseSizeTokens[size],
        shapeMap[shape],
        bgColor,
        className
      )}
      role="status"
      aria-label={ariaLabel}
    />
  );
}
