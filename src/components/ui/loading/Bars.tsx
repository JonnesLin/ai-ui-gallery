import { cn } from '../_shared/utils';
import { getLoadingBgColor } from '../_shared/loading-colors';
import { barsHeightTokens, barsWidthTokens } from '../_shared/size-tokens';
import type { BarsProps } from './Loading.types';

const gapMap = {
  xs: 'gap-0.5',
  sm: 'gap-1',
  md: 'gap-1',
  lg: 'gap-1.5',
  xl: 'gap-2',
} as const;

export function Bars({
  size = 'md',
  theme = 'minimalist',
  color = 'primary',
  count = 5,
  className,
  'aria-label': ariaLabel = 'Loading',
}: BarsProps) {
  const bgColor = getLoadingBgColor(color, theme);

  return (
    <div
      className={cn('flex items-end', barsHeightTokens[size], gapMap[size], className)}
      role="status"
      aria-label={ariaLabel}
    >
      {Array.from({ length: count }, (_, i) => (
        <div
          key={`bar-${i}`}
          className={cn('rounded-t-sm', barsWidthTokens[size], bgColor)}
          style={{
            animation: 'bars-pulse 1s ease-in-out infinite',
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}
