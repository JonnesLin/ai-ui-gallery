export default function PlayfulButton() {
  return (
    <div className="flex flex-col gap-6 p-8 min-h-screen bg-amber-50">
      <h2 className="text-sm font-bold text-orange-500 uppercase tracking-wider">Playful Buttons</h2>

      <div className="flex flex-wrap items-center gap-4">
        {/* Bouncy primary */}
        <button className="px-8 py-3 text-sm font-bold text-white bg-orange-500 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-1 hover:shadow-lg hover:shadow-orange-300 active:scale-95 focus:outline-none">
          Let's Go!
        </button>

        {/* Happy blue */}
        <button className="px-8 py-3 text-sm font-bold text-white bg-sky-500 rounded-full transition-all duration-300 hover:scale-110 hover:-rotate-1 hover:shadow-lg hover:shadow-sky-300 active:scale-95 focus:outline-none">
          Awesome!
        </button>

        {/* Fun green */}
        <button className="px-8 py-3 text-sm font-bold text-white bg-emerald-500 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-2 hover:shadow-lg hover:shadow-emerald-300 active:scale-95 focus:outline-none">
          Yay!
        </button>

        {/* Playful purple */}
        <button className="px-8 py-3 text-sm font-bold text-white bg-violet-500 rounded-full transition-all duration-300 hover:scale-110 hover:-rotate-2 hover:shadow-lg hover:shadow-violet-300 active:scale-95 focus:outline-none">
          Magic!
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Wobbly button */}
        <button className="px-8 py-3 text-sm font-bold text-pink-600 bg-pink-200 rounded-2xl border-b-4 border-pink-400 transition-all duration-150 hover:bg-pink-300 active:border-b-0 active:mt-1 focus:outline-none">
          Boing!
        </button>

        {/* Bubble button */}
        <button className="px-8 py-4 text-sm font-bold text-cyan-600 bg-cyan-200 rounded-[30px] shadow-[inset_0_-4px_0_rgba(0,0,0,0.1)] transition-all duration-200 hover:shadow-[inset_0_-2px_0_rgba(0,0,0,0.1)] hover:translate-y-0.5 active:shadow-none active:translate-y-1 focus:outline-none">
          Bubble
        </button>

        {/* Jelly button */}
        <button className="px-8 py-3 text-sm font-bold text-lime-700 bg-lime-300 rounded-full transition-all duration-300 hover:animate-pulse hover:bg-lime-400 focus:outline-none">
          Jelly
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* With fun icons */}
        <button className="px-6 py-3 text-sm font-bold text-white bg-rose-500 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none inline-flex items-center gap-2">
          <span className="text-lg">🎉</span>
          Party Time
        </button>

        <button className="px-6 py-3 text-sm font-bold text-white bg-amber-500 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none inline-flex items-center gap-2">
          <span className="text-lg">⭐</span>
          Super Star
        </button>

        <button className="px-6 py-3 text-sm font-bold text-white bg-indigo-500 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none inline-flex items-center gap-2">
          <span className="text-lg">🚀</span>
          Blast Off
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Gradient fun */}
        <button
          className="px-8 py-3 text-sm font-bold text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none"
          style={{ background: 'linear-gradient(135deg, #f472b6, #c084fc, #60a5fa)' }}
        >
          Rainbow
        </button>

        {/* Dotted playful */}
        <button className="px-8 py-3 text-sm font-bold text-orange-500 bg-transparent border-2 border-dashed border-orange-400 rounded-full transition-all duration-300 hover:bg-orange-100 hover:border-solid hover:scale-105 focus:outline-none">
          Dotty
        </button>

        {/* Double ring */}
        <button className="px-8 py-3 text-sm font-bold text-teal-600 bg-teal-100 rounded-full ring-2 ring-teal-300 ring-offset-2 ring-offset-amber-50 transition-all duration-300 hover:bg-teal-200 hover:ring-teal-400 hover:scale-105 focus:outline-none">
          Ring Ring
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Icon buttons */}
        <button className="p-4 text-white bg-red-500 rounded-full transition-all duration-300 hover:scale-125 hover:rotate-12 hover:shadow-lg hover:shadow-red-300 active:scale-100 focus:outline-none">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>

        <button className="p-4 text-white bg-yellow-500 rounded-full transition-all duration-300 hover:scale-125 hover:-rotate-12 hover:shadow-lg hover:shadow-yellow-300 active:scale-100 focus:outline-none">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        </button>

        <button className="p-4 text-white bg-green-500 rounded-full transition-all duration-300 hover:scale-125 hover:rotate-45 hover:shadow-lg hover:shadow-green-300 active:scale-100 focus:outline-none">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Loading with bounce */}
        <button className="px-8 py-3 text-sm font-bold text-orange-400 bg-orange-100 rounded-full cursor-wait inline-flex items-center gap-2">
          <span className="flex gap-1">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </span>
          Loading
        </button>

        {/* Disabled */}
        <button className="px-8 py-3 text-sm font-bold text-gray-400 bg-gray-200 rounded-full cursor-not-allowed opacity-60" disabled>
          Nope
        </button>
      </div>

      {/* Large fun CTA */}
      <button
        className="w-full max-w-md px-8 py-5 text-lg font-bold text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-400/50 active:scale-100 focus:outline-none"
        style={{ background: 'linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6)' }}
      >
        🎮 Start Playing Now!
      </button>
    </div>
  )
}
