'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useDropdownContext } from './Dropdown';
import type { DropdownMenuProps } from './Dropdown.types';
import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';

export function DropdownMenu({ children, className }: DropdownMenuProps) {
  const { open, setOpen, placement, menuId, triggerId, theme, setFocusedIndex } = useDropdownContext();
  const menuRef = useRef<HTMLDivElement>(null);
  const themeConfig = getTheme(theme);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const triggerElement = document.getElementById(triggerId);

      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        triggerElement &&
        !triggerElement.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open, setOpen, triggerId]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!menuRef.current) return;

    const items = Array.from(menuRef.current.querySelectorAll<HTMLElement>(
      '[role="menuitem"]:not([aria-disabled="true"])'
    ));

    if (items.length === 0) return;

    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        const menuItems = items;
        const currentIdx = menuItems.findIndex(el => el === document.activeElement);
        const nextIdx = currentIdx + 1 >= menuItems.length ? 0 : currentIdx + 1;
        menuItems[nextIdx]?.focus();
        setFocusedIndex(nextIdx);
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        const menuItemsUp = items;
        const currentIdxUp = menuItemsUp.findIndex(el => el === document.activeElement);
        const nextIdxUp = currentIdxUp - 1 < 0 ? menuItemsUp.length - 1 : currentIdxUp - 1;
        menuItemsUp[nextIdxUp]?.focus();
        setFocusedIndex(nextIdxUp);
      }
        break;
      case 'Home':
        e.preventDefault();
        setFocusedIndex(0);
        items[0]?.focus();
        break;
      case 'End':
        e.preventDefault();
        setFocusedIndex(items.length - 1);
        items[items.length - 1]?.focus();
        break;
      case 'Escape':
        e.preventDefault();
        setOpen(false);
        document.getElementById(triggerId)?.focus();
        break;
    }
  }, [setFocusedIndex, setOpen, triggerId]);

  useEffect(() => {
    if (open && menuRef.current) {
      const firstItem = menuRef.current.querySelector<HTMLElement>(
        '[role="menuitem"]:not([aria-disabled="true"])'
      );
      firstItem?.focus();
      setFocusedIndex(0);
    }
  }, [open, setFocusedIndex]);

  if (!open) return null;

  const placementClasses = {
    'bottom-start': 'top-full left-0 mt-2',
    'bottom-end': 'top-full right-0 mt-2',
    'top-start': 'bottom-full left-0 mb-2',
    'top-end': 'bottom-full right-0 mb-2',
  };

  return (
    <div
      ref={menuRef}
      id={menuId}
      role="menu"
      aria-labelledby={triggerId}
      onKeyDown={handleKeyDown}
      className={cn(
        'absolute z-50',
        'min-w-[12rem]',
        'py-1',
        themeConfig.base.background,
        themeConfig.base.border,
        themeConfig.base.radius,
        themeConfig.base.shadow,
        'animate-in fade-in-0 zoom-in-95',
        placementClasses[placement],
        className
      )}
    >
      {children}
    </div>
  );
}
