import { useState } from 'react';
import {
  DashboardLayout,
  DashboardSidebar,
  DashboardContent,
  DashboardCard,
} from './index';
import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';

export default function FlatDashboardRefactored() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const theme = 'flat';
  const themeConfig = getTheme(theme);

  const stats = [
    { label: 'Total Revenue', value: '$45,231', change: '+12.5%', bg: 'bg-red-500' },
    { label: 'Active Users', value: '2,345', change: '+8.2%', bg: 'bg-blue-500' },
    { label: 'Orders', value: '1,234', change: '+23.1%', bg: 'bg-green-500' },
    { label: 'Conversion', value: '3.2%', change: '-2.4%', bg: 'bg-orange-500' },
  ];

  const activities = [
    { text: 'New order #1234', time: '2 min ago' },
    { text: 'User signup: john@example.com', time: '5 min ago' },
    { text: 'Payment received: $299', time: '12 min ago' },
  ];

  return (
    <DashboardLayout
      theme={theme}
      sidebarCollapsed={sidebarCollapsed}
      onSidebarCollapse={setSidebarCollapsed}
      sidebar={
        <aside className="w-64 bg-indigo-600 p-6">
          <h1 className="text-xl font-bold text-white mb-8">Dashboard</h1>
          <nav className="space-y-1">
            <a href="#" className="block px-4 py-3 text-white bg-indigo-700 rounded font-medium">
              Overview
            </a>
            <a href="#" className="block px-4 py-3 text-indigo-200 hover:bg-indigo-700 hover:text-white rounded transition-colors">
              Analytics
            </a>
            <a href="#" className="block px-4 py-3 text-indigo-200 hover:bg-indigo-700 hover:text-white rounded transition-colors">
              Reports
            </a>
            <a href="#" className="block px-4 py-3 text-indigo-200 hover:bg-indigo-700 hover:text-white rounded transition-colors">
              Settings
            </a>
          </nav>
        </aside>
      }
    >
      <DashboardContent theme={theme}>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(stat.bg, 'rounded-lg p-6')}
            >
              <p className="text-sm text-white/80 mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className={cn('text-sm', stat.change.startsWith('+') ? 'text-white' : 'text-white/70')}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Revenue Over Time</h3>
          <div className="h-64 flex items-end gap-2">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, index) => {
              const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-orange-500'];
              return (
                <div
                  key={index}
                  className={cn('flex-1', colors[index % 4], 'rounded-t')}
                  style={{ height: `${height}%` }}
                />
              );
            })}
          </div>
          <div className="flex justify-between mt-4 text-xs text-gray-500">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {activities.map((activity, index) => {
              const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500'];
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 py-3 border-b border-gray-100 last:border-0"
                >
                  <div className={cn('w-3 h-3', colors[index], 'rounded-full')} />
                  <span className="flex-1 text-gray-700">{activity.text}</span>
                  <span className="text-sm text-gray-400">{activity.time}</span>
                </div>
              );
            })}
          </div>
        </div>
      </DashboardContent>
    </DashboardLayout>
  );
}
