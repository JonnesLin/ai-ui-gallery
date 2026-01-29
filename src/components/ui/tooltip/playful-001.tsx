export default function PlayfulTooltip() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-16 flex flex-col items-center justify-center gap-20">
      <h2 className="text-xl font-black text-purple-600 uppercase tracking-wide animate-bounce">Playful Tooltips</h2>

      {/* Top */}
      <div className="group relative inline-block">
        <button className="px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-2xl">
          Hover Top 🎉
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-6 py-3 text-sm font-bold text-purple-800 bg-white rounded-2xl shadow-2xl border-4 border-purple-400 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 group-hover:animate-wiggle whitespace-nowrap">
          ✨ This is so fun! ✨
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-400 rotate-45 -mt-2"></div>
        </div>
      </div>

      {/* Bottom */}
      <div className="group relative inline-block">
        <button className="px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-orange-500 to-pink-500 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:shadow-2xl">
          Hover Bottom 🌈
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-6 py-3 text-sm font-bold text-orange-800 bg-white rounded-2xl shadow-2xl border-4 border-orange-400 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
          🎨 Colorful and bouncy!
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-400 rotate-45 mb-[-10px]"></div>
        </div>
      </div>

      {/* Left & Right */}
      <div className="flex gap-32">
        <div className="group relative inline-block">
          <button className="px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-2xl">
            Hover Left 🎈
          </button>
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-6 py-3 text-sm font-bold text-green-800 bg-white rounded-2xl shadow-2xl border-4 border-green-400 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
            🌟 Left side magic
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-4 h-4 bg-green-400 rotate-45 ml-[-10px]"></div>
          </div>
        </div>

        <div className="group relative inline-block">
          <button className="px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:-rotate-6 hover:shadow-2xl">
            Hover Right 🚀
          </button>
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-6 py-3 text-sm font-bold text-blue-800 bg-white rounded-2xl shadow-2xl border-4 border-blue-400 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
            🎪 Right side fun!
            <div className="absolute right-full top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rotate-45 mr-[-10px]"></div>
          </div>
        </div>
      </div>

      {/* Multiline with emoji */}
      <div className="group relative inline-block">
        <span className="text-lg font-black text-purple-600 underline decoration-wavy decoration-pink-400 decoration-4 cursor-help">
          Click me! 🎯
        </span>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-6 py-4 text-sm font-bold text-purple-800 bg-white rounded-2xl shadow-2xl border-4 border-pink-400 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64">
          <div className="space-y-2">
            <p>🎉 Multiple lines of text!</p>
            <p>🌈 So colorful and playful!</p>
            <p>✨ Everything is fun here!</p>
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-4 bg-pink-400 rotate-45 -mt-2"></div>
        </div>
      </div>

      {/* Interactive with button */}
      <div className="group relative inline-block">
        <button className="px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-red-500 to-yellow-500 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-2xl">
          Interactive 🎮
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-6 py-4 bg-white rounded-2xl shadow-2xl border-4 border-red-400 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-56">
          <p className="text-sm font-bold text-red-800 mb-3">🎪 Want more fun?</p>
          <button className="w-full px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105">
            Click Here! 🎉
          </button>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-4 h-4 bg-red-400 rotate-45 mb-[-10px]"></div>
        </div>
      </div>
    </div>
  )
}
