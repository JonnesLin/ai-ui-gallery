'use client';

import { useState } from 'react';

export default function RetroImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { id: 1, title: 'Vintage Vibes', year: '1975' },
    { id: 2, title: 'Groovy Times', year: '1978' },
    { id: 3, title: 'Disco Fever', year: '1979' },
    { id: 4, title: 'Retro Wave', year: '1982' },
    { id: 5, title: 'Neon Nights', year: '1985' },
    { id: 6, title: 'Classic Cool', year: '1987' },
    { id: 7, title: 'Old School', year: '1989' },
    { id: 8, title: 'Throwback', year: '1992' },
  ];

  return (
    <div className="min-h-screen bg-amber-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 rounded-lg border-4 border-amber-900 bg-gradient-to-r from-orange-200 to-yellow-200 p-8 shadow-[8px_8px_0px_0px_rgba(120,53,15,1)]">
          <h1 className="font-serif text-6xl font-bold italic text-amber-900">
            Retro Gallery
          </h1>
          <p className="mt-2 font-serif text-xl text-amber-700">
            Step back in time...
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-lg border-4 border-amber-900 bg-gradient-to-br from-orange-300 to-yellow-400 shadow-[6px_6px_0px_0px_rgba(120,53,15,1)] transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                <div className="aspect-square bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(120,53,15,0.1)_10px,rgba(120,53,15,0.1)_20px)]">
                  <div className="flex h-full items-center justify-center">
                    <span className="font-serif text-7xl font-bold italic text-amber-900/40">
                      {image.id}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded border-2 border-amber-900 bg-gradient-to-r from-orange-100 to-yellow-100 p-3">
                <h3 className="font-serif text-lg font-bold italic text-amber-900">
                  {image.title}
                </h3>
                <p className="font-mono text-sm text-amber-700">EST. {image.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-amber-900/90 p-8"
        >
          <div className="relative max-w-4xl rounded-lg border-8 border-amber-900 bg-gradient-to-br from-orange-200 to-yellow-300 p-6 shadow-[16px_16px_0px_0px_rgba(0,0,0,0.5)]">
            <div className="aspect-square overflow-hidden rounded bg-[repeating-linear-gradient(45deg,transparent,transparent_15px,rgba(120,53,15,0.1)_15px,rgba(120,53,15,0.1)_30px)]">
              <div className="flex h-full items-center justify-center font-serif text-9xl font-bold italic text-amber-900/50">
                {selectedImage}
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -right-4 -top-4 rounded-full border-4 border-amber-900 bg-orange-400 px-5 py-2 font-serif text-3xl font-bold text-amber-900 shadow-[4px_4px_0px_0px_rgba(120,53,15,1)] hover:bg-yellow-400"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
