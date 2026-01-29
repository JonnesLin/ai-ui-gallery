export default function MonochromeTooltip() {
  return (
    <div className="min-h-screen bg-white p-16 flex flex-col items-center justify-center gap-20">
      <h2 className="text-xs font-bold text-black uppercase tracking-[0.3em]">Monochrome Tooltips</h2>

      {/* Top */}
      <div className="group relative inline-block">
        <button className="px-8 py-3 text-sm font-medium text-white bg-black border-2 border-black transition-all duration-300 hover:bg-gray-900">
          Hover Top
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-5 py-3 text-xs font-medium text-white bg-black border-2 border-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
          Pure black and white
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-black border-black rotate-45 -mt-[8px]"></div>
        </div>
      </div>

      {/* Bottom */}
      <div className="group relative inline-block">
        <button className="px-8 py-3 text-sm font-medium text-black bg-white border-2 border-black transition-all duration-300 hover:bg-gray-100">
          Hover Bottom
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-5 py-3 text-xs font-medium text-black bg-white border-2 border-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
          High contrast design
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-black rotate-45 mb-[-8px]"></div>
        </div>
      </div>

      {/* Left & Right */}
      <div className="flex gap-32">
        <div className="group relative inline-block">
          <button className="px-8 py-3 text-sm font-medium text-white bg-gray-800 border-2 border-black transition-all duration-300 hover:bg-gray-700">
            Hover Left
          </button>
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-5 py-3 text-xs font-medium text-white bg-gray-800 border-2 border-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
            Minimal palette
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-800 border-black rotate-45 ml-[-8px]"></div>
          </div>
        </div>

        <div className="group relative inline-block">
          <button className="px-8 py-3 text-sm font-medium text-black bg-gray-200 border-2 border-black transition-all duration-300 hover:bg-gray-300">
            Hover Right
          </button>
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-5 py-3 text-xs font-medium text-black bg-gray-200 border-2 border-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
            Grayscale only
            <div className="absolute right-full top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-200 border-black rotate-45 mr-[-8px]"></div>
          </div>
        </div>
      </div>

      {/* Inverted style */}
      <div className="group relative inline-block">
        <button className="px-8 py-3 text-sm font-medium text-black bg-white border-2 border-black transition-all duration-300 hover:text-white hover:bg-black">
          Inverted Hover
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-5 py-3 text-xs font-medium text-white bg-black border-2 border-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
          Inverted on hover
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-3 h-3 bg-black border-black rotate-45 mb-[-8px]"></div>
        </div>
      </div>

      {/* Striped pattern */}
      <div className="group relative inline-block">
        <button className="px-8 py-3 text-sm font-medium text-white bg-black border-2 border-black relative overflow-hidden transition-all duration-300">
          <span className="relative z-10">Striped Pattern</span>
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]"></div>
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-5 py-3 text-xs font-medium text-white bg-black border-2 border-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap relative overflow-hidden">
          <span className="relative z-10">Striped tooltip</span>
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]"></div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-black border-black rotate-45 -mt-[8px] z-20"></div>
        </div>
      </div>

      {/* Multiline monochrome */}
      <div className="group relative inline-block">
        <span className="text-sm font-medium text-black border-b-2 border-black cursor-help">
          More Information
        </span>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-6 py-4 text-xs font-medium text-white bg-black border-2 border-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-72">
          <div className="space-y-2">
            <p className="border-b border-gray-600 pb-2">Monochrome Design</p>
            <p>Uses only black, white, and gray</p>
            <p>Maximum contrast and clarity</p>
            <p>Timeless aesthetic</p>
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-black border-black rotate-45 -mt-[8px]"></div>
        </div>
      </div>

      {/* With button action */}
      <div className="group relative inline-block">
        <button className="px-8 py-3 text-sm font-medium text-white bg-black border-2 border-black transition-all duration-300 hover:bg-gray-900">
          Action Tooltip
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-6 py-5 bg-white border-2 border-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64">
          <p className="text-xs font-medium text-black mb-3">Confirm your action</p>
          <button className="w-full px-4 py-2 text-sm font-medium text-white bg-black border-2 border-black transition-all duration-200 hover:bg-gray-900">
            Confirm
          </button>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-black rotate-45 mb-[-8px]"></div>
        </div>
      </div>

      {/* Outlined style */}
      <div className="group relative inline-block">
        <div className="w-14 h-14 flex items-center justify-center text-xl font-bold text-black bg-white border-4 border-black cursor-pointer transition-all duration-300 hover:bg-black hover:text-white">
          i
        </div>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-5 py-3 text-xs font-medium text-black bg-white border-4 border-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
          Information icon
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-black rotate-45 -mt-[9px] border-r-4 border-b-4"></div>
        </div>
      </div>

      {/* Dotted border variant */}
      <div className="group relative inline-block">
        <button className="px-8 py-3 text-sm font-medium text-black bg-white border-2 border-dashed border-black transition-all duration-300 hover:bg-gray-50">
          Dotted Style
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-5 py-3 text-xs font-medium text-black bg-white border-2 border-dashed border-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
          Dotted border variant
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l-2 border-t-2 border-dashed border-black rotate-45 mb-[-8px]"></div>
        </div>
      </div>
    </div>
  )
}
