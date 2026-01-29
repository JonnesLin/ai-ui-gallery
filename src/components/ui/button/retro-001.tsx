export default function RetroButton() {
  return (
    <div className="flex flex-col gap-6 p-8 min-h-screen bg-amber-50">
      <h2 className="text-sm font-bold text-orange-800 uppercase tracking-widest" style={{ fontFamily: 'Georgia, serif' }}>Retro Buttons</h2>

      <div className="flex flex-wrap items-center gap-4">
        {/* 80s neon style */}
        <button className="px-8 py-3 text-sm font-bold uppercase tracking-wider text-fuchsia-500 bg-transparent border-2 border-fuchsia-500 shadow-[0_0_10px_#d946ef,inset_0_0_10px_rgba(217,70,239,0.3)] transition-all duration-300 hover:bg-fuchsia-500 hover:text-white hover:shadow-[0_0_20px_#d946ef,0_0_40px_#d946ef] focus:outline-none" style={{ fontFamily: '"Press Start 2P", cursive, monospace' }}>
          Neon
        </button>

        {/* Vintage orange */}
        <button className="px-8 py-3 text-sm font-bold uppercase tracking-wide text-orange-900 bg-orange-400 border-b-4 border-orange-600 rounded transition-all duration-150 hover:bg-orange-500 active:border-b-0 active:border-t-4 active:border-t-orange-300 focus:outline-none" style={{ fontFamily: 'Georgia, serif' }}>
          Vintage
        </button>

        {/* Teal retro */}
        <button className="px-8 py-3 text-sm font-bold uppercase tracking-wide text-teal-900 bg-teal-300 border-b-4 border-teal-500 rounded transition-all duration-150 hover:bg-teal-400 active:border-b-0 active:border-t-4 active:border-t-teal-200 focus:outline-none" style={{ fontFamily: 'Georgia, serif' }}>
          Teal
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Pixel-style border */}
        <button className="px-8 py-3 text-sm font-bold uppercase text-white bg-indigo-600 shadow-[4px_0_0_#312e81,-4px_0_0_#312e81,0_4px_0_#312e81,0_-4px_0_#312e81] transition-all duration-150 hover:bg-indigo-700 active:translate-y-1 focus:outline-none" style={{ fontFamily: 'monospace' }}>
          Pixel
        </button>

        {/* Cassette tape style */}
        <button
          className="px-8 py-3 text-sm font-bold uppercase tracking-wide text-amber-900 border-2 border-amber-800 rounded transition-all duration-200 hover:bg-amber-200 focus:outline-none"
          style={{
            fontFamily: 'Georgia, serif',
            background: 'linear-gradient(180deg, #fef3c7 0%, #fde68a 50%, #fcd34d 100%)'
          }}
        >
          Cassette
        </button>

        {/* Woodgrain */}
        <button
          className="px-8 py-3 text-sm font-bold uppercase tracking-wide text-amber-100 border-2 border-amber-900 rounded transition-all duration-200 hover:brightness-110 focus:outline-none"
          style={{
            fontFamily: 'Georgia, serif',
            background: 'linear-gradient(90deg, #78350f 0%, #92400e 25%, #78350f 50%, #92400e 75%, #78350f 100%)'
          }}
        >
          Woodgrain
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* VHS glitch effect */}
        <button className="relative px-8 py-3 text-sm font-bold uppercase tracking-wider text-cyan-400 bg-gray-900 border border-cyan-400 overflow-hidden transition-all duration-200 hover:bg-gray-800 focus:outline-none group" style={{ fontFamily: 'monospace' }}>
          <span className="relative z-10">VHS Mode</span>
          <span className="absolute inset-0 bg-red-500/20 translate-x-0.5 group-hover:animate-pulse" />
          <span className="absolute inset-0 bg-blue-500/20 -translate-x-0.5 group-hover:animate-pulse" />
        </button>

        {/* Disco gradient */}
        <button
          className="px-8 py-3 text-sm font-bold uppercase tracking-wider text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none"
          style={{
            fontFamily: 'Georgia, serif',
            background: 'linear-gradient(135deg, #ec4899 0%, #f97316 25%, #eab308 50%, #22c55e 75%, #06b6d4 100%)'
          }}
        >
          Disco
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Arcade button */}
        <button className="px-10 py-4 text-sm font-bold uppercase text-white bg-red-600 rounded-full border-b-6 border-red-800 shadow-lg transition-all duration-100 hover:bg-red-500 active:border-b-2 active:translate-y-1 focus:outline-none" style={{ fontFamily: 'monospace' }}>
          Start
        </button>

        {/* Insert coin */}
        <button className="px-8 py-3 text-sm font-bold uppercase text-yellow-300 bg-gray-800 border-2 border-yellow-300 rounded transition-all duration-200 hover:bg-yellow-300 hover:text-gray-800 focus:outline-none animate-pulse" style={{ fontFamily: 'monospace' }}>
          Insert Coin
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Jukebox style */}
        <button
          className="px-8 py-3 text-sm font-bold uppercase tracking-wide text-pink-100 rounded-lg border-2 border-pink-300 shadow-lg transition-all duration-200 hover:brightness-110 focus:outline-none"
          style={{
            fontFamily: 'Georgia, serif',
            background: 'linear-gradient(180deg, #db2777 0%, #be185d 50%, #9d174d 100%)'
          }}
        >
          Jukebox
        </button>

        {/* Chrome/metallic */}
        <button
          className="px-8 py-3 text-sm font-bold uppercase tracking-wide text-gray-800 rounded border-2 border-gray-400 transition-all duration-200 hover:brightness-110 focus:outline-none"
          style={{
            fontFamily: 'Georgia, serif',
            background: 'linear-gradient(180deg, #e5e7eb 0%, #9ca3af 30%, #d1d5db 50%, #9ca3af 70%, #e5e7eb 100%)'
          }}
        >
          Chrome
        </button>
      </div>

      {/* Large retro CTA */}
      <button
        className="w-full max-w-md px-8 py-5 text-lg font-bold uppercase tracking-widest text-amber-100 rounded-lg border-4 border-amber-900 shadow-[6px_6px_0px_#78350f] transition-all duration-150 hover:shadow-[3px_3px_0px_#78350f] hover:translate-x-0.5 hover:translate-y-0.5 focus:outline-none"
        style={{
          fontFamily: 'Georgia, serif',
          background: 'linear-gradient(180deg, #f59e0b 0%, #d97706 50%, #b45309 100%)'
        }}
      >
        Play Now
      </button>
    </div>
  )
}
