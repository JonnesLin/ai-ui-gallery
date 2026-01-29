import React from 'react';
import { cn } from '../_shared/utils';
import { useTableContext } from './TableContext';
import type { TableCellProps } from './types';

export function TableCell({ header = false, align = 'left', className, children, ...props }: TableCellProps) {
  const { themeConfig, size } = useTableContext();
  const Component: React.ElementType = header ? 'th' : 'td';

  return (
    <Component
      className={cn(
        header ? themeConfig.header.cell : themeConfig.cell.base,
        themeConfig.cell.sizes[size],
        themeConfig.cell.align[align],
        className
      )}
      scope={header ? 'col' : undefined}
      {...props}
    >
      {children}
    </Component>
  );
}
