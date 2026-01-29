'use client';

import { useState, useCallback, forwardRef } from 'react';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { MenuContext } from './MenuContext';
import type { MenuProps } from './Menu.types';

export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      mode = 'vertical',
      theme: themeName,
      collapsed = false,
      selectedKeys: controlledSelectedKeys,
      openKeys: controlledOpenKeys,
      defaultSelectedKeys = [],
      defaultOpenKeys = [],
      onSelect,
      onOpenChange,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const theme = getTheme(themeName);

    const [internalSelectedKeys, setInternalSelectedKeys] = useState<string[]>(
      defaultSelectedKeys
    );
    const [internalOpenKeys, setInternalOpenKeys] = useState<string[]>(defaultOpenKeys);

    const isControlled = controlledSelectedKeys !== undefined;
    const selectedKeys = isControlled ? controlledSelectedKeys : internalSelectedKeys;
    const openKeys = controlledOpenKeys !== undefined ? controlledOpenKeys : internalOpenKeys;

    const handleSelect = useCallback(
      (key: string) => {
        if (!isControlled) {
          setInternalSelectedKeys([key]);
        }
        onSelect?.(key);
      },
      [isControlled, onSelect]
    );

    const handleOpenChange = useCallback(
      (key: string) => {
        const newOpenKeys = openKeys.includes(key)
          ? openKeys.filter((k) => k !== key)
          : [...openKeys, key];

        if (controlledOpenKeys === undefined) {
          setInternalOpenKeys(newOpenKeys);
        }
        onOpenChange?.(newOpenKeys);
      },
      [openKeys, controlledOpenKeys, onOpenChange]
    );

    const menuClasses = cn(
      'flex',
      mode === 'horizontal' ? 'flex-row items-center' : 'flex-col',
      mode === 'inline' && 'space-y-1',
      theme.base.text,
      className
    );

    return (
      <MenuContext.Provider
        value={{
          mode,
          theme: themeName,
          collapsed,
          selectedKeys,
          openKeys,
          onSelect: handleSelect,
          onOpenChange: handleOpenChange,
        }}
      >
        <nav ref={ref} className={menuClasses} {...props}>
          {children}
        </nav>
      </MenuContext.Provider>
    );
  }
);

Menu.displayName = 'Menu';
