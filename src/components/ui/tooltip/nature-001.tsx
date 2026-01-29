export default function NatureTooltip() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-16 flex flex-col items-center justify-center gap-20">
      <h2 className="text-base font-medium text-green-700 flex items-center gap-2">
        <span>🌿</span>
        <span>Nature Tooltips</span>
        <span>🌿</span>
      </h2>

      {/* Top */}
      <div className="group relative inline-block">
        <button className="px-8 py-3 text-sm font-medium text-green-800 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full border-2 border-green-300 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-green-400">
          🌱 Hover Top
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-5 py-3 text-sm font-medium text-green-900 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-300 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
          🍃 Fresh and natural
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-green-50 to-emerald-50 border-r border-b border-green-300 rotate-45 -mt-[8px]"></div>
        </div>
      </div>

      {/* Bottom */}
      <div className="group relative inline-block">
        <button className="px-8 py-3 text-sm font-medium text-emerald-800 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full border-2 border-emerald-300 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-emerald-400">
          🌸 Hover Bottom
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-5 py-3 text-sm font-medium text-emerald-900 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border-2 border-emerald-300 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
          🌺 Blooming beauty
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-emerald-50 to-teal-50 border-l border-t border-emerald-300 rotate-45 mb-[-8px]"></div>
        </div>
      </div>

      {/* Left & Right */}
      <div className="flex gap-32">
        <div className="group relative inline-block">
          <button className="px-8 py-3 text-sm font-medium text-teal-800 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full border-2 border-teal-300 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-teal-400">
            🌊 Hover Left
          </button>
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-5 py-3 text-sm font-medium text-teal-900 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl border-2 border-teal-300 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
            💧 Refreshing
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-teal-50 to-cyan-50 border-r border-t border-teal-300 rotate-45 ml-[-8px]"></div>
          </div>
        </div>

        <div className="group relative inline-block">
          <button className="px-8 py-3 text-sm font-medium text-lime-800 bg-gradient-to-br from-lime-100 to-green-100 rounded-full border-2 border-lime-300 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-lime-400">
            🌿 Hover Right
          </button>
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-5 py-3 text-sm font-medium text-lime-900 bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl border-2 border-lime-300 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
            🌾 Organic feel
            <div className="absolute right-full top-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-lime-50 to-green-50 border-l border-b border-lime-300 rotate-45 mr-[-8px]"></div>
          </div>
        </div>
      </div>

      {/* Multiline with nature theme */}
      <div className="group relative inline-block">
        <span className="text-sm font-medium text-green-700 border-b-2 border-green-300 border-dotted cursor-help">
          🌳 What's this?
        </span>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-6 py-4 text-sm font-medium text-green-900 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-300 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-72">
          <div className="space-y-2">
            <p>🌱 Inspired by nature's beauty</p>
            <p>🍃 Organic and harmonious design</p>
            <p>🌻 Bringing the outdoors inside</p>
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-green-50 to-emerald-50 border-r border-b border-green-300 rotate-45 -mt-[8px]"></div>
        </div>
      </div>

      {/* With button interaction */}
      <div className="group relative inline-block">
        <button className="px-8 py-3 text-sm font-medium text-green-800 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full border-2 border-green-400 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
          🌈 Explore Nature
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-6 py-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-300 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64">
          <p className="text-sm font-medium text-green-900 mb-3">🌿 Connect with nature</p>
          <button className="w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105">
            🌸 Learn More
          </button>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-green-50 to-emerald-50 border-l border-t border-green-300 rotate-45 mb-[-8px]"></div>
        </div>
      </div>

      {/* Icon hover */}
      <div className="group relative inline-block">
        <div className="w-14 h-14 flex items-center justify-center text-2xl bg-gradient-to-br from-green-100 to-emerald-100 rounded-full border-2 border-green-300 shadow-md cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg">
          🌺
        </div>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-5 py-3 text-sm font-medium text-green-900 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-300 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
          🌼 Flower power
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-green-50 to-emerald-50 border-r border-b border-green-300 rotate-45 -mt-[8px]"></div>
        </div>
      </div>
    </div>
  )
}
