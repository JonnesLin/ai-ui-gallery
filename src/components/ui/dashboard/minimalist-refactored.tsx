import { useState } from 'react';
import {
  DashboardLayout,
  DashboardHeader,
  DashboardSidebar,
  DashboardContent,
  DashboardCard,
} from './index';
import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';

export default function MinimalistDashboardRefactored() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const theme = 'minimalist';
  const themeConfig = getTheme(theme);

  const stats = [
    { title: 'Total Revenue', value: '$45,231', trend: 'up' as const, trendValue: '12.5%' },
    { title: 'Active Users', value: '2,345', trend: 'up' as const, trendValue: '8.2%' },
    { title: 'Orders', value: '1,234', trend: 'up' as const, trendValue: '23.1%' },
    { title: 'Conversion', value: '3.2%', trend: 'down' as const, trendValue: '2.4%' },
  ];

  const activities = [
    { text: 'New order #1234', time: '2 min ago' },
    { text: 'User signup: john@example.com', time: '5 min ago' },
    { text: 'Payment received: $299', time: '12 min ago' },
  ];

  const navItems = [
    { label: 'Overview', active: true },
    { label: 'Analytics', active: false },
    { label: 'Reports', active: false },
    { label: 'Settings', active: false },
  ];

  return (
    <DashboardLayout
      theme={theme}
      sidebarCollapsed={sidebarCollapsed}
      onSidebarCollapse={setSidebarCollapsed}
      sidebar={
        <DashboardSidebar
          theme={theme}
          collapsed={sidebarCollapsed}
          onCollapse={setSidebarCollapsed}
          title="Dashboard"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={cn(
                'block px-4 py-3 rounded transition-colors',
                sidebarCollapsed ? 'text-center' : '',
                item.active
                  ? cn(themeConfig.variants.primary.background, themeConfig.variants.primary.text)
                  : cn(themeConfig.base.text, themeConfig.states.hover)
              )}
            >
              {sidebarCollapsed ? item.label[0] : item.label}
            </a>
          ))}
        </DashboardSidebar>
      }
    >
      <DashboardContent theme={theme}>
        <DashboardHeader theme={theme} title="Overview" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <DashboardCard
              key={stat.title}
              theme={theme}
              title={stat.title}
              value={stat.value}
              trend={stat.trend}
              trendValue={stat.trendValue}
            />
          ))}
        </div>

        <div
          className={cn(
            'p-6 mb-8',
            themeConfig.base.background,
            themeConfig.base.border,
            themeConfig.base.shadow,
            themeConfig.base.radius
          )}
        >
          <h3 className={cn('text-lg font-semibold mb-6', themeConfig.base.text)}>
            Revenue Over Time
          </h3>
          <div className="h-64 flex items-end gap-2">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, index) => (
              <div
                key={index}
                className={cn(
                  'flex-1 rounded-t transition-opacity',
                  themeConfig.variants.primary.background,
                  'hover:opacity-80'
                )}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs opacity-60">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>

        <div
          className={cn(
            'p-6',
            themeConfig.base.background,
            themeConfig.base.border,
            themeConfig.base.shadow,
            themeConfig.base.radius
          )}
        >
          <h3 className={cn('text-lg font-semibold mb-6', themeConfig.base.text)}>
            Recent Activity
          </h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className={cn(
                  'flex justify-between items-center py-3',
                  themeConfig.base.border,
                  'border-b last:border-0'
                )}
              >
                <span className={themeConfig.base.text}>{activity.text}</span>
                <span className="text-sm opacity-60">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </DashboardContent>
    </DashboardLayout>
  );
}
