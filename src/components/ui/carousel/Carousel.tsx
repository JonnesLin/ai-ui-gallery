'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import type { CarouselProps } from './types';
import { CarouselSlide } from './CarouselSlide';
import { CarouselControls } from './CarouselControls';
import { CarouselIndicators } from './CarouselIndicators';
import { useCarousel } from './useCarousel';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';

export function Carousel({
  slides,
  theme,
  autoPlay = false,
  interval = 4000,
  loop = true,
  showIndicators = true,
  showControls = true,
  slidesPerView = 1,
  gap = 0,
  className,
}: CarouselProps) {
  if (slides.length === 0) {
    throw new Error('Carousel requires at least one slide');
  }

  if (slidesPerView < 1) {
    throw new Error('slidesPerView must be at least 1');
  }

  const themeConfig = getTheme(theme);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const { currentIndex, goToNext, goToPrevious, goToSlide, canGoNext, canGoPrevious } = useCarousel({
    totalSlides: slides.length,
    autoPlay: autoPlay && !isPaused,
    interval,
    loop,
  });

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && canGoNext) {
      goToNext();
    }
    if (isRightSwipe && canGoPrevious) {
      goToPrevious();
    }

    setTimeout(() => setIsPaused(false), 3000);
  };

  const handleMouseEnter = useCallback(() => {
    if (autoPlay) setIsPaused(true);
  }, [autoPlay]);

  const handleMouseLeave = useCallback(() => {
    if (autoPlay) setIsPaused(false);
  }, [autoPlay]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current?.contains(document.activeElement)) return;

      if (e.key === 'ArrowLeft' && canGoPrevious) {
        e.preventDefault();
        goToPrevious();
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 3000);
      } else if (e.key === 'ArrowRight' && canGoNext) {
        e.preventDefault();
        goToNext();
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 3000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [canGoPrevious, canGoNext, goToPrevious, goToNext]);

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full', themeConfig.base.background, className)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      role="region"
      aria-label="Carousel"
      aria-roledescription="carousel"
      tabIndex={0}
    >
      {/* Slides Container */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: slidesPerView === 1 ? '16/9' : undefined,
          height: slidesPerView > 1 ? 'auto' : undefined,
        }}
      >
        {slides.map((slide, index) => (
          <CarouselSlide key={slide.id} theme={theme} isActive={index === currentIndex}>
            {slide.content}
          </CarouselSlide>
        ))}
      </div>

      {/* Controls */}
      {showControls && (
        <CarouselControls
          theme={theme}
          onPrevious={goToPrevious}
          onNext={goToNext}
          canGoPrevious={canGoPrevious}
          canGoNext={canGoNext}
        />
      )}

      {/* Indicators */}
      {showIndicators && (
        <CarouselIndicators theme={theme} total={slides.length} current={currentIndex} onChange={goToSlide} />
      )}

      {/* Screen reader announcements */}
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        Slide {currentIndex + 1} of {slides.length}
      </div>
    </div>
  );
}
