import { useState } from 'react'

export default function GradientCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    { id: 1, title: 'Color Flow', subtitle: 'Where hues dance', gradient: 'from-rose-500 via-fuchsia-500 to-indigo-500', image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&h=600&fit=crop' },
    { id: 2, title: 'Spectrum Shift', subtitle: 'Endless transitions', gradient: 'from-cyan-400 via-blue-500 to-purple-600', image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&h=600&fit=crop' },
    { id: 3, title: 'Aurora Lights', subtitle: 'Nature\'s palette', gradient: 'from-emerald-400 via-cyan-500 to-blue-600', image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=1200&h=600&fit=crop' },
    { id: 4, title: 'Sunset Dreams', subtitle: 'Golden moments', gradient: 'from-orange-400 via-pink-500 to-purple-600', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=600&fit=crop' },
  ]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className={`w-full max-w-5xl mx-auto p-6 md:p-12 bg-gradient-to-br ${slides[currentIndex].gradient} min-h-[550px] flex items-center justify-center transition-all duration-700`}>
      <div className="relative w-full">
        {/* Main Container */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                index === currentIndex
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-110'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-40`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          ))}

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <p className="text-white/80 text-sm font-medium tracking-wider uppercase mb-2">
              {slides[currentIndex].subtitle}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
              {slides[currentIndex].title}
            </h2>
          </div>

          {/* Gradient Border Effect */}
          <div className="absolute inset-0 rounded-3xl border-2 border-white/20 pointer-events-none" />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={goToPrevious}
            className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? 'w-10 h-3 bg-white'
                    : 'w-3 h-3 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
