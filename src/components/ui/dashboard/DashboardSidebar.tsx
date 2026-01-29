import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';
import type { DashboardSidebarProps } from './types';

export function DashboardSidebar({
  theme,
  collapsed,
  onCollapse,
  title = 'Dashboard',
  children,
}: DashboardSidebarProps) {
  const themeConfig = getTheme(theme);

  return (
    <aside
      className={cn(
        'transition-all duration-300',
        collapsed ? 'w-20' : 'w-64',
        themeConfig.base.background,
        themeConfig.base.border,
        'border-r',
        'p-6'
      )}
    >
      <div className="flex items-center justify-between mb-8">
        {!collapsed && (
          <h1 className={cn('text-xl font-bold', themeConfig.base.text)}>
            {title}
          </h1>
        )}
        <button
          onClick={() => onCollapse(!collapsed)}
          className={cn(
            'p-2 rounded-lg transition-colors',
            themeConfig.states.hover,
            themeConfig.base.text
          )}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {collapsed ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            )}
          </svg>
        </button>
      </div>

      <nav className={cn('space-y-1', collapsed && 'flex flex-col items-center')}>
        {children}
      </nav>
    </aside>
  );
}
