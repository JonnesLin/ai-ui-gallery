# Stats Component System

## Architecture

This directory contains a unified Stats component system that eliminates code duplication through theme-driven design.

### Core Components

- **`Stats.tsx`** - Container component that handles layout (grid, horizontal, vertical)
- **`StatItem.tsx`** - Individual stat item component, styled via theme configuration
- **`types.ts`** - TypeScript type definitions
- **`index.ts`** - Public exports

### Usage

```tsx
import { Stats } from './Stats';
import type { StatItemData } from './types';

const stats: StatItemData[] = [
  {
    value: '10K+',
    label: 'Active Users',
    description: 'Growing daily',
    icon: '👥',
    trend: 'up',
    trendValue: '+12%'
  },
];

<Stats
  theme="minimalist"
  layout="grid"
  columns={4}
  items={stats}
/>
```

## Migration Status

### Migrated (Using Theme System)

The following demo files have been refactored to use the new Stats component:

- ✅ `minimalist-001.tsx` - Uses minimalist theme
- ✅ `dark-001.tsx` - Uses dark theme
- ✅ `glassmorphism-001.tsx` - Uses glassmorphism theme
- ✅ `neumorphism-001.tsx` - Uses neumorphism theme
- ✅ `gradient-001.tsx` - Uses gradient theme
- ✅ `flat-001.tsx` - Uses flat theme
- ✅ `material-001.tsx` - Uses material theme

### Pending Migration (Missing Theme Configurations)

The following demo files retain their original implementation because their corresponding theme configurations do not exist in `src/components/ui/_themes/`:

- ⏳ `3d-001.tsx` - Requires 3d theme configuration
- ⏳ `brutalist-001.tsx` - Requires brutalist theme configuration
- ⏳ `corporate-001.tsx` - Requires corporate theme configuration
- ⏳ `cyberpunk-001.tsx` - Requires cyberpunk theme configuration
- ⏳ `futuristic-001.tsx` - Requires futuristic theme configuration
- ⏳ `luxury-001.tsx` - Requires luxury theme configuration
- ⏳ `monochrome-001.tsx` - Requires monochrome theme configuration
- ⏳ `nature-001.tsx` - Requires nature theme configuration
- ⏳ `neon-001.tsx` - Requires neon theme configuration
- ⏳ `pastel-001.tsx` - Requires pastel theme configuration
- ⏳ `playful-001.tsx` - Requires playful theme configuration
- ⏳ `retro-001.tsx` - Requires retro theme configuration
- ⏳ `sketch-001.tsx` - Requires sketch theme configuration

**Note:** These files will be migrated automatically once their theme configurations are created in the themes directory. No fallback behavior is provided - missing themes will throw errors as intended.

## Design Principles

### 1. Data Structure First
The core data structure is simple and clear:
```typescript
interface StatItemData {
  label: string;
  value: string | number;
  description?: string;
  icon?: ReactNode;
  trend?: 'up' | 'down';
  trendValue?: string;
}
```

### 2. No Special Cases
- All styling comes from theme configuration
- No hardcoded colors or styles in components
- Layout logic is unified through props

### 3. Zero Complexity
- Stats: Handles layout container only
- StatItem: Renders a single stat only
- Theme configuration drives all visual differences

### 4. No Breaking Changes
- Original demo files maintain their export interface
- Import paths remain unchanged
- Visual output is preserved

### 5. No Fallbacks
- Missing theme configuration throws an error
- Invalid layout options throw an error
- Type safety enforced at compile time

## API Reference

### Stats Props

```typescript
interface StatsProps {
  theme: ThemeName;
  layout: 'horizontal' | 'vertical' | 'grid';
  columns?: 2 | 3 | 4;
  items: StatItemData[];
  className?: string;
}
```

### StatItem Props

```typescript
interface StatItemProps extends StatItemData {
  theme: ThemeName;
}
```

## Next Steps

To complete the migration:

1. Create missing theme configuration files in `src/components/ui/_themes/`
2. Update the theme index to export new configurations
3. Migrate remaining demo files to use the Stats component
4. Remove duplicate code from migrated demo files
