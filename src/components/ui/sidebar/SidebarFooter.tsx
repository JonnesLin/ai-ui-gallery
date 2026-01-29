import { cn } from '../_shared/utils';
import { useSidebar } from './SidebarContext';
import type { SidebarFooterProps } from './Sidebar.types';

export function SidebarFooter({ children, className }: SidebarFooterProps) {
  const { collapsed, theme } = useSidebar();

  return (
    <div
      className={cn(
        'sidebar-footer',
        `sidebar-footer--${theme}`,
        collapsed && 'sidebar-footer--collapsed',
        className
      )}
      data-collapsed={collapsed}
      data-theme={theme}
    >
      {children}
    </div>
  );
}
