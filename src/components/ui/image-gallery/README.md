# ImageGallery Component

A flexible, theme-aware image gallery component system with built-in lightbox support.

## Architecture

```
image-gallery/
├── ImageGallery.tsx          # Main gallery container (manages state)
├── ImageGalleryItem.tsx      # Individual image item (stateless)
├── ImageGalleryLightbox.tsx  # Lightbox modal (handles keyboard navigation)
├── types.ts                  # TypeScript type definitions
├── utils.ts                  # Helper functions for CSS classes
└── index.ts                  # Public exports
```

## Data Structure

The component is built around a simple, clean data structure:

```typescript
interface ImageData {
  src: string;           // Full-size image URL
  alt: string;           // Accessibility text
  thumbnail?: string;    // Optional thumbnail URL
}
```

No IDs, no categories mixed with image data. Pure image information.

## Usage

```tsx
import { ImageGallery } from './ImageGallery';
import type { ImageData } from './types';

const images: ImageData[] = [
  { src: '/images/photo1.jpg', alt: 'Beautiful sunset' },
  { src: '/images/photo2.jpg', alt: 'Mountain view' },
];

<ImageGallery
  images={images}
  theme="minimalist"
  columns={3}
  gap="md"
  aspectRatio="square"
  lightbox={true}
/>
```

## Props

### ImageGallery

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | `ImageData[]` | required | Array of image data |
| `theme` | `ThemeName` | required | Theme name (minimalist, dark, glassmorphism, etc.) |
| `columns` | `2 \| 3 \| 4 \| 5` | `3` | Number of columns (responsive) |
| `gap` | `'sm' \| 'md' \| 'lg'` | `'md'` | Space between items |
| `aspectRatio` | `'square' \| '4/3' \| '16/9' \| 'auto'` | `'square'` | Image aspect ratio |
| `lightbox` | `boolean` | `true` | Enable lightbox on click |
| `masonry` | `boolean` | `false` | Enable masonry layout |
| `className` | `string` | `undefined` | Additional CSS classes |

## Keyboard Navigation

When lightbox is open:

- `Escape` - Close lightbox
- `ArrowLeft` - Previous image
- `ArrowRight` - Next image

## Theme Integration

The component automatically pulls styling from the theme system:

```typescript
const themeConfig = getTheme(theme);
// Uses: base.radius, base.border, variants.primary, states.hover
```

No hardcoded colors. No fallbacks. If theme doesn't exist, it throws an error.

## Examples

### Basic Gallery

```tsx
<ImageGallery
  images={images}
  theme="minimalist"
/>
```

### Custom Layout

```tsx
<ImageGallery
  images={images}
  theme="dark"
  columns={4}
  gap="sm"
  aspectRatio="16/9"
/>
```

### Without Lightbox

```tsx
<ImageGallery
  images={images}
  theme="glassmorphism"
  lightbox={false}
/>
```

## Design Philosophy

1. **Separation of Concerns**: Data, state, and presentation are cleanly separated
2. **No Special Cases**: Every configuration is explicit, no magic defaults
3. **Theme-Driven**: All styling comes from theme config, no inline hardcoded styles
4. **Keyboard First**: Full keyboard navigation support in lightbox
5. **Error Fast**: Missing theme or invalid props throw errors immediately

## Migration from Old Files

Old pattern (per-theme files):
```tsx
// Each file had its own state, data, and styles mixed together
const images = [{ id: 1, title: 'Photo', category: 'Art' }];
const [selectedImage, setSelectedImage] = useState<number | null>(null);
```

New pattern (unified component):
```tsx
// Clean data, shared logic, theme-driven styles
const images: ImageData[] = [
  { src: '/photo.jpg', alt: 'Photo' }
];

<ImageGallery images={images} theme="minimalist" />
```

## Files Updated

The following demo files have been refactored to use the new system:
- `minimalist-001.tsx`
- `glassmorphism-001.tsx`
- `dark-001.tsx`
- `gradient-001.tsx`
- `neumorphism-001.tsx`

Other theme files remain unchanged for now.
