export default function GradientTooltip() {
  return (
    <div className="min-h-screen bg-slate-100 p-16 flex flex-col items-center justify-center gap-20">
      <h2 className="text-sm font-medium text-slate-500 uppercase tracking-widest">Gradient Tooltips</h2>

      {/* Top - Purple to Pink */}
      <div className="group relative inline-block">
        <button className="px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg transition-all duration-300 hover:from-purple-500 hover:to-pink-500 hover:shadow-lg hover:shadow-purple-500/30">
          Hover Top
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2.5 text-sm text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:-translate-y-1 whitespace-nowrap shadow-lg shadow-purple-500/30">
          Purple to pink gradient
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-pink-600"></div>
        </div>
      </div>

      {/* Bottom - Blue to Cyan */}
      <div className="group relative inline-block">
        <button className="px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg transition-all duration-300 hover:from-blue-500 hover:to-cyan-400 hover:shadow-lg hover:shadow-blue-500/30">
          Hover Bottom
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-4 py-2.5 text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1 whitespace-nowrap shadow-lg shadow-blue-500/30">
          Blue to cyan gradient
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-b-blue-600"></div>
        </div>
      </div>

      {/* Left & Right */}
      <div className="flex gap-24">
        <div className="group relative inline-block">
          <button className="px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-lg transition-all duration-300 hover:from-orange-400 hover:to-red-400 hover:shadow-lg hover:shadow-orange-500/30">
            Hover Left
          </button>
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-4 py-2.5 text-sm text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:-translate-x-1 whitespace-nowrap shadow-lg shadow-orange-500/30">
            Warm gradient
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-l-red-500"></div>
          </div>
        </div>

        <div className="group relative inline-block">
          <button className="px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg transition-all duration-300 hover:from-emerald-400 hover:to-teal-400 hover:shadow-lg hover:shadow-emerald-500/30">
            Hover Right
          </button>
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-4 py-2.5 text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-x-1 whitespace-nowrap shadow-lg shadow-emerald-500/30">
            Fresh gradient
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-emerald-500"></div>
          </div>
        </div>
      </div>

      {/* Rainbow gradient */}
      <div className="group relative inline-block">
        <button className="px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/40">
          Rainbow
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2.5 text-sm text-white bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:-translate-y-1 whitespace-nowrap shadow-lg shadow-fuchsia-500/30">
          Multi-color gradient
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-fuchsia-500"></div>
        </div>
      </div>

      {/* Gradient border */}
      <div className="group relative inline-block">
        <button className="px-6 py-3 text-sm font-medium text-slate-700 bg-white rounded-lg border border-slate-200 transition-all duration-300 hover:border-slate-300">
          Gradient Border
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 p-[2px] bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:-translate-y-1 whitespace-nowrap">
          <div className="px-4 py-2 bg-white text-sm text-slate-700 rounded-[6px]">
            Gradient border style
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-pink-600"></div>
        </div>
      </div>
    </div>
  )
}
