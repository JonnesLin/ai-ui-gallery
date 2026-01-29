'use client';

import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { SettingsItemProps } from './types';

export function SettingsItem({
  theme,
  label,
  description,
  children,
  danger = false,
  className,
}: SettingsItemProps) {
  const themeConfig = getTheme(theme);

  return (
    <div
      className={cn(
        'flex items-center justify-between py-4',
        theme === 'flat' && 'border-b-2',
        theme === 'material' && 'rounded-lg hover:bg-opacity-5 hover:bg-gray-500 transition-colors px-6',
        themeConfig.base.border,
        className
      )}
    >
      <div className="flex-1">
        <p className={cn('text-sm font-medium', danger ? themeConfig.variants.danger.text : themeConfig.base.text)}>
          {label}
        </p>
        {description && (
          <p className={cn('text-xs mt-1', themeConfig.base.text, 'opacity-60')}>
            {description}
          </p>
        )}
      </div>
      <div className="ml-4">{children}</div>
    </div>
  );
}
