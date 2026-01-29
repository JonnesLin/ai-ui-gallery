import { cn } from '../_shared/utils';
import { useSidebar } from './SidebarContext';
import type { SidebarGroupProps } from './Sidebar.types';

export function SidebarGroup({ title, children, className }: SidebarGroupProps) {
  const { collapsed, theme } = useSidebar();

  return (
    <div
      className={cn(
        'sidebar-group',
        `sidebar-group--${theme}`,
        collapsed && 'sidebar-group--collapsed',
        className
      )}
      data-collapsed={collapsed}
      data-theme={theme}
    >
      {title && !collapsed && (
        <div className="sidebar-group__title">
          {title}
        </div>
      )}
      <ul className="sidebar-group__items space-y-1">
        {children}
      </ul>
    </div>
  );
}
