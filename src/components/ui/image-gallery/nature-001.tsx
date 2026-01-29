'use client';

import { useState } from 'react';

export default function NatureImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { id: 1, title: 'Forest Canopy', location: 'Amazon Rainforest', gradient: 'from-green-800 to-green-600' },
    { id: 2, title: 'Ocean Depths', location: 'Pacific Ocean', gradient: 'from-blue-800 to-blue-600' },
    { id: 3, title: 'Mountain Peak', location: 'Swiss Alps', gradient: 'from-gray-700 to-slate-600' },
    { id: 4, title: 'Desert Sunset', location: 'Sahara Desert', gradient: 'from-orange-700 to-yellow-600' },
    { id: 5, title: 'Tropical Paradise', location: 'Maldives', gradient: 'from-cyan-700 to-teal-600' },
    { id: 6, title: 'Autumn Woods', location: 'New England', gradient: 'from-amber-700 to-orange-600' },
    { id: 7, title: 'Lavender Fields', location: 'Provence', gradient: 'from-purple-700 to-violet-600' },
    { id: 8, title: 'Northern Lights', location: 'Iceland', gradient: 'from-emerald-700 to-green-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-green-100 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-6xl font-bold text-green-800">
            Nature Gallery
          </h1>
          <p className="mt-3 font-serif text-xl italic text-green-700">
            Discover Earth's Wonders
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className={`aspect-square rounded-xl bg-gradient-to-br ${image.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
                  <div className="relative flex h-full items-center justify-center text-7xl font-bold text-white/40">
                    {image.id}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                </div>
              </div>
              <div className="mt-4 px-2">
                <h3 className="font-serif text-lg font-semibold text-green-800">
                  {image.title}
                </h3>
                <p className="flex items-center text-sm italic text-green-600">
                  <svg className="mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {image.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-green-950/90 p-8 backdrop-blur-sm"
        >
          <div className="relative max-w-5xl rounded-3xl bg-white p-6 shadow-2xl">
            <div className={`aspect-square overflow-hidden rounded-2xl bg-gradient-to-br ${images.find(img => img.id === selectedImage)?.gradient} relative`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
              <div className="relative flex h-full items-center justify-center text-9xl font-bold text-white/50">
                {selectedImage}
              </div>
            </div>
            <div className="mt-6 text-center">
              <h2 className="font-serif text-3xl font-bold text-green-800">
                {images.find(img => img.id === selectedImage)?.title}
              </h2>
              <p className="mt-2 flex items-center justify-center font-serif text-lg italic text-green-600">
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {images.find(img => img.id === selectedImage)?.location}
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -right-3 -top-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-2xl font-bold text-white shadow-lg transition-all hover:bg-green-800 hover:scale-110"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
