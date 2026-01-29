import { cn } from '../_shared/utils';
import type { ListItemProps } from './types';

export function ListItem({ className, children, onClick }: ListItemProps) {
  const baseStyles = 'flex items-center gap-3 transition-colors';
  const interactiveStyles = onClick ? 'cursor-pointer' : '';

  return (
    <li className={cn(baseStyles, interactiveStyles, className)} onClick={onClick}>
      {children}
    </li>
  );
}
