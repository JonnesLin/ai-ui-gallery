import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { FeatureIcon } from './FeatureIcon';
import type { FeatureProps } from './types';

export function Feature({
  theme,
  layout,
  icon,
  title,
  description,
  link,
  className,
}: FeatureProps) {
  const themeConfig = getTheme(theme);

  const layoutClasses = {
    vertical: 'flex-col items-start',
    horizontal: 'flex-row items-center gap-4',
    centered: 'flex-col items-center text-center',
  };

  const iconSizeClasses = {
    vertical: 'w-12 h-12 text-2xl',
    horizontal: 'w-14 h-14 text-3xl',
    centered: 'w-16 h-16 text-3xl',
  };

  return (
    <div className={cn('flex group', layoutClasses[layout], className)}>
      <FeatureIcon
        theme={theme}
        className={iconSizeClasses[layout]}
      >
        {icon}
      </FeatureIcon>

      <div className={cn('flex flex-col', layout === 'horizontal' ? 'flex-1' : '')}>
        <h3
          className={cn(
            'font-semibold mb-2 text-lg',
            themeConfig.base.text
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            'leading-relaxed text-sm',
            themeConfig.base.text,
            'opacity-70'
          )}
        >
          {description}
        </p>

        {link && (
          <a
            href={link.href}
            className={cn(
              'mt-3 inline-flex items-center gap-1 text-sm font-medium',
              themeConfig.variants.primary.text,
              'hover:underline transition-all'
            )}
          >
            {link.label}
            <span>→</span>
          </a>
        )}
      </div>
    </div>
  );
}
