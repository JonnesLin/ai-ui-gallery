'use client';

import { useState } from 'react';

export default function NeonImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { id: 1, title: 'Electric Pink', neon: 'shadow-[0_0_20px_rgba(236,72,153,0.8)]', border: 'border-pink-500', text: 'text-pink-500' },
    { id: 2, title: 'Cyber Blue', neon: 'shadow-[0_0_20px_rgba(59,130,246,0.8)]', border: 'border-blue-500', text: 'text-blue-500' },
    { id: 3, title: 'Toxic Green', neon: 'shadow-[0_0_20px_rgba(34,197,94,0.8)]', border: 'border-green-500', text: 'text-green-500' },
    { id: 4, title: 'Purple Haze', neon: 'shadow-[0_0_20px_rgba(168,85,247,0.8)]', border: 'border-purple-500', text: 'text-purple-500' },
    { id: 5, title: 'Solar Yellow', neon: 'shadow-[0_0_20px_rgba(234,179,8,0.8)]', border: 'border-yellow-500', text: 'text-yellow-500' },
    { id: 6, title: 'Hot Orange', neon: 'shadow-[0_0_20px_rgba(249,115,22,0.8)]', border: 'border-orange-500', text: 'text-orange-500' },
    { id: 7, title: 'Crimson Red', neon: 'shadow-[0_0_20px_rgba(239,68,68,0.8)]', border: 'border-red-500', text: 'text-red-500' },
    { id: 8, title: 'Aqua Cyan', neon: 'shadow-[0_0_20px_rgba(6,182,212,0.8)]', border: 'border-cyan-500', text: 'text-cyan-500' },
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="animate-pulse text-7xl font-black uppercase tracking-wider text-pink-500" style={{
            textShadow: '0 0 30px rgba(236,72,153,1), 0 0 60px rgba(236,72,153,0.8), 0 0 90px rgba(236,72,153,0.6)'
          }}>
            NEON GALLERY
          </h1>
          <p className="mt-4 font-mono text-sm tracking-widest text-cyan-400" style={{
            textShadow: '0 0 10px rgba(6,182,212,0.8)'
          }}>
            // GLOW IN THE DARK //
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="group cursor-pointer"
            >
              <div className={`overflow-hidden border-2 ${image.border} bg-black p-2 transition-all duration-300 hover:${image.neon}`}>
                <div className="aspect-square border border-gray-900 bg-black">
                  <div className="flex h-full items-center justify-center">
                    <span className={`text-8xl font-black ${image.text} transition-all duration-300 group-hover:animate-pulse`} style={{
                      textShadow: '0 0 20px currentColor, 0 0 40px currentColor'
                    }}>
                      {image.id}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className={`font-mono text-sm font-bold uppercase tracking-wider ${image.text}`}>
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-8"
        >
          {(() => {
            const current = images.find(img => img.id === selectedImage);
            return (
              <div className={`relative max-w-5xl border-4 ${current?.border} bg-black p-6 ${current?.neon}`}>
                <div className="aspect-square border-2 border-gray-900 bg-black">
                  <div className="flex h-full items-center justify-center">
                    <span className={`animate-pulse text-9xl font-black ${current?.text}`} style={{
                      textShadow: '0 0 30px currentColor, 0 0 60px currentColor, 0 0 90px currentColor'
                    }}>
                      {selectedImage}
                    </span>
                  </div>
                </div>
                <div className="mt-6 border-t-2 border-gray-900 pt-4 text-center">
                  <h2 className={`font-mono text-2xl font-black uppercase tracking-wider ${current?.text}`} style={{
                    textShadow: '0 0 20px currentColor'
                  }}>
                    {current?.title}
                  </h2>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                  className={`absolute -right-4 -top-4 border-2 ${current?.border} bg-black px-4 py-1 font-mono text-3xl font-black ${current?.text} transition-all hover:${current?.neon}`}
                >
                  [X]
                </button>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
