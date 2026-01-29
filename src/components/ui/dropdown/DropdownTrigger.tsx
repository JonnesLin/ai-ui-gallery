'use client';

import { cloneElement, isValidElement, useRef, useCallback } from 'react';
import { useDropdownContext } from './Dropdown';
import type { DropdownTriggerProps } from './Dropdown.types';
import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';

export function DropdownTrigger({ children, className, asChild }: DropdownTriggerProps) {
  const { open, setOpen, triggerId, menuId, theme } = useDropdownContext();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const themeConfig = getTheme(theme);

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!open) {
        setOpen(true);
      }
    }
    if (e.key === 'Escape' && open) {
      e.preventDefault();
      setOpen(false);
      triggerRef.current?.focus();
    }
  }, [open, setOpen]);

  if (asChild && isValidElement(children)) {
    return cloneElement(children as React.ReactElement<any>, {
      ref: triggerRef,
      id: triggerId,
      'aria-haspopup': 'true',
      'aria-expanded': open,
      'aria-controls': open ? menuId : undefined,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
    });
  }

  return (
    <button
      ref={triggerRef}
      id={triggerId}
      type="button"
      aria-haspopup="true"
      aria-expanded={open}
      aria-controls={open ? menuId : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={cn(
        'inline-flex items-center justify-center gap-2',
        'font-medium',
        'transition-colors',
        themeConfig.base.text,
        themeConfig.base.border,
        themeConfig.base.radius,
        themeConfig.variants.primary.background,
        themeConfig.variants.primary.hover,
        themeConfig.states.focus,
        themeConfig.sizes.md,
        className
      )}
    >
      {children}
    </button>
  );
}
