# Navbar Component System

This directory contains a composable Navbar component system and themed design examples.

## Structure

### Composable Components (For Production Use)

These are reusable, theme-aware components for building custom navbars:

- **`Navbar.tsx`** - Main container with theme context
- **`NavbarBrand.tsx`** - Logo/brand area
- **`NavbarContent.tsx`** - Content sections (left/center/right)
- **`NavbarItem.tsx`** - Individual navigation items
- **`NavbarMenu.tsx`** - Mobile menu container
- **`NavbarMenuToggle.tsx`** - Mobile menu toggle button
- **`Navbar.types.ts`** - TypeScript type definitions
- **`index.ts`** - Barrel exports

### Design Reference Examples

These files demonstrate complete themed navbar implementations. They are design references, not meant to be imported as components:

- `minimalist-001.tsx` - Clean, minimal design
- `dark-001.tsx` - Dark theme with gradients
- `glassmorphism-001.tsx` - Glass effect with blur
- `neumorphism-001.tsx` - Soft UI with shadows
- `gradient-001.tsx` - Vibrant gradient background
- `cyberpunk-001.tsx` - Futuristic cyberpunk style
- ...and 14 more themed examples

### Component Usage Example

See `component-example.tsx` for practical examples of using the composable components.

## Usage

### Basic Example

```tsx
import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from './navbar';

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar theme="minimalist" bordered maxWidth="xl">
      <div className="flex items-center justify-between h-16">
        <NavbarBrand href="/">
          <span>My Brand</span>
        </NavbarBrand>

        <NavbarContent hideOnMobile>
          <NavbarItem href="/" isActive>Home</NavbarItem>
          <NavbarItem href="/about">About</NavbarItem>
          <NavbarItem href="/contact">Contact</NavbarItem>
        </NavbarContent>

        <NavbarMenuToggle isOpen={isOpen} onChange={setIsOpen} />
      </div>

      <NavbarMenu isOpen={isOpen}>
        <NavbarItem href="/" isActive>Home</NavbarItem>
        <NavbarItem href="/about">About</NavbarItem>
        <NavbarItem href="/contact">Contact</NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
```

## Props

### Navbar

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `ThemeName` | required | Theme from `_themes` system |
| `position` | `'static' \| 'fixed' \| 'sticky'` | `'static'` | Position behavior |
| `maxWidth` | `'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| 'full'` | `'xl'` | Maximum width |
| `bordered` | `boolean` | `false` | Show border |
| `blurred` | `boolean` | `false` | Enable blur effect |
| `height` | `string` | `'h-16'` | Height class |
| `className` | `string` | `undefined` | Additional CSS classes |

### NavbarBrand

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | `'#'` | Link destination |
| `className` | `string` | `undefined` | Additional CSS classes |

### NavbarContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | `'left' \| 'center' \| 'right'` | `'center'` | Content alignment |
| `hideOnMobile` | `boolean` | `false` | Hide on mobile screens |
| `className` | `string` | `undefined` | Additional CSS classes |

### NavbarItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | `undefined` | Link destination (renders as `<a>` if provided) |
| `isActive` | `boolean` | `false` | Active state styling |
| `onClick` | `() => void` | `undefined` | Click handler |
| `className` | `string` | `undefined` | Additional CSS classes |

### NavbarMenu

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | required | Menu open state |
| `className` | `string` | `undefined` | Additional CSS classes |

### NavbarMenuToggle

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | required | Current open state |
| `onChange` | `(isOpen: boolean) => void` | required | State change handler |
| `className` | `string` | `undefined` | Additional CSS classes |

## Theme Integration

The component system integrates with the theme system in `_themes/`. Available themes:

- `minimalist`
- `dark`
- `glassmorphism`
- `neumorphism`
- (and 16 more)

Each theme defines colors, borders, shadows, and state styles that automatically apply to navbar components.

## Architecture

The Navbar uses React Context to share theme configuration across all child components. This eliminates prop drilling while maintaining type safety.

```
Navbar (provides theme context)
├── NavbarBrand
├── NavbarContent
│   └── NavbarItem(s)
├── NavbarMenuToggle
└── NavbarMenu
    └── NavbarItem(s)
```

## Design Philosophy

1. **Composition over Configuration** - Build complex navbars by composing simple components
2. **Theme-Aware** - All styling comes from the theme system
3. **Zero Fallbacks** - Invalid theme names throw errors immediately
4. **Type-Safe** - Full TypeScript support with proper type inference
5. **Minimal API** - Small, focused component APIs with clear responsibilities
