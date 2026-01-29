'use client';

import { useEffect } from 'react';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { ImageGalleryLightboxProps } from './types';

export function ImageGalleryLightbox({
  image,
  currentIndex,
  totalImages,
  theme,
  onClose,
  onNext,
  onPrev,
}: ImageGalleryLightboxProps) {
  const themeConfig = getTheme(theme);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      onClick={onClose}
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm',
        themeConfig.pageBackground,
        'bg-opacity-95'
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-7xl w-full"
      >
        <div className={cn('relative', themeConfig.base.radius, 'overflow-hidden')}>
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto max-h-[90vh] object-contain"
          />
        </div>

        <button
          onClick={onClose}
          className={cn(
            'absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center text-2xl font-bold',
            themeConfig.base.radius,
            themeConfig.variants.primary.background,
            themeConfig.variants.primary.text,
            themeConfig.variants.primary.border,
            themeConfig.variants.primary.hover,
            themeConfig.states.hover
          )}
          aria-label="Close lightbox"
        >
          ×
        </button>

        {totalImages > 1 && (
          <>
            <button
              onClick={onPrev}
              disabled={currentIndex === 0}
              className={cn(
                'absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center text-2xl font-bold',
                themeConfig.base.radius,
                themeConfig.variants.primary.background,
                themeConfig.variants.primary.text,
                themeConfig.variants.primary.border,
                themeConfig.variants.primary.hover,
                themeConfig.states.hover,
                currentIndex === 0 && themeConfig.states.disabled
              )}
              aria-label="Previous image"
            >
              ‹
            </button>

            <button
              onClick={onNext}
              disabled={currentIndex === totalImages - 1}
              className={cn(
                'absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center text-2xl font-bold',
                themeConfig.base.radius,
                themeConfig.variants.primary.background,
                themeConfig.variants.primary.text,
                themeConfig.variants.primary.border,
                themeConfig.variants.primary.hover,
                themeConfig.states.hover,
                currentIndex === totalImages - 1 && themeConfig.states.disabled
              )}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}

        <div
          className={cn(
            'absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2',
            themeConfig.base.radius,
            themeConfig.variants.primary.background,
            themeConfig.variants.primary.text,
            themeConfig.variants.primary.border
          )}
        >
          {currentIndex + 1} / {totalImages}
        </div>
      </div>
    </div>
  );
}
