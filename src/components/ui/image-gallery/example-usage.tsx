'use client';

import { ImageGallery } from './ImageGallery';
import type { ImageData } from './types';

/**
 * Example usage of ImageGallery component with different configurations
 */

export function BasicGalleryExample() {
  const images: ImageData[] = [
    { src: 'https://picsum.photos/800/800?random=1', alt: 'Photo 1' },
    { src: 'https://picsum.photos/800/800?random=2', alt: 'Photo 2' },
    { src: 'https://picsum.photos/800/800?random=3', alt: 'Photo 3' },
    { src: 'https://picsum.photos/800/800?random=4', alt: 'Photo 4' },
    { src: 'https://picsum.photos/800/800?random=5', alt: 'Photo 5' },
    { src: 'https://picsum.photos/800/800?random=6', alt: 'Photo 6' },
  ];

  return (
    <div className="p-8">
      <h2 className="mb-6 text-2xl font-bold">Basic Gallery</h2>
      <ImageGallery
        images={images}
        theme="minimalist"
        columns={3}
        gap="md"
        aspectRatio="square"
        lightbox
      />
    </div>
  );
}

export function WideLayoutExample() {
  const images: ImageData[] = [
    { src: 'https://picsum.photos/1600/900?random=10', alt: 'Wide photo 1' },
    { src: 'https://picsum.photos/1600/900?random=11', alt: 'Wide photo 2' },
    { src: 'https://picsum.photos/1600/900?random=12', alt: 'Wide photo 3' },
    { src: 'https://picsum.photos/1600/900?random=13', alt: 'Wide photo 4' },
  ];

  return (
    <div className="p-8">
      <h2 className="mb-6 text-2xl font-bold">Wide Format Gallery</h2>
      <ImageGallery
        images={images}
        theme="dark"
        columns={2}
        gap="lg"
        aspectRatio="16/9"
        lightbox
      />
    </div>
  );
}

export function CompactGridExample() {
  const images: ImageData[] = Array.from({ length: 20 }, (_, i) => ({
    src: `https://picsum.photos/800/800?random=${100 + i}`,
    alt: `Photo ${i + 1}`,
  }));

  return (
    <div className="p-8">
      <h2 className="mb-6 text-2xl font-bold">Compact Grid (5 columns)</h2>
      <ImageGallery
        images={images}
        theme="glassmorphism"
        columns={5}
        gap="sm"
        aspectRatio="square"
        lightbox
      />
    </div>
  );
}

export function WithThumbnailsExample() {
  const images: ImageData[] = [
    {
      src: 'https://picsum.photos/1600/1600?random=200',
      thumbnail: 'https://picsum.photos/400/400?random=200',
      alt: 'High-res photo 1',
    },
    {
      src: 'https://picsum.photos/1600/1600?random=201',
      thumbnail: 'https://picsum.photos/400/400?random=201',
      alt: 'High-res photo 2',
    },
    {
      src: 'https://picsum.photos/1600/1600?random=202',
      thumbnail: 'https://picsum.photos/400/400?random=202',
      alt: 'High-res photo 3',
    },
  ];

  return (
    <div className="p-8">
      <h2 className="mb-6 text-2xl font-bold">With Thumbnails</h2>
      <p className="mb-4 text-sm text-gray-600">
        Gallery uses thumbnail for grid, full-size for lightbox
      </p>
      <ImageGallery
        images={images}
        theme="gradient"
        columns={3}
        gap="md"
        aspectRatio="square"
        lightbox
      />
    </div>
  );
}

export function NoLightboxExample() {
  const images: ImageData[] = [
    { src: 'https://picsum.photos/800/800?random=300', alt: 'Static photo 1' },
    { src: 'https://picsum.photos/800/800?random=301', alt: 'Static photo 2' },
    { src: 'https://picsum.photos/800/800?random=302', alt: 'Static photo 3' },
  ];

  return (
    <div className="p-8">
      <h2 className="mb-6 text-2xl font-bold">Without Lightbox</h2>
      <ImageGallery
        images={images}
        theme="neumorphism"
        columns={3}
        gap="lg"
        aspectRatio="square"
        lightbox={false}
      />
    </div>
  );
}
