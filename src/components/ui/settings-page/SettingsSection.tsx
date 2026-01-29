'use client';

import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { SettingsSectionProps } from './types';

export function SettingsSection({
  theme,
  title,
  description,
  children,
  className,
}: SettingsSectionProps) {
  const themeConfig = getTheme(theme);

  return (
    <div className={cn('p-8', className)}>
      <div className="space-y-6">
        <div>
          <h2 className={cn('text-2xl font-medium mb-2', themeConfig.base.text)}>{title}</h2>
          {description && (
            <p className={cn('text-sm', themeConfig.base.text, 'opacity-60')}>{description}</p>
          )}
        </div>
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  );
}
