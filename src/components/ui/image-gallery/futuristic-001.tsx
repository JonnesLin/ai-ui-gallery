'use client';

import { useState } from 'react';

export default function FuturisticImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const images = [
    { id: 1, title: 'Quantum Interface', code: 'QI-2089' },
    { id: 2, title: 'Neural Network', code: 'NN-3045' },
    { id: 3, title: 'Holographic Display', code: 'HD-4021' },
    { id: 4, title: 'AI Core System', code: 'AI-5067' },
    { id: 5, title: 'Plasma Field', code: 'PF-6012' },
    { id: 6, title: 'Dimension Portal', code: 'DP-7088' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 border-l-4 border-cyan-400 pl-6">
          <div className="mb-2 font-mono text-xs tracking-widest text-cyan-400">
            SYSTEM VERSION 3.7.2089
          </div>
          <h1 className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-5xl font-black uppercase tracking-tight text-transparent">
            Future Gallery
          </h1>
          <div className="mt-3 flex items-center gap-2 font-mono text-sm text-blue-400">
            <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400"></div>
            <span>NEURAL LINK ACTIVE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-slate-900/50 backdrop-blur-sm transition-all duration-500 hover:bg-slate-900/70">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
                <div className={`border-2 transition-all duration-500 ${
                  hoveredId === image.id
                    ? 'border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.5)]'
                    : 'border-cyan-900/30'
                }`}>
                  <div className="aspect-square relative">
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,transparent_1px),linear-gradient(90deg,transparent_1px,transparent_1px)] bg-[length:20px_20px] opacity-20"
                      style={{
                        backgroundImage: 'linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)'
                      }}
                    ></div>
                    <div className="relative flex h-full items-center justify-center">
                      <span className="font-mono text-8xl font-black text-cyan-400/20 transition-all duration-500 group-hover:text-cyan-400/40">
                        {image.id}
                      </span>
                    </div>
                    {hoveredId === image.id && (
                      <div className="absolute inset-0">
                        <div className="absolute left-0 top-0 h-full w-1 animate-pulse bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
                        <div className="absolute right-0 top-0 h-full w-1 animate-pulse bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-4 border-l-2 border-cyan-900/50 pl-4">
                <h3 className="font-mono text-sm font-bold uppercase tracking-wide text-cyan-400">
                  {image.title}
                </h3>
                <p className="font-mono text-xs text-blue-400">
                  ID: {image.code}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-8 backdrop-blur-md"
        >
          <div className="relative max-w-5xl">
            <div className="border-4 border-cyan-400 bg-slate-900/80 p-6 shadow-[0_0_60px_rgba(34,211,238,0.6)]">
              <div className="aspect-square relative border-2 border-cyan-900/50">
                <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,transparent_1px),linear-gradient(90deg,transparent_1px,transparent_1px)] bg-[length:30px_30px] opacity-20"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)'
                  }}
                ></div>
                <div className="relative flex h-full items-center justify-center font-mono text-9xl font-black text-cyan-400/30">
                  {selectedImage}
                </div>
              </div>
              <div className="mt-6 border-t-2 border-cyan-900/50 pt-6">
                <h2 className="font-mono text-2xl font-bold uppercase tracking-wide text-cyan-400">
                  {images.find(img => img.id === selectedImage)?.title}
                </h2>
                <p className="mt-2 font-mono text-sm text-blue-400">
                  CODE: {images.find(img => img.id === selectedImage)?.code}
                </p>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -right-4 -top-4 border-2 border-cyan-400 bg-slate-900 px-4 py-2 font-mono text-2xl font-bold text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all hover:bg-cyan-400 hover:text-slate-900"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
