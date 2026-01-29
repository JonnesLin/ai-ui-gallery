# Landing Page Components

Theme-aware, reusable landing page components built on the unified theme system.

## Architecture

### Core Components

- **LandingPage** - Root container that provides theme context
- **LandingSection** - Flexible section wrapper with background and padding variants
- **LandingHero** - Hero section with title, subtitle, and CTAs
- **LandingFeatures** - Feature grid with configurable columns
- **LandingCTA** - Call-to-action section

### Design Principles

1. **No Fallbacks** - Components throw errors for missing required props
2. **Theme-First** - All styling derives from theme configuration
3. **Composition** - Build complex pages by composing simple components
4. **Type Safety** - Full TypeScript support with strict types

## Usage

### Basic Example

```tsx
import {
  LandingPage,
  LandingSection,
  LandingHero,
  LandingFeatures,
  LandingCTA
} from './landing-page';

export default function MyLandingPage() {
  return (
    <LandingPage theme="minimalist">
      <LandingSection background="light" padding="xl">
        <LandingHero
          title="Your Amazing Product"
          subtitle="Build something incredible"
          primaryCTA={{
            text: 'Get Started',
            onClick: () => console.log('Start'),
          }}
        />
      </LandingSection>

      <LandingSection id="features" background="light" padding="lg">
        <LandingFeatures
          title="Features"
          subtitle="Everything you need"
          columns={3}
          features={[
            { title: 'Fast', description: 'Lightning fast performance' },
            { title: 'Secure', description: 'Bank-level security' },
            { title: 'Scalable', description: 'Grows with your business' },
          ]}
        />
      </LandingSection>

      <LandingSection background="dark" padding="lg">
        <LandingCTA
          title="Ready to start?"
          description="Join thousands of happy customers"
          primaryCTA={{
            text: 'Sign Up Free',
            onClick: () => console.log('Sign up'),
          }}
        />
      </LandingSection>
    </LandingPage>
  );
}
```

## Component API

### LandingPage

Root container that provides theme context to all child components.

```tsx
<LandingPage theme={ThemeName}>
  {children}
</LandingPage>
```

**Props:**
- `theme: ThemeName` - Theme name (required, no fallback)
- `children: React.ReactNode` - Page content

**Throws:** Error if theme is invalid

### LandingSection

Flexible section wrapper with configurable background and padding.

```tsx
<LandingSection
  id="features"
  background="light"
  padding="lg"
  className="additional-classes"
>
  {children}
</LandingSection>
```

**Props:**
- `id?: string` - HTML id for anchor links
- `background: 'light' | 'dark' | 'gradient' | 'image'` - Background style (required)
- `padding: 'sm' | 'md' | 'lg' | 'xl'` - Vertical padding (required)
- `children: React.ReactNode` - Section content
- `className?: string` - Additional classes

**Padding Scale:**
- `sm`: py-12 (3rem)
- `md`: py-24 (6rem)
- `lg`: py-32 (8rem)
- `xl`: py-40 (10rem)

### LandingHero

Hero section with title, subtitle, badge, and action buttons.

```tsx
<LandingHero
  title="Your Title"
  subtitle="Your subtitle"
  badge="New Feature"
  primaryCTA={{
    text: 'Get Started',
    onClick: () => {},
  }}
  secondaryCTA={{
    text: 'Learn More',
    onClick: () => {},
  }}
/>
```

**Props:**
- `title: React.ReactNode` - Main heading (can be JSX for gradients)
- `subtitle: string` - Subtitle text
- `badge?: string` - Optional badge above title
- `primaryCTA?: { text: string; onClick: () => void }` - Primary action button
- `secondaryCTA?: { text: string; onClick: () => void }` - Secondary action button
- `className?: string` - Additional classes

### LandingFeatures

Feature grid with configurable columns.

```tsx
<LandingFeatures
  title="Features"
  subtitle="Amazing capabilities"
  columns={3}
  features={[
    {
      title: 'Feature Name',
      description: 'Feature description',
      icon: <CustomIcon />,
    },
  ]}
/>
```

**Props:**
- `title: string` - Section title
- `subtitle?: string` - Optional subtitle
- `features: FeatureItem[]` - Array of features
- `columns?: 2 | 3 | 4` - Grid columns (default: 3)
- `className?: string` - Additional classes

**FeatureItem:**
```tsx
interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}
```

### LandingCTA

Call-to-action section with title, description, and buttons.

```tsx
<LandingCTA
  title="Ready to start?"
  description="Join thousands of users"
  primaryCTA={{
    text: 'Get Started',
    onClick: () => {},
  }}
  secondaryCTA={{
    text: 'Contact Sales',
    onClick: () => {},
  }}
/>
```

**Props:**
- `title: string` - CTA heading
- `description: string` - CTA description
- `primaryCTA?: { text: string; onClick: () => void }` - Primary button
- `secondaryCTA?: { text: string; onClick: () => void }` - Secondary button
- `className?: string` - Additional classes

## Theme Integration

Components automatically adapt to the selected theme. Theme configuration is accessed via context:

```tsx
import { useLandingPageTheme } from './landing-page';

function CustomSection() {
  const theme = useLandingPageTheme();
  return (
    <div className={theme.base.background}>
      Custom content
    </div>
  );
}
```

**Throws:** Error if used outside `LandingPage` context

## Examples

See implementation examples:
- `minimalist-001-new.tsx` - Clean, minimalist design
- `dark-001-new.tsx` - Dark theme with code preview
- `gradient-001-new.tsx` - Vibrant gradient theme

## Error Handling

All components follow strict error handling:

```tsx
// Invalid theme - throws error
<LandingPage theme="invalid-theme">

// Missing required prop - TypeScript error
<LandingSection padding="lg">

// Context used incorrectly - throws error
useLandingPageTheme() // outside LandingPage
```

No fallbacks. If something is wrong, it fails immediately.
