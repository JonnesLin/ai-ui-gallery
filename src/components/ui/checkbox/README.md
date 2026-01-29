# Checkbox Component Refactoring

## Architecture

### Core Components

1. **Checkbox.tsx** - Main checkbox component
   - Handles all state logic (checked, indeterminate, disabled)
   - Accepts custom styles via className props
   - Supports custom icon rendering
   - Zero fallback - throws errors on invalid usage

2. **CheckboxGroup.tsx** - Group management component
   - Manages multiple checkboxes as a group
   - Handles array-based value state
   - Context-based architecture

3. **Checkbox.types.ts** - Type definitions
   - Clear, strict TypeScript types
   - No optional ambiguity

## Usage Pattern

### Basic Checkbox

```tsx
<Checkbox
  checked={value}
  onChange={handleChange}
  label="Label text"
  className="gap-4"
  boxClassName="w-5 h-5 border border-gray-300"
  labelClassName="text-sm text-gray-700"
/>
```

### Indeterminate State

```tsx
<Checkbox
  checked={selectAll}
  onChange={handleSelectAll}
  indeterminate={isIndeterminate}
  label="Select all"
  boxClassName={`w-5 h-5 ${checked ? 'bg-blue-600' : 'border-gray-300'}`}
/>
```

### Custom Icon

```tsx
<Checkbox
  checked={true}
  label="Custom"
  boxClassName="w-8 h-8 bg-black text-yellow-400 font-black text-2xl"
  renderIcon={() => '✓'}  // Text instead of SVG
/>
```

### With Description

```tsx
<Checkbox
  checked={true}
  label="Terms and Conditions"
  description="I agree to the terms"
  boxClassName="w-5 h-5 mt-0.5"
  labelClassName="text-sm text-gray-700"
  descriptionClassName="text-xs text-gray-400"
/>
```

## Refactoring Pattern for Demo Files

All demo files follow this pattern:

1. **State Management**
   ```tsx
   const [checked, setChecked] = useState({ ... });
   const [selectAll, setSelectAll] = useState(false);
   const [isIndeterminate, setIsIndeterminate] = useState(true);
   ```

2. **Toggle Handler**
   ```tsx
   const handleToggle = (key: keyof typeof checked) => {
     const newChecked = { ...checked, [key]: !checked[key] };
     setChecked(newChecked);
     const values = Object.values(newChecked);
     const allChecked = values.every(Boolean);
     const noneChecked = values.every((v) => !v);
     setSelectAll(allChecked);
     setIsIndeterminate(!allChecked && !noneChecked);
   };
   ```

3. **Select All Handler**
   ```tsx
   const handleSelectAll = (newValue: boolean) => {
     setChecked({ ...all keys set to newValue });
     setSelectAll(newValue);
     setIsIndeterminate(false);
   };
   ```

4. **Render with Checkbox Component**
   - Replace inline div/svg with `<Checkbox />`
   - Move all styles to className props
   - Use `renderIcon` for custom icons

## Design Decisions

### Why No Theme System?

Each demo file represents a unique visual style that cannot be abstracted into a generic theme:
- Glassmorphism needs backdrop-blur and gradient backgrounds
- Neumorphism needs complex box-shadow combinations
- Brutalist needs custom fonts and specific border styles
- Cyberpunk needs glow effects and layered elements

**Solution**: Checkbox component accepts all styles via props, letting each demo define its own look.

### Why No Fallback?

Following Linus's philosophy:
- Fallbacks hide bugs
- If something is wrong, it should fail loudly
- Developers should fix the issue, not work around it

**Example**: If `renderIcon` is provided but returns undefined, the component will show nothing (as expected), not fall back to a default icon.

## Refactored Files

- ✅ minimalist-001.tsx
- ✅ dark-001.tsx
- ✅ glassmorphism-001.tsx
- ✅ neumorphism-001.tsx
- ✅ gradient-001.tsx
- ✅ brutalist-001.tsx
- ✅ retro-001.tsx
- ✅ cyberpunk-001.tsx
- ✅ pastel-001.tsx
- ⏳ corporate-001.tsx
- ⏳ playful-001.tsx
- ⏳ luxury-001.tsx
- ⏳ nature-001.tsx
- ⏳ futuristic-001.tsx
- ⏳ sketch-001.tsx
- ⏳ monochrome-001.tsx
- ⏳ neon-001.tsx
- ⏳ material-001.tsx
- ⏳ 3d-001.tsx
- ⏳ flat-001.tsx

## Next Steps

Remaining files follow the exact same pattern. To refactor:

1. Read the original file
2. Extract state management (use pattern above)
3. Replace checkbox divs with `<Checkbox />` component
4. Move inline styles to className props
5. Test the component
