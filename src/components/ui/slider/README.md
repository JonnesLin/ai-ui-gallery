# Slider Component

A reusable, themeable slider component with support for single value and range selection.

## Features

- Single value and range (dual thumb) support
- Multiple themes (minimalist, dark, gradient, glassmorphism, neumorphism)
- Multiple sizes (sm, md, lg)
- Color variants (primary, success, warning, error)
- Horizontal and vertical orientation
- Step support
- Custom marks/labels
- Disabled state
- Controlled and uncontrolled modes

## Usage

### Basic Slider

```tsx
import { Slider } from '@/components/ui/slider';

function Example() {
  const [value, setValue] = useState(50);

  return (
    <Slider
      value={value}
      onChange={(val) => setValue(val as number)}
      theme="minimalist"
      size="md"
    />
  );
}
```

### Range Slider

```tsx
function RangeExample() {
  const [range, setRange] = useState<[number, number]>([25, 75]);

  return (
    <Slider
      value={range}
      onChange={(val) => setRange(val as [number, number])}
      theme="dark"
      size="md"
    />
  );
}
```

### With Label and Value Display

```tsx
<Slider
  value={brightness}
  onChange={(val) => setBrightness(val as number)}
  label="Brightness"
  showValue
  theme="gradient"
  size="lg"
/>
```

### With Step and Marks

```tsx
<Slider
  value={volume}
  onChange={(val) => setVolume(val as number)}
  step={10}
  marks={[
    { value: 0, label: '0%' },
    { value: 50, label: '50%' },
    { value: 100, label: '100%' },
  ]}
  theme="minimalist"
/>
```

### Vertical Orientation

```tsx
<Slider
  defaultValue={60}
  orientation="vertical"
  theme="glassmorphism"
  size="sm"
/>
```

### Different Colors

```tsx
<Slider defaultValue={50} color="success" theme="dark" />
<Slider defaultValue={50} color="warning" theme="gradient" />
<Slider defaultValue={50} color="error" theme="minimalist" />
```

### Disabled State

```tsx
<Slider
  defaultValue={50}
  disabled
  theme="minimalist"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number \| [number, number]` | - | Controlled value |
| `defaultValue` | `number \| [number, number]` | `0` | Default value for uncontrolled mode |
| `onChange` | `(value: SliderValue) => void` | - | Callback when value changes |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `100` | Maximum value |
| `step` | `number` | `1` | Step increment |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Slider size |
| `theme` | `ThemeName` | `'minimalist'` | Visual theme |
| `color` | `'primary' \| 'success' \| 'warning' \| 'error'` | `'primary'` | Color variant |
| `disabled` | `boolean` | `false` | Disable interactions |
| `showValue` | `boolean` | `false` | Show current value |
| `marks` | `SliderMark[]` | - | Array of marks to display |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Slider orientation |
| `className` | `string` | - | Additional CSS classes |
| `label` | `string` | - | Label text (shown with `showValue`) |

## Implementation Notes

### Data Flow

The component uses a simple state management pattern:
- Value is normalized to step increments
- Percentage is calculated from value
- Mouse position is converted to percentage, then to value

### Range Selection

For range sliders (when value is an array):
- Two thumbs are rendered
- Collision detection prevents thumbs from crossing
- Click on track moves nearest thumb

### No Fallbacks

Following the project philosophy, the component throws errors for invalid inputs rather than using fallbacks. Ensure:
- `theme` is a valid ThemeName
- `value` is within `min` and `max` range
- `step` is a positive number

### Theme Integration

The component uses the centralized theme system from `src/components/ui/_themes/`. Each theme defines:
- Track background color
- Fill color
- Thumb style and border
- Text colors for labels and values

## Examples

See the showcase files for complete examples:
- `minimalist-001.tsx` - Clean, simple design
- `dark-001.tsx` - Dark mode with glow effects
- `gradient-001.tsx` - Colorful gradient fills
- `glassmorphism-001.tsx` - Glass effect with blur and vertical orientation
