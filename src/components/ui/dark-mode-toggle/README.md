# DarkModeToggle Component

A theme-aware dark mode toggle component with multiple variants and sizes.

## Features

- Multiple variants: `switch`, `button`, `dropdown`
- Multiple sizes: `sm`, `md`, `lg`
- System theme detection support
- Theme-driven styling
- No fallback logic - explicit error handling

## Usage

### Basic Example

```tsx
import { DarkModeToggle } from './components/ui/dark-mode-toggle';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState<'light' | 'dark' | 'system'>('light');

  return (
    <DarkModeToggle
      theme="minimalist"
      mode={mode}
      onChange={setMode}
      variant="switch"
      size="md"
    />
  );
}
```

### With Label

```tsx
<DarkModeToggle
  theme="flat"
  mode={mode}
  onChange={setMode}
  variant="button"
  size="md"
  showLabel
/>
```

### Dropdown Variant

```tsx
<DarkModeToggle
  theme="glassmorphism"
  mode={mode}
  onChange={setMode}
  variant="dropdown"
  size="md"
  showLabel
/>
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `theme` | `ThemeName` | Yes | - | Theme configuration name |
| `mode` | `'light' \| 'dark' \| 'system'` | Yes | - | Current dark mode state |
| `onChange` | `(mode) => void` | Yes | - | Callback when mode changes |
| `variant` | `'switch' \| 'button' \| 'dropdown'` | No | `'switch'` | Visual variant |
| `size` | `'sm' \| 'md' \| 'lg'` | No | `'md'` | Component size |
| `showLabel` | `boolean` | No | `false` | Show text label |
| `className` | `string` | No | - | Additional CSS classes |

## System Theme Detection

The component automatically detects system theme preferences when `mode="system"`:

```tsx
const [mode, setMode] = useState<'light' | 'dark' | 'system'>('system');

<DarkModeToggle
  theme="minimalist"
  mode={mode}
  onChange={setMode}
  variant="dropdown"
  showLabel // Will show "System (light)" or "System (dark)"
/>
```

## Theme Support

Works with all themes defined in `src/components/ui/_themes/`:
- `minimalist`
- `flat`
- `glassmorphism`
- `neumorphism`
- `dark`
- `gradient`
- `material`

## Error Handling

The component throws errors for invalid configurations:

```tsx
// Will throw: Theme "invalid" not found
<DarkModeToggle theme="invalid" mode="light" onChange={setMode} />

// Will throw: Invalid mode
<DarkModeToggle theme="minimalist" mode="invalid" onChange={setMode} />
```

## Files Structure

```
dark-mode-toggle/
├── DarkModeToggle.tsx          # Main component
├── types.ts                    # Type definitions
├── index.ts                    # Public exports
├── hooks/
│   └── useSystemTheme.ts       # System theme detection hook
├── variants/
│   ├── types.ts                # Variant props interface
│   ├── SwitchVariant.tsx       # Switch implementation
│   ├── ButtonVariant.tsx       # Button implementation
│   └── DropdownVariant.tsx     # Dropdown implementation
└── examples/
    └── MinimalistExample.tsx   # Usage examples
```
