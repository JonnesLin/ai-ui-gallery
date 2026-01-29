'use client';

import { useState, useEffect } from 'react';

export default function MaterialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4500);
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
      title: 'Material Elevation',
      description: 'Layers create depth and hierarchy',
      primaryColor: 'bg-blue-600',
      accentColor: 'bg-pink-500',
      image: '🎨',
    },
    {
      title: 'Motion & Meaning',
      description: 'Animations guide user attention',
      primaryColor: 'bg-purple-600',
      accentColor: 'bg-amber-500',
      image: '⚡',
    },
    {
      title: 'Bold Typography',
      description: 'Clear visual hierarchy in text',
      primaryColor: 'bg-teal-600',
      accentColor: 'bg-orange-500',
      image: '📝',
    },
    {
      title: 'Responsive Grid',
      description: 'Flexible layouts for all screens',
      primaryColor: 'bg-indigo-600',
      accentColor: 'bg-rose-500',
      image: '📱',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Material Design Elevation Layer */}
      <div className="relative bg-gray-50 rounded-lg shadow-md overflow-hidden">
        {/* Carousel Container with Elevation */}
        <div className="relative h-[450px] overflow-hidden bg-white">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ease-out ${
                index === currentSlide
                  ? 'opacity-100 translate-x-0'
                  : index < currentSlide
                  ? 'opacity-0 -translate-x-full'
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <div className={`h-full ${slide.primaryColor} relative overflow-hidden`}>
                {/* Material Design Ripple Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-72 h-72 bg-black rounded-full translate-y-1/2 -translate-x-1/2" />
                </div>

                {/* Content Grid */}
                <div className="relative h-full grid md:grid-cols-2 gap-8 items-center px-12">
                  {/* Text Content */}
                  <div className="text-white space-y-6">
                    {/* Material Chip */}
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                      <div className={`w-2 h-2 ${slide.accentColor} rounded-full`} />
                      <span>Material Design</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                      {slide.title}
                    </h2>

                    {/* Description */}
                    <p className="text-xl text-white/90 leading-relaxed">
                      {slide.description}
                    </p>

                    {/* Material Button */}
                    <button
                      className={`${slide.accentColor} text-white px-8 py-3 rounded-md font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 uppercase tracking-wider text-sm`}
                    >
                      Learn More
                    </button>
                  </div>

                  {/* Icon/Image Area */}
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      {/* Elevated Card */}
                      <div className="w-64 h-64 bg-white rounded-2xl shadow-2xl flex items-center justify-center text-8xl transform hover:scale-105 transition-transform duration-300">
                        {slide.image}
                      </div>
                      {/* Floating Action Button */}
                      <button
                        className={`absolute -bottom-6 -right-6 w-16 h-16 ${slide.accentColor} rounded-full shadow-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300`}
                      >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Elevated Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white text-gray-800 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white text-gray-800 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Material Progress Indicators */}
        <div className="bg-white border-t border-gray-200 py-4">
          <div className="flex items-center justify-center gap-2 px-4">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group relative flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                aria-label={`Go to slide ${index + 1}`}
              >
                {/* Indicator Line */}
                <div className="relative w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`absolute inset-0 ${slide.primaryColor} transition-transform duration-500 origin-left ${
                      index === currentSlide ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </div>
                {/* Label */}
                <span className={`text-xs font-medium transition-colors duration-200 ${
                  index === currentSlide ? 'text-gray-900' : 'text-gray-400'
                }`}>
                  {index + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Material Cards Below */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
              index === currentSlide
                ? `${slide.primaryColor} text-white transform scale-105`
                : 'bg-white text-gray-700 hover:-translate-y-1'
            }`}
          >
            <div className="text-3xl mb-2">{slide.image}</div>
            <div className="text-sm font-semibold">{slide.title.split(' ')[0]}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
