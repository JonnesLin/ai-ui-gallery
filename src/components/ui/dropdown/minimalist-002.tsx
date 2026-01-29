'use client';

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownDivider } from './index';

export default function MinimalistDropdown() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <Dropdown theme="minimalist" placement="bottom-start">
        <DropdownTrigger>Menu</DropdownTrigger>
        <DropdownMenu>
          <DropdownItem icon="👤" shortcut="⌘P">
            Profile
          </DropdownItem>
          <DropdownItem icon="⚙️" shortcut="⌘S">
            Settings
          </DropdownItem>
          <DropdownItem icon="❓" shortcut="⌘H">
            Help
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem icon="🚪" danger onClick={() => console.log('Logout')}>
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
