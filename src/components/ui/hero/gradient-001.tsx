export default function GradientHero() {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-6">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 animate-gradient-xy"
        style={{
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite'
        }}
      />
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Mesh overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
                         radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1]">
          Where Colors
          <span className="block">Come Alive</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Immerse yourself in a world of vibrant gradients and dynamic visuals. Your creativity, amplified.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group px-10 py-5 bg-white text-fuchsia-600 font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-2xl shadow-black/20">
            <span className="flex items-center gap-2">
              Explore Now
              <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
          <button className="px-10 py-5 bg-white/20 backdrop-blur-sm text-white font-semibold text-lg rounded-full border-2 border-white/50 hover:bg-white/30 transition-all duration-300">
            Watch Showcase
          </button>
        </div>

        {/* Floating gradient orbs */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-white/20 rounded-full blur-3xl" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border-4 border-white/30 rounded-full hidden lg:block" />
      <div className="absolute bottom-32 left-20 w-24 h-24 border-4 border-white/30 rounded-2xl rotate-12 hidden lg:block" />
    </section>
  );
}
