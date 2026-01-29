'use client';

import { useState } from 'react';
import { Menu, MenuItem, MenuGroup, SubMenu } from './index';

export default function DarkMenu() {
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['overview']);
  const [openKeys, setOpenKeys] = useState<string[]>(['workspace']);

  return (
    <div className="w-72 h-screen bg-gray-950 border-r border-gray-800 p-5">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Dashboard</h1>
        <p className="text-sm text-gray-500">Manage your workspace</p>
      </div>

      <Menu
        theme="dark"
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onSelect={(key) => setSelectedKeys([key])}
        onOpenChange={setOpenKeys}
        className="space-y-1.5"
      >
        <MenuItem
          key="overview"
          icon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          }
        >
          Overview
        </MenuItem>

        <SubMenu
          key="workspace"
          title="Workspace"
          icon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          }
        >
          <MenuItem key="members">Members</MenuItem>
          <MenuItem key="roles">Roles</MenuItem>
          <MenuItem key="permissions">Permissions</MenuItem>
        </SubMenu>

        <MenuItem
          key="notifications"
          icon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          }
        >
          <div className="flex items-center justify-between w-full">
            <span>Notifications</span>
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              3
            </span>
          </div>
        </MenuItem>

        <div className="h-px bg-gray-800 my-4" />

        <MenuGroup title="System">
          <MenuItem
            key="security"
            icon={
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            }
          >
            Security
          </MenuItem>

          <MenuItem
            key="preferences"
            icon={
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            }
          >
            Preferences
          </MenuItem>
        </MenuGroup>
      </Menu>
    </div>
  );
}
