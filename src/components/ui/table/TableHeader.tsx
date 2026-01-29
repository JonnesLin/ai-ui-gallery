import React from 'react';
import { cn } from '../_shared/utils';
import { useTableContext } from './TableContext';
import type { TableHeaderProps } from './types';

export function TableHeader({ className, children, ...props }: TableHeaderProps) {
  const { themeConfig, stickyHeader } = useTableContext();

  return (
    <thead
      className={cn(
        themeConfig.header.base,
        stickyHeader && 'sticky top-0 z-10',
        className
      )}
      {...props}
    >
      {children}
    </thead>
  );
}
