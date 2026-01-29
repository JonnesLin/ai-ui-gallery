import type { TabPanelsProps } from './Tabs.types';
import { cn } from '../_shared/utils';

export function TabPanels({ className, style, children }: TabPanelsProps) {
  return (
    <div className={cn('mt-4', className)} style={style}>
      {children}
    </div>
  );
}
