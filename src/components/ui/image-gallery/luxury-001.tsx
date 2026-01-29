'use client';

import { useState } from 'react';

export default function LuxuryImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { id: 1, title: 'Élégance Royale', collection: 'Heritage Collection' },
    { id: 2, title: 'Prestige Noir', collection: 'Signature Series' },
    { id: 3, title: 'Golden Era', collection: 'Heritage Collection' },
    { id: 4, title: 'Diamond Reflections', collection: 'Premium Line' },
    { id: 5, title: 'Platinum Dreams', collection: 'Signature Series' },
    { id: 6, title: 'Opulent Nights', collection: 'Exclusive Edition' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 border-b border-amber-900/30 pb-8 text-center">
          <div className="mb-4 text-sm font-light tracking-[0.3em] text-amber-600">
            SINCE 1890
          </div>
          <h1 className="font-serif text-6xl font-light tracking-wide text-amber-500">
            The Gallery
          </h1>
          <p className="mt-4 font-light tracking-widest text-amber-700">
            CURATED EXCELLENCE
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden border border-amber-900/30 bg-gradient-to-br from-amber-950/50 to-zinc-900 p-1 transition-all duration-700 hover:border-amber-600/50 hover:shadow-[0_0_40px_rgba(217,119,6,0.2)]">
                <div className="aspect-square bg-gradient-to-br from-amber-950/30 to-zinc-950">
                  <div className="flex h-full items-center justify-center">
                    <span className="font-serif text-8xl font-light text-amber-900/40 transition-all duration-700 group-hover:text-amber-700/60">
                      {image.id}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="font-serif text-xl font-light text-amber-500">
                  {image.title}
                </h3>
                <p className="mt-2 text-xs font-light tracking-widest text-amber-700">
                  {image.collection}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-8 backdrop-blur-md"
        >
          <div className="relative max-w-5xl border-2 border-amber-900/50 bg-gradient-to-br from-amber-950/50 to-zinc-900 p-8 shadow-[0_0_60px_rgba(217,119,6,0.3)]">
            <div className="aspect-square bg-gradient-to-br from-amber-950/30 to-zinc-950">
              <div className="flex h-full items-center justify-center font-serif text-9xl font-light text-amber-800/50">
                {selectedImage}
              </div>
            </div>
            <div className="mt-6 border-t border-amber-900/30 pt-6 text-center">
              <h2 className="font-serif text-3xl font-light text-amber-500">
                {images.find(img => img.id === selectedImage)?.title}
              </h2>
              <p className="mt-2 text-sm font-light tracking-widest text-amber-700">
                {images.find(img => img.id === selectedImage)?.collection}
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center border border-amber-900/50 bg-zinc-950 font-serif text-2xl font-light text-amber-600 transition-all hover:border-amber-600 hover:text-amber-500"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
