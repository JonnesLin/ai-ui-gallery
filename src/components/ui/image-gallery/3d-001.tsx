'use client';

import { useState } from 'react';

export default function ThreeDImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [tiltStyle, setTiltStyle] = useState<{[key: number]: {transform: string}}>({});

  const images = [
    { id: 1, title: '3D Cube', color: 'from-blue-400 to-blue-600' },
    { id: 2, title: 'Depth Layer', color: 'from-purple-400 to-purple-600' },
    { id: 3, title: 'Perspective View', color: 'from-pink-400 to-pink-600' },
    { id: 4, title: 'Shadow Box', color: 'from-green-400 to-green-600' },
    { id: 5, title: 'Floating Card', color: 'from-orange-400 to-orange-600' },
    { id: 6, title: 'Parallax Effect', color: 'from-red-400 to-red-600' },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setTiltStyle(prev => ({
      ...prev,
      [id]: {
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
      }
    }));
  };

  const handleMouseLeave = (id: number) => {
    setTiltStyle(prev => ({
      ...prev,
      [id]: {
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center" style={{
          transform: 'perspective(1000px) rotateX(5deg)',
          transformStyle: 'preserve-3d'
        }}>
          <h1 className="text-6xl font-black text-white" style={{
            textShadow: '4px 4px 0px rgba(0,0,0,0.3), 8px 8px 0px rgba(0,0,0,0.2)'
          }}>
            3D Gallery
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Hover for interactive depth
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              onMouseMove={(e) => handleMouseMove(e, image.id)}
              onMouseLeave={() => handleMouseLeave(image.id)}
              className="cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              <div
                className="transition-all duration-300"
                style={{
                  transformStyle: 'preserve-3d',
                  ...(tiltStyle[image.id] || {})
                }}
              >
                <div className="relative">
                  <div className={`absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-gradient-to-br ${image.color} opacity-50 blur-xl`}></div>
                  <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${image.color} p-1 shadow-2xl`}>
                    <div className="aspect-square rounded-xl bg-gray-900/80 backdrop-blur-sm">
                      <div className="flex h-full items-center justify-center text-8xl font-black text-white/30">
                        {image.id}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-white">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-8 backdrop-blur-md"
        >
          <div className="relative" style={{ perspective: '2000px' }}>
            <div style={{
              transform: 'perspective(2000px) rotateY(5deg) rotateX(-5deg)',
              transformStyle: 'preserve-3d'
            }}>
              <div className="relative max-w-4xl">
                <div className={`absolute inset-0 translate-x-8 translate-y-8 rounded-3xl bg-gradient-to-br ${images.find(img => img.id === selectedImage)?.color} opacity-50 blur-2xl`}></div>
                <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${images.find(img => img.id === selectedImage)?.color} p-2 shadow-2xl`}>
                  <div className="aspect-square rounded-2xl bg-gray-900/80 backdrop-blur-sm">
                    <div className="flex h-full items-center justify-center text-9xl font-black text-white/40">
                      {selectedImage}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl font-black text-gray-900 shadow-2xl transition-all hover:scale-110"
              style={{
                transform: 'translateZ(50px)'
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
