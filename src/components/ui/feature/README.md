# Feature Component System

A clean, theme-aware component system for displaying features in various layouts.

## Components

### Feature
Single feature display with icon, title, description, and optional link.

**Props:**
- `theme: ThemeName` - Theme to apply (e.g., 'minimalist', 'dark', 'glassmorphism')
- `layout: 'horizontal' | 'vertical' | 'centered'` - Layout orientation
- `icon: ReactNode` - Icon element (emoji, SVG, or component)
- `title: string` - Feature title
- `description: string` - Feature description
- `link?: { href: string, label: string }` - Optional CTA link
- `className?: string` - Additional CSS classes

### FeatureIcon
Icon container with theme-aware styling.

**Props:**
- `theme: ThemeName` - Theme to apply
- `children: ReactNode` - Icon content
- `className?: string` - Additional CSS classes (for sizing)

### FeatureGrid
Responsive grid container for features.

**Props:**
- `children: ReactNode` - Feature components
- `columns: 2 | 3 | 4` - Number of columns (responsive breakpoints applied automatically)
- `gap: 'sm' | 'md' | 'lg'` - Gap size between items
- `className?: string` - Additional CSS classes

## Usage Examples

### Basic Vertical Layout
```tsx
import { Feature, FeatureGrid } from './feature';

<FeatureGrid columns={3} gap="lg">
  <Feature
    theme="minimalist"
    layout="vertical"
    icon="⚡"
    title="Lightning Fast"
    description="Built for speed with optimized performance."
  />
</FeatureGrid>
```

### With Links
```tsx
<Feature
  theme="dark"
  layout="vertical"
  icon="🔒"
  title="Secure"
  description="Enterprise-grade security out of the box."
  link={{ href: '/security', label: 'Learn more' }}
/>
```

### Horizontal Layout
```tsx
<FeatureGrid columns={2} gap="md">
  <Feature
    theme="glassmorphism"
    layout="horizontal"
    icon="🎨"
    title="Customizable"
    description="Tailor every aspect to your needs."
  />
</FeatureGrid>
```

### Centered Layout
```tsx
<FeatureGrid columns={3} gap="lg">
  <Feature
    theme="minimalist"
    layout="centered"
    icon="📱"
    title="Responsive"
    description="Looks great on any device."
  />
</FeatureGrid>
```

### Custom Styling
```tsx
<Feature
  theme="dark"
  layout="vertical"
  icon="🔌"
  title="Integrations"
  description="Connect with your favorite tools."
  className="p-8 hover:bg-zinc-800/50 transition-all"
/>
```

## Layout Behavior

- **vertical**: Icon top, content below, left-aligned
- **horizontal**: Icon left, content right, full width
- **centered**: Icon top, content below, center-aligned

## Grid Columns

- `2`: 1 column mobile, 2 columns desktop
- `3`: 1 column mobile, 2 columns tablet, 3 columns desktop
- `4`: 1 column mobile, 2 columns tablet, 4 columns desktop

## Gap Sizes

- `sm`: 1rem (16px)
- `md`: 1.5rem (24px)
- `lg`: 2rem (32px)

## Theme Integration

All components use the theme system from `src/components/ui/_themes/`. The theme determines:
- Background colors and blur effects
- Text colors and opacity
- Border styles and colors
- Border radius
- Shadows
- Hover states

## Design Philosophy

Following Linus's principle: "Good code has no special cases."

- No fallback values - components fail fast with clear errors
- Data structure first - props mirror the actual data shape
- Minimal abstraction - three simple components, no compound patterns
- Theme-driven styling - all visual properties come from theme config
