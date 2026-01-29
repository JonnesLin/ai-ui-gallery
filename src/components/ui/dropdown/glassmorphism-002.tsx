'use client';

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownDivider } from './index';

export default function GlassmorphismDropdown() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <Dropdown theme="glassmorphism" placement="bottom-start">
        <DropdownTrigger className="px-6 py-3 bg-white/20 backdrop-blur-lg text-white text-sm font-medium rounded-2xl border border-white/30 shadow-lg hover:bg-white/30 transition-all">
          Options
        </DropdownTrigger>
        <DropdownMenu className="w-60 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl overflow-hidden">
          <DropdownItem icon="📊" className="text-white hover:bg-white/20">
            Dashboard
          </DropdownItem>
          <DropdownItem icon="📈" className="text-white hover:bg-white/20">
            Analytics
          </DropdownItem>
          <DropdownItem icon="📄" className="text-white hover:bg-white/20">
            Reports
          </DropdownItem>
          <DropdownDivider className="bg-white/20" />
          <DropdownItem icon="⚙️" className="text-white hover:bg-white/20">
            Settings
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
