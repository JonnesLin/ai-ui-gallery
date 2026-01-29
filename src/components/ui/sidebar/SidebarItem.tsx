import { cn } from '../_shared/utils';
import { useSidebar } from './SidebarContext';
import type { SidebarItemProps } from './Sidebar.types';

export function SidebarItem({
  icon,
  children,
  active = false,
  onClick,
  className,
}: SidebarItemProps) {
  const { collapsed, theme } = useSidebar();

  return (
    <button
      onClick={onClick}
      className={cn(
        'sidebar-item',
        `sidebar-item--${theme}`,
        collapsed && 'sidebar-item--collapsed',
        active && 'sidebar-item--active',
        'w-full flex items-center gap-3 transition-all duration-200',
        className
      )}
      data-collapsed={collapsed}
      data-theme={theme}
      data-active={active}
    >
      {icon && <span className="sidebar-item__icon">{icon}</span>}
      {!collapsed && children && <span className="sidebar-item__label">{children}</span>}
    </button>
  );
}
