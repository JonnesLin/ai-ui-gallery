'use client';

import { useState } from 'react';
import { Menu, MenuItem, MenuGroup, SubMenu } from './index';

export default function NeumorphismMenu() {
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['home']);
  const [openKeys, setOpenKeys] = useState<string[]>(['settings']);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="w-full h-screen bg-gray-200 p-8 flex gap-8">
      <div className="flex flex-col gap-4">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-xl shadow-[5px_5px_10px_#b8b8b8,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#b8b8b8,inset_-5px_-5px_10px_#ffffff] transition-all"
        >
          {collapsed ? 'Expand' : 'Collapse'}
        </button>

        <div
          className={`${
            collapsed ? 'w-20' : 'w-64'
          } bg-gray-200 p-4 rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] transition-all duration-300`}
        >
          <Menu
            theme="neumorphism"
            collapsed={collapsed}
            selectedKeys={selectedKeys}
            openKeys={openKeys}
            onSelect={(key) => setSelectedKeys([key])}
            onOpenChange={setOpenKeys}
            className="space-y-2"
          >
            <MenuItem
              key="home"
              icon={
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              }
            >
              Home
            </MenuItem>

            <MenuItem
              key="dashboard"
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
              Dashboard
            </MenuItem>

            <SubMenu
              key="settings"
              title="Settings"
              icon={
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              }
            >
              <MenuItem key="profile">Profile</MenuItem>
              <MenuItem key="security">Security</MenuItem>
              <MenuItem key="notifications">Notifications</MenuItem>
            </SubMenu>

            <MenuGroup title="System">
              <MenuItem
                key="help"
                icon={
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                }
              >
                Help
              </MenuItem>

              <MenuItem
                key="logout"
                danger
                icon={
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                }
              >
                Logout
              </MenuItem>
            </MenuGroup>
          </Menu>
        </div>
      </div>

      <div className="flex-1">
        <div className="bg-gray-200 p-6 rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Content Area</h2>
          <p className="text-gray-600">Selected: {selectedKeys[0]}</p>
          <p className="text-gray-600">Open keys: {openKeys.join(', ')}</p>
          <p className="text-gray-600">Collapsed: {collapsed ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </div>
  );
}
