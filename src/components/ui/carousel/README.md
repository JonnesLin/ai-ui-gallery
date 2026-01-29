# Carousel Component

A flexible, themeable carousel component with support for autoplay, touch gestures, and keyboard navigation.

## Features

- Theme-based styling using the centralized theme system
- Auto-play with configurable interval
- Touch/swipe gestures for mobile
- Keyboard navigation (arrow keys)
- Customizable controls and indicators
- Loop or non-loop mode
- Accessibility support (ARIA labels, keyboard navigation)
- TypeScript support

## Basic Usage

```tsx
import { Carousel } from '@/components/ui/carousel';

const slides = [
  {
    id: 1,
    content: (
      <div className="flex items-center justify-center h-full bg-blue-500 text-white">
        <h2 className="text-4xl">Slide 1</h2>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="flex items-center justify-center h-full bg-green-500 text-white">
        <h2 className="text-4xl">Slide 2</h2>
      </div>
    ),
  },
];

export default function MyCarousel() {
  return <Carousel slides={slides} theme="minimalist" />;
}
```

## Props

### CarouselProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `slides` | `CarouselSlide[]` | required | Array of slide objects |
| `theme` | `ThemeName` | required | Theme name from theme system |
| `autoPlay` | `boolean` | `false` | Enable auto-play |
| `interval` | `number` | `4000` | Auto-play interval in ms |
| `loop` | `boolean` | `true` | Enable looping |
| `showIndicators` | `boolean` | `true` | Show slide indicators |
| `showControls` | `boolean` | `true` | Show navigation controls |
| `slidesPerView` | `number` | `1` | Number of slides per view |
| `gap` | `number` | `0` | Gap between slides (px) |
| `className` | `string` | - | Additional CSS classes |

### CarouselSlide Type

```ts
interface CarouselSlide {
  id: string | number;
  content: ReactNode;
}
```

## Examples

### Auto-play Carousel

```tsx
<Carousel
  slides={slides}
  theme="glassmorphism"
  autoPlay
  interval={3000}
/>
```

### Non-looping Carousel

```tsx
<Carousel
  slides={slides}
  theme="flat"
  loop={false}
/>
```

### Minimal Carousel (no controls/indicators)

```tsx
<Carousel
  slides={slides}
  theme="dark"
  showControls={false}
  showIndicators={false}
/>
```

## Advanced Usage

### Custom Hook

Use the `useCarousel` hook for custom implementations:

```tsx
import { useCarousel } from '@/components/ui/carousel';

function CustomCarousel() {
  const { currentIndex, goToNext, goToPrevious, goToSlide } = useCarousel({
    totalSlides: 5,
    autoPlay: true,
    interval: 5000,
    loop: true,
  });

  return (
    <div>
      <div>Current slide: {currentIndex}</div>
      <button onClick={goToPrevious}>Previous</button>
      <button onClick={goToNext}>Next</button>
    </div>
  );
}
```

## Accessibility

The carousel includes:
- ARIA labels for controls and indicators
- Keyboard navigation (left/right arrow keys)
- Screen reader announcements for slide changes
- Focus management

## Theming

The carousel uses the centralized theme system. Available themes:
- minimalist
- dark
- glassmorphism
- neumorphism
- flat
- material

Controls and indicators automatically adapt to the selected theme.
