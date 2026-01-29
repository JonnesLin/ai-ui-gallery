import { cn } from '../_shared/utils';
import { useSidebar } from './SidebarContext';
import type { SidebarHeaderProps } from './Sidebar.types';

export function SidebarHeader({ children, className }: SidebarHeaderProps) {
  const { collapsed, theme } = useSidebar();

  return (
    <div
      className={cn(
        'sidebar-header',
        `sidebar-header--${theme}`,
        collapsed && 'sidebar-header--collapsed',
        className
      )}
      data-collapsed={collapsed}
      data-theme={theme}
    >
      {children}
    </div>
  );
}
