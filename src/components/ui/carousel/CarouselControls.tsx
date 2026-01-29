import type { CarouselControlsProps } from './types';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';

export function CarouselControls({
  theme,
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  className,
}: CarouselControlsProps) {
  const themeConfig = getTheme(theme);

  const buttonStyles = cn(
    'w-12 h-12 flex items-center justify-center transition-all duration-200',
    themeConfig.base.radius,
    themeConfig.variants.primary.background,
    themeConfig.variants.primary.text,
    themeConfig.states.hover
  );

  return (
    <>
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={cn(
          buttonStyles,
          'absolute left-4 top-1/2 -translate-y-1/2 z-20',
          !canGoPrevious && themeConfig.states.disabled,
          className
        )}
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={cn(
          buttonStyles,
          'absolute right-4 top-1/2 -translate-y-1/2 z-20',
          !canGoNext && themeConfig.states.disabled,
          className
        )}
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </>
  );
}
