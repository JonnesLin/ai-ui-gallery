'use client';

import { useState } from 'react';

export default function SketchImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { id: 1, title: 'Quick Sketch', artist: 'DA VINCI' },
    { id: 2, title: 'Line Study', artist: 'PICASSO' },
    { id: 3, title: 'Draft Work', artist: 'MONET' },
    { id: 4, title: 'Pencil Art', artist: 'VAN GOGH' },
    { id: 5, title: 'Hand Drawing', artist: 'REMBRANDT' },
    { id: 6, title: 'Rough Idea', artist: 'MICHELANGELO' },
  ];

  return (
    <div className="min-h-screen bg-white p-8" style={{
      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 31px, #e5e7eb 31px, #e5e7eb 32px)`
    }}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 border-b-4 border-dashed border-gray-400 pb-6">
          <h1 className="font-mono text-5xl font-bold text-gray-800" style={{
            textDecoration: 'underline wavy',
            textUnderlineOffset: '8px'
          }}>
            Sketch Gallery
          </h1>
          <p className="mt-3 font-mono text-gray-600">
            Hand-drawn inspiration
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-sm border-2 border-gray-800 bg-white p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                <div className="aspect-square border-2 border-dashed border-gray-400 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.03)_10px,rgba(0,0,0,0.03)_20px)]">
                  <div className="flex h-full items-center justify-center">
                    <span className="font-mono text-8xl font-bold text-gray-300" style={{
                      textShadow: '2px 2px 0px rgba(0,0,0,0.1)'
                    }}>
                      {image.id}
                    </span>
                  </div>
                </div>
                <div className="mt-4 border-t-2 border-dashed border-gray-300 pt-3">
                  <h3 className="font-mono text-lg font-bold text-gray-800">
                    {image.title}
                  </h3>
                  <p className="font-mono text-xs text-gray-500">
                    by {image.artist}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 p-8"
        >
          <div className="relative max-w-5xl rounded-sm border-4 border-gray-800 bg-white p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,0.2)]">
            <div className="aspect-square border-4 border-dashed border-gray-400 bg-[repeating-linear-gradient(45deg,transparent,transparent_15px,rgba(0,0,0,0.03)_15px,rgba(0,0,0,0.03)_30px)]">
              <div className="flex h-full items-center justify-center font-mono text-9xl font-black text-gray-300" style={{
                textShadow: '3px 3px 0px rgba(0,0,0,0.1)'
              }}>
                {selectedImage}
              </div>
            </div>
            <div className="mt-6 border-t-4 border-dashed border-gray-300 pt-4">
              <h2 className="font-mono text-3xl font-bold text-gray-800">
                {images.find(img => img.id === selectedImage)?.title}
              </h2>
              <p className="mt-1 font-mono text-sm text-gray-600">
                by {images.find(img => img.id === selectedImage)?.artist}
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -right-3 -top-3 rounded-full border-4 border-gray-800 bg-white px-4 py-1 font-mono text-3xl font-bold text-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:bg-gray-800 hover:text-white"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
