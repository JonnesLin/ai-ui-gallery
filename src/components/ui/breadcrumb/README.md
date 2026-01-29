# Breadcrumb Component

A flexible breadcrumb navigation component system with theme support.

## Components

### Breadcrumb
The main container component for breadcrumb navigation.

#### Props
- `theme: ThemeName` (required) - Theme to apply
- `separator?: ReactNode` - Custom separator element (default: '/')
- `maxItems?: number` - Maximum items to display before collapsing
- `itemsBeforeCollapse?: number` - Items to show before ellipsis (default: 1)
- `itemsAfterCollapse?: number` - Items to show after ellipsis (default: 1)
- Standard HTML nav element props

### BreadcrumbItem
Individual breadcrumb item component.

#### Props
- `href?: string` - Link URL (omit for non-link items)
- `icon?: ReactNode` - Icon to display before label
- `current?: boolean` - Mark as current page (will not be clickable)
- Standard HTML anchor element props

### BreadcrumbSeparator
Separator component (automatically inserted by Breadcrumb, but can be customized).

## Usage

### Basic Example
```tsx
import { Breadcrumb, BreadcrumbItem } from './breadcrumb';

<Breadcrumb theme="minimalist">
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
  <BreadcrumbItem current>Electronics</BreadcrumbItem>
</Breadcrumb>
```

### With Custom Separator
```tsx
<Breadcrumb
  theme="dark"
  separator={<ChevronRightIcon />}
>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
  <BreadcrumbItem current>Electronics</BreadcrumbItem>
</Breadcrumb>
```

### With Icons
```tsx
<Breadcrumb theme="glassmorphism">
  <BreadcrumbItem href="/" icon={<HomeIcon />}>
    Home
  </BreadcrumbItem>
  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
  <BreadcrumbItem current>Electronics</BreadcrumbItem>
</Breadcrumb>
```

### With Collapse
```tsx
<Breadcrumb
  theme="minimalist"
  maxItems={4}
  itemsBeforeCollapse={1}
  itemsAfterCollapse={2}
>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/level1">Level 1</BreadcrumbItem>
  <BreadcrumbItem href="/level2">Level 2</BreadcrumbItem>
  <BreadcrumbItem href="/level3">Level 3</BreadcrumbItem>
  <BreadcrumbItem href="/level4">Level 4</BreadcrumbItem>
  <BreadcrumbItem current>Current</BreadcrumbItem>
</Breadcrumb>
```

## Features

- Theme-aware styling using centralized theme system
- Automatic separator insertion
- Collapsible breadcrumbs for long paths
- Custom separator support
- Icon support
- Accessibility attributes (aria-label, aria-current)
- Current page indication
- Composable architecture
- Full TypeScript support

## Themes

Supports all themes from the theme system:
- minimalist
- dark
- glassmorphism
- neumorphism
- gradient
- brutalist
- retro
- cyberpunk
- pastel
- corporate
- playful
- 3d
- flat
- futuristic
- luxury
- material
- monochrome
- nature
- neon
- sketch

## Error Handling

The component throws errors for invalid configurations:
- If `itemsBeforeCollapse + itemsAfterCollapse >= totalItems` when using `maxItems`
- If the specified theme is not found

No fallback values are used - invalid configurations will fail explicitly.
