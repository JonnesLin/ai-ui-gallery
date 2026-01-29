'use client';

import { ImageGallery } from './ImageGallery';
import type { ImageData } from './types';

export default function GradientImageGallery() {
  const images: ImageData[] = [
    { src: 'https://picsum.photos/800/800?random=30', alt: 'Sunset Waves' },
    { src: 'https://picsum.photos/800/800?random=31', alt: 'Ocean Deep' },
    { src: 'https://picsum.photos/800/800?random=32', alt: 'Forest Dawn' },
    { src: 'https://picsum.photos/800/800?random=33', alt: 'Royal Night' },
    { src: 'https://picsum.photos/800/800?random=34', alt: 'Fire Storm' },
    { src: 'https://picsum.photos/800/800?random=35', alt: 'Cherry Blossom' },
    { src: 'https://picsum.photos/800/800?random=36', alt: 'Arctic Lights' },
    { src: 'https://picsum.photos/800/800?random=37', alt: 'Golden Hour' },
    { src: 'https://picsum.photos/800/800?random=38', alt: 'Lavender Dreams' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-6xl font-black text-transparent">
            Gradient Gallery
          </h1>
          <p className="mt-3 text-gray-400">Vibrant color transitions</p>
        </div>

        <ImageGallery
          images={images}
          theme="gradient"
          columns={3}
          gap="md"
          aspectRatio="square"
          lightbox
        />
      </div>
    </div>
  );
}
