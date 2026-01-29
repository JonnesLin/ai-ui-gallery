# Testimonial Component System

A clean, theme-aware testimonial component system built on modern React patterns.

## Core Components

### `Testimonial`
Main component that renders a complete testimonial card.

```tsx
import { Testimonial } from './Testimonial';

<Testimonial
  theme="minimalist"
  variant="card"
  quote="This product transformed how we work."
  author={{
    name: "Sarah Chen",
    title: "CTO",
    company: "TechCorp",
    avatar: "https://example.com/avatar.jpg"
  }}
  rating={5}
  showRating={true}
  accentColor="bg-blue-500"
/>
```

**Props:**
- `theme`: ThemeName (required) - One of the available theme names
- `variant`: 'card' | 'minimal' | 'bubble' (default: 'card')
- `quote`: string (required)
- `author`: Author object (required)
- `rating`: number (default: 5)
- `showRating`: boolean (default: true)
- `accentColor`: string - Tailwind color class for top accent bar
- `className`: string - Additional classes

### `TestimonialQuote`
Simple wrapper for quote content.

```tsx
import { TestimonialQuote } from './TestimonialQuote';

<TestimonialQuote className="italic">
  {quote}
</TestimonialQuote>
```

### `TestimonialAuthor`
Displays author information with avatar.

```tsx
import { TestimonialAuthor } from './TestimonialAuthor';

<TestimonialAuthor
  name="Sarah Chen"
  title="CTO"
  company="TechCorp"
  avatar="https://example.com/avatar.jpg"
  avatarClassName="rounded-full"
  avatarWrapperClassName="p-1"
/>
```

### `TestimonialCarousel`
Carousel component for multiple testimonials.

```tsx
import { TestimonialCarousel } from './TestimonialCarousel';

<TestimonialCarousel
  theme="glassmorphism"
  variant="bubble"
  testimonials={testimonials}
  autoPlay={true}
  interval={5000}
/>
```

**Props:**
- `theme`: ThemeName (required)
- `variant`: 'card' | 'minimal' | 'bubble' (default: 'card')
- `testimonials`: TestimonialData[] (required)
- `showRating`: boolean (default: true)
- `autoPlay`: boolean (default: true)
- `interval`: number (default: 5000) - Auto-play interval in ms

## Architecture

### Data Structure
```tsx
interface TestimonialData {
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar: string;
  };
  rating: number;
}
```

### Variants

**card**: Full card with background, border, and shadow
**minimal**: Centered layout with minimal styling
**bubble**: Rounded card with speech bubble appearance

### Theme Integration

The component system uses the centralized theme configuration from `src/components/ui/_themes/`.

Each theme provides:
- Base colors and typography
- Border and shadow styles
- Variant-specific colors
- State styles (hover, active, focus)

Theme-specific avatar styles:
- `minimalist`: Grayscale with hover effect
- `glassmorphism`: Border with transparency
- `flat`: No border radius
- `neumorphism`: Inset shadow wrapper
- `dark`: Ring with hover transition

## Design Philosophy

**No Special Cases**: Every theme uses the same component structure. Theme-specific styling is handled through configuration, not conditional logic.

**Clear Data Flow**: Props flow down from Testimonial → child components. No hidden state or magic.

**Composition Over Configuration**: Build complex layouts by composing simple components, not by adding flags and options.

**Explicit Over Implicit**: No fallbacks or defaults that hide errors. If theme not found, throw an error immediately.

## Example Usage

### Basic Grid
```tsx
const testimonials = [
  {
    quote: "Excellent product!",
    author: {
      name: "John Doe",
      title: "CEO",
      company: "StartupXYZ",
      avatar: "https://example.com/avatar.jpg"
    },
    rating: 5
  }
];

<div className="grid md:grid-cols-3 gap-6">
  {testimonials.map((t, i) => (
    <Testimonial
      key={i}
      theme="minimalist"
      variant="card"
      quote={t.quote}
      author={t.author}
      rating={t.rating}
    />
  ))}
</div>
```

### With Accent Colors (Flat Theme)
```tsx
const testimonialsWithAccents = testimonials.map((t, i) => ({
  ...t,
  accentColor: ['bg-red-500', 'bg-blue-500', 'bg-emerald-500'][i]
}));

<div className="grid md:grid-cols-3 gap-6">
  {testimonialsWithAccents.map((t, i) => (
    <Testimonial
      key={i}
      theme="flat"
      variant="card"
      quote={t.quote}
      author={t.author}
      rating={t.rating}
      accentColor={t.accentColor}
    />
  ))}
</div>
```

### Carousel
```tsx
<TestimonialCarousel
  theme="glassmorphism"
  variant="bubble"
  testimonials={testimonials}
  autoPlay={true}
  interval={5000}
/>
```

## Files

- `types.ts` - TypeScript definitions
- `Testimonial.tsx` - Main component
- `TestimonialQuote.tsx` - Quote display
- `TestimonialAuthor.tsx` - Author information
- `TestimonialCarousel.tsx` - Carousel wrapper
- `index.ts` - Public exports
- `{theme}-001.tsx` - Theme-specific demo pages
