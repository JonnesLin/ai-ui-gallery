export default function PastelTooltip() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-cyan-50 p-16 flex flex-col items-center justify-center gap-20">
      <h2 className="text-sm font-medium text-purple-400 uppercase tracking-widest">Pastel Tooltips</h2>

      {/* Top - Lavender */}
      <div className="group relative inline-block">
        <button className="px-6 py-3 text-sm font-medium text-purple-600 bg-purple-100 rounded-full transition-all duration-300 hover:bg-purple-200 hover:shadow-lg hover:shadow-purple-200/50">
          Hover Top
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2.5 text-sm text-purple-600 bg-purple-100 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:-translate-y-1 whitespace-nowrap shadow-lg shadow-purple-100/50">
          Soft lavender dream
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-[8px] border-transparent border-t-purple-100"></div>
        </div>
      </div>

      {/* Bottom - Mint */}
      <div className="group relative inline-block">
        <button className="px-6 py-3 text-sm font-medium text-emerald-600 bg-emerald-100 rounded-full transition-all duration-300 hover:bg-emerald-200 hover:shadow-lg hover:shadow-emerald-200/50">
          Hover Bottom
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-4 py-2.5 text-sm text-emerald-600 bg-emerald-100 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1 whitespace-nowrap shadow-lg shadow-emerald-100/50">
          Fresh mint vibes
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-[8px] border-transparent border-b-emerald-100"></div>
        </div>
      </div>

      {/* Left & Right */}
      <div className="flex gap-24">
        <div className="group relative inline-block">
          <button className="px-6 py-3 text-sm font-medium text-rose-600 bg-rose-100 rounded-full transition-all duration-300 hover:bg-rose-200 hover:shadow-lg hover:shadow-rose-200/50">
            Hover Left
          </button>
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-4 py-2.5 text-sm text-rose-600 bg-rose-100 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:-translate-x-1 whitespace-nowrap shadow-lg shadow-rose-100/50">
            Blush pink
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-[8px] border-transparent border-l-rose-100"></div>
          </div>
        </div>

        <div className="group relative inline-block">
          <button className="px-6 py-3 text-sm font-medium text-sky-600 bg-sky-100 rounded-full transition-all duration-300 hover:bg-sky-200 hover:shadow-lg hover:shadow-sky-200/50">
            Hover Right
          </button>
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-4 py-2.5 text-sm text-sky-600 bg-sky-100 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-x-1 whitespace-nowrap shadow-lg shadow-sky-100/50">
            Baby blue
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-[8px] border-transparent border-r-sky-100"></div>
          </div>
        </div>
      </div>

      {/* Peach */}
      <div className="group relative inline-block">
        <button className="px-6 py-3 text-sm font-medium text-orange-500 bg-orange-100 rounded-full transition-all duration-300 hover:bg-orange-200 hover:shadow-lg hover:shadow-orange-200/50">
          Peachy Keen
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2.5 text-sm text-orange-500 bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:-translate-y-1 whitespace-nowrap shadow-lg shadow-orange-100/50">
          Warm peach glow
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-[8px] border-transparent border-t-orange-100"></div>
        </div>
      </div>

      {/* Candy */}
      <div className="group relative inline-block">
        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-pink-200 to-purple-200 rounded-full cursor-help shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
          <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2.5 text-sm text-fuchsia-600 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:-translate-y-1 whitespace-nowrap shadow-lg">
          Cotton candy sweetness
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-[8px] border-transparent border-t-purple-100"></div>
        </div>
      </div>

      {/* Yellow sunshine */}
      <div className="group relative inline-block">
        <button className="px-6 py-3 text-sm font-medium text-amber-600 bg-amber-100 rounded-full transition-all duration-300 hover:bg-amber-200 hover:shadow-lg hover:shadow-amber-200/50">
          Sunshine
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2.5 text-sm text-amber-600 bg-amber-100 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:-translate-y-1 whitespace-nowrap shadow-lg shadow-amber-100/50">
          Bright and cheerful
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-[8px] border-transparent border-t-amber-100"></div>
        </div>
      </div>
    </div>
  )
}
