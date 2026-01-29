import { useTabsContext } from './TabsContext';
import type { TabPanelProps } from './Tabs.types';
import { cn } from '../_shared/utils';

export function TabPanel({ value, className, style, children }: TabPanelProps) {
  const { value: activeValue } = useTabsContext();
  const isActive = value === activeValue;

  return (
    <div
      role="tabpanel"
      id={`panel-${value}`}
      aria-labelledby={`tab-${value}`}
      hidden={!isActive}
      tabIndex={0}
      className={cn(className)}
      style={style}
    >
      {children}
    </div>
  );
}
