# Button Component

A reusable, theme-aware button component with support for variants, sizes, loading states, and icons.

## Architecture

This directory follows a clear separation of concerns:

- `Button.tsx` - Core button component implementation
- `Button.types.ts` - TypeScript type definitions
- `index.ts` - Public API exports
- `*-001.tsx` - Theme showcase pages (e.g., `minimalist-001.tsx`, `dark-001.tsx`)

## Usage

```tsx
import { Button } from './components/ui/button';

// Basic usage
<Button theme="minimalist" variant="primary">
  Click me
</Button>

// With size
<Button theme="dark" variant="secondary" size="lg">
  Large Button
</Button>

// With loading state
<Button theme="glassmorphism" variant="primary" loading>
  Loading...
</Button>

// With icons
<Button theme="neumorphism" variant="primary" leftIcon={<Icon />}>
  With Icon
</Button>

// Full width
<Button theme="dark" variant="primary" fullWidth>
  Full Width
</Button>

// Disabled
<Button theme="minimalist" variant="primary" disabled>
  Disabled
</Button>
```

## Props

### Required Props

- `theme`: ThemeName - The theme to apply (e.g., 'minimalist', 'dark', 'glassmorphism', 'neumorphism')

### Optional Props

- `variant`: ComponentVariant - Button style variant
  - Options: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success' | 'warning'
  - Default: 'primary'

- `size`: ComponentSize - Button size
  - Options: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  - Default: 'md'

- `loading`: boolean - Show loading spinner
  - Default: false

- `disabled`: boolean - Disable the button
  - Default: false

- `fullWidth`: boolean - Make button full width
  - Default: false

- `leftIcon`: ReactNode - Icon to display on the left side

- `rightIcon`: ReactNode - Icon to display on the right side

- `className`: string - Additional CSS classes to apply

- All other native HTML button attributes are supported

## Theme System

The Button component integrates with the theme system located in `src/components/ui/_themes/`. Each theme defines:

- Variant styles (primary, secondary, ghost, danger, success, warning)
- Size classes (xs, sm, md, lg, xl)
- State styles (hover, active, focus, disabled, loading)
- Base styles (background, text, border, shadow, radius)

## Available Themes

Currently implemented themes:
- `minimalist` - Clean, minimal design with thin borders
- `dark` - Dark mode with bright accents
- `glassmorphism` - Glass effect with backdrop blur
- `neumorphism` - Soft shadows and raised/inset effects

## Implementation Details

### State Priority

The component follows a clear state priority:

1. **Disabled state** - Overrides all other styles
2. **Loading state** - Overrides all other styles except disabled
3. **Active state** - Normal interactive state

This eliminates conditional style accumulation and makes the component behavior predictable.

### No Fallbacks

The component follows a strict "no fallback" philosophy:

- If a theme is not found, it throws an error
- All required props must be provided
- Invalid values are rejected immediately

This ensures issues are caught early rather than hidden by default values.

## Showcase Pages

Each `*-001.tsx` file demonstrates the Button component with a specific theme:

- `minimalist-001.tsx` - Minimalist theme showcase
- `dark-001.tsx` - Dark theme showcase
- `glassmorphism-001.tsx` - Glassmorphism theme showcase
- `neumorphism-001.tsx` - Neumorphism theme showcase

These pages serve as both documentation and visual testing.

## Adding New Themes

To add a new theme:

1. Create a theme configuration in `src/components/ui/_themes/[theme-name].ts`
2. Export it from `src/components/ui/_themes/index.ts`
3. Add the theme name to the `ThemeName` type in `src/components/ui/_themes/types.ts`
4. Create a showcase page `[theme-name]-001.tsx` using the Button component
