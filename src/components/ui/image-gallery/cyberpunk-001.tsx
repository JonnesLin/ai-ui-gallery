'use client';

import { useState } from 'react';

export default function CyberpunkImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [glitchActive, setGlitchActive] = useState<number | null>(null);

  const images = [
    { id: 1, title: 'NEURAL_NET.exe', color: 'from-cyan-500 to-blue-600' },
    { id: 2, title: 'NEON_CITY.dll', color: 'from-pink-500 to-purple-600' },
    { id: 3, title: 'CYBER_CORE.sys', color: 'from-green-500 to-emerald-600' },
    { id: 4, title: 'MATRIX_RUN.bin', color: 'from-yellow-500 to-orange-600' },
    { id: 5, title: 'HACK_THE_PLANET', color: 'from-red-500 to-pink-600' },
    { id: 6, title: 'DIGITAL_GHOST', color: 'from-purple-500 to-indigo-600' },
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 border-2 border-cyan-500 bg-black p-6 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
          <h1 className="font-mono text-5xl font-black uppercase tracking-wider text-cyan-400">
            {'>'} CYBER_GALLERY.v2077
          </h1>
          <p className="mt-2 font-mono text-sm text-pink-500">
            [NEURAL_LINK_ESTABLISHED] // ACCESS_GRANTED
          </p>
          <div className="mt-4 h-2 w-full overflow-hidden bg-gray-900">
            <div className="h-full w-3/4 animate-pulse bg-gradient-to-r from-cyan-500 to-pink-500"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              onMouseEnter={() => setGlitchActive(image.id)}
              onMouseLeave={() => setGlitchActive(null)}
              className="group cursor-pointer"
            >
              <div className={`overflow-hidden border-2 transition-all duration-300 ${
                glitchActive === image.id
                  ? 'border-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.7)]'
                  : 'border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]'
              }`}>
                <div className={`aspect-square bg-gradient-to-br ${image.color} relative`}>
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)]"></div>
                  <div className="relative flex h-full items-center justify-center">
                    <span className={`font-mono text-7xl font-black text-black/30 transition-all duration-300 ${
                      glitchActive === image.id ? 'animate-pulse' : ''
                    }`}>
                      {image.id}
                    </span>
                  </div>
                  {glitchActive === image.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_1s_ease-in-out]"></div>
                  )}
                </div>
              </div>
              <div className="mt-3 border border-cyan-500/50 bg-black/80 p-3">
                <h3 className="font-mono text-sm font-bold text-cyan-400">
                  {image.title}
                </h3>
                <p className="font-mono text-xs text-pink-500">
                  [ID: {String(image.id).padStart(4, '0')}]
                </p>
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
          <div className="relative max-w-4xl border-4 border-pink-500 bg-black p-4 shadow-[0_0_50px_rgba(236,72,153,0.8)]">
            <div className={`aspect-square bg-gradient-to-br ${images.find(img => img.id === selectedImage)?.color} relative`}>
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(0,0,0,0.3)_3px,rgba(0,0,0,0.3)_6px)]"></div>
              <div className="relative flex h-full items-center justify-center font-mono text-9xl font-black text-black/40">
                {selectedImage}
              </div>
            </div>
            <div className="mt-4 border-t-2 border-cyan-500 pt-4 font-mono text-sm text-cyan-400">
              {'>'} VIEWING: {images.find(img => img.id === selectedImage)?.title}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -right-3 -top-3 border-2 border-pink-500 bg-black px-4 py-1 font-mono text-2xl font-black text-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.7)] hover:bg-pink-500 hover:text-black"
            >
              [X]
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
