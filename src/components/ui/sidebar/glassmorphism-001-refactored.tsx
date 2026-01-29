import { useState } from 'react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarItem,
  SidebarGroup,
} from './index';

export default function GlassmorphismSidebarRefactored() {
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
    <div className="flex h-[600px] bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 p-4">
      <Sidebar
        collapsed={collapsed}
        onCollapse={setCollapsed}
        theme="glassmorphism"
        className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl shadow-xl shadow-purple-900/20"
      >
        <SidebarHeader className="h-16 flex items-center justify-between px-5">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/30 backdrop-blur flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="font-semibold text-white">Glasify</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-9 h-9 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
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
                  className={`px-4 py-3 rounded-xl text-sm ${
                    active === item.id
                      ? 'bg-white/30 text-white shadow-lg shadow-black/10'
                      : 'text-white/80 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <span className="font-medium">{item.label}</span>
                </SidebarItem>
              </li>
            ))}
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-4">
          <div
            className={`flex items-center gap-3 p-3 rounded-xl bg-white/10 ${
              collapsed ? 'justify-center' : ''
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-violet-400 flex items-center justify-center text-white font-semibold text-sm shadow-lg">
              JD
            </div>
            {!collapsed && (
              <div>
                <p className="text-sm font-medium text-white">John Doe</p>
                <p className="text-xs text-white/60">Admin</p>
              </div>
            )}
          </div>
        </SidebarFooter>
      </Sidebar>

      <main className="flex-1 p-4 ml-4">
        <div className="h-full rounded-2xl backdrop-blur-xl bg-white/20 border border-white/30 p-6">
          <h1 className="text-xl font-semibold text-white">
            {menuItems.find((item) => item.id === active)?.label}
          </h1>
          <p className="mt-2 text-sm text-white/70">Glassmorphism with frosted glass effect</p>
        </div>
      </main>
    </div>
  );
}
