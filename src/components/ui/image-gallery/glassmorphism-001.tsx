'use client';

import { ImageGallery } from './ImageGallery';
import type { ImageData } from './types';

export default function GlassmorphismImageGallery() {
  const images: ImageData[] = [
    { src: 'https://picsum.photos/800/800?random=10', alt: 'Frosted Glass' },
    { src: 'https://picsum.photos/800/800?random=11', alt: 'Crystal Clear' },
    { src: 'https://picsum.photos/800/800?random=12', alt: 'Blur Effect' },
    { src: 'https://picsum.photos/800/800?random=13', alt: 'Transparency' },
    { src: 'https://picsum.photos/800/800?random=14', alt: 'Light Refraction' },
    { src: 'https://picsum.photos/800/800?random=15', alt: 'Glass Layers' },
    { src: 'https://picsum.photos/800/800?random=16', alt: 'Prism Colors' },
    { src: 'https://picsum.photos/800/800?random=17', alt: 'Window View' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
          <h1 className="mb-4 text-4xl font-bold text-white">Glass Gallery</h1>
        </div>

        <ImageGallery
          images={images}
          theme="glassmorphism"
          columns={4}
          gap="md"
          aspectRatio="square"
          lightbox
        />
      </div>
    </div>
  );
}
