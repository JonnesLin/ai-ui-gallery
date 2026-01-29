# Input Component

A fully reusable input component that adapts to different design themes with built-in support for validation states, icons, and accessibility.

## Core Files

- `Input.tsx` - Main component implementation
- `Input.types.ts` - TypeScript type definitions
- `index.ts` - Public exports

## Props

```typescript
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'default' | 'filled' | 'outlined';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  theme: ThemeName;  // Required
  error?: boolean | string;
  success?: boolean;
  label?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
```

## Supported Themes

- `minimalist` - Clean, borderless design with subtle underlines
- `dark` - Dark mode with glowing focus states
- `neumorphism` - Soft UI with inset/outset shadows
- `glassmorphism` - Frosted glass effect with backdrop blur

## Usage Examples

### Basic Input

```tsx
import { Input } from '@/components/ui/input';

<Input
  theme="minimalist"
  label="Email Address"
  type="email"
  placeholder="you@example.com"
/>
```

### Input with Icons

```tsx
<Input
  theme="dark"
  label="Search"
  placeholder="Search..."
  leftIcon={<SearchIcon />}
/>
```

### Error State

```tsx
<Input
  theme="neumorphism"
  label="Password"
  type="password"
  error="Password must be at least 8 characters"
/>
```

### Success State

```tsx
<Input
  theme="dark"
  label="Username"
  success
  rightIcon={<CheckIcon />}
/>
```

### Different Sizes

```tsx
<Input theme="minimalist" size="xs" />
<Input theme="minimalist" size="sm" />
<Input theme="minimalist" size="md" />
<Input theme="minimalist" size="lg" />
<Input theme="minimalist" size="xl" />
```

## Design Philosophy

The Input component follows these principles:

1. **No Fallbacks**: Invalid theme names throw errors immediately
2. **Type Safety**: Full TypeScript support with strict typing
3. **Theme Integration**: Uses centralized theme system from `_themes/`
4. **Composition**: Icons and helper text are composable
5. **Accessibility**: Proper label associations and ARIA attributes

## Theme-Specific Behavior

### Minimalist Theme
- Borderless inputs with subtle underlines
- Uppercase labels with letter spacing
- Minimal color palette (grays with red/green for states)

### Dark Theme
- Dark backgrounds with glow effects on focus
- Blue accent color for focus states
- Enhanced contrast for readability

### Neumorphism Theme
- Inset shadows for input fields
- Outset shadows for raised variant
- Soft color transitions

### Glassmorphism Theme
- Backdrop blur effects
- Semi-transparent backgrounds
- White overlay with opacity variations

## Exhibition Files

The following files demonstrate the Input component in action:

- `minimalist-001.tsx`
- `dark-001.tsx`
- `neumorphism-001.tsx`
- `glassmorphism-001.tsx`

These are showcase pages, not reusable components.
