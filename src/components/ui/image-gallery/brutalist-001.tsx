'use client';

import { useState } from 'react';

export default function BrutalistImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { id: 1, title: 'RAW CONCRETE' },
    { id: 2, title: 'BOLD STRUCTURE' },
    { id: 3, title: 'HEAVY FORM' },
    { id: 4, title: 'STARK GEOMETRY' },
    { id: 5, title: 'BRUTAL HONESTY' },
    { id: 6, title: 'HARSH LINES' },
    { id: 7, title: 'SOLID MASS' },
    { id: 8, title: 'ROUGH TEXTURE' },
  ];

  return (
    <div className="min-h-screen bg-yellow-300 p-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 border-8 border-black bg-white p-6">
          <h1 className="font-mono text-6xl font-black uppercase tracking-tighter text-black">
            BRUTALIST<br />GALLERY
          </h1>
          <div className="mt-4 border-4 border-black bg-black p-2">
            <p className="font-mono text-sm font-bold text-yellow-300">
              NO COMPROMISE / PURE FUNCTION
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="cursor-pointer border-8 border-black bg-white transition-all hover:border-red-600 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="aspect-square border-4 border-black bg-black">
                <div className="flex h-full items-center justify-center font-mono text-8xl font-black text-yellow-300">
                  {image.id}
                </div>
              </div>
              <div className="border-t-4 border-black bg-white p-3">
                <h3 className="font-mono text-sm font-black uppercase tracking-tight text-black">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-yellow-300 p-8"
        >
          <div className="relative max-w-4xl border-8 border-black bg-white p-4 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <div className="aspect-square border-4 border-black bg-black">
              <div className="flex h-full items-center justify-center font-mono text-9xl font-black text-yellow-300">
                {selectedImage}
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -right-4 -top-4 border-8 border-black bg-red-600 px-6 py-2 font-mono text-4xl font-black text-white hover:bg-white hover:text-black"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
