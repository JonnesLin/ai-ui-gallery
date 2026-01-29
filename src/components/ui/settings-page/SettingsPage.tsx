'use client';

import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { SettingsPageProps } from './types';

export function SettingsPage({
  theme,
  children,
  className,
}: SettingsPageProps) {
  const themeConfig = getTheme(theme);

  return (
    <div className={cn('min-h-screen', themeConfig.pageBackground)}>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className={cn('flex gap-6', className)}>
          {children}
        </div>
      </div>
    </div>
  );
}
