'use client';

import { ImageGallery } from './ImageGallery';
import type { ImageData } from './types';

export default function NeumorphismImageGallery() {
  const images: ImageData[] = [
    { src: 'https://picsum.photos/800/800?random=40', alt: 'Soft Shadows' },
    { src: 'https://picsum.photos/800/800?random=41', alt: 'Depth Illusion' },
    { src: 'https://picsum.photos/800/800?random=42', alt: 'Embossed Look' },
    { src: 'https://picsum.photos/800/800?random=43', alt: 'Tactile UI' },
    { src: 'https://picsum.photos/800/800?random=44', alt: 'Subtle 3D' },
    { src: 'https://picsum.photos/800/800?random=45', alt: 'Material Feel' },
  ];

  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 rounded-3xl bg-gray-200 p-8 shadow-[8px_8px_16px_#b8b8b8,-8px_-8px_16px_#ffffff]">
          <h1 className="text-4xl font-bold text-gray-700">Neumorphic Gallery</h1>
          <p className="mt-2 text-gray-500">Soft UI Design Collection</p>
        </div>

        <ImageGallery
          images={images}
          theme="neumorphism"
          columns={3}
          gap="lg"
          aspectRatio="square"
          lightbox
        />
      </div>
    </div>
  );
}
