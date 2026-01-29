'use client';

import { useRef, useEffect, useCallback } from 'react';
import { useDropdownContext } from './Dropdown';
import type { DropdownItemProps } from './Dropdown.types';
import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';

export function DropdownItem({
  children,
  icon,
  shortcut,
  disabled = false,
  danger = false,
  onClick,
  className,
}: DropdownItemProps) {
  const { setOpen, theme, registerItem, unregisterItem } = useDropdownContext();
  const itemRef = useRef<HTMLButtonElement>(null);
  const itemIndexRef = useRef<number>(-1);
  const themeConfig = getTheme(theme);

  useEffect(() => {
    itemIndexRef.current = registerItem();
    return () => {
      unregisterItem(itemIndexRef.current);
    };
  }, [registerItem, unregisterItem]);

  const handleClick = useCallback(() => {
    if (disabled) return;
    onClick?.();
    setOpen(false);
  }, [disabled, onClick, setOpen]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }, [handleClick]);

  const variantStyles = danger ? themeConfig.variants.danger : themeConfig.variants.ghost;

  return (
    <button
      ref={itemRef}
      type="button"
      role="menuitem"
      aria-disabled={disabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      className={cn(
        'w-full flex items-center gap-3',
        'px-3 py-2',
        'text-sm text-left',
        'transition-colors',
        themeConfig.base.text,
        variantStyles.hover,
        disabled && themeConfig.states.disabled,
        'focus:outline-none focus:bg-gray-100/50',
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="flex-1">{children}</span>
      {shortcut && (
        <span className="text-xs opacity-60 ml-auto">
          {shortcut}
        </span>
      )}
    </button>
  );
}
