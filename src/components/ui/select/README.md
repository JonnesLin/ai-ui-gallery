# Select Component

A unified Select component system with theme support.

## Architecture

### Core Components

- `Select.tsx` - Main select component with state management
- `SelectOption.tsx` - Individual option rendering
- `SelectGroup.tsx` - Option grouping support
- `Select.types.ts` - TypeScript type definitions
- `index.ts` - Public exports

### Data Structure

The component follows a simple data model:
- `value`: string | string[] - Current selected value(s)
- `options`: Array of {value, label, disabled?}
- `onChange`: Callback with new value

No special cases - single and multiple selection use the same structure, differentiated only by the `multiple` boolean prop.

## Usage

```tsx
import { Select } from './select';

// Basic single select
<Select
  value={value}
  onChange={setValue}
  options={[
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]}
  theme="minimalist"
/>

// Multiple select
<Select
  value={selectedItems}
  onChange={setSelectedItems}
  options={options}
  multiple
  theme="glassmorphism"
/>

// With search
<Select
  value={value}
  onChange={setValue}
  options={options}
  searchable
  theme="dark"
/>
```

## Props

- `value` / `defaultValue`: Current selection
- `onChange`: Change handler
- `options`: Option array
- `multiple`: Enable multi-select
- `searchable`: Enable search input
- `clearable`: Show clear button
- `placeholder`: Placeholder text
- `size`: 'sm' | 'md' | 'lg'
- `theme`: ThemeName from theme system
- `disabled`: Disable select
- `error`: Error state with optional message
- `label`: Label text
- `className`: Additional classes

## Theme Integration

The component uses the theme system from `_themes/`:
- Button background/border/text from `base` config
- Hover/focus/disabled from `states` config
- Dropdown background: uses theme background if solid, otherwise white

No fallback chains or conditional logic based on theme names. If background is transparent, use white for dropdown. Otherwise, use the theme background.

## Display Files Status

**Refactored** (using new Select component):
- minimalist-001.tsx
- glassmorphism-001.tsx
- dark-001.tsx
- neumorphism-001.tsx
- flat-001.tsx
- material-001.tsx

**Not refactored** (still standalone - no theme config exists):
- brutalist-001.tsx
- corporate-001.tsx
- cyberpunk-001.tsx
- gradient-001.tsx
- luxury-001.tsx
- monochrome-001.tsx
- nature-001.tsx
- neon-001.tsx
- pastel-001.tsx
- playful-001.tsx
- retro-001.tsx
- sketch-001.tsx
- 3d-001.tsx
- futuristic-001.tsx

These files will be refactored once their theme configurations are added to the theme system.

## Design Philosophy

Following Linus Torvalds' principles:

1. **Data structures first**: The core is value + options + onChange. Everything else is presentation.

2. **No special cases**: Single/multiple selection is not a special case, it's a mode flag.

3. **Simplicity**: Dropdown background logic is one check (transparent? use white : use theme).

4. **No user breakage**: All existing display files still work. Refactored ones use the new component but maintain the same functionality.

5. **Practical over theoretical**: Theme system wasn't designed for Select, but we adapt with minimal logic rather than over-engineering a new theme structure.
