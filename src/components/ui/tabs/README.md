# Tabs Component

A composable, accessible tabs component built with React and TypeScript.

## Architecture

This component follows a composable pattern where each part is a separate component:

- `Tabs` - Root container, manages state via Context
- `TabList` - Container for Tab buttons
- `Tab` - Individual tab button
- `TabPanels` - Container for content panels
- `TabPanel` - Individual content panel

## Core Components

### File Structure

```
tabs/
├── Tabs.tsx            # Root component with state management
├── TabList.tsx         # Tab button container
├── Tab.tsx             # Individual tab button
├── TabPanels.tsx       # Panel container
├── TabPanel.tsx        # Individual panel
├── TabsContext.tsx     # Context for state sharing
├── Tabs.types.ts       # TypeScript definitions
├── index.ts            # Exports
└── *-001.tsx           # Theme demo files
```

## Usage

### Basic Example

```tsx
import { Tabs, TabList, Tab, TabPanels, TabPanel } from './tabs';

function MyTabs() {
  return (
    <Tabs defaultValue="tab1">
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="tab1">Content 1</TabPanel>
        <TabPanel value="tab2">Content 2</TabPanel>
        <TabPanel value="tab3">Content 3</TabPanel>
      </TabPanels>
    </Tabs>
  );
}
```

### Controlled Mode

```tsx
function ControlledTabs() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      {/* ... */}
    </Tabs>
  );
}
```

### Vertical Orientation

```tsx
<Tabs defaultValue="tab1" orientation="vertical">
  <TabList>
    <Tab value="tab1">Tab 1</Tab>
    <Tab value="tab2">Tab 2</Tab>
  </TabList>

  <TabPanels>
    <TabPanel value="tab1">Content 1</TabPanel>
    <TabPanel value="tab2">Content 2</TabPanel>
  </TabPanels>
</Tabs>
```

### Custom Styling

```tsx
<Tabs defaultValue="overview">
  <TabList className="flex gap-2 bg-gray-100 p-2 rounded-lg">
    <Tab
      value="overview"
      className="px-4 py-2 rounded aria-selected:bg-blue-500 aria-selected:text-white"
    >
      Overview
    </Tab>
    {/* ... */}
  </TabList>

  <TabPanels>
    <TabPanel value="overview" className="p-4 bg-white rounded">
      Content
    </TabPanel>
    {/* ... */}
  </TabPanels>
</Tabs>
```

## API Reference

### Tabs Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultValue` | `string` | - | Initial active tab (uncontrolled) |
| `value` | `string` | - | Active tab (controlled) |
| `onChange` | `(value: string) => void` | - | Callback when tab changes |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction |
| `className` | `string` | - | CSS classes |
| `children` | `ReactNode` | - | Child components |

### Tab Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | **required** | Unique identifier |
| `disabled` | `boolean` | `false` | Disable interaction |
| `className` | `string` | - | CSS classes |
| `children` | `ReactNode` | - | Button content |

**State Classes:**
- `aria-selected="true"` when active
- `aria-disabled="true"` when disabled

### TabPanel Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | **required** | Matching tab value |
| `className` | `string` | - | CSS classes |
| `children` | `ReactNode` | - | Panel content |

## Accessibility

This component implements WAI-ARIA tabs pattern:

- Proper ARIA roles (`tablist`, `tab`, `tabpanel`)
- Keyboard navigation (Arrow keys, Enter, Space)
- Focus management
- Screen reader support

## Design Patterns

### Data Structure Principle

Instead of managing active index with multiple if/else branches:

```tsx
// Bad: Index-based with conditionals
{activeTab === 0 && <div>Content 0</div>}
{activeTab === 1 && <div>Content 1</div>}
```

Use value-based declarative matching:

```tsx
// Good: Value-based declarative
<TabPanel value="overview">Content</TabPanel>
<TabPanel value="features">Content</TabPanel>
```

### State Ownership

- `Tabs` owns the active state
- Context distributes state to children
- No prop drilling
- Clean component boundaries

### Styling Strategy

Components provide minimal structural styles. All visual styling is controlled via `className`:

```tsx
// Component provides structure
<Tab className="custom-tab-style">...</Tab>

// You control appearance via Tailwind/CSS
.custom-tab-style {
  @apply px-4 py-2 rounded;
}
```

## Demo Files

The `*-001.tsx` files demonstrate different styling approaches:

- `minimalist-001.tsx` - Clean underline style
- `dark-001.tsx` - Dark mode with pills
- `glassmorphism-001.tsx` - Translucent backdrop
- `gradient-001.tsx` - Gradient backgrounds
- `neumorphism-001.tsx` - Soft shadows
- ... and 15 more themes

Each demo shows how to style the same component differently using only `className`.

## Notes

- No fallback logic - errors surface immediately
- String-based values (not numeric indices)
- Context-based state sharing (no prop drilling)
- Tailwind CSS for styling via `cn()` utility
- Full TypeScript support
