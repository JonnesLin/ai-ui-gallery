import { useMemo } from 'react';
import { cn } from '../_shared/utils';
import { SidebarProvider } from './SidebarContext';
import type { SidebarProps } from './Sidebar.types';

export function Sidebar({
  children,
  collapsed = false,
  onCollapse,
  theme = 'minimalist',
  width = '16rem',
  collapsedWidth = '5rem',
  position = 'left',
  className,
}: SidebarProps) {
  const contextValue = useMemo(
    () => ({
      collapsed,
      theme,
    }),
    [collapsed, theme]
  );

  const style = {
    width: collapsed ? collapsedWidth : width,
  };

  return (
    <SidebarProvider value={contextValue}>
      <aside
        className={cn(
          'sidebar',
          `sidebar--${theme}`,
          `sidebar--${position}`,
          collapsed && 'sidebar--collapsed',
          'transition-all duration-300 ease-in-out relative flex flex-col',
          className
        )}
        style={style}
        data-collapsed={collapsed}
        data-theme={theme}
        data-position={position}
      >
        {children}
      </aside>
    </SidebarProvider>
  );
}
