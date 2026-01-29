import React from 'react';
import { cn } from '../_shared/utils';
import { useTableContext } from './TableContext';
import type { TableRowProps } from './types';

export function TableRow({ selected = false, className, children, ...props }: TableRowProps) {
  const { themeConfig, variant, hoverable } = useTableContext();

  return (
    <tr
      className={cn(
        themeConfig.row.base,
        hoverable && themeConfig.row.hover,
        selected && themeConfig.row.selected,
        className
      )}
      {...props}
    >
      {children}
    </tr>
  );
}
