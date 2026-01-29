/**
 * Type tests for Carousel component
 * These tests ensure type safety at compile time
 */

import type { CarouselProps, CarouselSlide } from '../types';
import type { UseCarouselOptions } from '../useCarousel';

// Test: CarouselSlide type
const validSlide: CarouselSlide = {
  id: 1,
  content: 'test',
};

const validSlideWithString: CarouselSlide = {
  id: 'slide-1',
  content: 'test',
};

// Test: CarouselProps type
const validCarouselProps: CarouselProps = {
  slides: [validSlide],
  theme: 'minimalist',
};

const fullCarouselProps: CarouselProps = {
  slides: [validSlide, validSlideWithString],
  theme: 'glassmorphism',
  autoPlay: true,
  interval: 3000,
  loop: false,
  showIndicators: false,
  showControls: true,
  slidesPerView: 2,
  gap: 16,
  className: 'custom-class',
};

// Test: UseCarouselOptions type
const validUseCarouselOptions: UseCarouselOptions = {
  totalSlides: 5,
};

const fullUseCarouselOptions: UseCarouselOptions = {
  totalSlides: 10,
  autoPlay: true,
  interval: 5000,
  loop: true,
};

// Type errors (commented out - these would fail if uncommented)
// const missingSlides: CarouselProps = { theme: 'minimalist' };
// const missingTheme: CarouselProps = { slides: [] };
// const invalidTheme: CarouselProps = { slides: [], theme: 'invalid' };
// const missingTotalSlides: UseCarouselOptions = {};
// const invalidTotalSlides: UseCarouselOptions = { totalSlides: '5' };

export {};
