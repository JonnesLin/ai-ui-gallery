import { useState } from 'react'

export default function PastelCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    { id: 1, title: 'Gentle Mornings', subtitle: 'Soft & Sweet', color: 'bg-pink-100', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&h=600&fit=crop' },
    { id: 2, title: 'Dreamy Days', subtitle: 'Light & Airy', color: 'bg-blue-100', image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=600&fit=crop' },
    { id: 3, title: 'Soft Whispers', subtitle: 'Calm & Serene', color: 'bg-purple-100', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop' },
    { id: 4, title: 'Cotton Clouds', subtitle: 'Pure & Simple', color: 'bg-green-100', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=600&fit=crop' },
  ]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className={`w-full max-w-5xl mx-auto p-6 md:p-12 ${slides[currentIndex].color} min-h-[550px] flex items-center justify-center transition-colors duration-700`}>
      <div className="relative w-full">
        {/* Main Container */}
        <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-xl bg-white/50">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ${
                index === currentIndex
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover brightness-105 saturate-[0.8]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/20" />
            </div>
          ))}

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 inline-block">
              <p className="text-pink-400 text-sm font-medium tracking-wide mb-1">
                {slides[currentIndex].subtitle}
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                {slides[currentIndex].title}
              </h2>
            </div>
          </div>

          {/* Navigation Arrows - Soft Rounded */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-pink-400 hover:bg-white hover:text-pink-500 transition-all shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-pink-400 hover:bg-white hover:text-pink-500 transition-all shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators - Soft Pills */}
        <div className="flex justify-center mt-8 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? 'w-8 bg-pink-300'
                  : 'w-3 bg-white hover:bg-pink-100'
              }`}
            />
          ))}
        </div>

        {/* Page Counter */}
        <div className="absolute -bottom-2 right-4 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
          <span className="text-pink-400 font-medium">
            {currentIndex + 1}
          </span>
          <span className="text-gray-300 mx-1">/</span>
          <span className="text-gray-400">
            {slides.length}
          </span>
        </div>
      </div>
    </div>
  )
}
