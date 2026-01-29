import { cn } from '../_shared/utils';
import { useLandingPageTheme } from './LandingPageContext';
import type { LandingHeroProps } from './types';

export function LandingHero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  badge,
  className,
}: LandingHeroProps) {
  const theme = useLandingPageTheme();

  return (
    <div className={cn('max-w-5xl mx-auto text-center', className)}>
      {badge && (
        <div className={cn(
          'inline-block px-4 py-2 mb-8 text-sm',
          theme.base.background,
          theme.base.border,
          theme.base.radius
        )}>
          {badge}
        </div>
      )}

      <h1 className={cn(
        'text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight',
        theme.base.text
      )}>
        {title}
      </h1>

      <p className={cn(
        'text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed',
        theme.name === 'dark' ? 'text-zinc-400' : 'text-gray-600'
      )}>
        {subtitle}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {primaryCTA && (
          <button
            onClick={primaryCTA.onClick}
            className={cn(
              'px-10 py-5 font-bold text-lg',
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
              'px-10 py-5 font-bold text-lg',
              theme.variants.secondary.background,
              theme.variants.secondary.text,
              theme.variants.secondary.border,
              theme.variants.secondary.hover,
              theme.base.radius,
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
