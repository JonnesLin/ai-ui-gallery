# Steps Component

A flexible and themeable steps component system for displaying progress through a multi-step process.

## Basic Usage

```tsx
import { Steps, Step } from './steps';

function App() {
  const [current, setCurrent] = useState(0);

  return (
    <Steps current={current} theme="minimalist" onChange={setCurrent}>
      <Step title="Step 1" description="First step" />
      <Step title="Step 2" description="Second step" />
      <Step title="Step 3" description="Third step" />
    </Steps>
  );
}
```

## Props

### Steps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `current` | `number` | - | Current active step index (0-based) |
| `theme` | `ThemeName` | `'minimalist'` | Theme name from theme system |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `labelPlacement` | `'horizontal' \| 'vertical'` | `'vertical'` | Label placement relative to step icon |
| `progressDot` | `boolean` | `false` | Use progress dot style instead of numbered circles |
| `onChange` | `(current: number) => void` | - | Callback when step is clicked |
| `children` | `ReactNode` | - | Step components |
| `className` | `string` | - | Additional CSS classes |

### Step

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `ReactNode` | - | Step title |
| `description` | `ReactNode` | - | Step description |
| `icon` | `ReactNode` | - | Custom icon (overrides default number/checkmark) |
| `status` | `'wait' \| 'process' \| 'finish' \| 'error'` | - | Override automatic status |
| `disabled` | `boolean` | `false` | Disable step interaction |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Horizontal Steps

```tsx
<Steps current={1} theme="minimalist" direction="horizontal">
  <Step title="Account" description="Create your account" />
  <Step title="Profile" description="Add personal details" />
  <Step title="Verification" description="Verify your email" />
  <Step title="Complete" description="Start using the app" />
</Steps>
```

### Vertical Steps

```tsx
<Steps current={1} theme="dark" direction="vertical">
  <Step title="Order Placed" description="Your order has been received" />
  <Step title="Processing" description="Preparing your items" />
  <Step title="Shipped" description="On the way to you" />
  <Step title="Delivered" description="Enjoy your purchase" />
</Steps>
```

### Progress Dot Style

```tsx
<Steps current={1} theme="minimalist" progressDot>
  <Step title="Step 1" />
  <Step title="Step 2" />
  <Step title="Step 3" />
</Steps>
```

### Error State

```tsx
<Steps current={2} theme="minimalist">
  <Step title="Step 1" description="Completed" />
  <Step title="Step 2" description="Failed" status="error" />
  <Step title="Step 3" description="Waiting" />
</Steps>
```

### Clickable Steps

```tsx
function App() {
  const [current, setCurrent] = useState(0);

  return (
    <Steps current={current} theme="minimalist" onChange={setCurrent}>
      <Step title="Step 1" />
      <Step title="Step 2" />
      <Step title="Step 3" />
    </Steps>
  );
}
```

### Custom Icons

```tsx
<Steps current={1} theme="minimalist">
  <Step title="Login" icon={<UserIcon />} />
  <Step title="Verify" icon={<ShieldIcon />} />
  <Step title="Complete" icon={<CheckIcon />} />
</Steps>
```

### Different Sizes

```tsx
<Steps current={1} theme="minimalist" size="sm">
  <Step title="Small" />
  <Step title="Steps" />
</Steps>

<Steps current={1} theme="minimalist" size="lg">
  <Step title="Large" />
  <Step title="Steps" />
</Steps>
```

## Status Logic

The step status is automatically determined based on the `current` prop:

- Steps before `current`: `'finish'`
- Step at `current`: `'process'`
- Steps after `current`: `'wait'`

You can override this by setting the `status` prop on individual Step components.

## Theming

The component uses the theme system from `src/components/ui/_themes/`. Available themes:

- `minimalist`
- `dark`
- `glassmorphism`
- `neumorphism`
- And more...

Each theme defines colors, borders, shadows, and other visual properties.

## Architecture

The component is split into two files:

- `Steps.tsx` - Container component that manages state and renders Step children
- `Step.tsx` - Individual step component with rendering logic

This separation allows for clean composition and reusability.
