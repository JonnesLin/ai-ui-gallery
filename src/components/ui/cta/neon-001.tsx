export default function NeonCTA() {
  return (
    <section className="py-20 px-4 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-950/50 to-gray-950"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_20px_10px_rgba(236,72,153,0.3)] animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_20px_10px_rgba(34,211,238,0.3)] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-green-400 rounded-full shadow-[0_0_20px_10px_rgba(74,222,128,0.3)] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400" style={{ textShadow: '0 0 40px rgba(236,72,153,0.5)' }}>
              GLOW UP
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
            Light up your projects with electrifying designs that demand attention.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative px-10 py-4 font-bold text-lg uppercase tracking-wider overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg"></span>
              <span className="absolute inset-0.5 bg-gray-950 rounded-[6px]"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 group-hover:text-white transition-colors">
                Ignite Now
              </span>
            </button>

            <button className="group relative px-10 py-4 font-bold text-lg uppercase tracking-wider overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-green-400 rounded-lg"></span>
              <span className="absolute inset-0.5 bg-gray-950 rounded-[6px]"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                See Examples
              </span>
            </button>
          </div>

          <div className="mt-16 flex justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500" style={{ textShadow: '0 0 20px rgba(236,72,153,0.5)' }}>24/7</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Always On</div>
            </div>
            <div className="w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500" style={{ textShadow: '0 0 20px rgba(168,85,247,0.5)' }}>100%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Electric</div>
            </div>
            <div className="w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400" style={{ textShadow: '0 0 20px rgba(34,211,238,0.5)' }}>FREE</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Forever</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
