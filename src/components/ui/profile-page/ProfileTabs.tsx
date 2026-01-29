import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { ProfileTabsProps } from './types';

export function ProfileTabs({ theme: themeName, tabs, activeTab, onTabChange }: ProfileTabsProps) {
  const theme = getTheme(themeName);

  if (!tabs || tabs.length === 0) {
    return null;
  }

  const activeTabId = activeTab || tabs.find((tab) => tab.active)?.id || tabs[0].id;

  return (
    <div className={cn('border-b mb-8', theme.base.border)}>
      <div className="flex gap-8">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange?.(tab.id)}
              className={cn(
                'pb-4 border-b-2 font-medium',
                theme.states.hover,
                isActive ? 'border-current' : 'border-transparent opacity-50 hover:opacity-100'
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
