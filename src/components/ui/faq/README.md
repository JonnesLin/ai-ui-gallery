# FAQ Component

A reusable FAQ component system with theme support.

## Architecture

### Core Components

- **FAQ.tsx** - Main FAQ container component
- **FAQItem.tsx** - Individual FAQ item with theme-aware styling
- **types.ts** - TypeScript type definitions
- **index.ts** - Public exports

### Supported Themes

The FAQ component system supports these themes:

- `minimalist` - Clean, minimal design with simple borders
- `dark` - Dark theme with gray tones
- `glassmorphism` - Glass effect with backdrop blur
- `neumorphism` - Soft shadows and embossed style

### Usage

```tsx
import { FAQ } from './faq';

const items = [
  {
    question: 'What is your refund policy?',
    answer: 'We offer a 30-day money-back guarantee...',
  },
  // ... more items
];

<FAQ
  theme="minimalist"
  variant="accordion"
  items={items}
  allowMultiple={false}
  defaultOpenIndex={0}
/>
```

### Props

#### FAQ Component

- `theme?: ThemeName` - Theme name (minimalist | dark | glassmorphism | neumorphism)
- `variant?: FAQVariant` - Display variant (accordion | cards | simple)
- `items: FAQItem[]` - Array of FAQ items
- `allowMultiple?: boolean` - Allow multiple items open simultaneously
- `defaultOpenIndex?: number | number[]` - Initially open item index(es)
- `className?: string` - Additional CSS classes

#### FAQItem Type

```ts
interface FAQItem {
  question: string;
  answer: ReactNode;
}
```

## Standalone Theme Files

The following theme files are standalone implementations with unique designs:

- gradient-001.tsx
- brutalist-001.tsx
- retro-001.tsx
- cyberpunk-001.tsx
- pastel-001.tsx
- corporate-001.tsx
- playful-001.tsx
- luxury-001.tsx
- nature-001.tsx
- futuristic-001.tsx
- sketch-001.tsx
- monochrome-001.tsx
- neon-001.tsx
- 3d-001.tsx
- flat-001.tsx
- material-001.tsx

These files contain unique design implementations that cannot be easily abstracted into the unified component system.

## Design Philosophy

- **No fallbacks** - Unsupported themes throw errors immediately
- **Type safety** - Full TypeScript support
- **Theme consistency** - Uses existing theme system patterns
- **Zero duplication** - Reusable components for supported themes
