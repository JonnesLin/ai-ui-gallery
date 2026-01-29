import React from 'react';
import { cn } from '../_shared/utils';
import { TableProvider } from './TableContext';
import type { TableProps } from './types';
import { getTableTheme } from './theme-config';

export function Table({
  theme,
  variant = 'simple',
  size = 'md',
  hoverable = true,
  stickyHeader = false,
  loading = false,
  className,
  children,
  'aria-label': ariaLabel,
  ...props
}: TableProps) {
  const themeConfig = getTableTheme(theme);

  return (
    <TableProvider theme={theme} variant={variant} size={size} hoverable={hoverable} stickyHeader={stickyHeader}>
      <div
        className="relative overflow-x-auto"
        role="region"
        aria-label={ariaLabel || 'Data table'}
        aria-busy={loading}
      >
        <table
          className={cn(
            themeConfig.table.base,
            themeConfig.table.variants[variant],
            themeConfig.table.sizes[size],
            className
          )}
          {...props}
        >
          {children}
        </table>
        {loading && (
          <div
            className={themeConfig.loading.overlay}
            role="status"
            aria-live="polite"
            aria-label="Loading table data"
          >
            <div className={themeConfig.loading.spinner} />
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    </TableProvider>
  );
}
