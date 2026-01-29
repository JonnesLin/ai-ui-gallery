# Dashboard Components

A complete dashboard component system with theme support.

## Components

### DashboardLayout

Main layout container that wraps the entire dashboard.

```tsx
import { DashboardLayout } from './dashboard';

<DashboardLayout
  theme="minimalist"
  sidebarCollapsed={false}
  onSidebarCollapse={(collapsed) => setCollapsed(collapsed)}
  sidebar={<YourSidebar />}
  header={<YourHeader />}
>
  {children}
</DashboardLayout>
```

### DashboardSidebar

Collapsible sidebar navigation component.

```tsx
import { DashboardSidebar } from './dashboard';

<DashboardSidebar
  theme="minimalist"
  collapsed={false}
  onCollapse={(collapsed) => setCollapsed(collapsed)}
  title="Dashboard"
>
  {/* Navigation items */}
</DashboardSidebar>
```

### DashboardHeader

Header component with title and action buttons.

```tsx
import { DashboardHeader } from './dashboard';

<DashboardHeader
  theme="minimalist"
  title="Overview"
  actions={<Button>Create Report</Button>}
/>
```

### DashboardContent

Content area wrapper.

```tsx
import { DashboardContent } from './dashboard';

<DashboardContent theme="minimalist">
  {/* Your content */}
</DashboardContent>
```

### DashboardCard

Stat card component with trend indicators.

```tsx
import { DashboardCard } from './dashboard';

<DashboardCard
  theme="minimalist"
  title="Total Revenue"
  subtitle="Last 30 days"
  value="$45,231"
  trend="up"
  trendValue="12.5%"
  icon={<RevenueIcon />}
/>
```

## Props

### DashboardLayoutProps

- `theme`: ThemeName - Theme configuration to use
- `sidebarCollapsed`: boolean - Sidebar collapsed state
- `onSidebarCollapse`: (collapsed: boolean) => void - Callback when sidebar toggle
- `children`: ReactNode - Main content
- `sidebar?`: ReactNode - Sidebar component
- `header?`: ReactNode - Header component

### DashboardCardProps

- `theme`: ThemeName - Theme configuration to use
- `title`: string - Card title
- `subtitle?`: string - Optional subtitle
- `icon?`: ReactNode - Optional icon
- `value`: string | number - Display value
- `trend?`: 'up' | 'down' - Trend direction
- `trendValue?`: string - Trend percentage

## Theme Support

All components support all available themes:

- minimalist
- glassmorphism
- neumorphism
- dark
- gradient
- flat
- material
- brutalist
- retro
- cyberpunk
- pastel
- corporate
- playful
- 3d
- futuristic
- luxury
- monochrome
- nature
- neon
- sketch

## Example Usage

```tsx
import { useState } from 'react';
import {
  DashboardLayout,
  DashboardHeader,
  DashboardSidebar,
  DashboardContent,
  DashboardCard,
} from './dashboard';

export default function MyDashboard() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <DashboardLayout
      theme="material"
      sidebarCollapsed={collapsed}
      onSidebarCollapse={setCollapsed}
      sidebar={
        <DashboardSidebar
          theme="material"
          collapsed={collapsed}
          onCollapse={setCollapsed}
        >
          {/* Nav items */}
        </DashboardSidebar>
      }
    >
      <DashboardContent theme="material">
        <DashboardHeader theme="material" title="Overview" />

        <div className="grid grid-cols-4 gap-6">
          <DashboardCard
            theme="material"
            title="Revenue"
            value="$45,231"
            trend="up"
            trendValue="12.5%"
          />
        </div>
      </DashboardContent>
    </DashboardLayout>
  );
}
```

## Architecture

The component system follows these principles:

1. **No fallbacks** - All props are required or throw errors
2. **Theme-driven** - All styling comes from theme configuration
3. **Composable** - Components can be mixed and matched
4. **Type-safe** - Full TypeScript support

## Files

- `types.ts` - TypeScript type definitions
- `DashboardLayout.tsx` - Main layout component
- `DashboardSidebar.tsx` - Sidebar component
- `DashboardHeader.tsx` - Header component
- `DashboardContent.tsx` - Content wrapper
- `DashboardCard.tsx` - Stat card component
- `index.ts` - Public exports

## Migration from Legacy Components

Legacy dashboard files (e.g., `flat-001.tsx`, `material-001.tsx`) are preserved for backward compatibility. New code should use the component system for better maintainability.

See `minimalist-refactored.tsx` and `material-refactored.tsx` for migration examples.
