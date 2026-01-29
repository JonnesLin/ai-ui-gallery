import { cn } from '../_shared/utils';
import { useLandingPageTheme } from './LandingPageContext';
import type { LandingCTAProps } from './types';

export function LandingCTA({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  className,
}: LandingCTAProps) {
  const theme = useLandingPageTheme();

  return (
    <div className={cn('max-w-4xl mx-auto text-center', className)}>
      <h2 className={cn(
        'text-4xl md:text-5xl font-bold mb-6',
        theme.base.text
      )}>
        {title}
      </h2>

      <p className={cn(
        'mb-10 text-lg max-w-lg mx-auto',
        theme.name === 'dark' ? 'text-zinc-400' : 'text-gray-600'
      )}>
        {description}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {primaryCTA && (
          <button
            onClick={primaryCTA.onClick}
            className={cn(
              'px-12 py-5 font-bold text-lg',
              theme.variants.primary.background,
              theme.variants.primary.text,
              theme.variants.primary.border,
              theme.variants.primary.shadow,
              theme.variants.primary.hover,
              theme.base.radius,
              theme.states.hover
            )}
          >
            {primaryCTA.text}
          </button>
        )}

        {secondaryCTA && (
          <button
            onClick={secondaryCTA.onClick}
            className={cn(
              'px-12 py-5 font-bold text-lg',
              theme.variants.ghost.background,
              theme.variants.ghost.text,
              theme.variants.ghost.border,
              theme.variants.ghost.hover,
              theme.states.hover
            )}
          >
            {secondaryCTA.text}
          </button>
        )}
      </div>
    </div>
  );
}
