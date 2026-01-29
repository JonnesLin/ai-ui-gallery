# Popover Component

A flexible, composable Popover component system built with React Context API.

## Architecture

### Core Components

- **Popover.tsx** - Root component managing state and context
- **PopoverTrigger.tsx** - Trigger element component
- **PopoverContent.tsx** - Content container with positioning logic
- **Popover.types.ts** - TypeScript type definitions
- **index.ts** - Public exports

### Design Decisions

1. **Context-based state management** - Eliminates prop drilling and duplicate state logic
2. **Compound component pattern** - Provides flexible composition while maintaining encapsulation
3. **Theme integration** - Works seamlessly with the theme system in `_themes/`
4. **No fallbacks** - Errors are thrown immediately when misconfigured (per Linus philosophy)

## Usage

### Basic Example

```tsx
import { Popover, PopoverTrigger, PopoverContent } from './popover';

function Example() {
  return (
    <Popover placement="top" theme="minimalist">
      <PopoverTrigger className="px-4 py-2 bg-blue-500 text-white">
        Click me
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <p>Popover content here</p>
      </PopoverContent>
    </Popover>
  );
}
```

### Props

#### Popover

- `open?: boolean` - Controlled open state
- `defaultOpen?: boolean` - Uncontrolled default state (default: false)
- `onOpenChange?: (open: boolean) => void` - Callback when state changes
- `placement?: PopoverPlacement` - Position (default: 'bottom')
- `theme?: ThemeName` - Theme name (default: 'minimalist')
- `arrow?: boolean` - Show arrow (default: true)
- `offset?: number` - Offset in pixels (default: 8)

#### PopoverTrigger

- `children: ReactNode` - Trigger element
- `asChild?: boolean` - Use child element as trigger (default: false)
- `className?: string` - Additional CSS classes

#### PopoverContent

- `children: ReactNode` - Content
- `className?: string` - Additional CSS classes
- `arrowClassName?: string` - Arrow CSS classes
- `arrowStyle?: React.CSSProperties` - Arrow inline styles
- `contentStyle?: React.CSSProperties` - Content wrapper inline styles

### Placement Options

- `top`, `top-start`, `top-end`
- `bottom`, `bottom-start`, `bottom-end`
- `left`, `left-start`, `left-end`
- `right`, `right-start`, `right-end`

### Advanced Usage

#### Custom Arrow Styles (for themes like Neumorphism)

```tsx
<PopoverContent
  arrowClassName="w-4 h-4"
  arrowStyle={{ boxShadow: '4px 4px 8px #bec3c9' }}
  contentStyle={{ boxShadow: '8px 8px 16px #bec3c9, -8px -8px 16px #ffffff' }}
>
  Content
</PopoverContent>
```

#### Controlled State

```tsx
const [open, setOpen] = useState(false);

<Popover open={open} onOpenChange={setOpen}>
  {/* ... */}
</Popover>
```

#### AsChild Pattern (for custom triggers)

```tsx
<PopoverTrigger asChild>
  <CustomButton>Click me</CustomButton>
</PopoverTrigger>
```

## Theme Integration

The component uses the theme system from `_themes/`. Currently supported themes:

- minimalist
- dark
- glassmorphism
- neumorphism
- material
- flat (uses minimalist theme with custom styles)

For themes not yet in the theme system, use `theme="minimalist"` and override with custom className/style props.

## Refactored Examples

The following theme files have been fully refactored:

- ✅ minimalist-001.tsx
- ✅ dark-001.tsx
- ✅ glassmorphism-001.tsx
- ✅ neumorphism-001.tsx
- ✅ material-001.tsx
- ✅ flat-001.tsx

## Migration Guide

### Before (Old Pattern)

```tsx
const [openPopover, setOpenPopover] = useState<string | null>(null);
const popoverRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    // ... click outside logic
  };
  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, [openPopover]);

<div className="relative" ref={el => popoverRefs.current['id'] = el}>
  <button onClick={() => togglePopover('id')}>Trigger</button>
  {openPopover === 'id' && (
    <div className="absolute ...">Content</div>
  )}
</div>
```

### After (New Pattern)

```tsx
<Popover placement="top" theme="dark">
  <PopoverTrigger>Trigger</PopoverTrigger>
  <PopoverContent>Content</PopoverContent>
</Popover>
```

### Key Improvements

1. **Eliminated duplicate state logic** - No more useState/useEffect in each file
2. **Eliminated duplicate positioning code** - Centralized in PopoverContent
3. **Eliminated duplicate click-outside handling** - Centralized in Popover
4. **Type safety** - Full TypeScript support
5. **Composable** - Easy to extend and customize

## File Structure

```
popover/
├── Popover.tsx              # Root component with Context
├── PopoverTrigger.tsx       # Trigger component
├── PopoverContent.tsx       # Content component with positioning
├── Popover.types.ts         # TypeScript definitions
├── index.ts                 # Public API
├── README.md                # This file
└── [theme]-001.tsx          # Theme examples (20 files)
```

## Next Steps

To refactor remaining theme files, follow this pattern:

1. Import Popover components
2. Replace state management with Popover props
3. Replace trigger button with PopoverTrigger
4. Replace content div with PopoverContent
5. Move positioning logic to placement prop
6. Move theme styles to theme prop or custom className/style props
