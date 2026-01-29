import React from 'react';
import { cn } from '../_shared/utils';
import { useTableContext } from './TableContext';
import type { TableBodyProps } from './types';

export function TableBody({ className, children, ...props }: TableBodyProps) {
  const { themeConfig } = useTableContext();

  return (
    <tbody
      className={cn(themeConfig.body.base, className)}
      {...props}
    >
      {children}
    </tbody>
  );
}
