'use client';

import { forwardRef } from 'react';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { useMenuContext } from './MenuContext';
import type { MenuItemProps } from './Menu.types';

export const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(
  ({ itemKey, icon, disabled = false, danger = false, className, children, ...props }, ref) => {
    const { theme: themeName, selectedKeys, collapsed, onSelect } = useMenuContext();
    const theme = getTheme(themeName);

    const isSelected = itemKey ? selectedKeys.includes(itemKey) : false;

    const handleClick = () => {
      if (disabled) return;
      if (itemKey) onSelect(itemKey);
    };

    const baseClasses = cn(
      'w-full flex items-center gap-3',
      'px-3 py-2.5 text-sm font-medium',
      'transition-all duration-200',
      theme.base.radius,
      collapsed && 'justify-center'
    );

    const stateClasses = disabled
      ? theme.states.disabled
      : cn(
          isSelected
            ? cn(
                theme.variants.primary.background,
                theme.variants.primary.text,
                theme.variants.primary.shadow
              )
            : cn(
                theme.base.text,
                theme.states.hover,
                danger && 'text-red-500 hover:text-red-600 hover:bg-red-50'
              )
        );

    return (
      <button
        ref={ref}
        disabled={disabled}
        onClick={handleClick}
        className={cn(baseClasses, stateClasses, className)}
        {...props}
      >
        {icon && <span className="w-5 h-5 flex-shrink-0">{icon}</span>}
        {!collapsed && <span>{children}</span>}
      </button>
    );
  }
);

MenuItem.displayName = 'MenuItem';
