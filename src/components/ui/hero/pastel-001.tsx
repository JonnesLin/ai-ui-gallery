export default function PastelHero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-cyan-100 relative overflow-hidden flex items-center justify-center px-6">
      {/* Floating pastel shapes */}
      <div className="absolute top-20 left-[10%] w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-40" />

      {/* Decorative circles */}
      <div className="absolute top-32 right-[20%] w-24 h-24 rounded-full bg-gradient-to-br from-yellow-200 to-pink-200 hidden lg:block" />
      <div className="absolute bottom-40 left-[15%] w-16 h-16 rounded-full bg-gradient-to-br from-purple-200 to-blue-200 hidden lg:block" />
      <div className="absolute top-1/4 left-[25%] w-12 h-12 rounded-full bg-gradient-to-br from-green-200 to-cyan-200 hidden lg:block" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-white/70 backdrop-blur-sm shadow-sm border border-pink-100">
          <span className="text-2xl">🌸</span>
          <span className="text-sm font-medium text-purple-600">Soft & Beautiful</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="text-purple-500">Dreamy</span>
          <span className="block text-pink-400">Designs</span>
        </h1>

        <p className="text-lg md:text-xl text-purple-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Create gentle, calming experiences with soft colors and smooth shapes.
          Perfect for wellness, lifestyle, and creative brands.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold rounded-full hover:from-pink-500 hover:to-purple-500 transition-all shadow-lg shadow-pink-200/50 hover:shadow-xl hover:shadow-pink-300/50">
            Get Started
          </button>
          <button className="px-8 py-4 bg-white/80 text-purple-500 font-semibold rounded-full border border-purple-200 hover:bg-white hover:border-purple-300 transition-all backdrop-blur-sm">
            View Gallery
          </button>
        </div>

        {/* Feature icons */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center text-2xl shadow-md">
              🎨
            </div>
            <span className="text-sm text-purple-400 font-medium">Colors</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center text-2xl shadow-md">
              ✨
            </div>
            <span className="text-sm text-purple-400 font-medium">Magic</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-200 to-cyan-300 flex items-center justify-center text-2xl shadow-md">
              💫
            </div>
            <span className="text-sm text-purple-400 font-medium">Dreams</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-200 to-yellow-300 flex items-center justify-center text-2xl shadow-md">
              🌈
            </div>
            <span className="text-sm text-purple-400 font-medium">Vibes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
