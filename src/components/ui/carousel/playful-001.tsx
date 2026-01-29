import { useState } from 'react'

export default function PlayfulCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    { id: 1, title: 'Let\'s Play!', subtitle: 'Fun starts here', emoji: '🎮', color: 'from-yellow-400 to-orange-500', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop' },
    { id: 2, title: 'Adventure Time', subtitle: 'Explore & discover', emoji: '🚀', color: 'from-purple-400 to-pink-500', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop' },
    { id: 3, title: 'Woohoo!', subtitle: 'Celebrate every day', emoji: '🎉', color: 'from-green-400 to-cyan-500', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&h=600&fit=crop' },
    { id: 4, title: 'Dream Big', subtitle: 'Sky is the limit', emoji: '✨', color: 'from-blue-400 to-indigo-500', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=600&fit=crop' },
  ]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className={`w-full max-w-5xl mx-auto p-6 md:p-12 bg-gradient-to-br ${slides[currentIndex].color} min-h-[550px] flex items-center justify-center transition-all duration-500`}>
      <div className="relative w-full">
        {/* Floating Decorations */}
        <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-white/20 animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="absolute -top-2 right-12 w-10 h-10 rounded-full bg-white/20 animate-bounce" style={{ animationDelay: '0.2s' }} />
        <div className="absolute top-20 -right-4 w-12 h-12 rounded-full bg-white/20 animate-bounce" style={{ animationDelay: '0.4s' }} />

        {/* Main Container */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-white transform hover:scale-[1.02] transition-transform duration-300">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-500 ${
                index === currentIndex
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover saturate-125"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${slide.color} opacity-40`} />
            </div>
          ))}

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform">
              <span className="text-4xl mb-2 block">{slides[currentIndex].emoji}</span>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">
                {slides[currentIndex].subtitle}
              </p>
              <h2 className={`text-2xl md:text-3xl font-black text-transparent bg-gradient-to-r ${slides[currentIndex].color} bg-clip-text`}>
                {slides[currentIndex].title}
              </h2>
            </div>
          </div>

          {/* Navigation Arrows - Bouncy */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:scale-110 active:scale-95 transition-transform"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:scale-110 active:scale-95 transition-transform"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators - Fun Dots */}
        <div className="flex justify-center mt-8 gap-4">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 transform ${
                index === currentIndex
                  ? 'scale-125'
                  : 'hover:scale-110'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full border-4 border-white shadow-md transition-colors ${
                  index === currentIndex
                    ? `bg-gradient-to-br ${slide.color}`
                    : 'bg-white/50'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
