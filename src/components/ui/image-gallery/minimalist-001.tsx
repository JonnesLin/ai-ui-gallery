'use client';

import { ImageGallery } from './ImageGallery';
import type { ImageData } from './types';

export default function MinimalistImageGallery() {
  const images: ImageData[] = [
    { src: 'https://picsum.photos/800/800?random=1', alt: 'Abstract Lines' },
    { src: 'https://picsum.photos/800/800?random=2', alt: 'Minimal Space' },
    { src: 'https://picsum.photos/800/800?random=3', alt: 'Clean Geometry' },
    { src: 'https://picsum.photos/800/800?random=4', alt: 'Simple Forms' },
    { src: 'https://picsum.photos/800/800?random=5', alt: 'Pure White' },
    { src: 'https://picsum.photos/800/800?random=6', alt: 'Black Depth' },
    { src: 'https://picsum.photos/800/800?random=7', alt: 'Grid Pattern' },
    { src: 'https://picsum.photos/800/800?random=8', alt: 'Light Study' },
    { src: 'https://picsum.photos/800/800?random=9', alt: 'Zen Balance' },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-4xl font-light tracking-wide text-gray-900">Gallery</h1>

        <ImageGallery
          images={images}
          theme="minimalist"
          columns={3}
          gap="lg"
          aspectRatio="square"
          lightbox
        />
      </div>
    </div>
  );
}
