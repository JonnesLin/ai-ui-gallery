import { cn } from '../_shared/utils';
import { useSidebar } from './SidebarContext';
import type { SidebarContentProps } from './Sidebar.types';

export function SidebarContent({ children, className }: SidebarContentProps) {
  const { collapsed, theme } = useSidebar();

  return (
    <nav
      className={cn(
        'sidebar-content',
        `sidebar-content--${theme}`,
        collapsed && 'sidebar-content--collapsed',
        'flex-1',
        className
      )}
      data-collapsed={collapsed}
      data-theme={theme}
    >
      {children}
    </nav>
  );
}
