import { cn } from '../_shared/utils';
import type { ListItemIconProps } from './types';

export function ListItemIcon({ className, children }: ListItemIconProps) {
  return <div className={cn('flex-shrink-0', className)}>{children}</div>;
}
