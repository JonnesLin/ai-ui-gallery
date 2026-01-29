import { cn } from '../_shared/utils';
import { getSpinnerColors } from '../_shared/loading-colors';
import { spinnerSizeTokens } from '../_shared/size-tokens';
import type { SpinnerProps } from './Loading.types';

const thicknessMap = {
  thin: 'border-2',
  normal: 'border-4',
  thick: 'border-[6px]',
} as const;

export function Spinner({
  size = 'md',
  theme = 'minimalist',
  color = 'primary',
  thickness = 'normal',
  className,
  'aria-label': ariaLabel = 'Loading',
}: SpinnerProps) {
  const colors = getSpinnerColors(color, theme);

  return (
    <div
      className={cn(
        'rounded-full animate-spin motion-reduce:animate-none',
        spinnerSizeTokens[size],
        thicknessMap[thickness],
        colors.base,
        colors.top,
        className
      )}
      role="status"
      aria-label={ariaLabel}
    />
  );
}
