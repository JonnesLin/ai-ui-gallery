# Badge Component

A reusable badge component with multiple variants, colors, sizes, and theme support.

## Usage

```tsx
import { Badge } from './badge';

// Basic usage
<Badge theme="minimalist" variant="outlined" color="primary">
  Primary
</Badge>

// With dot indicator
<Badge theme="dark" variant="dot" color="success" dot dotAnimate>
  Online
</Badge>

// Removable badge
<Badge
  theme="glassmorphism"
  variant="soft"
  color="info"
  removable
  onRemove={() => console.log('removed')}
>
  Removable
</Badge>

// Different sizes
<Badge theme="minimalist" variant="solid" color="error" size="xs">Small</Badge>
<Badge theme="minimalist" variant="solid" color="error" size="sm">Medium</Badge>
<Badge theme="minimalist" variant="solid" color="error" size="md">Large</Badge>
<Badge theme="minimalist" variant="solid" color="error" size="lg">X-Large</Badge>

// Rounded variants
<Badge theme="dark" variant="outlined" color="primary" rounded="sm">Rounded SM</Badge>
<Badge theme="dark" variant="outlined" color="primary" rounded="md">Rounded MD</Badge>
<Badge theme="dark" variant="outlined" color="primary" rounded="lg">Rounded LG</Badge>
<Badge theme="dark" variant="outlined" color="primary" rounded="full">Pill</Badge>
```

## Props

- `variant`: 'solid' | 'soft' | 'outlined' | 'dot' (default: 'outlined')
- `color`: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' (default: 'default')
- `size`: 'xs' | 'sm' | 'md' | 'lg' (default: 'sm')
- `theme`: ThemeName (required)
- `rounded`: 'sm' | 'md' | 'lg' | 'full' (default: 'md')
- `removable`: boolean (default: false)
- `onRemove`: () => void
- `icon`: ReactNode
- `dot`: boolean (default: false)
- `dotColor`: string (CSS class for dot color)
- `dotAnimate`: boolean (default: false)
- `children`: ReactNode (required)
- `className`: string (for custom styling)

## Themes

Supported themes:
- minimalist
- dark
- glassmorphism
- neumorphism (uses minimalist styles)
- gradient (uses minimalist styles)
- brutalist (uses minimalist styles)
- retro (uses minimalist styles)
- cyberpunk (uses dark styles)
- pastel (uses minimalist styles)
- corporate (uses minimalist styles)
- playful (uses minimalist styles)
- 3d (uses minimalist styles)
- flat (uses minimalist styles)
- futuristic (uses dark styles)
- luxury (uses minimalist styles)
- material (uses minimalist styles)
- monochrome (uses minimalist styles)
- nature (uses minimalist styles)
- neon (uses dark styles)
- sketch (uses minimalist styles)

## Files

- `Badge.tsx` - Main component
- `Badge.types.ts` - TypeScript type definitions
- `Badge.config.ts` - Theme and style configurations
- `index.ts` - Public exports
- `minimalist-001.tsx` - Minimalist theme showcase
- `dark-001.tsx` - Dark theme showcase
- `glassmorphism-001.tsx` - Glassmorphism theme showcase

## Architecture

This component follows a clean architecture:
1. **Types** - Defines all interfaces and type constraints
2. **Config** - Contains all styling logic, no hardcoded styles in component
3. **Component** - Pure presentation logic, receives styles from config
4. **Showcase** - Demo pages that use the component

All styles are driven by configuration, making it easy to add new themes without modifying the component logic.
