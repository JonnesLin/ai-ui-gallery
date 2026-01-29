import { useState } from 'react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarItem,
  SidebarGroup,
} from './index';

export default function DarkSidebarRefactored() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'projects', icon: '📁', label: 'Projects' },
    { id: 'team', icon: '👥', label: 'Team' },
    { id: 'calendar', icon: '📅', label: 'Calendar' },
    { id: 'settings', icon: '⚙️', label: 'Settings' },
  ];

  return (
    <div className="flex h-[600px] bg-gray-950">
      <Sidebar
        collapsed={collapsed}
        onCollapse={setCollapsed}
        theme="dark"
        className="bg-gray-900 border-r border-gray-800"
      >
        <SidebarHeader className="h-16 flex items-center justify-between px-5 border-b border-gray-800">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="font-semibold text-white">DarkUI</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </SidebarHeader>

        <SidebarContent className="py-4 px-3">
          <SidebarGroup>
            {menuItems.map((item) => (
              <li key={item.id}>
                <SidebarItem
                  icon={<span className="text-lg">{item.icon}</span>}
                  active={active === item.id}
                  onClick={() => setActive(item.id)}
                  className={`px-4 py-3 rounded-lg text-sm ${
                    active === item.id
                      ? 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <span className="font-medium">{item.label}</span>
                </SidebarItem>
              </li>
            ))}
          </SidebarGroup>
        </SidebarContent>

        <div className="mx-4 border-t border-gray-800" />

        <SidebarFooter className="p-4">
          <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-semibold text-sm">
              JD
            </div>
            {!collapsed && (
              <>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">John Doe</p>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
                <button className="w-8 h-8 rounded-lg hover:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </SidebarFooter>
      </Sidebar>

      <main className="flex-1 p-6">
        <div className="h-full rounded-xl bg-gray-900 border border-gray-800 p-6">
          <h1 className="text-xl font-semibold text-white">
            {menuItems.find((item) => item.id === active)?.label}
          </h1>
          <p className="mt-2 text-sm text-gray-500">Dark mode with cyan accents</p>
        </div>
      </main>
    </div>
  );
}
