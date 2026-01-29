import { useState } from 'react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarItem,
  SidebarGroup,
} from './index';

export default function MinimalistSidebarRefactored() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: '○', label: 'Dashboard' },
    { id: 'projects', icon: '□', label: 'Projects' },
    { id: 'team', icon: '◇', label: 'Team' },
    { id: 'calendar', icon: '△', label: 'Calendar' },
    { id: 'settings', icon: '◎', label: 'Settings' },
  ];

  return (
    <div className="flex h-[600px] bg-gray-50 font-light">
      <Sidebar
        collapsed={collapsed}
        onCollapse={setCollapsed}
        theme="minimalist"
        className="bg-white border-r border-gray-100"
      >
        <SidebarHeader className="h-16 flex items-center justify-between px-6 border-b border-gray-100">
          {!collapsed && (
            <span className="text-sm font-light tracking-[0.3em] text-gray-900 uppercase">
              Minima
            </span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors"
          >
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </SidebarHeader>

        <SidebarContent className="py-8">
          <SidebarGroup>
            {menuItems.map((item) => (
              <li key={item.id}>
                <SidebarItem
                  icon={<span className="text-lg">{item.icon}</span>}
                  active={active === item.id}
                  onClick={() => setActive(item.id)}
                  className={`px-6 py-3 text-sm tracking-wide ${
                    active === item.id
                      ? 'text-gray-900 bg-gray-50'
                      : 'text-gray-400 hover:text-gray-900 hover:bg-gray-50/50'
                  }`}
                >
                  {item.label}
                </SidebarItem>
              </li>
            ))}
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="border-t border-gray-100 p-4">
          <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-xs text-gray-500">JD</span>
            </div>
            {!collapsed && (
              <div>
                <p className="text-sm text-gray-900">John Doe</p>
                <p className="text-xs text-gray-400 tracking-wide">Admin</p>
              </div>
            )}
          </div>
        </SidebarFooter>
      </Sidebar>

      <main className="flex-1 p-8">
        <div className="h-full rounded-lg border border-gray-100 bg-white p-6">
          <h1 className="text-lg font-light text-gray-900 tracking-wide">
            {menuItems.find((item) => item.id === active)?.label}
          </h1>
          <p className="mt-2 text-sm text-gray-400">Minimalist design with clean lines</p>
        </div>
      </main>
    </div>
  );
}
