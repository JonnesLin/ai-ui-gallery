import { useState } from 'react'

export default function DarkCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    { id: 1, title: 'Into the Void', subtitle: 'Embrace the darkness', image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&h=600&fit=crop' },
    { id: 2, title: 'Midnight Hour', subtitle: 'When shadows speak', image: 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=1200&h=600&fit=crop' },
    { id: 3, title: 'Dark Matter', subtitle: 'Unseen forces', image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&h=600&fit=crop' },
    { id: 4, title: 'Starless Night', subtitle: 'Pure darkness', image: 'https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?w=1200&h=600&fit=crop' },
  ]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-6 md:p-12 bg-[#0a0a0a] min-h-[550px] flex items-center justify-center">
      <div className="relative w-full">
        {/* Main Container */}
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gray-900 border border-gray-800">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ${
                index === currentIndex
                  ? 'opacity-100 translate-x-0'
                  : index < currentIndex
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
            </div>
          ))}

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-2">
                  {slides[currentIndex].subtitle}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {slides[currentIndex].title}
                </h2>
              </div>
              <div className="hidden md:block text-right">
                <span className="text-5xl font-bold text-emerald-400">
                  {String(currentIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-2xl text-gray-600 ml-2">
                  / {String(slides.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-900/80 border border-gray-700 flex items-center justify-center text-white hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-900/80 border border-gray-700 flex items-center justify-center text-white hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-12 bg-emerald-400'
                  : 'w-6 bg-gray-700 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
