import { useState } from 'react'

export default function NeumorphismCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    { id: 1, title: 'Soft Touch', subtitle: 'Gentle interfaces', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop' },
    { id: 2, title: 'Tactile Feel', subtitle: 'Natural interactions', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=600&fit=crop' },
    { id: 3, title: 'Subtle Depth', subtitle: 'Layers of comfort', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=600&fit=crop' },
    { id: 4, title: 'Calm Design', subtitle: 'Soothing aesthetics', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=600&fit=crop' },
  ]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-8 md:p-12 bg-[#e0e5ec] min-h-[550px] flex items-center justify-center">
      <div className="relative w-full">
        {/* Neumorphic Container */}
        <div
          className="relative aspect-[16/9] rounded-3xl overflow-hidden"
          style={{
            boxShadow: '20px 20px 60px #bec3c9, -20px -20px 60px #ffffff',
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#e0e5ec]/80" />
            </div>
          ))}

          {/* Content */}
          <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12">
            <p className="text-sm text-gray-600 font-medium mb-1 uppercase tracking-wider">
              {slides[currentIndex].subtitle}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700">
              {slides[currentIndex].title}
            </h2>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 flex items-center gap-4 md:gap-6">
          <button
            onClick={goToPrevious}
            className="w-14 h-14 rounded-2xl bg-[#e0e5ec] flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
            style={{
              boxShadow: '8px 8px 16px #bec3c9, -8px -8px 16px #ffffff',
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Indicators */}
          <div
            className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#e0e5ec]"
            style={{
              boxShadow: 'inset 4px 4px 8px #bec3c9, inset -4px -4px 8px #ffffff',
            }}
          >
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gray-600'
                    : 'bg-gray-400 hover:bg-gray-500'
                }`}
                style={index === currentIndex ? {
                  boxShadow: '2px 2px 4px #bec3c9, -2px -2px 4px #ffffff',
                } : {}}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="w-14 h-14 rounded-2xl bg-[#e0e5ec] flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
            style={{
              boxShadow: '8px 8px 16px #bec3c9, -8px -8px 16px #ffffff',
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
