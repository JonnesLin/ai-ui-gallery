'use client';

import { useState } from 'react';
import { Menu, MenuItem, SubMenu } from './index';

export default function GlassmorphismMenu() {
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['home']);
  const [openKeys, setOpenKeys] = useState<string[]>(['projects']);

  return (
    <div className="w-72 h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 p-6 relative">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl"></div>

      <div className="relative z-10">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-white drop-shadow-lg">Navigation</h1>
        </div>

        <Menu
          theme="glassmorphism"
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          onSelect={(key) => setSelectedKeys([key])}
          onOpenChange={setOpenKeys}
          className="space-y-2"
        >
          <MenuItem
            key="home"
            icon={
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            }
          >
            Home
          </MenuItem>

          <SubMenu
            key="projects"
            title="Projects"
            icon={
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
            }
          >
            <MenuItem key="active">Active</MenuItem>
            <MenuItem key="archived">Archived</MenuItem>
            <MenuItem key="templates">Templates</MenuItem>
          </SubMenu>

          <MenuItem
            key="team"
            icon={
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            }
          >
            Team
          </MenuItem>

          <div className="h-px bg-white/20 my-4" />

          <MenuItem
            key="analytics"
            icon={
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
              </svg>
            }
          >
            Analytics
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
