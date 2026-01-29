# Rating Component

A flexible and customizable star rating component with half-star precision support.

## Features

- **Controlled & Uncontrolled modes**: Use as a controlled component with `value` and `onChange`, or uncontrolled with `defaultValue`
- **Half-star precision**: Support for 0.5 or 1.0 precision ratings
- **Custom icons**: Replace default star icons with any React component
- **Flexible sizing**: Three built-in sizes (sm, md, lg)
- **Custom colors**: Full control over filled and empty star colors
- **Read-only & Disabled states**: Display ratings without interaction or disable user input
- **Type-safe**: Full TypeScript support with strict types

## Basic Usage

```tsx
import { Rating } from './components/ui/rating';

// Controlled
function MyComponent() {
  const [rating, setRating] = useState(3.5);

  return (
    <Rating
      value={rating}
      onChange={setRating}
      precision={0.5}
    />
  );
}

// Uncontrolled
function MyComponent() {
  return (
    <Rating
      defaultValue={4}
      onChange={(value) => console.log(value)}
    />
  );
}

// Read-only display
function MyComponent() {
  return (
    <Rating
      value={4.5}
      readOnly={true}
      showValue={true}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `undefined` | Controlled value (0 to max) |
| `defaultValue` | `number` | `0` | Uncontrolled default value |
| `onChange` | `(value: number) => void` | `undefined` | Callback when rating changes |
| `max` | `number` | `5` | Maximum rating value |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Star size |
| `precision` | `0.5 \| 1` | `1` | Rating precision |
| `readOnly` | `boolean` | `false` | Disable interaction, keep visual feedback |
| `disabled` | `boolean` | `false` | Disable interaction completely |
| `icon` | `ReactNode` | `undefined` | Custom filled icon |
| `emptyIcon` | `ReactNode` | `undefined` | Custom empty icon |
| `color` | `string` | `'#fbbf24'` | Fill color for stars |
| `emptyColor` | `string` | `'#d1d5db'` | Color for empty stars |
| `showValue` | `boolean` | `false` | Display numeric value |
| `className` | `string` | `undefined` | Additional CSS classes |

## Examples

### Half-Star Precision

```tsx
<Rating
  value={3.5}
  precision={0.5}
  onChange={setValue}
/>
```

### Custom Colors

```tsx
<Rating
  value={4}
  color="#ef4444"
  emptyColor="#4b5563"
/>
```

### Custom Icons

```tsx
<Rating
  value={4}
  icon={
    <svg viewBox="0 0 24 24" fill="#ef4444">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  }
  emptyIcon={
    <svg viewBox="0 0 24 24" fill="none" stroke="#4b5563">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  }
/>
```

### Different Sizes

```tsx
<Rating value={4} size="sm" />
<Rating value={4} size="md" />
<Rating value={4} size="lg" />
```

### With Value Display

```tsx
<Rating
  value={4.5}
  readOnly={true}
  showValue={true}
/>
```

## Architecture

### Component Structure

```
rating/
├── Rating.tsx          # Main rating component
├── RatingStar.tsx      # Individual star component
├── types.ts            # TypeScript type definitions
├── index.ts            # Public exports
└── README.md           # Documentation
```

### Key Design Decisions

1. **No Fallbacks**: Component throws errors for invalid props instead of silently failing
2. **Controlled/Uncontrolled Pattern**: Follows React best practices for form inputs
3. **Separation of Concerns**: Star rendering logic separated from rating logic
4. **SVG Gradients**: Uses linearGradient for precise half-star fills
5. **Accessibility**: Proper ARIA labels and keyboard focus states

## Theme Integration

The component uses the `cn()` utility from `_shared/utils.ts` for className merging, making it compatible with the project's theme system.

```tsx
// Example with theme colors
import { Rating } from './components/ui/rating';

<Rating
  value={rating}
  color="#111827"      // Minimalist theme
  emptyColor="#d1d5db"
/>
```
