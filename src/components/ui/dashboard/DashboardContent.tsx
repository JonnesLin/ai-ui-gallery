import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';
import type { DashboardContentProps } from './types';

export function DashboardContent({
  theme,
  children,
}: DashboardContentProps) {
  const themeConfig = getTheme(theme);

  return (
    <main className="flex-1 p-8">
      {children}
    </main>
  );
}
