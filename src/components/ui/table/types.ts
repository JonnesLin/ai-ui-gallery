import type { ThemeName } from '../_themes/types';

export type TableVariant = 'simple' | 'striped' | 'bordered';
export type TableSize = 'sm' | 'md' | 'lg';

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  theme: ThemeName;
  variant?: TableVariant;
  size?: TableSize;
  hoverable?: boolean;
  stickyHeader?: boolean;
  loading?: boolean;
}

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  selected?: boolean;
}

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  header?: boolean;
  align?: 'left' | 'center' | 'right';
}
