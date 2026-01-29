# Profile Page Components

A flexible and themeable profile page component system.

## Components

### ProfilePage

Main container component that orchestrates all sub-components and applies theming.

```tsx
import { ProfilePage } from './ProfilePage';

<ProfilePage
  theme="minimalist"
  layout="full"
  header={{ ... }}
  info={{ ... }}
  tabs={{ ... }}
>
  {/* Content goes here */}
</ProfilePage>
```

**Props:**
- `theme`: ThemeName - Required. The theme to apply.
- `layout`: 'sidebar' | 'full' - Optional. Layout mode. Default: 'full'.
- `header`: ProfileHeaderProps - Required. Header configuration.
- `info`: ProfileInfoProps - Optional. Info section configuration.
- `tabs`: ProfileTabsProps - Optional. Tabs configuration.
- `children`: ReactNode - Optional. Main content area.

### ProfileHeader

Displays user profile header with avatar, name, bio, stats, and actions.

```tsx
import { ProfileHeader } from './ProfileHeader';

<ProfileHeader
  theme="minimalist"
  avatar="bg-gray-200"
  name="John Doe"
  title="Software Engineer"
  bio="Passionate about clean code"
  stats={[
    { label: 'Posts', value: 234 },
    { label: 'Followers', value: '12.4k' }
  ]}
  actions={<button>Edit Profile</button>}
/>
```

**Props:**
- `theme`: ThemeName - Required.
- `avatar`: string - Optional. Avatar image URL or Tailwind classes (e.g., 'bg-gray-200').
- `name`: string - Required. User's display name.
- `title`: string - Optional. User's title or role.
- `username`: string - Optional. Username (shown with @ prefix).
- `bio`: string - Optional. User bio text.
- `coverImage`: string - Optional. Cover image URL or Tailwind classes.
- `stats`: ProfileStat[] - Optional. Array of stats to display.
- `actions`: ReactNode - Optional. Action buttons.
- `tags`: string[] - Optional. Array of tags to display.

### ProfileInfo

Displays a list of information items with icons.

```tsx
import { ProfileInfo } from './ProfileInfo';

<ProfileInfo
  theme="minimalist"
  title="About"
  items={[
    {
      icon: <svg>...</svg>,
      text: 'San Francisco, CA'
    },
    {
      icon: <svg>...</svg>,
      text: 'example.com',
      link: 'https://example.com'
    }
  ]}
/>
```

**Props:**
- `theme`: ThemeName - Required.
- `items`: ProfileInfoItem[] - Required. Array of info items.
- `title`: string - Optional. Section title.

### ProfileTabs

Tab navigation component.

```tsx
import { ProfileTabs } from './ProfileTabs';

<ProfileTabs
  theme="minimalist"
  tabs={[
    { id: 'posts', label: 'Posts', active: true },
    { id: 'about', label: 'About' }
  ]}
  onTabChange={(tabId) => console.log(tabId)}
/>
```

**Props:**
- `theme`: ThemeName - Required.
- `tabs`: ProfileTab[] - Required. Array of tabs.
- `activeTab`: string - Optional. Active tab ID.
- `onTabChange`: (tabId: string) => void - Optional. Tab change callback.

## Types

```tsx
interface ProfileStat {
  label: string;
  value: string | number;
}

interface ProfileInfoItem {
  icon: React.ReactNode;
  text: string;
  link?: string;
}

interface ProfileTab {
  id: string;
  label: string;
  active?: boolean;
}
```

## Examples

See the `-new.tsx` files for complete examples:
- `minimalist-001-new.tsx`
- `dark-001-new.tsx`
- `glassmorphism-001-new.tsx`

## Design Principles

1. **No Fallbacks**: Components throw errors for missing required props instead of using defaults.
2. **Theme Integration**: All components use the centralized theme system via `getTheme()`.
3. **Flexible Rendering**: Support both URL strings and Tailwind classes for images/backgrounds.
4. **Composable**: Each component can be used independently or together.
5. **Type Safe**: Full TypeScript support with strict types.
