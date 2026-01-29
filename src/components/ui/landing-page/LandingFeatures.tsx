import { cn } from '../_shared/utils';
import { useLandingPageTheme } from './LandingPageContext';
import type { LandingFeaturesProps } from './types';

export function LandingFeatures({
  title,
  subtitle,
  features,
  columns = 3,
  className,
}: LandingFeaturesProps) {
  const theme = useLandingPageTheme();

  const gridColsMap = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  };

  return (
    <div className={cn('max-w-6xl mx-auto', className)}>
      <h2 className={cn(
        'text-4xl md:text-5xl font-bold text-center mb-4',
        theme.base.text
      )}>
        {title}
      </h2>

      {subtitle && (
        <p className={cn(
          'text-center mb-16 max-w-xl mx-auto text-lg',
          theme.name === 'dark' ? 'text-zinc-400' : 'text-gray-600'
        )}>
          {subtitle}
        </p>
      )}

      <div className={cn('grid gap-8', gridColsMap[columns])}>
        {features.map((feature, i) => (
          <div
            key={i}
            className={cn(
              'p-8',
              theme.base.background,
              theme.base.border,
              theme.base.radius,
              theme.base.shadow,
              theme.states.hover,
              'hover:scale-105'
            )}
          >
            {feature.icon && (
              <div className="mb-6">
                {feature.icon}
              </div>
            )}

            <h3 className={cn(
              'text-2xl font-bold mb-3',
              theme.base.text
            )}>
              {feature.title}
            </h3>

            <p className={cn(
              theme.name === 'dark' ? 'text-zinc-400' : 'text-gray-600'
            )}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
