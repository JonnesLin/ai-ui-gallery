# List Component System

A flexible and composable list component system that works with any theme.

## Components

### List
The main container component.

**Props:**
- `theme: ThemeName` - Required. The theme to apply (e.g., 'minimalist', 'dark', 'glassmorphism')
- `variant?: 'simple' | 'bordered' | 'divided'` - List style variant (default: 'simple')
- `size?: 'sm' | 'md' | 'lg'` - Spacing size (default: 'md')
- `hoverable?: boolean` - Enable hover effects (default: false)
- `className?: string` - Additional CSS classes

### ListItem
Individual list item component.

**Props:**
- `className?: string` - Additional CSS classes
- `onClick?: () => void` - Click handler
- `children: ReactNode` - Item content

### ListItemIcon
Icon container for list items.

**Props:**
- `className?: string` - Additional CSS classes
- `children: ReactNode` - Icon content (emoji, SVG, etc.)

### ListItemText
Text content container with support for primary and secondary text.

**Props:**
- `className?: string` - Additional CSS classes
- `children?: ReactNode` - Direct text content
- `primary?: string` - Primary text (title)
- `secondary?: string` - Secondary text (description)

### ListItemAction
Action buttons/elements container.

**Props:**
- `className?: string` - Additional CSS classes
- `children: ReactNode` - Action elements (buttons, etc.)

## Usage Examples

### Simple List
```tsx
import { List, ListItem } from './list';

<List theme="minimalist" variant="simple" hoverable>
  <ListItem className="px-4 py-3 hover:bg-gray-50">Item 1</ListItem>
  <ListItem className="px-4 py-3 hover:bg-gray-50">Item 2</ListItem>
</List>
```

### List with Icons
```tsx
<List theme="minimalist" variant="simple" hoverable>
  <ListItem className="px-4 py-3 hover:bg-gray-50">
    <ListItemIcon className="text-xl">📐</ListItemIcon>
    <ListItemText primary="Title" secondary="Description" />
  </ListItem>
</List>
```

### List with Actions
```tsx
<List theme="dark" variant="divided" hoverable>
  <ListItem className="px-4 py-3 group justify-between">
    <span>Item Title</span>
    <ListItemAction>
      <button className="opacity-0 group-hover:opacity-100">Edit</button>
    </ListItemAction>
  </ListItem>
</List>
```

### Bordered List
```tsx
<List theme="dark" variant="bordered" className="bg-gray-900 border-gray-800">
  <ListItem className="px-5 py-4 border-b border-gray-800">
    <ListItemIcon>🧠</ListItemIcon>
    <ListItemText primary="Neural Network" secondary="Training in progress" />
  </ListItem>
</List>
```

## Design Philosophy

This component system follows Linus's principles:

1. **Good Taste**: Composition over configuration. No special cases.
2. **Simplicity**: Each component does one thing well.
3. **No Fallbacks**: If something is wrong, it throws an error.
4. **Data-Driven**: Theme is just className composition, no complex logic.

## Architecture

```
List (container)
└── ListItem (flex container)
    ├── ListItemIcon (optional)
    ├── ListItemText (flexible text)
    └── ListItemAction (optional)
```

The components use composition patterns. Each child component is independent and can be used or omitted as needed. No complex state management, no fallbacks - just clean, predictable composition.
