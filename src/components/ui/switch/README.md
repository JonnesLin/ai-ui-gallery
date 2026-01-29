# Switch Component

A clean, accessible switch component with support for controlled and uncontrolled modes.

## Features

- Controlled and uncontrolled modes
- Multiple sizes (sm, md, lg)
- Multiple color variants (primary, success, warning, error)
- Label support with configurable placement
- Disabled state
- Full accessibility support (ARIA attributes, keyboard navigation)
- Smooth animations

## Usage

### Basic Usage

```tsx
import { Switch } from './components/ui/switch';

function MyComponent() {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      checked={checked}
      onChange={setChecked}
      label="Enable notifications"
    />
  );
}
```

### Uncontrolled Mode

```tsx
<Switch
  defaultChecked={true}
  onChange={(checked) => console.log('Changed to:', checked)}
  label="Auto-save"
/>
```

### Sizes

```tsx
<Switch size="sm" label="Small" />
<Switch size="md" label="Medium" />
<Switch size="lg" label="Large" />
```

### Colors

```tsx
<Switch color="primary" label="Primary" defaultChecked />
<Switch color="success" label="Success" defaultChecked />
<Switch color="warning" label="Warning" defaultChecked />
<Switch color="error" label="Error" defaultChecked />
```

### Label Placement

```tsx
<Switch label="Right label" labelPlacement="right" />
<Switch label="Left label" labelPlacement="left" />
```

### Disabled State

```tsx
<Switch disabled checked label="Cannot toggle" />
```

### Without Label

```tsx
<Switch
  defaultChecked
  aria-label="Toggle feature"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | `undefined` | Controlled checked state |
| `defaultChecked` | `boolean` | `false` | Initial checked state for uncontrolled mode |
| `onChange` | `(checked: boolean) => void` | `undefined` | Callback when state changes |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the switch |
| `color` | `'primary' \| 'success' \| 'warning' \| 'error'` | `'primary'` | Color variant |
| `disabled` | `boolean` | `false` | Whether the switch is disabled |
| `label` | `ReactNode` | `undefined` | Label to display |
| `labelPlacement` | `'left' \| 'right'` | `'right'` | Position of the label |
| `className` | `string` | `undefined` | Additional CSS classes |
| `id` | `string` | auto-generated | HTML id attribute |
| `name` | `string` | `undefined` | HTML name attribute |
| `aria-label` | `string` | `undefined` | ARIA label for accessibility |

## Accessibility

The component follows WAI-ARIA best practices:

- Uses `role="switch"` for proper semantic meaning
- Includes `aria-checked` to indicate state
- Supports `aria-label` for switches without visible labels
- Fully keyboard accessible (Space/Enter to toggle)
- Associates labels with the switch control

## Design System Integration

This component uses the shared utility functions from `_shared/utils.ts`:

- `cn()` - For className composition

## Files

- `Switch.tsx` - Main component implementation
- `Switch.types.ts` - TypeScript type definitions
- `index.ts` - Public exports
- `example.tsx` - Usage examples
- All theme-specific files (`flat-001.tsx`, `material-001.tsx`, etc.) remain as standalone demonstrations
