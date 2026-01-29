# Tooltip Component

A unified tooltip component with multiple themes and placement options.

## Features

- **8 Placement Options**: top, top-start, top-end, bottom, bottom-start, bottom-end, left, right
- **4 Themes**: minimalist, dark, glassmorphism, neumorphism
- **3 Trigger Types**: hover, click, focus
- **Controlled/Uncontrolled**: Support both controlled and uncontrolled state
- **Customizable Delay**: Add delay before showing tooltip
- **Arrow Support**: Optional arrow pointing to trigger element
- **Zero Fallback**: Throws error if theme not found instead of silent fallback

## Usage

### Basic Example

```tsx
import { Tooltip } from './components/ui/tooltip';

function App() {
  return (
    <Tooltip content="This is a tooltip" placement="top" theme="minimalist">
      <button>Hover me</button>
    </Tooltip>
  );
}
```

### All Placements

```tsx
<Tooltip content="Top" placement="top">
  <button>Top</button>
</Tooltip>

<Tooltip content="Bottom" placement="bottom">
  <button>Bottom</button>
</Tooltip>

<Tooltip content="Left" placement="left">
  <button>Left</button>
</Tooltip>

<Tooltip content="Right" placement="right">
  <button>Right</button>
</Tooltip>

<Tooltip content="Top Start" placement="top-start">
  <button>Top Start</button>
</Tooltip>

<Tooltip content="Bottom End" placement="bottom-end">
  <button>Bottom End</button>
</Tooltip>
```

### Different Themes

```tsx
<Tooltip content="Minimalist" theme="minimalist">
  <button>Minimalist</button>
</Tooltip>

<Tooltip content="Dark mode" theme="dark">
  <button>Dark</button>
</Tooltip>

<Tooltip content="Glass effect" theme="glassmorphism">
  <button>Glass</button>
</Tooltip>

<Tooltip content="Soft 3D" theme="neumorphism">
  <button>Neumorphism</button>
</Tooltip>
```

### Different Triggers

```tsx
<Tooltip content="Hover to show" trigger="hover">
  <button>Hover</button>
</Tooltip>

<Tooltip content="Click to toggle" trigger="click">
  <button>Click</button>
</Tooltip>

<Tooltip content="Focus to show" trigger="focus">
  <button>Focus</button>
</Tooltip>
```

### Controlled State

```tsx
function ControlledTooltip() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Tooltip
        content="Controlled tooltip"
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <button>Controlled</button>
      </Tooltip>

      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle
      </button>
    </div>
  );
}
```

### With Delay

```tsx
<Tooltip content="Delayed tooltip" delay={500}>
  <button>Delayed (500ms)</button>
</Tooltip>

<Tooltip content="Delayed tooltip" delay={1000}>
  <button>Delayed (1s)</button>
</Tooltip>
```

### Without Arrow

```tsx
<Tooltip content="No arrow" arrow={false}>
  <button>No Arrow</button>
</Tooltip>
```

### Different Trigger Elements

```tsx
{/* Button */}
<Tooltip content="Button tooltip">
  <button>Button</button>
</Tooltip>

{/* Inline text */}
<Tooltip content="Text tooltip">
  <span className="border-b border-dashed cursor-help">
    Hover this text
  </span>
</Tooltip>

{/* Icon */}
<Tooltip content="Icon tooltip">
  <div className="cursor-help">
    <InfoIcon />
  </div>
</Tooltip>

{/* Badge */}
<Tooltip content="Badge tooltip">
  <span className="badge">New</span>
</Tooltip>
```

## Props

```typescript
interface TooltipProps {
  content: ReactNode;              // Tooltip content
  children: ReactNode;             // Trigger element
  placement?: TooltipPlacement;    // Default: 'top'
  theme?: ThemeName;               // Default: 'minimalist'
  delay?: number;                  // Default: 0 (ms)
  arrow?: boolean;                 // Default: true
  trigger?: TooltipTrigger;        // Default: 'hover'
  open?: boolean;                  // Controlled state
  onOpenChange?: (open: boolean) => void;  // Controlled state callback
  className?: string;              // Additional classes
}

type TooltipPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'right';

type TooltipTrigger = 'hover' | 'click' | 'focus';
```

## Design Philosophy

### 1. Data Structure First
- Placement logic is centralized in `PLACEMENT_STYLES` and `ARROW_STYLES` records
- No conditional branches for different placements
- All positions use the same rendering logic

### 2. No Special Cases
- Every placement uses the same component structure
- Arrow rendering is unified across all directions
- Theme styles are centralized in `getTooltipStyles`

### 3. Simplicity
- Core component is under 200 lines
- No external positioning libraries needed
- Pure CSS-based positioning

### 4. No Fallbacks
- If theme doesn't exist, component throws error immediately
- No silent failures or default fallbacks
- Forces correct usage

## Architecture

```
tooltip/
├── Tooltip.tsx        # Core component (unified logic)
├── Tooltip.types.ts   # Type definitions
├── index.ts           # Exports
├── demo.tsx           # Comprehensive demo
├── minimalist-001.tsx # Minimalist theme showcase
├── dark-001.tsx       # Dark theme showcase
├── glassmorphism-001.tsx # Glass theme showcase
└── neumorphism-001.tsx   # Neumorphism theme showcase
```

### Key Functions

1. **PLACEMENT_STYLES** - Maps placement to CSS classes
2. **ARROW_STYLES** - Maps placement to arrow position classes
3. **getArrowElement** - Generates arrow element based on theme
4. **getTooltipStyles** - Returns theme-specific styles

## Examples

See the demo file for comprehensive examples:
- `/src/components/ui/tooltip/demo.tsx`

Or check individual theme showcases:
- `/src/components/ui/tooltip/minimalist-001.tsx`
- `/src/components/ui/tooltip/dark-001.tsx`
- `/src/components/ui/tooltip/glassmorphism-001.tsx`
- `/src/components/ui/tooltip/neumorphism-001.tsx`
