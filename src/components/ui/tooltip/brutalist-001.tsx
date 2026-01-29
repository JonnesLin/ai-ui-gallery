export default function BrutalistTooltip() {
  return (
    <div className="min-h-screen bg-yellow-300 p-16 flex flex-col items-center justify-center gap-20">
      <h2 className="text-sm font-black text-black uppercase tracking-widest">Brutalist Tooltips</h2>

      {/* Top */}
      <div className="group relative inline-block">
        <button className="px-6 py-3 text-sm font-black uppercase text-black bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-1 active:translate-y-1">
          Hover Top
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-4 py-2 text-sm font-black uppercase text-black bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 whitespace-nowrap">
          Raw and bold!
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-4 border-b-4 border-black rotate-45 -mt-2"></div>
        </div>
      </div>

      {/* Bottom */}
      <div className="group relative inline-block">
        <button className="px-6 py-3 text-sm font-black uppercase text-black bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]">
          Hover Bottom
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-4 py-2 text-sm font-black uppercase text-black bg-cyan-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 whitespace-nowrap">
          No subtlety here
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 border-l-4 border-t-4 border-black rotate-45 -mb-2"></div>
        </div>
      </div>

      {/* Left & Right */}
      <div className="flex gap-24">
        <div className="group relative inline-block">
          <button className="px-6 py-3 text-sm font-black uppercase text-black bg-pink-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]">
            Left
          </button>
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-4 py-2 text-sm font-black uppercase text-black bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 whitespace-nowrap">
            Brutal left
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-r-4 border-t-4 border-black rotate-45 -ml-2"></div>
          </div>
        </div>

        <div className="group relative inline-block">
          <button className="px-6 py-3 text-sm font-black uppercase text-black bg-lime-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]">
            Right
          </button>
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-4 py-2 text-sm font-black uppercase text-black bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 whitespace-nowrap">
            Brutal right
            <div className="absolute right-full top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-l-4 border-b-4 border-black rotate-45 -mr-2"></div>
          </div>
        </div>
      </div>

      {/* Inverted */}
      <div className="group relative inline-block">
        <button className="px-6 py-3 text-sm font-black uppercase text-white bg-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px]">
          Inverted
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-4 py-2 text-sm font-black uppercase text-white bg-black border-4 border-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 whitespace-nowrap">
          Dark brutal mode
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-r-4 border-b-4 border-white rotate-45 -mt-2"></div>
        </div>
      </div>

      {/* Striped */}
      <div className="group relative inline-block">
        <button className="px-6 py-3 text-sm font-black uppercase text-black bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]">
          Striped
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-4 py-2 text-sm font-black uppercase text-black bg-[repeating-linear-gradient(45deg,white,white_10px,black_10px,black_12px)] border-4 border-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 whitespace-nowrap">
          <span className="bg-white px-1">Danger zone</span>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-4 border-b-4 border-black rotate-45 -mt-2"></div>
        </div>
      </div>
    </div>
  )
}
