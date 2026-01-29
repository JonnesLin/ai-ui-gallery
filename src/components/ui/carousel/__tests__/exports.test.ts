/**
 * Export validation test
 * Ensures all public APIs are properly exported
 */

// Test: Main component exports
import { Carousel } from '../index';
import { CarouselSlide } from '../index';
import { CarouselControls } from '../index';
import { CarouselIndicators } from '../index';

// Test: Hook exports
import { useCarousel } from '../index';

// Test: Type exports
import type {
  CarouselProps,
  CarouselSlideType,
  CarouselControlsProps,
  CarouselIndicatorsProps,
  CarouselSlideProps,
  UseCarouselOptions,
  UseCarouselReturn,
} from '../index';

// Verify components are defined
if (!Carousel) throw new Error('Carousel not exported');
if (!CarouselSlide) throw new Error('CarouselSlide not exported');
if (!CarouselControls) throw new Error('CarouselControls not exported');
if (!CarouselIndicators) throw new Error('CarouselIndicators not exported');
if (!useCarousel) throw new Error('useCarousel not exported');

console.log('All exports validated successfully');

export {};
