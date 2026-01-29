# Footer Component System

Clean, composable footer components with theme support.

## Core Components

### Footer
Main footer component that handles layout and composition.

```tsx
import { Footer } from './Footer';

<Footer
  theme="minimalist"
  layout="columns"
  brand={{
    name: 'Brand',
    logo: <YourLogoComponent />,
    description: 'Your description',
  }}
  linkGroups={[
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Careers', href: '/careers' },
      ],
    },
  ]}
  socialLinks={[
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: <TwitterIcon />,
    },
  ]}
  copyright="© 2024 Brand. All rights reserved."
/>
```

### FooterLinks
Link group component.

```tsx
import { FooterLinks } from './FooterLinks';

<FooterLinks
  title="Company"
  links={[
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
  ]}
/>
```

### FooterSocial
Social links component.

```tsx
import { FooterSocial } from './FooterSocial';

<FooterSocial
  links={[
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: <TwitterIcon />,
    },
  ]}
/>
```

### FooterCopyright
Copyright text component.

```tsx
import { FooterCopyright } from './FooterCopyright';

<FooterCopyright text="© 2024 Brand. All rights reserved." />
```

## Props

### FooterProps
- `theme`: ThemeName - Theme to apply
- `layout`: 'simple' | 'columns' | 'centered' - Layout style
- `brand`: Brand information (optional)
- `linkGroups`: Array of link groups (optional)
- `socialLinks`: Array of social links (optional)
- `copyright`: Copyright text (optional)
- `className`: Additional CSS classes (optional)

## Layout Options

### columns
Grid layout with multiple columns (default).

### simple
Simple flex layout for minimal footers.

### centered
Centered layout with all content aligned center.

## Usage Pattern

The Footer component only handles content layout. Wrap it in a `<footer>` tag with theme styles:

```tsx
import { Footer } from './Footer';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';

const theme = getTheme('minimalist');

<footer className={cn(theme.base.background, theme.base.text)}>
  <Footer
    theme="minimalist"
    // ... other props
  />
</footer>
```

This separation allows custom footer wrappers for special effects like glassmorphism.

## Files

- `Footer.tsx` - Main component
- `FooterSection.tsx` - Generic section wrapper
- `FooterLinks.tsx` - Link group component
- `FooterSocial.tsx` - Social links component
- `FooterCopyright.tsx` - Copyright component
- `Footer.types.ts` - TypeScript types
- `_shared-icons.tsx` - Common social icons
- `index.ts` - Public exports

Showcase files (`minimalist-001.tsx`, etc.) demonstrate different theme implementations.
