'use client';

import { useState, useEffect } from 'react';

export default function NeonCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slides = [
    {
      title: 'Neon Dreams',
      description: 'Experience the electric atmosphere',
      color: 'from-pink-500 to-purple-600',
      glow: 'shadow-[0_0_30px_rgba(236,72,153,0.6)]',
    },
    {
      title: 'Cyber Pulse',
      description: 'Feel the digital heartbeat',
      color: 'from-cyan-500 to-blue-600',
      glow: 'shadow-[0_0_30px_rgba(6,182,212,0.6)]',
    },
    {
      title: 'Electric Wave',
      description: 'Ride the neon wave',
      color: 'from-green-500 to-emerald-600',
      glow: 'shadow-[0_0_30px_rgba(34,197,94,0.6)]',
    },
    {
      title: 'Laser Light',
      description: 'Illuminate your journey',
      color: 'from-orange-500 to-red-600',
      glow: 'shadow-[0_0_30px_rgba(249,115,22,0.6)]',
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="relative bg-black rounded-2xl overflow-hidden border-2 border-purple-500 shadow-[0_0_50px_rgba(168,85,247,0.4)]">
        {/* Main Carousel */}
        <div className="relative h-96 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 translate-x-0'
                  : index < currentSlide
                  ? 'opacity-0 -translate-x-full'
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="flex flex-col items-center justify-center h-full px-8 text-center relative">
                {/* Neon Background Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-20 blur-3xl`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <h2
                    className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${slide.color} bg-clip-text text-transparent mb-4 ${slide.glow} animate-pulse`}
                    style={{
                      textShadow: '0 0 20px rgba(255,255,255,0.5)',
                    }}
                  >
                    {slide.title}
                  </h2>
                  <p className="text-xl text-gray-300 tracking-wider uppercase border-t-2 border-b-2 border-white/30 py-3 inline-block px-6 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    {slide.description}
                  </p>
                </div>

                {/* Decorative Neon Lines */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 border-2 border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-300 backdrop-blur-sm z-20"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 border-2 border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-300 backdrop-blur-sm z-20"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-pink-500 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.8)] w-8'
                  : 'bg-transparent border-white/50 hover:border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]" />
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.6)]" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.6)]" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]" />
      </div>
    </div>
  );
}
