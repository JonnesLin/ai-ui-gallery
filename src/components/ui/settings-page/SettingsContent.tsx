'use client';

import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { ThemeName } from '../_themes';
import type { ReactNode } from 'react';

export interface SettingsContentProps {
  theme: ThemeName;
  children: ReactNode;
  className?: string;
}

export function SettingsContent({
  theme,
  children,
  className,
}: SettingsContentProps) {
  const themeConfig = getTheme(theme);

  return (
    <div className={cn('flex-1', themeConfig.base.background, themeConfig.base.shadow, themeConfig.base.radius, className)}>
      {children}
    </div>
  );
}
