'use client';

import { useState } from 'react';

export default function MonochromeImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { id: 1, title: 'Pure Black', shade: 'bg-gray-950' },
    { id: 2, title: 'Deep Shadow', shade: 'bg-gray-900' },
    { id: 3, title: 'Dark Grey', shade: 'bg-gray-800' },
    { id: 4, title: 'Mid Grey', shade: 'bg-gray-600' },
    { id: 5, title: 'Light Grey', shade: 'bg-gray-400' },
    { id: 6, title: 'Silver', shade: 'bg-gray-300' },
    { id: 7, title: 'Pale Grey', shade: 'bg-gray-200' },
    { id: 8, title: 'Off White', shade: 'bg-gray-100' },
    { id: 9, title: 'Pure White', shade: 'bg-white' },
  ];

  return (
    <div className="min-h-screen bg-gray-500 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 border border-white bg-black p-8 text-center">
          <h1 className="text-6xl font-bold text-white">
            MONOCHROME
          </h1>
          <p className="mt-3 text-sm tracking-[0.3em] text-gray-400">
            THE ART OF GRAYSCALE
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden border border-white bg-black p-3 transition-all duration-300 hover:border-gray-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                <div className={`aspect-square ${image.shade} border border-gray-700 transition-all duration-300 group-hover:border-gray-400`}>
                  <div className="flex h-full items-center justify-center">
                    <span className={`text-7xl font-bold ${
                      image.id <= 4 ? 'text-white/20' : 'text-black/20'
                    }`}>
                      {image.id}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-white">
                  {image.title}
                </h3>
                <p className="text-xs text-gray-400">
                  Grayscale {image.id} of 9
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/95 p-8"
        >
          <div className="relative max-w-5xl border-2 border-white bg-black p-8 shadow-[0_0_60px_rgba(255,255,255,0.3)]">
            <div className={`aspect-square ${images.find(img => img.id === selectedImage)?.shade} border-2 border-gray-500`}>
              <div className="flex h-full items-center justify-center">
                <span className={`text-9xl font-bold ${
                  selectedImage && selectedImage <= 4 ? 'text-white/30' : 'text-black/30'
                }`}>
                  {selectedImage}
                </span>
              </div>
            </div>
            <div className="mt-6 border-t border-gray-700 pt-4 text-center">
              <h2 className="text-3xl font-bold text-white">
                {images.find(img => img.id === selectedImage)?.title}
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Grayscale {selectedImage} of 9
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center border-2 border-white bg-black text-2xl font-bold text-white transition-all hover:bg-white hover:text-black"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
