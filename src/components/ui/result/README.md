# Result Component

A flexible result component that displays success, error, warning, info, and HTTP error states with full theme support.

## Usage

```tsx
import { Result } from './Result';

<Result
  theme="minimalist"
  status="success"
  title="Success"
  subtitle="Your operation completed successfully"
  extra={
    <button>Continue</button>
  }
/>
```

## Props

### ResultProps

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `theme` | `ThemeName` | Yes | Theme name from the theme system |
| `status` | `ResultStatus` | Yes | Result status: 'success', 'error', 'info', 'warning', '404', '403', '500' |
| `title` | `string` | Yes | Main title text |
| `subtitle` | `string` | No | Subtitle/description text |
| `icon` | `ReactNode` | No | Custom icon (uses default status icon if not provided) |
| `extra` | `ReactNode` | No | Extra content (typically action buttons) |
| `children` | `ReactNode` | No | Additional content |
| `className` | `string` | No | Additional CSS classes |

### ResultStatus

```typescript
type ResultStatus = 'success' | 'error' | 'info' | 'warning' | '404' | '403' | '500';
```

## Examples

### Success State

```tsx
<Result
  theme="dark"
  status="success"
  title="Payment Successful"
  subtitle="Your payment has been processed"
  extra={
    <button>View Receipt</button>
  }
/>
```

### Error State with Actions

```tsx
<Result
  theme="glassmorphism"
  status="error"
  title="Payment Failed"
  subtitle="Unable to process your payment"
  extra={
    <div className="flex gap-3">
      <button>Retry</button>
      <button>Cancel</button>
    </div>
  }
/>
```

### Custom Icon

```tsx
<Result
  theme="gradient"
  status="info"
  title="Custom Information"
  subtitle="With a custom icon"
  icon={<CustomIcon />}
/>
```

### 404 Page

```tsx
<Result
  theme="minimalist"
  status="404"
  title="Page Not Found"
  subtitle="The page you're looking for doesn't exist"
  extra={
    <button>Go Home</button>
  }
/>
```

## Design Principles

1. **No Fallbacks**: Missing required props will throw errors
2. **Theme Integration**: Fully integrated with the theme system
3. **Flexible Layout**: Uses composition pattern for maximum flexibility
4. **Type Safety**: Full TypeScript support with strict typing

## Architecture

The component follows these principles:

- **Data Structure**: Status + Content (title/subtitle/icon/extra)
- **No Complexity**: Direct mapping from status to theme variant
- **Zero Breaking**: All existing theme files work unchanged
- **Clean Separation**: Icon logic separated into ResultIcon component
