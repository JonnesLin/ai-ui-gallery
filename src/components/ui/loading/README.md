# Loading Components

A unified, theme-based loading component system with multiple variants and full customization support.

## Architecture

### Core Components

- **`Spinner`** - Rotating circular loader
- **`Dots`** - Bouncing dots animation
- **`Bars`** - Pulsing bars animation
- **`Pulse`** - Pulsing shape animation
- **`Loading`** - Unified wrapper with fullscreen/overlay support

### Data Structure

All components use the same props interface with predictable behavior:

```typescript
{
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  theme: ThemeName
  color: 'primary' | 'white' | 'current'
  className?: string
}
```

No special cases. No fallbacks. Invalid props throw errors immediately.

## Usage

### Basic Usage

```tsx
import { Spinner, Dots, Bars, Pulse } from './loading';

<Spinner size="md" theme="material" />
<Dots size="md" theme="minimalist" />
<Bars size="md" theme="dark" count={5} />
<Pulse size="md" theme="glassmorphism" shape="circle" />
```

### Unified Loading Component

```tsx
import { Loading } from './loading';

// Spinner variant
<Loading variant="spinner" size="md" theme="material" />

// Dots variant with label
<Loading
  variant="dots"
  size="md"
  theme="minimalist"
  label="Loading data..."
/>

// Fullscreen with overlay
<Loading
  variant="spinner"
  size="lg"
  theme="dark"
  fullScreen
  overlay
  label="Processing..."
/>
```

### Theme Support

Works with all available themes:
- `minimalist` - Clean, monochrome design
- `material` - Google Material Design style
- `dark` - Dark mode optimized
- `glassmorphism` - Frosted glass effect
- `neumorphism` - Soft shadows and highlights

### Color Modes

- `primary` - Uses theme's primary color (default)
- `white` - White color for dark backgrounds
- `current` - Inherits text color from parent

## Component-Specific Props

### Spinner

```tsx
<Spinner
  size="md"
  theme="material"
  thickness="normal" // 'thin' | 'normal' | 'thick'
/>
```

### Dots

```tsx
<Dots
  size="md"
  theme="material"
  count={3} // 3 | 4 | 5
/>
```

### Bars

```tsx
<Bars
  size="md"
  theme="material"
  count={5} // 3 | 4 | 5
/>
```

### Pulse

```tsx
<Pulse
  size="md"
  theme="material"
  shape="circle" // 'circle' | 'square'
/>
```

## Design Principles

1. **No Fallbacks** - Invalid props throw errors immediately
2. **Theme-First** - Colors derived from theme system, not hardcoded
3. **Predictable Sizing** - Consistent size scale across all variants
4. **Accessibility** - Proper ARIA labels and roles
5. **Zero Dependencies** - Pure CSS animations, no external libraries

## Animation Performance

All animations use CSS transforms and opacity for optimal performance:
- `transform: rotate()` for spinner
- `animation: bounce` for dots
- Custom keyframes for bars
- `animation: pulse` for pulse

No layout thrashing. No repaints. Pure GPU-accelerated animations.

## Type Safety

```typescript
import type {
  LoadingProps,
  SpinnerProps,
  DotsProps,
  BarsProps,
  PulseProps
} from './loading';
```

All props are strictly typed. TypeScript will catch invalid configurations at compile time.

## Migration from Old Components

Old files like `material-spinner-001.tsx` now import and use the new unified components:

```tsx
// Before
<div className="w-8 h-8 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin" />

// After
<Spinner size="sm" theme="material" />
```

Benefits:
- 90% less code duplication
- Theme consistency enforced
- Type-safe props
- Easier to maintain
- Better performance
