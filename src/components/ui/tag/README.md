# Tag Component

A flexible and themeable tag component with support for multiple variants, colors, and interactions.

## Core Component

The tag component has been refactored to use a centralized configuration system with theme support.

### Files Structure

```
tag/
├── Tag.tsx              # Core component
├── Tag.types.ts         # TypeScript type definitions
├── Tag.config.ts        # Theme configurations
├── index.ts             # Public exports
└── [theme]-001.tsx      # Theme showcase files
```

## Usage

```tsx
import { Tag } from './components/ui/tag';

// Basic usage
<Tag theme="minimalist" variant="solid" color="primary">
  Primary Tag
</Tag>

// With icon
<Tag theme="material" variant="soft" color="success" icon={<CheckIcon />}>
  Verified
</Tag>

// Closable tag
<Tag theme="glassmorphism" variant="outlined" closable onClose={handleClose}>
  Removable
</Tag>

// Clickable tag
<Tag theme="dark" variant="soft" clickable onClick={handleClick}>
  Click Me
</Tag>
```

## Props

### Required Props

- `theme: ThemeName` - The theme to apply (e.g., 'minimalist', 'material', 'glassmorphism', 'dark', 'neumorphism')
- `children: ReactNode` - The tag content

### Optional Props

- `variant?: 'solid' | 'soft' | 'outlined'` - Visual style (default: 'solid')
- `color?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'` - Semantic color (default: 'default')
- `size?: 'xs' | 'sm' | 'md' | 'lg'` - Size variant (default: 'md')
- `rounded?: 'sm' | 'md' | 'lg' | 'full'` - Border radius (default: 'md')
- `closable?: boolean` - Show close button (default: false)
- `onClose?: () => void` - Close button click handler
- `icon?: ReactNode` - Leading icon
- `clickable?: boolean` - Make the tag clickable (default: false)
- `className?: string` - Additional CSS classes

## Variants

### solid
Full background color with white or contrasting text.

### soft
Light background with colored text, subtle appearance.

### outlined
Transparent background with colored border and text.

## Colors

- `default` - Gray/neutral color
- `primary` - Blue, main brand color
- `success` - Green, positive actions
- `warning` - Amber/orange, caution
- `error` - Red, errors or destructive actions
- `info` - Sky blue, informational content

## Sizes

- `xs` - Extra small (minimal padding)
- `sm` - Small (compact)
- `md` - Medium (default)
- `lg` - Large (prominent)

## Themes

The component supports all 20+ themes from the theme system:
- minimalist
- material
- glassmorphism
- dark
- neumorphism
- flat
- gradient
- brutalist
- retro
- cyberpunk
- pastel
- corporate
- playful
- 3d
- futuristic
- luxury
- monochrome
- nature
- neon
- sketch

Each theme has its own visual style while maintaining consistent API and behavior.

## Design Principles

### No Fallbacks
The component throws errors for invalid configurations rather than silently falling back to defaults. This ensures issues are caught during development.

### Theme-First
Each theme defines its own color palettes, shadows, and visual effects. The component adapts to the theme's design language.

### Composable
Tags can be combined with icons, close buttons, and click handlers without prop drilling or complex state management.

### Type-Safe
Full TypeScript support with strict typing for all props and configurations.

## Examples

### Tag Cloud
```tsx
<div className="flex flex-wrap gap-2">
  <Tag theme="minimalist" variant="outlined">JavaScript</Tag>
  <Tag theme="minimalist" variant="outlined">TypeScript</Tag>
  <Tag theme="minimalist" variant="outlined">React</Tag>
</div>
```

### Removable Tags
```tsx
const [tags, setTags] = useState(['React', 'Vue', 'Angular']);

<div className="flex flex-wrap gap-2">
  {tags.map(tag => (
    <Tag
      key={tag}
      theme="material"
      variant="solid"
      closable
      onClose={() => setTags(tags.filter(t => t !== tag))}
    >
      {tag}
    </Tag>
  ))}
</div>
```

### Selectable Tags
```tsx
const [selected, setSelected] = useState('all');

<div className="flex flex-wrap gap-2">
  <Tag
    theme="glassmorphism"
    variant={selected === 'all' ? 'solid' : 'outlined'}
    clickable
    onClick={() => setSelected('all')}
  >
    All
  </Tag>
  <Tag
    theme="glassmorphism"
    variant={selected === 'active' ? 'solid' : 'outlined'}
    clickable
    onClick={() => setSelected('active')}
  >
    Active
  </Tag>
</div>
```
