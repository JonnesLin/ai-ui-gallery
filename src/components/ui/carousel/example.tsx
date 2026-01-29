'use client';

import { Carousel } from './Carousel';
import type { CarouselSlide } from './types';

const exampleSlides: CarouselSlide[] = [
  {
    id: 'slide-1',
    content: (
      <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8">
        <div className="max-w-2xl text-center">
          <h2 className="text-5xl font-bold mb-4">Welcome</h2>
          <p className="text-xl opacity-90">Discover amazing content with our carousel</p>
        </div>
      </div>
    ),
  },
  {
    id: 'slide-2',
    content: (
      <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8">
        <div className="max-w-2xl text-center">
          <h2 className="text-5xl font-bold mb-4">Features</h2>
          <p className="text-xl opacity-90">Touch gestures, keyboard navigation, and more</p>
        </div>
      </div>
    ),
  },
  {
    id: 'slide-3',
    content: (
      <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-green-500 to-green-600 text-white p-8">
        <div className="max-w-2xl text-center">
          <h2 className="text-5xl font-bold mb-4">Themes</h2>
          <p className="text-xl opacity-90">Multiple themes to match your design</p>
        </div>
      </div>
    ),
  },
  {
    id: 'slide-4',
    content: (
      <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8">
        <div className="max-w-2xl text-center">
          <h2 className="text-5xl font-bold mb-4">Get Started</h2>
          <p className="text-xl opacity-90">Easy to integrate and customize</p>
        </div>
      </div>
    ),
  },
];

export default function CarouselExample() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 space-y-12">
      {/* Minimalist Theme */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Minimalist Theme</h3>
        <Carousel slides={exampleSlides} theme="minimalist" autoPlay interval={5000} />
      </div>

      {/* Glassmorphism Theme */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Glassmorphism Theme</h3>
        <Carousel slides={exampleSlides} theme="glassmorphism" autoPlay interval={5000} />
      </div>

      {/* Flat Theme */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Flat Theme</h3>
        <Carousel slides={exampleSlides} theme="flat" loop={false} />
      </div>

      {/* Dark Theme */}
      <div className="p-8 rounded-lg bg-gray-900">
        <h3 className="text-2xl font-bold mb-4 text-white">Dark Theme</h3>
        <Carousel slides={exampleSlides} theme="dark" showControls={false} />
      </div>
    </div>
  );
}
