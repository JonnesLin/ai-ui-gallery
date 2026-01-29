'use client';

import { useState } from 'react';

export default function MaterialImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [elevation, setElevation] = useState<{[key: number]: number}>({});

  const images = [
    { id: 1, title: 'Material Design', category: 'Design' },
    { id: 2, title: 'Paper Element', category: 'UI' },
    { id: 3, title: 'Elevation Layer', category: 'Design' },
    { id: 4, title: 'Card Component', category: 'UI' },
    { id: 5, title: 'Surface Depth', category: 'Design' },
    { id: 6, title: 'Shadow Study', category: 'UI' },
    { id: 7, title: 'Ripple Effect', category: 'Interaction' },
    { id: 8, title: 'FAB Button', category: 'Interaction' },
  ];

  const getShadow = (level: number) => {
    const shadows = [
      'shadow-sm',
      'shadow',
      'shadow-md',
      'shadow-lg',
      'shadow-xl',
      'shadow-2xl'
    ];
    return shadows[Math.min(level, shadows.length - 1)];
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 rounded-lg bg-white p-8 shadow-md">
          <h1 className="text-5xl font-medium text-gray-900">
            Material Gallery
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Material Design principles in action
          </p>
          <div className="mt-6 h-1 w-24 rounded-full bg-blue-600"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              onMouseEnter={() => setElevation(prev => ({ ...prev, [image.id]: 4 }))}
              onMouseLeave={() => setElevation(prev => ({ ...prev, [image.id]: 1 }))}
              className="cursor-pointer transition-all duration-300"
            >
              <div className={`overflow-hidden rounded-lg bg-white ${getShadow(elevation[image.id] || 1)} transition-all duration-300`}>
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="flex h-full items-center justify-center text-7xl font-medium text-gray-300">
                    {image.id}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">{image.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="fixed bottom-8 right-8">
          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl text-white shadow-lg transition-all hover:shadow-2xl hover:scale-110">
            +
          </button>
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-8"
        >
          <div className="relative max-w-5xl overflow-hidden rounded-lg bg-white shadow-2xl">
            <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="flex h-full items-center justify-center text-9xl font-medium text-gray-300">
                {selectedImage}
              </div>
            </div>
            <div className="border-t border-gray-200 p-6">
              <h2 className="text-3xl font-medium text-gray-900">
                {images.find(img => img.id === selectedImage)?.title}
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                {images.find(img => img.id === selectedImage)?.category}
              </p>
              <div className="mt-4 h-1 w-16 rounded-full bg-blue-600"></div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl font-medium text-gray-600 transition-all hover:bg-gray-200"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
