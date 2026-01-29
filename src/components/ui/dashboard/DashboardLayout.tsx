import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';
import type { DashboardLayoutProps } from './types';

export function DashboardLayout({
  theme,
  sidebarCollapsed,
  onSidebarCollapse,
  children,
  sidebar,
  header,
}: DashboardLayoutProps) {
  const themeConfig = getTheme(theme);

  return (
    <div
      className={cn(
        'flex min-h-screen',
        themeConfig.pageBackground
      )}
    >
      {sidebar}
      <div className="flex-1 flex flex-col">
        {header}
        {children}
      </div>
    </div>
  );
}
