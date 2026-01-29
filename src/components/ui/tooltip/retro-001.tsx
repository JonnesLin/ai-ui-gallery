export default function RetroTooltip() {
  return (
    <div className="min-h-screen bg-amber-100 p-16 flex flex-col items-center justify-center gap-20" style={{ fontFamily: 'Georgia, serif' }}>
      <h2 className="text-sm font-bold text-amber-800 uppercase tracking-widest">Retro Tooltips</h2>

      {/* Top - Classic */}
      <div className="group relative inline-block">
        <button className="px-6 py-3 text-sm font-bold text-amber-900 bg-amber-200 border-2 border-amber-800 rounded shadow-[3px_3px_0px_0px_rgba(120,53,15,0.5)] transition-all duration-200 hover:bg-amber-300 hover:shadow-[2px_2px_0px_0px_rgba(120,53,15,0.5)]">
          Hover Top
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 text-sm text-amber-900 bg-amber-50 border-2 border-amber-800 rounded shadow-[3px_3px_0px_0px_rgba(120,53,15,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
          Classic vintage style
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-amber-50 border-r-2 border-b-2 border-amber-800 rotate-45 -mt-[7px]"></div>
        </div>
      </div>

      {/* Bottom - Typewriter */}
      <div className="group relative inline-block">
        <button className="px-6 py-3 text-sm font-bold text-stone-800 bg-stone-200 border-2 border-stone-600 rounded transition-all duration-200 hover:bg-stone-300" style={{ fontFamily: 'Courier New, monospace' }}>
          Hover Bottom
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-4 py-2 text-sm text-stone-800 bg-stone-100 border-2 border-stone-600 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap" style={{ fontFamily: 'Courier New, monospace' }}>
          &gt;&gt; Typewriter effect
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-3 h-3 bg-stone-100 border-l-2 border-t-2 border-stone-600 rotate-45 -mb-[7px]"></div>
        </div>
      </div>

      {/* Left & Right */}
      <div className="flex gap-24">
        <div className="group relative inline-block">
          <button className="px-6 py-3 text-sm font-bold text-rose-900 bg-rose-200 border-2 border-rose-800 rounded-full shadow-[2px_2px_0px_0px_rgba(136,19,55,0.4)] transition-all duration-200 hover:bg-rose-300">
            Hover Left
          </button>
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-4 py-2 text-sm text-rose-900 bg-rose-50 border-2 border-rose-800 rounded shadow-[2px_2px_0px_0px_rgba(136,19,55,0.4)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
          Vintage rose
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-3 h-3 bg-rose-50 border-r-2 border-t-2 border-rose-800 rotate-45 -ml-[7px]"></div>
          </div>
        </div>

        <div className="group relative inline-block">
          <button className="px-6 py-3 text-sm font-bold text-teal-900 bg-teal-200 border-2 border-teal-800 rounded-full shadow-[2px_2px_0px_0px_rgba(19,78,74,0.4)] transition-all duration-200 hover:bg-teal-300">
            Hover Right
          </button>
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-4 py-2 text-sm text-teal-900 bg-teal-50 border-2 border-teal-800 rounded shadow-[2px_2px_0px_0px_rgba(19,78,74,0.4)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
            Art deco feel
            <div className="absolute right-full top-1/2 -translate-y-1/2 w-3 h-3 bg-teal-50 border-l-2 border-b-2 border-teal-800 rotate-45 -mr-[7px]"></div>
          </div>
        </div>
      </div>

      {/* Ornate */}
      <div className="group relative inline-block">
        <button className="px-8 py-3 text-sm font-bold text-amber-900 bg-gradient-to-b from-amber-200 to-amber-300 border-2 border-amber-700 rounded transition-all duration-200 hover:from-amber-300 hover:to-amber-400">
          Ornate Style
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
          <div className="relative px-6 py-3 text-sm text-amber-900 bg-amber-50 border-2 border-amber-700 rounded">
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-amber-700"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-amber-700"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-amber-700"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-amber-700"></div>
            Elegant corner details
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-amber-50 border-r-2 border-b-2 border-amber-700 rotate-45 -mt-[7px]"></div>
        </div>
      </div>

      {/* Stamp style */}
      <div className="group relative inline-block">
        <div className="px-4 py-2 text-sm font-bold text-red-800 border-2 border-red-800 border-dashed cursor-help rotate-[-2deg]">
          CLASSIFIED
        </div>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 text-sm text-red-900 bg-red-50 border-2 border-red-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap rotate-[-1deg]">
          Top secret information
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-red-50 border-r-2 border-b-2 border-red-800 rotate-45 -mt-[7px]"></div>
        </div>
      </div>
    </div>
  )
}
