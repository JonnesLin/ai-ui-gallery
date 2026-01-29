import { useState } from 'react'

export default function GlassmorphismCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    { id: 1, title: 'Ethereal Beauty', subtitle: 'Transparency meets elegance', image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&h=600&fit=crop' },
    { id: 2, title: 'Crystal Clear', subtitle: 'Layers of light', image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&h=600&fit=crop' },
    { id: 3, title: 'Frosted Dreams', subtitle: 'Soft and sophisticated', image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=1200&h=600&fit=crop' },
    { id: 4, title: 'Light Refraction', subtitle: 'Beauty in blur', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=600&fit=crop' },
  ]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-6 md:p-12 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 min-h-[500px] flex items-center justify-center">
      <div className="relative w-full">
        {/* Main Carousel Container */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                index === currentIndex
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          ))}

          {/* Glassmorphic Content Card */}
          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-auto md:max-w-md">
            <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-6 shadow-lg">
              <p className="text-sm text-white/70 font-medium mb-1">
                {slides[currentIndex].subtitle}
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                {slides[currentIndex].title}
              </h2>
            </div>
          </div>

          {/* Glassmorphic Navigation */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 md:right-10 flex flex-col gap-3">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-xl backdrop-blur-xl bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-xl backdrop-blur-xl bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Glassmorphic Indicators */}
        <div className="flex justify-center mt-6 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full backdrop-blur-xl border border-white/30 transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-white/60'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
