import React, { createContext, useContext } from 'react';
import type { ThemeName } from '../_themes/types';
import type { TableVariant, TableSize } from './types';
import type { TableThemeConfig } from './theme-config';
import { getTableTheme } from './theme-config';

interface TableContextValue {
  theme: ThemeName;
  themeConfig: TableThemeConfig;
  variant: TableVariant;
  size: TableSize;
  hoverable: boolean;
  stickyHeader: boolean;
}

const TableContext = createContext<TableContextValue | null>(null);

export function useTableContext(): TableContextValue {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error('Table compound components must be used within a Table component');
  }
  return context;
}

interface TableProviderProps {
  theme: ThemeName;
  variant: TableVariant;
  size: TableSize;
  hoverable: boolean;
  stickyHeader: boolean;
  children: React.ReactNode;
}

export function TableProvider({ theme, variant, size, hoverable, stickyHeader, children }: TableProviderProps) {
  const themeConfig = getTableTheme(theme);

  const value: TableContextValue = {
    theme,
    themeConfig,
    variant,
    size,
    hoverable,
    stickyHeader,
  };

  return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
}
