'use client';

import { forwardRef } from 'react';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { useMenuContext } from './MenuContext';
import type { MenuGroupProps } from './Menu.types';

export const MenuGroup = forwardRef<HTMLDivElement, MenuGroupProps>(
  ({ title, className, children, ...props }, ref) => {
    const { theme: themeName, collapsed } = useMenuContext();
    const theme = getTheme(themeName);

    return (
      <div ref={ref} className={cn('space-y-1', className)} {...props}>
        {!collapsed && (
          <div
            className={cn(
              'px-3 py-2 text-xs font-semibold uppercase tracking-wider',
              'text-gray-500 dark:text-gray-400'
            )}
          >
            {title}
          </div>
        )}
        {collapsed && <div className={cn('h-px my-2', theme.base.border)} />}
        <div className="space-y-1">{children}</div>
      </div>
    );
  }
);

MenuGroup.displayName = 'MenuGroup';
