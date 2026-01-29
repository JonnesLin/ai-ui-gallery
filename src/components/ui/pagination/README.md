# Pagination Component

A flexible and themeable pagination component with support for multiple themes and advanced features.

## Features

- **Theme Support**: Works with all theme configurations (minimalist, dark, glassmorphism, neumorphism, gradient, material, flat, etc.)
- **Size Variants**: Multiple sizes (xs, sm, md, lg, xl)
- **Page Size Changer**: Optional dropdown to change items per page
- **Quick Jumper**: Optional input to jump to a specific page
- **Total Display**: Customizable total items display
- **Ellipsis Handling**: Smart page number ellipsis for large page counts
- **Sibling Count**: Configurable number of pages to show around current page
- **Keyboard Support**: Quick jumper supports Enter key
- **Disabled State**: Full support for disabled state
- **Type Safe**: Full TypeScript support

## Basic Usage

```tsx
import { Pagination } from '@/components/ui/pagination';
import { useState } from 'react';

function MyComponent() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      total={100}
      pageSize={10}
      current={currentPage}
      onChange={setCurrentPage}
      theme="minimalist"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `total` | `number` | Required | Total number of items |
| `pageSize` | `number` | Required | Number of items per page |
| `current` | `number` | Required | Current active page (1-indexed) |
| `onChange` | `(page: number) => void` | Required | Callback when page changes |
| `theme` | `ThemeName` | Required | Theme name to apply |
| `size` | `ComponentSize` | `'md'` | Size of pagination buttons |
| `showTotal` | `boolean \| (total, range) => ReactNode` | `false` | Show total items count |
| `showSizeChanger` | `boolean` | `false` | Show page size dropdown |
| `showQuickJumper` | `boolean` | `false` | Show quick page jumper input |
| `disabled` | `boolean` | `false` | Disable all interactions |
| `siblingCount` | `number` | `1` | Number of pages to show around current page |
| `className` | `string` | `undefined` | Additional CSS classes |

## Advanced Examples

### With All Features

```tsx
<Pagination
  total={500}
  pageSize={20}
  current={currentPage}
  onChange={setCurrentPage}
  theme="dark"
  size="lg"
  showTotal
  showSizeChanger
  showQuickJumper
  siblingCount={2}
/>
```

### Custom Total Display

```tsx
<Pagination
  total={100}
  pageSize={10}
  current={currentPage}
  onChange={setCurrentPage}
  theme="material"
  showTotal={(total, [start, end]) => (
    <span className="font-bold">
      Showing {start}-{end} of {total} items
    </span>
  )}
/>
```

### Compact Mode

```tsx
<Pagination
  total={100}
  pageSize={10}
  current={currentPage}
  onChange={setCurrentPage}
  theme="glassmorphism"
  size="sm"
  siblingCount={0}
/>
```

## Hook Usage

You can also use the underlying pagination logic separately:

```tsx
import { usePagination } from '@/components/ui/pagination';

const { pages, totalPages, canGoToPrev, canGoToNext } = usePagination({
  total: 100,
  pageSize: 10,
  current: 5,
  siblingCount: 1,
});

// pages: [1, 'ellipsis', 4, 5, 6, 'ellipsis', 10]
// totalPages: 10
// canGoToPrev: true
// canGoToNext: true
```

## Page Item Type

The `pages` array from `usePagination` contains:
- `number`: Actual page numbers that can be clicked
- `'ellipsis'`: Represents "..." where pages are omitted

## Error Handling

The component throws errors for invalid inputs:
- Invalid page numbers (< 1 or > totalPages)
- This follows the "no fallback" principle - fail fast and loud

## Theme Integration

The component automatically adapts to the selected theme using:
- `theme.base.*` - Base styles (background, text, border, radius)
- `theme.variants.primary.*` - Active page styles
- `theme.variants.secondary.*` - Navigation button styles
- `theme.sizes[size]` - Size-specific padding and dimensions
- `theme.states.*` - Hover, focus, disabled states

## Files Structure

```
pagination/
├── Pagination.tsx           # Main component
├── Pagination.types.ts      # TypeScript definitions
├── usePagination.ts         # Core pagination logic hook
├── index.ts                 # Public exports
├── README.md                # This file
└── [theme]-001.tsx          # Theme showcase files
```
