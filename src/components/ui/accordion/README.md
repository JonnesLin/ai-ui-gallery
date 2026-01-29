# Accordion Component System

A flexible, composable accordion component built with React and TypeScript.

## Architecture

The accordion system consists of four core components:

- **Accordion**: Container that manages state
- **AccordionItem**: Individual collapsible item
- **AccordionTrigger**: Clickable header
- **AccordionContent**: Collapsible content area

## Core Design Principles

### 1. Data Structure First
- Uses `Set<string>` for O(1) lookup instead of arrays
- Single/multiple mode is handled by the same logic, not branching
- No unnecessary data conversions

### 2. State Management
- Supports both controlled and uncontrolled modes
- Context provides minimal data to child components
- No prop drilling or unnecessary re-renders

### 3. Type Safety
- Fully typed with TypeScript
- No optional parameters with fallbacks
- Errors are thrown explicitly when misused

## Usage

### Basic Example

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion';

function MyAccordion() {
  return (
    <Accordion type="single" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is this?</AccordionTrigger>
        <AccordionContent>
          This is the answer to your question.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>How does it work?</AccordionTrigger>
        <AccordionContent>
          It works by managing state through React Context.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

### Props

#### Accordion

- `type`: `'single' | 'multiple'` - Single or multiple items can be open
- `defaultValue`: `string | string[]` - Default open items (uncontrolled)
- `value`: `string | string[]` - Controlled open items
- `onValueChange`: `(value: string | string[]) => void` - Callback when value changes
- `theme`: `ThemeName` - Theme from theme system (default: 'minimalist')
- `collapsible`: `boolean` - Whether single mode can collapse all items (default: true)
- `className`: `string` - Additional CSS classes

#### AccordionItem

- `value`: `string` - Unique identifier (required)
- `disabled`: `boolean` - Disable the item
- `className`: `string` - Additional CSS classes

#### AccordionTrigger

- `className`: `string` - Additional CSS classes
- Automatically receives `data-state` attribute ('open' | 'closed')

#### AccordionContent

- `className`: `string` - Additional CSS classes
- Automatically animates height and opacity

### Controlled vs Uncontrolled

**Uncontrolled** (component manages state):
```tsx
<Accordion type="multiple" defaultValue={['item-1', 'item-2']}>
  {/* items */}
</Accordion>
```

**Controlled** (you manage state):
```tsx
const [value, setValue] = useState<string[]>(['item-1']);

<Accordion type="multiple" value={value} onValueChange={setValue}>
  {/* items */}
</Accordion>
```

### Theme Integration

The accordion integrates with the theme system:

```tsx
<Accordion theme="dark">
  {/* items */}
</Accordion>
```

Available themes: minimalist, glassmorphism, neumorphism, dark, gradient, brutalist, retro, cyberpunk, pastel, etc.

### Data Attributes

Components expose `data-state` attributes for styling:

```tsx
<AccordionItem className="border data-[state=open]:border-blue-500">
  {/* content */}
</AccordionItem>
```

## Examples

See the following files for complete examples:
- `minimalist-001.tsx` - Basic minimalist design
- `glassmorphism-002.tsx` - Glass morphism effects
- `dark-004.tsx` - Dark mode with expand/collapse all
- `brutalist-006.tsx` - Bold brutalist style
- `cyberpunk-008.tsx` - Cyberpunk theme with animations

## Implementation Notes

### No Fallbacks
Components throw errors instead of using fallbacks:
```tsx
if (!context) {
  throw new Error('Accordion components must be used within Accordion');
}
```

### Performance
- Context is memoized with `useMemo`
- Only necessary data is passed through context
- Set operations are O(1) for checking/toggling items

### Type Safety
All props are strictly typed with no optional parameters that have hidden defaults.

## Migration from Old Code

Old pattern:
```tsx
const [openItems, setOpenItems] = useState<number[]>([0]);
const toggleItem = (index: number) => { /* ... */ };
```

New pattern:
```tsx
<Accordion type="multiple" defaultValue={['item-1']}>
  <AccordionItem value="item-1">
    <AccordionTrigger>Title</AccordionTrigger>
    <AccordionContent>Content</AccordionContent>
  </AccordionItem>
</Accordion>
```

Key changes:
1. Replace numeric indices with string values
2. Remove state management boilerplate
3. Use composition pattern instead of mapping over data
4. Add `theme` prop instead of hardcoding styles
