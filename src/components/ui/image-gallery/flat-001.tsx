'use client';

import { useState } from 'react';

export default function FlatImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const images = [
    { id: 1, title: 'Flat Design', category: 'UI', color: 'bg-blue-500' },
    { id: 2, title: 'Simple Icon', category: 'Icons', color: 'bg-green-500' },
    { id: 3, title: 'Clean Layout', category: 'UI', color: 'bg-purple-500' },
    { id: 4, title: 'Minimal Shape', category: 'Graphics', color: 'bg-orange-500' },
    { id: 5, title: 'Vector Art', category: 'Graphics', color: 'bg-pink-500' },
    { id: 6, title: 'Bold Color', category: 'UI', color: 'bg-red-500' },
    { id: 7, title: 'Geometric Form', category: 'Graphics', color: 'bg-yellow-500' },
    { id: 8, title: 'Pure Symbol', category: 'Icons', color: 'bg-cyan-500' },
  ];

  const filters = ['All', 'UI', 'Icons', 'Graphics'];
  const filteredImages = activeFilter === 'All'
    ? images
    : images.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-6xl font-bold text-gray-800">
            Flat Gallery
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Simple. Clean. Direct.
          </p>
        </div>

        <div className="mb-8 flex justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-lg px-6 py-3 font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-lg">
                <div className={`aspect-square ${image.color} flex items-center justify-center rounded-xl`}>
                  <span className="text-8xl font-bold text-white/50">
                    {image.id}
                  </span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-bold text-gray-800">{image.title}</h3>
                <p className="text-sm text-gray-500">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/90 p-8"
        >
          <div className="relative max-w-4xl rounded-3xl bg-white p-8 shadow-2xl">
            <div className={`aspect-square ${images.find(img => img.id === selectedImage)?.color} flex items-center justify-center rounded-2xl`}>
              <span className="text-9xl font-bold text-white/60">
                {selectedImage}
              </span>
            </div>
            <div className="mt-6 text-center">
              <h2 className="text-3xl font-bold text-gray-800">
                {images.find(img => img.id === selectedImage)?.title}
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                {images.find(img => img.id === selectedImage)?.category}
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-2xl font-bold text-white shadow-lg transition-all hover:scale-110"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
