# Table Component System

Composable table components with theme support and flexible configuration.

## Architecture

The table system consists of five core components that work together:

- `Table` - Container component that provides context
- `TableHeader` - Wraps header rows
- `TableBody` - Wraps body rows
- `TableRow` - Individual row
- `TableCell` - Individual cell (works for both header and body)

## Basic Usage

```tsx
import { Table, TableHeader, TableBody, TableRow, TableCell } from './table';

<Table theme="minimalist" variant="simple" size="md">
  <TableHeader>
    <TableRow>
      <TableCell header>Name</TableCell>
      <TableCell header>Email</TableCell>
      <TableCell header>Role</TableCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    {data.map((row) => (
      <TableRow key={row.id}>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.email}</TableCell>
        <TableCell>{row.role}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

## Table Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `ThemeName` | required | Theme configuration |
| `variant` | `'simple' \| 'striped' \| 'bordered'` | `'simple'` | Visual variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Cell padding size |
| `hoverable` | `boolean` | `true` | Enable row hover effect |
| `stickyHeader` | `boolean` | `false` | Stick header to top |
| `loading` | `boolean` | `false` | Show loading overlay |

## TableCell Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `header` | `boolean` | `false` | Render as `<th>` instead of `<td>` |
| `align` | `'left' \| 'center' \| 'right'` | `'left'` | Text alignment |

## TableRow Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `selected` | `boolean` | `false` | Apply selected styling |

## Variants

### Simple
Clean table with minimal styling, only header border.

```tsx
<Table theme="minimalist" variant="simple">
  {/* ... */}
</Table>
```

### Striped
Alternating row colors for better readability.

```tsx
<Table theme="minimalist" variant="striped">
  {/* ... */}
</Table>
```

### Bordered
Full table borders around all cells.

```tsx
<Table theme="minimalist" variant="bordered">
  {/* ... */}
</Table>
```

## Advanced Examples

### With Custom Cell Content

```tsx
<TableBody>
  {users.map((user) => (
    <TableRow key={user.id}>
      <TableCell>
        <div className="flex items-center gap-2">
          <img src={user.avatar} className="w-8 h-8 rounded-full" />
          <span>{user.name}</span>
        </div>
      </TableCell>
      <TableCell>
        <span className={`px-2 py-1 rounded ${
          user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100'
        }`}>
          {user.status}
        </span>
      </TableCell>
    </TableRow>
  ))}
</TableBody>
```

### With Sticky Header and Loading

```tsx
<Table
  theme="dark"
  variant="striped"
  stickyHeader
  loading={isLoading}
>
  {/* ... */}
</Table>
```

### With Row Selection

```tsx
<TableBody>
  {data.map((row) => (
    <TableRow key={row.id} selected={selectedIds.includes(row.id)}>
      <TableCell>
        <input
          type="checkbox"
          checked={selectedIds.includes(row.id)}
          onChange={() => toggleSelection(row.id)}
        />
      </TableCell>
      <TableCell>{row.name}</TableCell>
    </TableRow>
  ))}
</TableBody>
```

## Theme Support

Themes are defined in `theme-config.ts`. Currently supported themes:

- `minimalist` - Clean, typography-focused design
- `dark` - Dark mode variant
- `glassmorphism` - Frosted glass effect
- `neumorphism` - Soft 3D shadows
- `flat` - Bold colors, no shadows

To add a new theme, extend the `tableThemes` object in `theme-config.ts`.

## Design Principles

1. **No Fallbacks** - All required props must be provided, errors are thrown on missing configuration
2. **Composition** - Build complex tables by composing simple components
3. **Type Safety** - Full TypeScript support with strict typing
4. **Theme Consistency** - All styling comes from theme configuration
5. **Minimal API** - Only essential props, extend with className for custom styling

## File Structure

```
table/
├── Table.tsx              # Main container component
├── TableHeader.tsx        # Header section
├── TableBody.tsx          # Body section
├── TableRow.tsx           # Row component
├── TableCell.tsx          # Cell component
├── TableContext.tsx       # Context provider
├── types.ts               # TypeScript types
├── theme-config.ts        # Theme configurations
├── index.ts               # Public exports
├── demo.tsx               # Interactive demo
└── README.md              # This file
```
