import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { ContactCardProps } from './types';

export function ContactCard({
  theme,
  icon,
  title,
  content,
  variant = 'primary',
  className,
}: ContactCardProps) {
  const themeConfig = getTheme(theme);
  const variantStyles = themeConfig.variants[variant];

  return (
    <div
      className={cn(
        themeConfig.base.background,
        themeConfig.base.radius,
        themeConfig.base.shadow,
        'p-6',
        themeConfig.states.hover,
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            'w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0',
            variantStyles.background
          )}
        >
          <span className="text-2xl">{icon}</span>
        </div>
        <div className="flex-1">
          <h3 className={cn('font-semibold mb-2', themeConfig.base.text)}>
            {title}
          </h3>
          <div className={cn('text-sm', themeConfig.base.text, 'opacity-80')}>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}
