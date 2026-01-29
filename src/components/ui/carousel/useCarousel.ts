import { useState, useEffect, useCallback } from 'react';

export interface UseCarouselOptions {
  totalSlides: number;
  autoPlay?: boolean;
  interval?: number;
  loop?: boolean;
}

export interface UseCarouselReturn {
  currentIndex: number;
  goToNext: () => void;
  goToPrevious: () => void;
  goToSlide: (index: number) => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

export function useCarousel(options: UseCarouselOptions): UseCarouselReturn {
  const { totalSlides, autoPlay = false, interval = 4000, loop = true } = options;

  if (totalSlides <= 0) {
    throw new Error('totalSlides must be greater than 0');
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const canGoNext = loop || currentIndex < totalSlides - 1;
  const canGoPrevious = loop || currentIndex > 0;

  const goToNext = useCallback(() => {
    if (!canGoNext) return;
    setCurrentIndex((prev) => (loop ? (prev + 1) % totalSlides : Math.min(prev + 1, totalSlides - 1)));
  }, [canGoNext, loop, totalSlides]);

  const goToPrevious = useCallback(() => {
    if (!canGoPrevious) return;
    setCurrentIndex((prev) => (loop ? (prev - 1 + totalSlides) % totalSlides : Math.max(prev - 1, 0)));
  }, [canGoPrevious, loop, totalSlides]);

  const goToSlide = useCallback(
    (index: number) => {
      if (index < 0 || index >= totalSlides) {
        throw new Error(`Slide index ${index} is out of bounds (0-${totalSlides - 1})`);
      }
      setCurrentIndex(index);
    },
    [totalSlides]
  );

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, goToNext]);

  return {
    currentIndex,
    goToNext,
    goToPrevious,
    goToSlide,
    canGoNext,
    canGoPrevious,
  };
}
