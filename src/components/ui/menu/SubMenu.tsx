'use client';

import { forwardRef } from 'react';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { useMenuContext } from './MenuContext';
import type { SubMenuProps } from './Menu.types';

export const SubMenu = forwardRef<HTMLDivElement, SubMenuProps>(
  ({ itemKey, title, icon, disabled = false, className, children, ...props }, ref) => {
    const { theme: themeName, openKeys, collapsed, onOpenChange } = useMenuContext();
    const theme = getTheme(themeName);

    const isOpen = itemKey ? openKeys.includes(itemKey) : false;

    const handleToggle = () => {
      if (disabled) return;
      if (itemKey) onOpenChange(itemKey);
    };

    const baseClasses = cn(
      'w-full flex items-center justify-between gap-3',
      'px-3 py-2.5 text-sm font-medium',
      'transition-all duration-200',
      theme.base.radius,
      collapsed && 'justify-center'
    );

    const stateClasses = disabled
      ? theme.states.disabled
      : cn(theme.base.text, theme.states.hover);

    return (
      <div ref={ref} className={className} {...props}>
        <button
          disabled={disabled}
          onClick={handleToggle}
          className={cn(baseClasses, stateClasses)}
        >
          <div className="flex items-center gap-3">
            {icon && <span className="w-5 h-5 flex-shrink-0">{icon}</span>}
            {!collapsed && <span>{title}</span>}
          </div>
          {!collapsed && (
            <svg
              className={cn(
                'w-4 h-4 transition-transform duration-200',
                isOpen && 'rotate-180'
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </button>

        {isOpen && !collapsed && (
          <div
            className={cn(
              'ml-8 mt-1 space-y-1',
              'border-l',
              theme.base.border,
              'animate-in slide-in-from-top-2 fade-in duration-200'
            )}
          >
            {children}
          </div>
        )}
      </div>
    );
  }
);

SubMenu.displayName = 'SubMenu';
