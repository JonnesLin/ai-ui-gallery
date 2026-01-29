'use client';

import { useState } from 'react';

export default function PastelImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { id: 1, title: 'Sweet Dreams', color: 'bg-pink-200' },
    { id: 2, title: 'Soft Lavender', color: 'bg-purple-200' },
    { id: 3, title: 'Mint Breeze', color: 'bg-green-200' },
    { id: 4, title: 'Peach Sorbet', color: 'bg-orange-200' },
    { id: 5, title: 'Baby Blue', color: 'bg-blue-200' },
    { id: 6, title: 'Lemon Cream', color: 'bg-yellow-200' },
    { id: 7, title: 'Rose Petal', color: 'bg-rose-200' },
    { id: 8, title: 'Sky Cotton', color: 'bg-cyan-200' },
    { id: 9, title: 'Lilac Fields', color: 'bg-violet-200' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-6xl font-light text-purple-400">
            Pastel Gallery
          </h1>
          <p className="mt-3 font-light text-purple-300">
            Soft colors, gentle feelings
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className={`aspect-square rounded-2xl ${image.color} flex items-center justify-center transition-all duration-500 group-hover:rounded-3xl`}>
                  <span className="text-7xl font-light text-white/60">
                    {image.id}
                  </span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-serif text-lg font-light text-purple-400">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 p-8 backdrop-blur-md"
        >
          <div className="relative max-w-4xl rounded-[2rem] bg-white p-8 shadow-2xl">
            <div className={`aspect-square rounded-3xl ${images.find(img => img.id === selectedImage)?.color} flex items-center justify-center`}>
              <span className="text-9xl font-light text-white/70">
                {selectedImage}
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-300 text-2xl font-light text-white shadow-lg transition-all hover:bg-purple-400 hover:scale-110"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
