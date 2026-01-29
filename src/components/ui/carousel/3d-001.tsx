'use client';

import { useState, useEffect } from 'react';

export default function ThreeDCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
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
    { title: 'Dimensional Design', description: 'Experience depth and perspective', color: 'bg-gradient-to-br from-blue-500 to-purple-600' },
    { title: 'Spatial Interface', description: 'Navigate through 3D space', color: 'bg-gradient-to-br from-purple-500 to-pink-600' },
    { title: 'Layered Reality', description: 'Multiple planes of interaction', color: 'bg-gradient-to-br from-pink-500 to-rose-600' },
    { title: 'Depth Perception', description: 'Visual hierarchy in motion', color: 'bg-gradient-to-br from-orange-500 to-red-600' },
    { title: 'Perspective Shift', description: 'Dynamic viewing angles', color: 'bg-gradient-to-br from-teal-500 to-cyan-600' },
  ];

  // Calculate position for each slide in the 3D carousel
  const getSlideTransform = (index: number) => {
    const diff = index - currentSlide;
    const absDistance = Math.abs(diff);

    if (absDistance === 0) {
      return 'translateX(0) translateZ(0) scale(1)';
    } else if (absDistance === 1) {
      return diff > 0
        ? 'translateX(70%) translateZ(-200px) scale(0.75) rotateY(-45deg)'
        : 'translateX(-70%) translateZ(-200px) scale(0.75) rotateY(45deg)';
    } else if (absDistance === 2) {
      return diff > 0
        ? 'translateX(85%) translateZ(-350px) scale(0.5) rotateY(-60deg)'
        : 'translateX(-85%) translateZ(-350px) scale(0.5) rotateY(60deg)';
    } else {
      return 'translateX(0) translateZ(-500px) scale(0.3) rotateY(0deg)';
    }
  };

  const getSlideOpacity = (index: number) => {
    const absDistance = Math.abs(index - currentSlide);
    if (absDistance === 0) return 1;
    if (absDistance === 1) return 0.6;
    if (absDistance === 2) return 0.3;
    return 0;
  };

  const getSlideZIndex = (index: number) => {
    const absDistance = Math.abs(index - currentSlide);
    return totalSlides - absDistance;
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="relative h-[500px]" style={{ perspective: '1200px' }}>
        {/* 3D Carousel Container */}
        <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 w-[600px] h-[400px] -ml-[300px] -mt-[200px] rounded-2xl shadow-2xl transition-all duration-700 ease-out cursor-pointer"
              style={{
                transform: getSlideTransform(index),
                opacity: getSlideOpacity(index),
                zIndex: getSlideZIndex(index),
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
              }}
              onClick={() => index !== currentSlide && goToSlide(index)}
            >
              {/* Card with 3D depth */}
              <div className={`relative w-full h-full rounded-2xl overflow-hidden ${slide.color}`}>
                {/* Front face */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
                  {/* 3D depth layers */}
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"
                    style={{ transform: 'translateZ(10px)' }}
                  />
                  <div
                    className="absolute inset-0 border-2 border-white/20 rounded-2xl"
                    style={{ transform: 'translateZ(20px)' }}
                  />

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h2
                      className="text-5xl font-bold mb-4 drop-shadow-lg"
                      style={{
                        transform: index === currentSlide ? 'translateZ(50px)' : 'translateZ(0)',
                        transition: 'transform 0.7s ease-out',
                      }}
                    >
                      {slide.title}
                    </h2>
                    <p
                      className="text-xl opacity-90 drop-shadow-md"
                      style={{
                        transform: index === currentSlide ? 'translateZ(30px)' : 'translateZ(0)',
                        transition: 'transform 0.7s ease-out',
                      }}
                    >
                      {slide.description}
                    </p>
                  </div>

                  {/* Floating 3D elements */}
                  <div
                    className="absolute top-8 left-8 w-16 h-16 bg-white/20 rounded-lg backdrop-blur-sm"
                    style={{
                      transform: index === currentSlide ? 'translateZ(40px) rotate(12deg)' : 'translateZ(0)',
                      transition: 'transform 0.7s ease-out',
                    }}
                  />
                  <div
                    className="absolute bottom-8 right-8 w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm"
                    style={{
                      transform: index === currentSlide ? 'translateZ(35px) rotate(-8deg)' : 'translateZ(0)',
                      transition: 'transform 0.7s ease-out',
                    }}
                  />
                </div>

                {/* Shadow/depth effect */}
                <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white text-gray-800 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 z-50"
          style={{ transform: 'translateY(-50%) translateZ(100px)' }}
          aria-label="Previous slide"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white text-gray-800 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 z-50"
          style={{ transform: 'translateY(-50%) translateZ(100px)' }}
          aria-label="Next slide"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* 3D Dot Indicators */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50"
          style={{ transform: 'translateX(-50%) translateZ(100px)' }}
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-12 h-4 bg-white shadow-lg'
                  : 'w-4 h-4 bg-white/50 hover:bg-white/80 hover:shadow-md'
              }`}
              style={{
                transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)',
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
