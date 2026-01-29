# Card Component

A flexible, themeable card component system with composition support.

## Components

- **Card**: Main container component
- **CardHeader**: Header section for titles and metadata
- **CardContent**: Main content area
- **CardFooter**: Footer section for actions or metadata
- **CardImage**: Image component with aspect ratio support

## Usage

### Basic Card

```tsx
import { Card, CardHeader, CardContent } from './card';

<Card theme="minimalist" variant="outlined" padding="lg">
  <CardHeader>
    <h3>Title</h3>
  </CardHeader>
  <CardContent>
    <p>Content goes here</p>
  </CardContent>
</Card>
```

### Card with Image

```tsx
import { Card, CardImage, CardContent } from './card';

<Card theme="dark" variant="elevated" padding="none">
  <CardImage
    src="image.jpg"
    alt="Description"
    aspectRatio="16/9"
  />
  <div className="p-6">
    <CardContent>
      <p>Content below image</p>
    </CardContent>
  </div>
</Card>
```

### Interactive Card

```tsx
<Card
  theme="minimalist"
  variant="outlined"
  padding="lg"
  hoverable
  clickable
  onClick={() => console.log('Clicked')}
>
  <CardContent>
    <p>Click me!</p>
  </CardContent>
</Card>
```

## Props

### Card Props

- `theme?: ThemeName` - Theme to use (default: 'minimalist')
- `variant?: 'elevated' | 'outlined' | 'filled'` - Visual variant (default: 'elevated')
- `padding?: 'none' | 'sm' | 'md' | 'lg'` - Padding size (default: 'none')
- `hoverable?: boolean` - Enable scale-up on hover (default: false)
- `clickable?: boolean` - Show pointer cursor (default: false)
- `onClick?: () => void` - Click handler
- `className?: string` - Additional CSS classes

### CardImage Props

- `src: string` - Image source URL
- `alt: string` - Alt text
- `aspectRatio?: '1/1' | '3/2' | '4/3' | '16/9' | '4/5'` - Aspect ratio (default: '16/9')
- `className?: string` - Additional CSS classes

### CardHeader, CardContent, CardFooter Props

- `className?: string` - Additional CSS classes
- `children?: ReactNode` - Content

## Variants

### Elevated
Card with shadow for depth effect.

### Outlined
Card with border outline.

### Filled
Card with filled background color.

## Available Themes

- minimalist
- dark
- glassmorphism
- neumorphism

See `_themes` directory for more themes.

## Examples

See `examples.tsx` for complete usage examples.

## Design Philosophy

The Card component follows a "container + composition" pattern:

1. **Card** provides the base container with theme-aware styling
2. **CardHeader/Content/Footer** provide semantic structure
3. **CardImage** handles image display with aspect ratios
4. Users control the internal layout and content

This approach provides flexibility while maintaining consistency through the theme system.
