# Skeleton Component System

A modern, composable skeleton loading system built with React and TypeScript.

## Components

### `Skeleton`

The base skeleton component with multiple variants.

**Props:**

```typescript
interface SkeletonProps {
  width?: string | number;       // CSS width (e.g., "100%", 200, "50rem")
  height?: string | number;      // CSS height (e.g., "2rem", 32, "100%")
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  animation?: 'pulse' | 'wave' | 'none';
  className?: string;            // Additional CSS classes
}
```

**Usage:**

```tsx
import { Skeleton } from './skeleton';

// Text skeleton
<Skeleton variant="text" width="75%" height="1rem" />

// Rectangular skeleton
<Skeleton variant="rectangular" width="100%" height="200px" />

// Rounded skeleton
<Skeleton variant="rounded" width={300} height={150} />

// Circular skeleton (avatar)
<Skeleton variant="circular" width="4rem" height="4rem" />
```

### `SkeletonCircle`

Specialized component for circular skeletons (avatars, profile pictures).

**Props:**

```typescript
interface SkeletonCircleProps {
  size?: string | number;        // Size for both width and height
  animation?: 'pulse' | 'wave' | 'none';
  className?: string;
}
```

**Usage:**

```tsx
import { SkeletonCircle } from './skeleton';

<SkeletonCircle size="4rem" />
<SkeletonCircle size={64} animation="wave" />
```

### `SkeletonText`

Multi-line text skeleton with automatic width variation.

**Props:**

```typescript
interface SkeletonTextProps {
  lines?: number;                // Number of lines (default: 3)
  spacing?: string;              // Tailwind spacing class (default: "space-y-2")
  animation?: 'pulse' | 'wave' | 'none';
  className?: string;
}
```

**Usage:**

```tsx
import { SkeletonText } from './skeleton';

// Default 3 lines
<SkeletonText />

// Custom number of lines
<SkeletonText lines={5} />

// With wave animation
<SkeletonText lines={4} animation="wave" />
```

### `SkeletonCard`

Pre-composed card skeleton with image and text.

**Props:**

```typescript
interface SkeletonCardProps {
  imageHeight?: string | number; // Height of the image skeleton
  showImage?: boolean;           // Show/hide image skeleton (default: true)
  textLines?: number;            // Number of text lines (default: 3)
  animation?: 'pulse' | 'wave' | 'none';
  className?: string;
}
```

**Usage:**

```tsx
import { SkeletonCard } from './skeleton';

// Default card
<SkeletonCard />

// Card without image
<SkeletonCard showImage={false} />

// Custom configuration
<SkeletonCard
  imageHeight="10rem"
  textLines={5}
  animation="wave"
/>
```

## Animations

### Pulse (Default)

Standard opacity-based pulsing animation.

```tsx
<Skeleton animation="pulse" />
```

### Wave

Shimmer/wave effect animation that moves across the skeleton.

```tsx
<Skeleton animation="wave" />
```

### None

Static skeleton without animation.

```tsx
<Skeleton animation="none" />
```

## Styling

All components accept a `className` prop for custom styling. Use Tailwind CSS classes to customize colors, shadows, and other styles.

```tsx
// Custom background color
<Skeleton className="bg-gray-200" />

// With borders and shadows
<Skeleton className="bg-white border border-gray-300 shadow-md" />

// Glassmorphism style
<Skeleton className="backdrop-blur-lg bg-white/20 border border-white/30" />
```

## Real-world Examples

### User Profile Card

```tsx
<div className="border rounded-lg p-6 space-y-6">
  {/* Header */}
  <div className="flex items-center gap-4">
    <SkeletonCircle size="5rem" />
    <div className="flex-1 space-y-3">
      <Skeleton variant="text" height="1.5rem" width="40%" />
      <Skeleton variant="text" height="1rem" width="25%" />
    </div>
  </div>

  {/* Bio */}
  <SkeletonText lines={3} />

  {/* Stats */}
  <div className="grid grid-cols-3 gap-4">
    {[1, 2, 3].map((i) => (
      <div key={i} className="text-center space-y-2">
        <Skeleton variant="text" height="2rem" width="60%" />
        <Skeleton variant="text" height="0.875rem" width="80%" />
      </div>
    ))}
  </div>
</div>
```

### Blog Post List

```tsx
<div className="space-y-4">
  {[1, 2, 3].map((i) => (
    <div key={i} className="flex gap-4">
      <Skeleton variant="rounded" width="8rem" height="6rem" />
      <div className="flex-1 space-y-2">
        <Skeleton variant="text" height="1.25rem" width="80%" />
        <SkeletonText lines={2} />
        <Skeleton variant="text" height="0.875rem" width="30%" />
      </div>
    </div>
  ))}
</div>
```

### Product Grid

```tsx
<div className="grid grid-cols-3 gap-6">
  {[1, 2, 3, 4, 5, 6].map((i) => (
    <SkeletonCard key={i} imageHeight="12rem" textLines={2} />
  ))}
</div>
```

## Design Principles

1. **No Fallbacks**: Components will throw errors if props are invalid, rather than using fallback values. This ensures issues are caught early.

2. **Composability**: Build complex skeleton layouts by composing simple components.

3. **Type Safety**: Full TypeScript support with proper type definitions.

4. **Performance**: Minimal DOM nodes and efficient CSS animations.

5. **Flexibility**: Easy to customize through className prop and Tailwind CSS.

## Migration from Old Skeleton Files

Old skeleton files (e.g., `minimalist-001.tsx`) have been updated to use the new component system. They now import and compose the base components instead of duplicating code.

Before:
```tsx
<div className="w-16 h-16 rounded-full bg-gray-200 animate-pulse" />
```

After:
```tsx
import { SkeletonCircle } from './Skeleton';
<SkeletonCircle size="4rem" className="bg-gray-200" />
```

## File Structure

```
skeleton/
├── Skeleton.tsx           # Base skeleton component
├── Skeleton.types.ts      # TypeScript type definitions
├── SkeletonCircle.tsx     # Circular skeleton component
├── SkeletonText.tsx       # Multi-line text skeleton
├── SkeletonCard.tsx       # Pre-composed card skeleton
├── index.ts               # Exports
├── example-usage.tsx      # Usage examples
├── README.md              # Documentation (this file)
└── *-001.tsx              # Theme-specific examples (updated to use new components)
```
