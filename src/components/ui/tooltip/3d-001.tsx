export default function ThreeDTooltip() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-16 flex flex-col items-center justify-center gap-20">
      <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide transform perspective-500 rotate-x-12"
          style={{textShadow: '2px 2px 4px rgba(0,0,0,0.2)'}}>
        3D Tooltips
      </h2>

      {/* Top */}
      <div className="group relative inline-block">
        <button className="px-8 py-4 text-sm font-bold text-white bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg transform transition-all duration-300 hover:scale-105 hover:rotate-1"
                style={{
                  boxShadow: '0 8px 0 #1e40af, 0 12px 20px rgba(0,0,0,0.3)',
                  transform: 'translateY(-4px)'
                }}>
          Hover Top
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 px-6 py-4 text-sm font-semibold text-gray-800 bg-white rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap transform"
             style={{
               boxShadow: '0 4px 0 #d1d5db, 0 8px 25px rgba(0,0,0,0.25)',
               transform: 'translateY(-8px) rotateX(5deg)'
             }}>
          3D depth effect
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 -mt-2"
               style={{boxShadow: '2px 2px 0 #d1d5db'}}></div>
        </div>
      </div>

      {/* Bottom */}
      <div className="group relative inline-block">
        <button className="px-8 py-4 text-sm font-bold text-white bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg transform transition-all duration-300 hover:scale-105 hover:rotate-[-1deg]"
                style={{
                  boxShadow: '0 8px 0 #6b21a8, 0 12px 20px rgba(0,0,0,0.3)',
                  transform: 'translateY(-4px)'
                }}>
          Hover Bottom
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 px-6 py-4 text-sm font-semibold text-gray-800 bg-white rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap transform"
             style={{
               boxShadow: '0 4px 0 #d1d5db, 0 8px 25px rgba(0,0,0,0.25)',
               transform: 'translateY(8px) rotateX(-5deg)'
             }}>
          Elevated design
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 mb-[-10px]"
               style={{boxShadow: '-2px -2px 0 #d1d5db'}}></div>
        </div>
      </div>

      {/* Left & Right */}
      <div className="flex gap-32">
        <div className="group relative inline-block">
          <button className="px-8 py-4 text-sm font-bold text-white bg-gradient-to-br from-green-500 to-green-600 rounded-lg transform transition-all duration-300 hover:scale-105 hover:rotate-2"
                  style={{
                    boxShadow: '0 8px 0 #15803d, 0 12px 20px rgba(0,0,0,0.3)',
                    transform: 'translateY(-4px)'
                  }}>
            Hover Left
          </button>
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-6 px-6 py-4 text-sm font-semibold text-gray-800 bg-white rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap transform"
               style={{
                 boxShadow: '0 4px 0 #d1d5db, 0 8px 25px rgba(0,0,0,0.25)',
                 transform: 'translateX(-8px) rotateY(5deg)'
               }}>
            Popping out
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 ml-[-10px]"
                 style={{boxShadow: '2px -2px 0 #d1d5db'}}></div>
          </div>
        </div>

        <div className="group relative inline-block">
          <button className="px-8 py-4 text-sm font-bold text-white bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg transform transition-all duration-300 hover:scale-105 hover:rotate-[-2deg]"
                  style={{
                    boxShadow: '0 8px 0 #c2410c, 0 12px 20px rgba(0,0,0,0.3)',
                    transform: 'translateY(-4px)'
                  }}>
            Hover Right
          </button>
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-6 px-6 py-4 text-sm font-semibold text-gray-800 bg-white rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap transform"
               style={{
                 boxShadow: '0 4px 0 #d1d5db, 0 8px 25px rgba(0,0,0,0.25)',
                 transform: 'translateX(8px) rotateY(-5deg)'
               }}>
            Floating style
            <div className="absolute right-full top-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 mr-[-10px]"
                 style={{boxShadow: '-2px 2px 0 #d1d5db'}}></div>
          </div>
        </div>
      </div>

      {/* Embossed button */}
      <div className="group relative inline-block">
        <button className="px-8 py-4 text-sm font-bold text-gray-700 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg border-t-2 border-l-2 border-white border-r-2 border-b-2 border-gray-400 transform transition-all duration-300 hover:scale-105"
                style={{
                  boxShadow: 'inset -2px -2px 8px rgba(0,0,0,0.2), inset 2px 2px 8px rgba(255,255,255,0.8), 0 8px 0 #9ca3af, 0 12px 20px rgba(0,0,0,0.3)',
                  transform: 'translateY(-4px)'
                }}>
          Embossed
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 px-6 py-4 text-sm font-semibold text-gray-700 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl border-2 border-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap"
             style={{
               boxShadow: 'inset -2px -2px 8px rgba(0,0,0,0.2), inset 2px 2px 8px rgba(255,255,255,0.8), 0 4px 0 #9ca3af, 0 8px 25px rgba(0,0,0,0.25)'
             }}>
          Raised surface
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-gray-200 to-gray-300 rotate-45 mb-[-10px]"
               style={{boxShadow: '-2px -2px 4px rgba(255,255,255,0.8)'}}></div>
        </div>
      </div>

      {/* Multiline with shadow layers */}
      <div className="group relative inline-block">
        <span className="text-sm font-bold text-gray-700 border-b-4 border-gray-400 cursor-help"
              style={{textShadow: '2px 2px 0 rgba(0,0,0,0.1)'}}>
          More Info
        </span>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 px-6 py-5 text-sm font-semibold text-gray-800 bg-white rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-80 transform"
             style={{
               boxShadow: '0 4px 0 #d1d5db, 0 8px 0 #e5e7eb, 0 12px 25px rgba(0,0,0,0.3)',
               transform: 'translateY(-12px) rotateX(5deg)'
             }}>
          <div className="space-y-2">
            <p style={{textShadow: '1px 1px 0 rgba(0,0,0,0.05)'}}>Multiple layers of depth</p>
            <p style={{textShadow: '1px 1px 0 rgba(0,0,0,0.05)'}}>Realistic shadow stacking</p>
            <p style={{textShadow: '1px 1px 0 rgba(0,0,0,0.05)'}}>3D perspective effects</p>
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 -mt-2"
               style={{boxShadow: '2px 2px 0 #d1d5db'}}></div>
        </div>
      </div>

      {/* Interactive with pressed effect */}
      <div className="group relative inline-block">
        <button className="px-8 py-4 text-sm font-bold text-white bg-gradient-to-br from-red-500 to-red-600 rounded-lg transform transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  boxShadow: '0 8px 0 #991b1b, 0 12px 20px rgba(0,0,0,0.3)',
                  transform: 'translateY(-4px)'
                }}>
          Press Me
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 px-6 py-5 bg-white rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64"
             style={{
               boxShadow: '0 4px 0 #d1d5db, 0 8px 25px rgba(0,0,0,0.25)',
               transform: 'translateY(8px)'
             }}>
          <p className="text-sm font-semibold text-gray-800 mb-4"
             style={{textShadow: '1px 1px 0 rgba(0,0,0,0.05)'}}>
            Confirm action?
          </p>
          <button className="w-full px-4 py-3 text-sm font-bold text-white bg-gradient-to-br from-red-500 to-red-600 rounded-lg transform transition-all duration-200 active:scale-95"
                  style={{
                    boxShadow: '0 4px 0 #991b1b, 0 6px 15px rgba(0,0,0,0.2)',
                    transform: 'translateY(-2px)'
                  }}>
            Confirm
          </button>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 mb-[-10px]"
               style={{boxShadow: '-2px -2px 0 #d1d5db'}}></div>
        </div>
      </div>

      {/* Floating orb */}
      <div className="group relative inline-block">
        <div className="w-16 h-16 flex items-center justify-center text-xl font-bold text-white bg-gradient-to-br from-pink-500 to-pink-600 rounded-full cursor-pointer transform transition-all duration-300 hover:scale-110 animate-bounce"
             style={{
               boxShadow: '0 8px 0 #be185d, 0 12px 30px rgba(236,72,153,0.5)',
               transform: 'translateY(-4px)'
             }}>
          <span style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>?</span>
        </div>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 px-6 py-4 text-sm font-semibold text-gray-800 bg-white rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap transform"
             style={{
               boxShadow: '0 4px 0 #d1d5db, 0 8px 25px rgba(0,0,0,0.25)',
               transform: 'translateY(-8px) scale(1.05)'
             }}>
          Floating help button
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 -mt-2"
               style={{boxShadow: '2px 2px 0 #d1d5db'}}></div>
        </div>
      </div>
    </div>
  )
}
