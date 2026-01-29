import { useState, useEffect } from 'react';
import { cn } from '../_shared/utils';
import { Testimonial } from './Testimonial';
import type { TestimonialCarouselProps } from './types';

export function TestimonialCarousel({
  theme,
  variant = 'card',
  testimonials,
  showRating = true,
  autoPlay = true,
  interval = 5000,
  className,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className={cn('relative', className)}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full">
              <Testimonial
                theme={theme}
                variant={variant}
                quote={testimonial.quote}
                author={testimonial.author}
                rating={testimonial.rating}
                showRating={showRating}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={goToPrevious}
          className="px-4 py-2 rounded hover:opacity-70 transition-opacity"
          aria-label="Previous testimonial"
        >
          ←
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                'w-2 h-2 rounded-full transition-all',
                currentIndex === index ? 'w-8 opacity-100' : 'opacity-50'
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="px-4 py-2 rounded hover:opacity-70 transition-opacity"
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>
    </div>
  );
}
