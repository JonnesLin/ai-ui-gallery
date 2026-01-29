import type { ResultProps } from './types';
import { ResultIcon } from './ResultIcon';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';

export function Result({
  theme,
  status,
  title,
  subtitle,
  icon,
  extra,
  children,
  className,
}: ResultProps) {
  const themeConfig = getTheme(theme);

  const getStatusVariant = (status: ResultProps['status']) => {
    const variantMap = {
      success: themeConfig.variants.success,
      error: themeConfig.variants.danger,
      warning: themeConfig.variants.warning,
      info: themeConfig.variants.primary,
      '404': themeConfig.variants.secondary,
      '403': themeConfig.variants.warning,
      '500': themeConfig.variants.danger,
    };
    return variantMap[status];
  };

  const statusVariant = getStatusVariant(status);

  return (
    <div
      className={cn(
        'text-center space-y-4 p-8',
        themeConfig.base.background,
        themeConfig.base.border,
        themeConfig.base.radius,
        themeConfig.base.shadow,
        className
      )}
    >
      <div
        className={cn(
          'w-20 h-20 mx-auto rounded-full flex items-center justify-center',
          statusVariant.background,
          statusVariant.border
        )}
      >
        {icon || <ResultIcon status={status} className={cn('w-10 h-10', statusVariant.text)} />}
      </div>

      <h2 className={cn('text-2xl font-semibold', themeConfig.base.text)}>
        {title}
      </h2>

      {subtitle && (
        <p className={cn('text-sm', themeConfig.base.text, 'opacity-70')}>
          {subtitle}
        </p>
      )}

      {children}

      {extra && <div className="mt-4">{extra}</div>}
    </div>
  );
}
