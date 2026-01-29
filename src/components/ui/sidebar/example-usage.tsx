/**
 * Real-World Usage Example
 *
 * This file demonstrates how to use the Sidebar components in a real application.
 * Copy this pattern to your own project.
 */

import { useState } from 'react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarItem,
  SidebarGroup,
} from './index';

// Example 1: Basic Usage
export function BasicSidebarExample() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState('dashboard');

  return (
    <div className="flex h-screen">
      <Sidebar
        collapsed={collapsed}
        onCollapse={setCollapsed}
        theme="minimalist"
        className="bg-white border-r border-gray-200"
      >
        <SidebarHeader className="h-16 flex items-center justify-between px-4 border-b">
          {!collapsed && <h1 className="text-lg font-semibold">MyApp</h1>}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded hover:bg-gray-100"
          >
            {collapsed ? '→' : '←'}
          </button>
        </SidebarHeader>

        <SidebarContent className="py-4">
          <SidebarGroup>
            <li>
              <SidebarItem
                icon="📊"
                active={active === 'dashboard'}
                onClick={() => setActive('dashboard')}
                className="mx-2 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                Dashboard
              </SidebarItem>
            </li>
            <li>
              <SidebarItem
                icon="📁"
                active={active === 'projects'}
                onClick={() => setActive('projects')}
                className="mx-2 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                Projects
              </SidebarItem>
            </li>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-4 border-t">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
              U
            </div>
            {!collapsed && <span className="text-sm">User</span>}
          </div>
        </SidebarFooter>
      </Sidebar>

      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold">{active}</h2>
        <p className="mt-2 text-gray-600">Main content area</p>
      </main>
    </div>
  );
}

// Example 2: With Multiple Groups
export function GroupedSidebarExample() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState('dashboard');

  const mainItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'projects', icon: '📁', label: 'Projects' },
    { id: 'team', icon: '👥', label: 'Team' },
  ];

  const settingsItems = [
    { id: 'profile', icon: '👤', label: 'Profile' },
    { id: 'settings', icon: '⚙️', label: 'Settings' },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar
        collapsed={collapsed}
        onCollapse={setCollapsed}
        theme="dark"
        className="bg-gray-900 border-r border-gray-800"
      >
        <SidebarHeader className="h-16 flex items-center justify-between px-4 border-b border-gray-800">
          {!collapsed && <h1 className="text-lg font-semibold text-white">MyApp</h1>}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded text-gray-400 hover:text-white hover:bg-gray-800"
          >
            {collapsed ? '→' : '←'}
          </button>
        </SidebarHeader>

        <SidebarContent className="py-4">
          <SidebarGroup title="Main">
            {mainItems.map((item) => (
              <li key={item.id}>
                <SidebarItem
                  icon={item.icon}
                  active={active === item.id}
                  onClick={() => setActive(item.id)}
                  className={`mx-2 px-3 py-2 rounded-lg ${
                    active === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {item.label}
                </SidebarItem>
              </li>
            ))}
          </SidebarGroup>

          <div className="mx-4 my-2 border-t border-gray-800" />

          <SidebarGroup title="Settings">
            {settingsItems.map((item) => (
              <li key={item.id}>
                <SidebarItem
                  icon={item.icon}
                  active={active === item.id}
                  onClick={() => setActive(item.id)}
                  className={`mx-2 px-3 py-2 rounded-lg ${
                    active === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {item.label}
                </SidebarItem>
              </li>
            ))}
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-4 border-t border-gray-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center text-sm font-semibold">
              JD
            </div>
            {!collapsed && (
              <div className="flex-1">
                <p className="text-sm text-white">John Doe</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
            )}
          </div>
        </SidebarFooter>
      </Sidebar>

      <main className="flex-1 p-8 bg-gray-950">
        <h2 className="text-2xl font-bold text-white">{active}</h2>
        <p className="mt-2 text-gray-400">Main content area</p>
      </main>
    </div>
  );
}

// Example 3: With Custom Icons (SVG)
export function CustomIconExample() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState('dashboard');

  const HomeIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );

  const ChartIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );

  return (
    <div className="flex h-screen">
      <Sidebar
        collapsed={collapsed}
        onCollapse={setCollapsed}
        theme="minimalist"
        className="bg-white border-r"
      >
        <SidebarHeader className="h-16 flex items-center justify-between px-4 border-b">
          {!collapsed && <h1 className="text-lg font-semibold">MyApp</h1>}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded hover:bg-gray-100"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </SidebarHeader>

        <SidebarContent className="py-4">
          <SidebarGroup>
            <li>
              <SidebarItem
                icon={<HomeIcon />}
                active={active === 'home'}
                onClick={() => setActive('home')}
                className={`mx-2 px-3 py-2 rounded-lg ${
                  active === 'home' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
                }`}
              >
                Home
              </SidebarItem>
            </li>
            <li>
              <SidebarItem
                icon={<ChartIcon />}
                active={active === 'analytics'}
                onClick={() => setActive('analytics')}
                className={`mx-2 px-3 py-2 rounded-lg ${
                  active === 'analytics' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
                }`}
              >
                Analytics
              </SidebarItem>
            </li>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold">{active}</h2>
      </main>
    </div>
  );
}

// Example 4: Minimal (No Header/Footer)
export function MinimalSidebarExample() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState('home');

  return (
    <div className="flex h-screen">
      <Sidebar
        collapsed={collapsed}
        onCollapse={setCollapsed}
        theme="minimalist"
        width="12rem"
        collapsedWidth="4rem"
        className="bg-gray-50 border-r"
      >
        <SidebarContent className="py-2">
          <SidebarGroup>
            <li>
              <SidebarItem
                icon="🏠"
                active={active === 'home'}
                onClick={() => setActive('home')}
                className="mx-2 px-2 py-1 rounded hover:bg-gray-200"
              >
                Home
              </SidebarItem>
            </li>
            <li>
              <SidebarItem
                icon="📊"
                active={active === 'stats'}
                onClick={() => setActive('stats')}
                className="mx-2 px-2 py-1 rounded hover:bg-gray-200"
              >
                Stats
              </SidebarItem>
            </li>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <main className="flex-1 p-4">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Toggle Sidebar
        </button>
        <h2 className="text-2xl font-bold">{active}</h2>
      </main>
    </div>
  );
}

// Example 5: Right-Positioned Sidebar
export function RightSidebarExample() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState('notifications');

  return (
    <div className="flex h-screen">
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold">Main Content</h2>
        <p className="text-gray-600">Sidebar is on the right</p>
      </main>

      <Sidebar
        collapsed={collapsed}
        onCollapse={setCollapsed}
        theme="minimalist"
        position="right"
        className="bg-white border-l"
      >
        <SidebarHeader className="h-16 flex items-center justify-between px-4 border-b">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded hover:bg-gray-100"
          >
            {collapsed ? '←' : '→'}
          </button>
          {!collapsed && <h1 className="text-lg font-semibold">Notifications</h1>}
        </SidebarHeader>

        <SidebarContent className="py-4">
          <SidebarGroup>
            <li>
              <SidebarItem
                icon="🔔"
                active={active === 'notifications'}
                onClick={() => setActive('notifications')}
                className="mx-2 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                Notifications
              </SidebarItem>
            </li>
            <li>
              <SidebarItem
                icon="💬"
                active={active === 'messages'}
                onClick={() => setActive('messages')}
                className="mx-2 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                Messages
              </SidebarItem>
            </li>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
