'use client';

import { useDropdownContext } from './Dropdown';
import type { DropdownDividerProps } from './Dropdown.types';
import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';

export function DropdownDivider({ className }: DropdownDividerProps) {
  const { theme } = useDropdownContext();
  const themeConfig = getTheme(theme);

  return (
    <div
      role="separator"
      className={cn(
        'h-px my-1',
        themeConfig.base.border.includes('border-gray')
          ? 'bg-gray-200'
          : 'bg-current opacity-20',
        className
      )}
    />
  );
}
