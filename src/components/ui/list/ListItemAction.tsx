import { cn } from '../_shared/utils';
import type { ListItemActionProps } from './types';

export function ListItemAction({ className, children }: ListItemActionProps) {
  return <div className={cn('flex-shrink-0', className)}>{children}</div>;
}
