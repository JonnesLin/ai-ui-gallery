# Sidebar Component

A composable, theme-aware sidebar component system.

## Architecture

The sidebar component follows a composition pattern with these core components:

- `Sidebar` - Main container, manages collapsed state via Context
- `SidebarHeader` - Top section (logo, brand, toggle button)
- `SidebarContent` - Main navigation area (flex-1)
- `SidebarFooter` - Bottom section (user profile, settings)
- `SidebarItem` - Individual menu item
- `SidebarGroup` - Menu item grouping with optional title

## Data Flow

```
Parent Component
  ├─ collapsed state (boolean)
  ├─ onCollapse callback
  └─ menuItems data
       ↓
    Sidebar (provides Context)
       ↓
    All child components (consume Context)
```

## Basic Usage

```tsx
import { useState } from 'react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarItem,
  SidebarGroup,
} from './sidebar';

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'projects', icon: '📁', label: 'Projects' },
  ];

  return (
    <Sidebar
      collapsed={collapsed}
      onCollapse={setCollapsed}
      theme="minimalist"
      className="bg-white border-r"
    >
      <SidebarHeader>
        {!collapsed && <span>Brand</span>}
        <button onClick={() => setCollapsed(!collapsed)}>Toggle</button>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          {menuItems.map((item) => (
            <li key={item.id}>
              <SidebarItem
                icon={item.icon}
                active={active === item.id}
                onClick={() => setActive(item.id)}
              >
                {item.label}
              </SidebarItem>
            </li>
          ))}
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div>User Profile</div>
      </SidebarFooter>
    </Sidebar>
  );
}
```

## Props

### Sidebar

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | required | Child components |
| collapsed | boolean | false | Collapsed state |
| onCollapse | (collapsed: boolean) => void | - | Collapse callback |
| theme | ThemeName | 'minimalist' | Theme name |
| width | string | '16rem' | Expanded width |
| collapsedWidth | string | '5rem' | Collapsed width |
| position | 'left' \| 'right' | 'left' | Position |
| className | string | - | Additional classes |

### SidebarItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| icon | ReactNode | - | Icon element |
| children | ReactNode | - | Label text (hidden when collapsed) |
| active | boolean | false | Active state |
| onClick | () => void | - | Click handler |
| className | string | - | Additional classes |

### SidebarGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | - | Group title (hidden when collapsed) |
| children | ReactNode | required | Menu items |
| className | string | - | Additional classes |

## Styling Strategy

Components use semantic class names with BEM-like naming:

```tsx
sidebar
sidebar--{theme}
sidebar--{position}
sidebar--collapsed

sidebar-item
sidebar-item--{theme}
sidebar-item--collapsed
sidebar-item--active
```

Each component also provides `data-*` attributes for CSS selectors:

```tsx
<aside data-collapsed="true" data-theme="dark" data-position="left">
```

This allows theme-specific styling without hardcoding in components:

```css
.sidebar[data-theme="dark"] {
  background: rgb(17 24 39);
}

.sidebar-item[data-active="true"][data-theme="dark"] {
  background: linear-gradient(to right, rgba(37, 99, 235, 0.2), rgba(6, 182, 212, 0.2));
}
```

## Context API

The `useSidebar()` hook provides access to shared state:

```tsx
import { useSidebar } from './sidebar';

function CustomComponent() {
  const { collapsed, theme } = useSidebar();

  if (collapsed) return <Icon />;
  return <FullView />;
}
```

## Error Handling

Components throw errors when used incorrectly:

```tsx
// ❌ Will throw: "useSidebar must be used within a Sidebar component"
function BrokenComponent() {
  const { collapsed } = useSidebar();
  return <div>{collapsed}</div>;
}

// ✅ Correct usage
<Sidebar>
  <CustomComponent /> {/* Can use useSidebar here */}
</Sidebar>
```

## Migration Guide

### Before (Old Pattern)

```tsx
export default function MinimalistSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={collapsed ? 'w-20' : 'w-64'}>
      {/* 80+ lines of hardcoded JSX */}
    </aside>
  );
}
```

### After (New Pattern)

```tsx
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter } from './sidebar';

export default function MinimalistSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sidebar collapsed={collapsed} onCollapse={setCollapsed} theme="minimalist">
      <SidebarHeader>{/* ... */}</SidebarHeader>
      <SidebarContent>{/* ... */}</SidebarContent>
      <SidebarFooter>{/* ... */}</SidebarFooter>
    </Sidebar>
  );
}
```

## Design Philosophy

Following Linus Torvalds' principles:

1. **Good Taste**: No special cases. Collapsed state is handled by Context, not props drilling.
2. **Simplicity**: Each component does one thing. 7 files, ~400 lines total.
3. **No Fallbacks**: Errors are thrown directly when misused.
4. **Data Structure First**: Context manages shared state, components consume it.

## Examples

See refactored examples:
- `minimalist-001-refactored.tsx`
- `dark-001-refactored.tsx`
