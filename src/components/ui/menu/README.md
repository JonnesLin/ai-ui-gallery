# Menu Component System

A modular, theme-based menu component system built with React and TypeScript.

## Architecture

The menu system consists of four core components:

- `Menu` - Main container component
- `MenuItem` - Individual menu item
- `SubMenu` - Expandable submenu
- `MenuGroup` - Grouping with title

All components use React Context to share state, eliminating prop drilling.

## Components

### Menu

Main container that provides context to all child components.

```tsx
<Menu
  theme="minimalist"
  mode="vertical"
  selectedKeys={['home']}
  openKeys={['settings']}
  onSelect={(key) => console.log(key)}
  onOpenChange={(keys) => console.log(keys)}
>
  {children}
</Menu>
```

**Props:**
- `theme: ThemeName` (required) - Theme configuration
- `mode?: 'vertical' | 'horizontal' | 'inline'` - Display mode (default: 'vertical')
- `collapsed?: boolean` - Collapsed state for sidebar menus
- `selectedKeys?: string[]` - Controlled selected keys
- `openKeys?: string[]` - Controlled open submenu keys
- `defaultSelectedKeys?: string[]` - Uncontrolled default selected keys
- `defaultOpenKeys?: string[]` - Uncontrolled default open keys
- `onSelect?: (key: string) => void` - Selection callback
- `onOpenChange?: (openKeys: string[]) => void` - Submenu toggle callback

### MenuItem

Individual menu item component.

```tsx
<MenuItem
  key="home"
  icon={<HomeIcon />}
  disabled={false}
  danger={false}
>
  Home
</MenuItem>
```

**Props:**
- `key: string` (required) - Unique identifier
- `icon?: ReactNode` - Icon element
- `disabled?: boolean` - Disabled state
- `danger?: boolean` - Danger styling (e.g., logout)
- `children: ReactNode` - Item content

### SubMenu

Expandable submenu component.

```tsx
<SubMenu
  key="settings"
  title="Settings"
  icon={<SettingsIcon />}
>
  <MenuItem key="profile">Profile</MenuItem>
  <MenuItem key="security">Security</MenuItem>
</SubMenu>
```

**Props:**
- `key: string` (required) - Unique identifier
- `title: ReactNode` (required) - Submenu title
- `icon?: ReactNode` - Icon element
- `disabled?: boolean` - Disabled state
- `children: ReactNode` - MenuItem children

### MenuGroup

Visual grouping with optional title.

```tsx
<MenuGroup title="System">
  <MenuItem key="help">Help</MenuItem>
  <MenuItem key="logout">Logout</MenuItem>
</MenuGroup>
```

**Props:**
- `title: string` (required) - Group title
- `children: ReactNode` - MenuItem children

## Usage Examples

### Basic Menu

```tsx
import { Menu, MenuItem } from '@/components/ui/menu';

function BasicMenu() {
  return (
    <Menu theme="minimalist">
      <MenuItem key="dashboard" icon={<DashboardIcon />}>
        Dashboard
      </MenuItem>
      <MenuItem key="settings" icon={<SettingsIcon />}>
        Settings
      </MenuItem>
    </Menu>
  );
}
```

### Controlled Menu

```tsx
import { useState } from 'react';
import { Menu, MenuItem, SubMenu } from '@/components/ui/menu';

function ControlledMenu() {
  const [selectedKeys, setSelectedKeys] = useState(['home']);
  const [openKeys, setOpenKeys] = useState(['settings']);

  return (
    <Menu
      theme="dark"
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onSelect={(key) => setSelectedKeys([key])}
      onOpenChange={setOpenKeys}
    >
      <MenuItem key="home">Home</MenuItem>
      <SubMenu key="settings" title="Settings">
        <MenuItem key="profile">Profile</MenuItem>
        <MenuItem key="security">Security</MenuItem>
      </SubMenu>
    </Menu>
  );
}
```

### Collapsed Sidebar

```tsx
import { useState } from 'react';
import { Menu, MenuItem, SubMenu } from '@/components/ui/menu';

function CollapsedMenu() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Menu theme="neumorphism" collapsed={collapsed}>
      <MenuItem key="home" icon={<HomeIcon />}>
        Home
      </MenuItem>
      <MenuItem key="dashboard" icon={<DashboardIcon />}>
        Dashboard
      </MenuItem>
    </Menu>
  );
}
```

## Design Principles

### No Fallbacks

Components throw errors immediately when:
- Used outside of Menu context
- Theme is not found
- Required props are missing

### Type Safety

All props are strictly typed. No runtime type checking.

### State Management

- Use Context for shared state
- Controlled vs uncontrolled patterns
- Single source of truth

### Performance

- `useCallback` for event handlers
- Conditional rendering for collapsed state
- CSS transitions for animations

## Theme Integration

All components use the theme system from `src/components/ui/_themes/`:

```tsx
const theme = getTheme(themeName);
theme.base.radius      // Border radius
theme.base.text        // Text color
theme.variants.primary // Primary variant styles
theme.states.hover     // Hover state styles
```

Themes are applied through the `cn()` utility for className merging.
