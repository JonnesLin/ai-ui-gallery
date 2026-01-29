export default function PlayfulHero() {
  return (
    <section className="min-h-screen bg-[#FFF8E7] relative overflow-hidden flex items-center justify-center px-6">
      {/* Bouncing shapes */}
      <div className="absolute top-20 left-[10%] w-20 h-20 bg-[#FF6B6B] rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }} />
      <div className="absolute top-40 right-[15%] w-16 h-16 bg-[#4ECDC4] rounded-2xl animate-bounce rotate-12" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
      <div className="absolute bottom-32 left-[20%] w-12 h-12 bg-[#FFE66D] rounded-lg animate-bounce" style={{ animationDelay: '1s', animationDuration: '2s' }} />
      <div className="absolute bottom-40 right-[10%] w-24 h-24 bg-[#A855F7] rounded-full animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '3s' }} />

      {/* Squiggly decoration */}
      <svg className="absolute top-1/4 left-10 w-32 h-32 text-[#FF6B6B] hidden lg:block" viewBox="0 0 100 100">
        <path d="M10,50 Q30,20 50,50 T90,50" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>
      <svg className="absolute bottom-1/4 right-10 w-32 h-32 text-[#4ECDC4] hidden lg:block" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray="10 10" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Fun badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-white rounded-full shadow-lg border-4 border-dashed border-[#4ECDC4] rotate-2 hover:rotate-0 transition-transform">
          <span className="text-2xl animate-wave">👋</span>
          <span className="font-bold text-[#4ECDC4]">Hey there, friend!</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
          <span className="text-[#FF6B6B] inline-block hover:scale-110 transition-transform cursor-default">Let's</span>{' '}
          <span className="text-[#4ECDC4] inline-block hover:scale-110 transition-transform cursor-default">Have</span>
          <span className="block mt-2">
            <span className="text-[#A855F7] inline-block hover:scale-110 transition-transform cursor-default">Some</span>{' '}
            <span className="text-[#FFE66D] inline-block hover:scale-110 transition-transform cursor-default drop-shadow-lg">Fun!</span>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Life is too short for boring designs. Create something that makes people smile!
          <span className="inline-block ml-2 animate-bounce">🎉</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group px-10 py-5 bg-[#FF6B6B] text-white font-bold text-xl rounded-2xl hover:scale-105 hover:rotate-1 transition-all shadow-lg hover:shadow-xl border-4 border-[#e05555]">
            <span className="flex items-center gap-2">
              Start Playing
              <span className="group-hover:animate-spin inline-block">🚀</span>
            </span>
          </button>
          <button className="px-10 py-5 bg-white text-[#4ECDC4] font-bold text-xl rounded-2xl hover:scale-105 hover:-rotate-1 transition-all shadow-lg hover:shadow-xl border-4 border-[#4ECDC4]">
            <span className="flex items-center gap-2">
              Watch Demo
              <span>🎬</span>
            </span>
          </button>
        </div>

        {/* Fun stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="px-6 py-4 bg-white rounded-2xl shadow-lg rotate-1 hover:rotate-0 transition-transform">
            <div className="text-4xl font-black text-[#FF6B6B]">50K+</div>
            <div className="text-gray-600 font-medium">Happy Users 😊</div>
          </div>
          <div className="px-6 py-4 bg-white rounded-2xl shadow-lg -rotate-2 hover:rotate-0 transition-transform">
            <div className="text-4xl font-black text-[#4ECDC4]">100%</div>
            <div className="text-gray-600 font-medium">Fun Level 🎮</div>
          </div>
          <div className="px-6 py-4 bg-white rounded-2xl shadow-lg rotate-3 hover:rotate-0 transition-transform">
            <div className="text-4xl font-black text-[#A855F7]">24/7</div>
            <div className="text-gray-600 font-medium">Good Vibes ✨</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }
        .animate-wave {
          animation: wave 1s ease-in-out infinite;
          display: inline-block;
        }
      `}</style>
    </section>
  );
}
