# Avatar Component System

A reusable, composable avatar component system with support for images, initials, icons, status badges, and avatar groups.

## Components

### Avatar

The main avatar component that displays user profile images, initials, or placeholder icons.

**Props:**
- `src?: string` - Image URL
- `alt: string` - Alt text (required)
- `name?: string` - User name for generating initials
- `size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'` - Avatar size (default: 'md')
- `variant?: 'circle' | 'square' | 'rounded'` - Shape variant (default: 'circle')
- `theme?: ThemeName` - Theme name for status badge styling
- `status?: 'online' | 'offline' | 'away' | 'busy'` - Status indicator
- `showBorder?: boolean` - Show border ring (default: false)
- `color?: string` - Custom background color (overrides auto-generated color)
- `className?: string` - Additional CSS classes

**Features:**
- Automatic fallback: image → initials → icon
- Auto-generates background color from name using hash function
- Handles image loading errors gracefully
- No fallback logic - if name is invalid, throws error immediately

**Usage:**

```tsx
import { Avatar } from './avatar';

// With image
<Avatar src="https://example.com/user.jpg" alt="John Doe" />

// With initials (auto-generated from name)
<Avatar name="John Doe" alt="John Doe" />

// With status indicator
<Avatar
  src="https://example.com/user.jpg"
  alt="John Doe"
  status="online"
/>

// With custom size
<Avatar
  name="Sarah Connor"
  alt="Sarah Connor"
  size="lg"
/>

// With custom color
<Avatar
  name="Michael Knight"
  alt="Michael Knight"
  color="#6366f1"
/>

// Square variant
<Avatar
  src="https://example.com/user.jpg"
  alt="John Doe"
  variant="rounded"
/>
```

### AvatarBadge

Status indicator badge for avatars. Automatically positioned at bottom-right.

**Props:**
- `status: 'online' | 'offline' | 'away' | 'busy'` - Status type (required)
- `size?: AvatarSize` - Size to match parent avatar (default: 'md')
- `theme?: ThemeName` - Theme for border color
- `className?: string` - Additional CSS classes

**Usage:**

```tsx
import { AvatarBadge } from './avatar';

// Usually used internally by Avatar component
<AvatarBadge status="online" size="md" />
```

### AvatarGroup

Groups multiple avatars with overlap and optional overflow count.

**Props:**
- `children: React.ReactNode` - Avatar components to group
- `max?: number` - Maximum avatars to show before overflow
- `spacing?: 'tight' | 'normal' | 'loose'` - Overlap spacing (default: 'normal')
- `theme?: ThemeName` - Theme for ring color
- `className?: string` - Additional CSS classes

**Usage:**

```tsx
import { Avatar, AvatarGroup } from './avatar';

<AvatarGroup max={4} spacing="tight">
  <Avatar src="https://example.com/user1.jpg" alt="User 1" />
  <Avatar src="https://example.com/user2.jpg" alt="User 2" />
  <Avatar src="https://example.com/user3.jpg" alt="User 3" />
  <Avatar src="https://example.com/user4.jpg" alt="User 4" />
  <Avatar src="https://example.com/user5.jpg" alt="User 5" />
  <Avatar src="https://example.com/user6.jpg" alt="User 6" />
</AvatarGroup>
// Shows 4 avatars + "+2" overflow indicator
```

## Size Chart

| Size  | Dimensions | Text Size | Badge Size |
|-------|------------|-----------|------------|
| `xs`  | 24x24px    | 12px      | 8px        |
| `sm`  | 32x32px    | 14px      | 10px       |
| `md`  | 40x40px    | 14px      | 10px       |
| `lg`  | 56x56px    | 16px      | 14px       |
| `xl`  | 80x80px    | 18px      | 16px       |
| `2xl` | 112x112px  | 24px      | 20px       |

## Status Colors

| Status    | Color        |
|-----------|--------------|
| `online`  | Green-500    |
| `offline` | Gray-400     |
| `away`    | Yellow-400   |
| `busy`    | Red-500      |

## Theme Integration

The component system respects theme settings for:
- Status badge border colors (light vs dark themes)
- Avatar group ring colors

Currently supported themes: `dark`, `cyberpunk` (dark mode), all others use light mode styling.

## Implementation Details

### Initials Generation
- Single word: first 2 characters (e.g., "John" → "JO")
- Multiple words: first char of first + last word (e.g., "John Doe" → "JD")
- Throws error if name is empty

### Color Generation
- Uses hash function on name string to generate consistent HSL color
- Hue: 0-360° based on string hash
- Saturation: fixed at 65%
- Lightness: fixed at 50%

### Image Error Handling
- Uses `onError` event to detect load failures
- Automatically switches to initials if image fails
- Falls back to icon if no name provided

### No Fallback Philosophy
- Invalid inputs throw errors immediately
- No silent failures or default values for critical props
- Clear, predictable behavior

## File Structure

```
avatar/
├── Avatar.tsx              # Main avatar component
├── AvatarBadge.tsx        # Status badge component
├── AvatarGroup.tsx        # Avatar group component
├── Avatar.types.ts        # TypeScript definitions
├── index.ts               # Public exports
├── README.md              # This file
├── minimalist-001.tsx     # Theme demo (re-exports from .demo.tsx)
├── minimalist-001.demo.tsx # Demo implementation
├── dark-001.tsx           # Theme demo
├── dark-001.demo.tsx      # Demo implementation
└── ... (other theme demos)
```

## Migration Notes

Original theme demo files (`*-001.tsx`) now re-export from `*-001.demo.tsx` files which use the new component system. This maintains backward compatibility while demonstrating component usage patterns.
