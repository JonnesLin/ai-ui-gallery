'use client';

import { useState, useEffect } from 'react';

export default function FlatCarousel() {
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
      title: 'Clean Design',
      description: 'Simplicity meets functionality',
      bgColor: 'bg-blue-500',
      iconColor: 'bg-blue-600',
    },
    {
      title: 'Bold Colors',
      description: 'Vibrant and expressive',
      bgColor: 'bg-emerald-500',
      iconColor: 'bg-emerald-600',
    },
    {
      title: 'Clear Hierarchy',
      description: 'Organized and structured',
      bgColor: 'bg-amber-500',
      iconColor: 'bg-amber-600',
    },
    {
      title: 'Modern Interface',
      description: 'Contemporary and fresh',
      bgColor: 'bg-purple-500',
      iconColor: 'bg-purple-600',
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <div className="relative bg-white rounded-none overflow-hidden">
        {/* Main Carousel */}
        <div className="relative h-96 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 translate-x-0'
                  : index < currentSlide
                  ? 'opacity-0 -translate-x-full'
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <div className={`flex flex-col items-center justify-center h-full ${slide.bgColor} text-white`}>
                {/* Flat Icon */}
                <div className="mb-8">
                  <div className={`w-24 h-24 ${slide.iconColor} rounded-full flex items-center justify-center`}>
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl opacity-90">{slide.description}</p>

                {/* Decorative Elements */}
                <div className="mt-12 flex gap-4">
                  <div className="w-16 h-2 bg-white/30 rounded-full" />
                  <div className="w-12 h-2 bg-white/30 rounded-full" />
                  <div className="w-8 h-2 bg-white/30 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-200 z-20"
          aria-label="Previous slide"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-200 z-20"
          aria-label="Next slide"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-0 left-0 right-0 bg-gray-800 py-4 flex justify-center gap-3 z-20">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? `w-12 h-3 ${slide.bgColor} rounded-full`
                  : 'w-3 h-3 bg-gray-600 rounded-full hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-8 grid grid-cols-4 gap-0">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`p-4 transition-all duration-300 ${
              index === currentSlide
                ? `${slide.bgColor} text-white`
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <div className="text-sm font-bold uppercase tracking-wider">
              0{index + 1}
            </div>
            <div className="text-xs mt-1 opacity-80">{slide.title}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
