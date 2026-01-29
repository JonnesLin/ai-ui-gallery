# Progress Components

Reusable progress components for displaying task completion status.

## Components

### Progress
Linear progress bar with support for different sizes, colors, and variants.

### CircularProgress
Circular progress indicator for compact displays.

## Basic Usage

```tsx
import { Progress, CircularProgress } from '@/components/ui/progress';

// Linear progress
<Progress value={75} />

// With label and percentage
<Progress value={65} label="Uploading..." showValue />

// Different colors
<Progress value={80} color="success" />
<Progress value={60} color="warning" />
<Progress value={25} color="error" />

// Different sizes
<Progress value={50} size="xs" />
<Progress value={50} size="sm" />
<Progress value={50} size="md" />
<Progress value={50} size="lg" />

// Variants
<Progress value={70} variant="solid" />
<Progress value={70} variant="striped" />
<Progress value={70} variant="animated" />

// Indeterminate (loading)
<Progress />

// Circular progress
<CircularProgress value={75} showValue />
<CircularProgress value={50} size={128} strokeWidth={12} />

// Indeterminate circular
<CircularProgress />
```

## Props

### Progress Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | number? | undefined | Progress value (0-100). Undefined for indeterminate |
| max | number | 100 | Maximum value |
| size | 'xs' \| 'sm' \| 'md' \| 'lg' | 'md' | Progress bar size |
| color | 'primary' \| 'success' \| 'warning' \| 'error' \| 'neutral' | 'primary' | Color scheme |
| variant | 'solid' \| 'striped' \| 'animated' | 'solid' | Visual style |
| showValue | boolean | false | Show percentage text |
| label | string | - | Label text |
| className | string | - | Additional CSS classes |

### CircularProgress Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | number? | undefined | Progress value (0-100). Undefined for indeterminate |
| max | number | 100 | Maximum value |
| size | number | 64 | Circle diameter in pixels |
| strokeWidth | number | 8 | Stroke width in pixels |
| color | 'primary' \| 'success' \| 'warning' \| 'error' \| 'neutral' | 'primary' | Color scheme |
| showValue | boolean | false | Show percentage text |
| className | string | - | Additional CSS classes |

## Color Schemes

- `primary` - Blue
- `success` - Green
- `warning` - Amber
- `error` - Red
- `neutral` - Gray

## Examples

### Task Progress
```tsx
<Progress
  value={4}
  max={8}
  color="neutral"
  label="Design System"
  showValue
/>
```

### Multi-step Process
```tsx
{processes.map((process) => (
  <Progress
    key={process.id}
    value={process.value}
    color={process.color}
    label={process.label}
    showValue
  />
))}
```

### System Resources
```tsx
<div className="flex items-center gap-4">
  <span className="w-20">CPU</span>
  <Progress value={88} color="error" size="xs" className="flex-1" />
  <span className="w-12 text-right">88%</span>
</div>
```

## Design Philosophy

These components follow the "good taste" principle:

1. **No special cases**: Indeterminate state is just `value={undefined}`, not a separate prop
2. **Simple data structure**: Progress is fundamentally `value/max`, everything else is presentation
3. **Separation of concerns**: Components render, demo pages compose
4. **No fallbacks**: Invalid input throws errors instead of silently degrading

## Architecture

```
progress/
├── Progress.tsx           - Linear progress component
├── CircularProgress.tsx   - Circular progress component
├── Progress.types.ts      - Type definitions
├── index.ts              - Public exports
└── [theme]-001.tsx       - Demo pages (minimalist, dark, etc.)
```

Demo pages import and use the components, demonstrating different compositions and layouts.
