import { cn } from '../_shared/utils';
import { Spinner } from './Spinner';
import { Dots } from './Dots';
import { Bars } from './Bars';
import { Pulse } from './Pulse';
import type { LoadingProps } from './Loading.types';

const variantComponents = {
  spinner: Spinner,
  dots: Dots,
  bars: Bars,
  pulse: Pulse,
};

export function Loading({
  variant = 'spinner',
  size = 'md',
  theme = 'minimalist',
  color = 'primary',
  label,
  fullScreen = false,
  overlay = false,
  className,
  'aria-label': ariaLabel,
}: LoadingProps) {
  const Component = variantComponents[variant];

  const componentProps = { size, theme, color, 'aria-label': ariaLabel };

  const content = (
    <div className={cn('flex flex-col items-center gap-3', className)}>
      <Component {...componentProps} />
      {label && (
        <span className="text-sm text-current/70" aria-live="polite">
          {label}
        </span>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div
        className={cn(
          'fixed inset-0 flex items-center justify-center z-50',
          overlay && 'bg-black/50 backdrop-blur-sm'
        )}
        role="status"
        aria-busy="true"
        aria-label={ariaLabel ?? 'Loading content'}
      >
        {content}
      </div>
    );
  }

  return content;
}
