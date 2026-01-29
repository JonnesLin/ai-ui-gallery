'use client';

import { useState } from 'react';

export default function PlayfulImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [rotation, setRotation] = useState<{[key: number]: number}>({});

  const images = [
    { id: 1, title: 'Happy Blob', emoji: '😊', color: 'bg-yellow-300' },
    { id: 2, title: 'Cool Star', emoji: '⭐', color: 'bg-blue-300' },
    { id: 3, title: 'Love Heart', emoji: '❤️', color: 'bg-pink-300' },
    { id: 4, title: 'Party Time', emoji: '🎉', color: 'bg-purple-300' },
    { id: 5, title: 'Rainbow Fun', emoji: '🌈', color: 'bg-green-300' },
    { id: 6, title: 'Sweet Candy', emoji: '🍭', color: 'bg-red-300' },
    { id: 7, title: 'Sunny Day', emoji: '☀️', color: 'bg-orange-300' },
    { id: 8, title: 'Magic Sparkle', emoji: '✨', color: 'bg-indigo-300' },
    { id: 9, title: 'Moon Dreams', emoji: '🌙', color: 'bg-cyan-300' },
  ];

  const handleHover = (id: number) => {
    setRotation(prev => ({ ...prev, [id]: Math.random() * 20 - 10 }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-yellow-200 to-blue-200 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-7xl font-black text-purple-600" style={{
            textShadow: '4px 4px 0px rgba(251,207,232,1), 8px 8px 0px rgba(196,181,253,1)'
          }}>
            Fun Gallery! 🎨
          </h1>
          <p className="mt-4 text-2xl font-bold text-pink-500">
            Click me! I'm interactive! ✨
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              onMouseEnter={() => handleHover(image.id)}
              className="group cursor-pointer"
              style={{
                transform: `rotate(${rotation[image.id] || 0}deg)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              <div className={`overflow-hidden rounded-[2rem] ${image.color} border-4 border-white p-6 shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl`}>
                <div className="aspect-square flex flex-col items-center justify-center rounded-[1.5rem] bg-white/50">
                  <span className="text-8xl transition-transform duration-300 group-hover:scale-125">
                    {image.emoji}
                  </span>
                  <span className="mt-4 text-4xl font-black text-white/70">
                    {image.id}
                  </span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-black text-purple-600">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-purple-500/90 p-8 backdrop-blur-sm"
        >
          <div className="relative max-w-4xl animate-bounce">
            <div className={`overflow-hidden rounded-[3rem] ${images.find(img => img.id === selectedImage)?.color} border-8 border-white p-8 shadow-2xl`}>
              <div className="aspect-square flex flex-col items-center justify-center rounded-[2.5rem] bg-white/50">
                <span className="animate-spin text-9xl">
                  {images.find(img => img.id === selectedImage)?.emoji}
                </span>
                <span className="mt-6 text-8xl font-black text-white/80">
                  {selectedImage}
                </span>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -right-6 -top-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-red-400 text-4xl font-black text-white shadow-xl transition-transform hover:scale-125 hover:rotate-90"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
