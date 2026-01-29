import type { CarouselIndicatorsProps } from './types';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';

export function CarouselIndicators({ theme, total, current, onChange, className }: CarouselIndicatorsProps) {
  const themeConfig = getTheme(theme);

  return (
    <div className={cn('absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20', className)}>
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={cn(
            'h-2 transition-all duration-300',
            themeConfig.base.radius,
            index === current ? 'w-8' : 'w-2',
            index === current
              ? cn(themeConfig.variants.primary.background, 'opacity-100')
              : cn(themeConfig.variants.secondary.background, 'opacity-50', themeConfig.states.hover)
          )}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === current}
        />
      ))}
    </div>
  );
}
