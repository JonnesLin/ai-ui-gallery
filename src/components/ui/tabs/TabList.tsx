import { useRef } from 'react';
import { useTabsContext } from './TabsContext';
import type { TabListProps } from './Tabs.types';
import { cn } from '../_shared/utils';

export function TabList({ className, style, children }: TabListProps) {
  const { orientation, onChange } = useTabsContext();
  const tabListRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const tabs = tabListRef.current?.querySelectorAll('[role="tab"]:not([disabled])');
    if (!tabs || tabs.length === 0) return;

    const currentIndex = Array.from(tabs).findIndex(
      (tab) => tab === document.activeElement
    );

    if (currentIndex === -1) return;

    let nextIndex: number | null = null;

    if (orientation === 'horizontal') {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
      }
    } else {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
      }
    }

    if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = tabs.length - 1;
    }

    if (nextIndex !== null) {
      const nextTab = tabs[nextIndex] as HTMLElement;
      const tabValue = nextTab.getAttribute('data-value');
      if (tabValue) {
        onChange(tabValue);
      }
      nextTab.focus();
    }
  };

  return (
    <div
      ref={tabListRef}
      role="tablist"
      aria-orientation={orientation}
      onKeyDown={handleKeyDown}
      className={cn(
        orientation === 'horizontal' ? 'flex' : 'flex flex-col',
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}
