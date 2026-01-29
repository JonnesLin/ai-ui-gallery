import { cn } from '../_shared/utils';
import type { ListItemTextProps } from './types';

export function ListItemText({ className, children, primary, secondary }: ListItemTextProps) {
  if (primary || secondary) {
    return (
      <div className={cn('flex-1', className)}>
        {primary && <div className="font-medium">{primary}</div>}
        {secondary && <div className="text-sm opacity-70 mt-1">{secondary}</div>}
      </div>
    );
  }

  return <div className={cn('flex-1', className)}>{children}</div>;
}
