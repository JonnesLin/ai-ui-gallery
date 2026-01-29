'use client';

import { ImageGallery } from './ImageGallery';
import type { ImageData } from './types';

export default function DarkImageGallery() {
  const images: ImageData[] = [
    { src: 'https://picsum.photos/800/800?random=20', alt: 'Midnight Mystery' },
    { src: 'https://picsum.photos/800/800?random=21', alt: 'Dark Matter' },
    { src: 'https://picsum.photos/800/800?random=22', alt: 'Shadow Play' },
    { src: 'https://picsum.photos/800/800?random=23', alt: 'Night Vision' },
    { src: 'https://picsum.photos/800/800?random=24', alt: 'Deep Space' },
    { src: 'https://picsum.photos/800/800?random=25', alt: 'Black Velvet' },
    { src: 'https://picsum.photos/800/800?random=26', alt: 'Dark Energy' },
    { src: 'https://picsum.photos/800/800?random=27', alt: 'Obsidian' },
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 border-l-4 border-white pl-6">
          <h1 className="text-5xl font-bold text-white">Dark Gallery</h1>
          <p className="mt-2 text-gray-400">Explore the shadows</p>
        </div>

        <ImageGallery
          images={images}
          theme="dark"
          columns={4}
          gap="md"
          aspectRatio="square"
          lightbox
        />
      </div>
    </div>
  );
}
