import { cn } from '../_shared/utils';
import { getLoadingBgColor } from '../_shared/loading-colors';
import { dotsSizeTokens, dotsGapTokens } from '../_shared/size-tokens';
import type { DotsProps } from './Loading.types';

export function Dots({
  size = 'md',
  theme = 'minimalist',
  color = 'primary',
  count = 3,
  className,
  'aria-label': ariaLabel = 'Loading',
}: DotsProps) {
  const bgColor = getLoadingBgColor(color, theme);

  return (
    <div
      className={cn('flex', dotsGapTokens[size], className)}
      role="status"
      aria-label={ariaLabel}
    >
      {Array.from({ length: count }, (_, i) => (
        <div
          key={`dot-${i}`}
          className={cn(
            'rounded-full animate-bounce motion-reduce:animate-none',
            dotsSizeTokens[size],
            bgColor
          )}
          style={{
            animationDelay: `${-0.3 + i * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}
