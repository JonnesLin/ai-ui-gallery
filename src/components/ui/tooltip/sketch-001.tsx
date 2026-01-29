export default function SketchTooltip() {
  return (
    <div className="min-h-screen bg-[#fdfcf9] p-16 flex flex-col items-center justify-center gap-20">
      <h2 className="text-lg font-handwriting text-gray-700 border-b-2 border-gray-700 pb-1 skew-x-[-2deg]">~ Sketch Tooltips ~</h2>

      {/* Top */}
      <div className="group relative inline-block">
        <button className="px-7 py-3 text-sm font-medium text-gray-800 bg-white border-2 border-gray-700 rounded-none relative transform rotate-[-0.5deg] transition-all duration-200 hover:rotate-[0.5deg] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                style={{boxShadow: '2px 2px 0px rgba(0,0,0,0.8)'}}>
          Hover Top
          <div className="absolute inset-0 border border-gray-400 rounded-none transform translate-x-[-2px] translate-y-[-2px] pointer-events-none"></div>
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-5 py-3 text-sm font-handwriting text-gray-800 bg-[#fdfcf9] border-2 border-gray-700 rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap transform rotate-[-1deg]"
             style={{boxShadow: '3px 3px 0px rgba(0,0,0,0.3)'}}>
          ✎ Hand-drawn style!
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-[#fdfcf9] border-r-2 border-b-2 border-gray-700 rotate-45 -mt-[8px]"></div>
        </div>
      </div>

      {/* Bottom */}
      <div className="group relative inline-block">
        <button className="px-7 py-3 text-sm font-medium text-gray-800 bg-yellow-50 border-2 border-gray-700 rounded-none relative transform rotate-[0.5deg] transition-all duration-200 hover:rotate-[-0.5deg] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                style={{boxShadow: '2px 2px 0px rgba(0,0,0,0.8)'}}>
          Hover Bottom
          <div className="absolute inset-0 border border-gray-400 rounded-none transform translate-x-[2px] translate-y-[2px] pointer-events-none"></div>
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-5 py-3 text-sm font-handwriting text-gray-800 bg-yellow-50 border-2 border-gray-700 rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap transform rotate-[1deg]"
             style={{boxShadow: '3px 3px 0px rgba(0,0,0,0.3)'}}>
          ✏ Sketchy vibes
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-50 border-l-2 border-t-2 border-gray-700 rotate-45 mb-[-8px]"></div>
        </div>
      </div>

      {/* Left & Right */}
      <div className="flex gap-32">
        <div className="group relative inline-block">
          <button className="px-7 py-3 text-sm font-medium text-gray-800 bg-blue-50 border-2 border-gray-700 rounded-none relative transform rotate-[-0.5deg] transition-all duration-200 hover:rotate-[1deg] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                  style={{boxShadow: '2px 2px 0px rgba(0,0,0,0.8)'}}>
            Hover Left
            <div className="absolute inset-0 border border-gray-400 rounded-none transform translate-x-[-2px] translate-y-[2px] pointer-events-none"></div>
          </button>
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-5 py-3 text-sm font-handwriting text-gray-800 bg-blue-50 border-2 border-gray-700 rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap transform rotate-[-1deg]"
               style={{boxShadow: '3px 3px 0px rgba(0,0,0,0.3)'}}>
            ← Left side
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-50 border-r-2 border-t-2 border-gray-700 rotate-45 ml-[-8px]"></div>
          </div>
        </div>

        <div className="group relative inline-block">
          <button className="px-7 py-3 text-sm font-medium text-gray-800 bg-pink-50 border-2 border-gray-700 rounded-none relative transform rotate-[0.5deg] transition-all duration-200 hover:rotate-[-1deg] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                  style={{boxShadow: '2px 2px 0px rgba(0,0,0,0.8)'}}>
            Hover Right
            <div className="absolute inset-0 border border-gray-400 rounded-none transform translate-x-[2px] translate-y-[-2px] pointer-events-none"></div>
          </button>
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-5 py-3 text-sm font-handwriting text-gray-800 bg-pink-50 border-2 border-gray-700 rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap transform rotate-[1deg]"
               style={{boxShadow: '3px 3px 0px rgba(0,0,0,0.3)'}}>
            Right side →
            <div className="absolute right-full top-1/2 -translate-y-1/2 w-3 h-3 bg-pink-50 border-l-2 border-b-2 border-gray-700 rotate-45 mr-[-8px]"></div>
          </div>
        </div>
      </div>

      {/* Multiline sketch */}
      <div className="group relative inline-block">
        <span className="text-sm font-handwriting text-gray-700 border-b-2 border-dashed border-gray-600 cursor-help">
          ✎ What's this?
        </span>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-6 py-4 text-sm font-handwriting text-gray-800 bg-[#fdfcf9] border-2 border-gray-700 rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-72 transform rotate-[-0.5deg]"
             style={{boxShadow: '4px 4px 0px rgba(0,0,0,0.3)'}}>
          <div className="space-y-2">
            <p>~ Drawn by hand appearance ~</p>
            <p>~ Imperfect and charming ~</p>
            <p>~ Like a notebook sketch ~</p>
          </div>
          <div className="absolute bottom-2 right-2 text-xs opacity-50">✏</div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-[#fdfcf9] border-r-2 border-b-2 border-gray-700 rotate-45 -mt-[8px]"></div>
        </div>
      </div>

      {/* With doodle button */}
      <div className="group relative inline-block">
        <button className="px-7 py-3 text-sm font-medium text-gray-800 bg-green-50 border-2 border-gray-700 rounded-none relative transform rotate-[-0.5deg] transition-all duration-200 hover:rotate-[0.5deg] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                style={{boxShadow: '2px 2px 0px rgba(0,0,0,0.8)'}}>
          Doodle Action
          <div className="absolute inset-0 border border-gray-400 rounded-none transform translate-x-[-2px] translate-y-[-2px] pointer-events-none"></div>
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-6 py-5 bg-green-50 border-2 border-gray-700 rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64 transform rotate-[0.5deg]"
             style={{boxShadow: '4px 4px 0px rgba(0,0,0,0.3)'}}>
          <p className="text-sm font-handwriting text-gray-800 mb-3">~ Click to continue ~</p>
          <button className="w-full px-4 py-2 text-sm font-medium text-gray-800 bg-yellow-100 border-2 border-gray-700 rounded-none relative transition-all duration-200 hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] transform rotate-[-0.5deg]"
                  style={{boxShadow: '2px 2px 0px rgba(0,0,0,0.8)'}}>
            ✓ OK!
          </button>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-3 h-3 bg-green-50 border-l-2 border-t-2 border-gray-700 rotate-45 mb-[-8px]"></div>
        </div>
      </div>

      {/* Icon with sketch style */}
      <div className="group relative inline-block">
        <div className="w-14 h-14 flex items-center justify-center text-xl font-bold text-gray-800 bg-orange-50 border-2 border-gray-700 rounded-full cursor-pointer transform rotate-[-2deg] transition-all duration-200 hover:rotate-[2deg] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]"
             style={{boxShadow: '2px 2px 0px rgba(0,0,0,0.8)'}}>
          ?
          <div className="absolute inset-0 border border-gray-400 rounded-full transform translate-x-[-2px] translate-y-[-2px] pointer-events-none"></div>
        </div>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-5 py-3 text-sm font-handwriting text-gray-800 bg-orange-50 border-2 border-gray-700 rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap transform rotate-[1deg]"
             style={{boxShadow: '3px 3px 0px rgba(0,0,0,0.3)'}}>
          ✎ Help & Info
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-50 border-r-2 border-b-2 border-gray-700 rotate-45 -mt-[8px]"></div>
        </div>
      </div>
    </div>
  )
}
