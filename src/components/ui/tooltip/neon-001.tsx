export default function NeonTooltip() {
  return (
    <div className="min-h-screen bg-black p-16 flex flex-col items-center justify-center gap-24 relative overflow-hidden">
      {/* Neon glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>

      <h2 className="text-lg font-bold text-pink-500 uppercase tracking-[0.3em] relative z-10"
          style={{textShadow: '0 0 10px rgba(236,72,153,0.8), 0 0 20px rgba(236,72,153,0.5), 0 0 30px rgba(236,72,153,0.3)'}}>
        Neon Tooltips
      </h2>

      {/* Top */}
      <div className="group relative inline-block z-10">
        <button className="px-8 py-3 text-sm font-bold text-pink-500 bg-black border-2 border-pink-500 uppercase tracking-wider transition-all duration-300 hover:bg-pink-500 hover:text-black hover:shadow-[0_0_30px_rgba(236,72,153,0.8)]"
                style={{boxShadow: '0 0 10px rgba(236,72,153,0.5), inset 0 0 10px rgba(236,72,153,0.2)'}}>
          Hover Top
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-5 px-6 py-4 text-xs font-bold text-pink-400 bg-black border-2 border-pink-500 uppercase tracking-wider opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap"
             style={{boxShadow: '0 0 20px rgba(236,72,153,0.8), 0 0 40px rgba(236,72,153,0.5), inset 0 0 20px rgba(236,72,153,0.1)'}}>
          Glowing neon vibes
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-black border-r-2 border-b-2 border-pink-500 rotate-45 -mt-[8px]"
               style={{boxShadow: '0 0 10px rgba(236,72,153,0.8)'}}></div>
        </div>
      </div>

      {/* Bottom */}
      <div className="group relative inline-block z-10">
        <button className="px-8 py-3 text-sm font-bold text-cyan-400 bg-black border-2 border-cyan-400 uppercase tracking-wider transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]"
                style={{boxShadow: '0 0 10px rgba(34,211,238,0.5), inset 0 0 10px rgba(34,211,238,0.2)'}}>
          Hover Bottom
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-5 px-6 py-4 text-xs font-bold text-cyan-300 bg-black border-2 border-cyan-400 uppercase tracking-wider opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap"
             style={{boxShadow: '0 0 20px rgba(34,211,238,0.8), 0 0 40px rgba(34,211,238,0.5), inset 0 0 20px rgba(34,211,238,0.1)'}}>
          Electric blue glow
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-3 h-3 bg-black border-l-2 border-t-2 border-cyan-400 rotate-45 mb-[-8px]"
               style={{boxShadow: '0 0 10px rgba(34,211,238,0.8)'}}></div>
        </div>
      </div>

      {/* Left & Right */}
      <div className="flex gap-40 z-10">
        <div className="group relative inline-block">
          <button className="px-8 py-3 text-sm font-bold text-purple-400 bg-black border-2 border-purple-400 uppercase tracking-wider transition-all duration-300 hover:bg-purple-400 hover:text-black hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]"
                  style={{boxShadow: '0 0 10px rgba(168,85,247,0.5), inset 0 0 10px rgba(168,85,247,0.2)'}}>
            Hover Left
          </button>
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-5 px-6 py-4 text-xs font-bold text-purple-300 bg-black border-2 border-purple-400 uppercase tracking-wider opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap"
               style={{boxShadow: '0 0 20px rgba(168,85,247,0.8), 0 0 40px rgba(168,85,247,0.5), inset 0 0 20px rgba(168,85,247,0.1)'}}>
            Purple power
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-3 h-3 bg-black border-r-2 border-t-2 border-purple-400 rotate-45 ml-[-8px]"
                 style={{boxShadow: '0 0 10px rgba(168,85,247,0.8)'}}></div>
          </div>
        </div>

        <div className="group relative inline-block">
          <button className="px-8 py-3 text-sm font-bold text-green-400 bg-black border-2 border-green-400 uppercase tracking-wider transition-all duration-300 hover:bg-green-400 hover:text-black hover:shadow-[0_0_30px_rgba(74,222,128,0.8)]"
                  style={{boxShadow: '0 0 10px rgba(74,222,128,0.5), inset 0 0 10px rgba(74,222,128,0.2)'}}>
            Hover Right
          </button>
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-5 px-6 py-4 text-xs font-bold text-green-300 bg-black border-2 border-green-400 uppercase tracking-wider opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap"
               style={{boxShadow: '0 0 20px rgba(74,222,128,0.8), 0 0 40px rgba(74,222,128,0.5), inset 0 0 20px rgba(74,222,128,0.1)'}}>
            Neon green
            <div className="absolute right-full top-1/2 -translate-y-1/2 w-3 h-3 bg-black border-l-2 border-b-2 border-green-400 rotate-45 mr-[-8px]"
                 style={{boxShadow: '0 0 10px rgba(74,222,128,0.8)'}}></div>
          </div>
        </div>
      </div>

      {/* Multiline neon */}
      <div className="group relative inline-block z-10">
        <span className="text-sm font-bold text-yellow-400 border-b-2 border-yellow-400 cursor-help uppercase tracking-wider"
              style={{textShadow: '0 0 10px rgba(250,204,21,0.8)'}}>
          Info Here
        </span>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-5 px-6 py-5 text-xs font-bold text-yellow-300 bg-black border-2 border-yellow-400 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-80"
             style={{boxShadow: '0 0 20px rgba(250,204,21,0.8), 0 0 40px rgba(250,204,21,0.5), inset 0 0 20px rgba(250,204,21,0.1)'}}>
          <div className="space-y-2 uppercase tracking-wide">
            <p style={{textShadow: '0 0 5px rgba(250,204,21,0.5)'}}>Neon lights everywhere</p>
            <p style={{textShadow: '0 0 5px rgba(250,204,21,0.5)'}}>Retro cyberpunk aesthetic</p>
            <p style={{textShadow: '0 0 5px rgba(250,204,21,0.5)'}}>Glowing in the dark</p>
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-black border-r-2 border-b-2 border-yellow-400 rotate-45 -mt-[8px]"
               style={{boxShadow: '0 0 10px rgba(250,204,21,0.8)'}}></div>
        </div>
      </div>

      {/* Interactive with button */}
      <div className="group relative inline-block z-10">
        <button className="px-8 py-3 text-sm font-bold text-orange-400 bg-black border-2 border-orange-400 uppercase tracking-wider transition-all duration-300 hover:bg-orange-400 hover:text-black hover:shadow-[0_0_30px_rgba(251,146,60,0.8)]"
                style={{boxShadow: '0 0 10px rgba(251,146,60,0.5), inset 0 0 10px rgba(251,146,60,0.2)'}}>
          Action Glow
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-5 px-6 py-5 bg-black border-2 border-orange-400 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64"
             style={{boxShadow: '0 0 20px rgba(251,146,60,0.8), 0 0 40px rgba(251,146,60,0.5), inset 0 0 20px rgba(251,146,60,0.1)'}}>
          <p className="text-xs font-bold text-orange-300 mb-4 uppercase tracking-wide"
             style={{textShadow: '0 0 5px rgba(251,146,60,0.5)'}}>
            Click to activate
          </p>
          <button className="w-full px-4 py-3 text-sm font-bold text-black bg-orange-400 border-2 border-orange-400 uppercase tracking-wider transition-all duration-200 hover:shadow-[0_0_20px_rgba(251,146,60,1)]"
                  style={{boxShadow: '0 0 10px rgba(251,146,60,0.8)'}}>
            Activate
          </button>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-3 h-3 bg-black border-l-2 border-t-2 border-orange-400 rotate-45 mb-[-8px]"
               style={{boxShadow: '0 0 10px rgba(251,146,60,0.8)'}}></div>
        </div>
      </div>

      {/* Pulsing icon */}
      <div className="group relative inline-block z-10">
        <div className="w-16 h-16 flex items-center justify-center text-xl font-bold text-pink-400 bg-black border-2 border-pink-500 cursor-pointer transition-all duration-300 animate-pulse hover:animate-none"
             style={{boxShadow: '0 0 20px rgba(236,72,153,0.8), 0 0 40px rgba(236,72,153,0.5), inset 0 0 10px rgba(236,72,153,0.2)'}}>
          <span style={{textShadow: '0 0 10px rgba(236,72,153,1)'}}>★</span>
        </div>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-5 px-6 py-4 text-xs font-bold text-pink-300 bg-black border-2 border-pink-500 uppercase tracking-wider opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap"
             style={{boxShadow: '0 0 20px rgba(236,72,153,0.8), 0 0 40px rgba(236,72,153,0.5), inset 0 0 20px rgba(236,72,153,0.1)'}}>
          Neon star effect
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-black border-r-2 border-b-2 border-pink-500 rotate-45 -mt-[8px]"
               style={{boxShadow: '0 0 10px rgba(236,72,153,0.8)'}}></div>
        </div>
      </div>

      {/* Multi-color gradient neon */}
      <div className="group relative inline-block z-10">
        <button className="px-8 py-3 text-sm font-bold text-white bg-black border-2 border-transparent uppercase tracking-wider transition-all duration-300 relative overflow-hidden"
                style={{
                  borderImage: 'linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6, #06b6d4) 1',
                  boxShadow: '0 0 10px rgba(236,72,153,0.5), 0 0 20px rgba(139,92,246,0.5)'
                }}>
          <span className="relative z-10"
                style={{
                  background: 'linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
            Rainbow Glow
          </span>
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-5 px-6 py-4 text-xs font-bold bg-black border-2 border-transparent uppercase tracking-wider opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap"
             style={{
               borderImage: 'linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6, #06b6d4) 1',
               boxShadow: '0 0 20px rgba(236,72,153,0.6), 0 0 40px rgba(139,92,246,0.6), inset 0 0 20px rgba(59,130,246,0.1)'
             }}>
          <span style={{
            background: 'linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Multi-color neon
          </span>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-3 h-3 bg-black rotate-45 mb-[-8px] border-l-2 border-t-2 border-pink-500"
               style={{boxShadow: '0 0 10px rgba(236,72,153,0.8)'}}></div>
        </div>
      </div>
    </div>
  )
}
