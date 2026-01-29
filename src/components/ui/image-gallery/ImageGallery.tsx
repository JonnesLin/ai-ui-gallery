'use client';

import { useState } from 'react';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { ImageGalleryItem } from './ImageGalleryItem';
import { ImageGalleryLightbox } from './ImageGalleryLightbox';
import { getColumnsClass, getGapClass } from './utils';
import type { ImageGalleryProps } from './types';

export function ImageGallery({
  images,
  theme,
  columns = 3,
  gap = 'md',
  aspectRatio = 'square',
  lightbox = true,
  masonry = false,
  className,
}: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const themeConfig = getTheme(theme);

  function handleItemClick(index: number) {
    if (lightbox) {
      setSelectedIndex(index);
    }
  }

  function handleClose() {
    setSelectedIndex(null);
  }

  function handleNext() {
    if (selectedIndex === null) return;
    if (selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  }

  function handlePrev() {
    if (selectedIndex === null) return;
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  }

  return (
    <>
      <div
        className={cn(
          'grid',
          getColumnsClass(columns),
          getGapClass(gap),
          masonry && 'auto-rows-auto',
          className
        )}
      >
        {images.map((image, index) => (
          <ImageGalleryItem
            key={index}
            image={image}
            index={index}
            theme={theme}
            aspectRatio={aspectRatio}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>

      {lightbox && selectedIndex !== null && (
        <ImageGalleryLightbox
          image={images[selectedIndex]}
          currentIndex={selectedIndex}
          totalImages={images.length}
          theme={theme}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  );
}
