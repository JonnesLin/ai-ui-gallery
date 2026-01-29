export default function CyberpunkAvatar() {
  return (
    <div className="p-8 space-y-8 min-h-screen bg-gray-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-950 to-gray-950">
      {/* Sizes */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold tracking-[0.3em] text-cyan-400 uppercase font-mono">Sizes</h3>
        <div className="flex items-end gap-4">
          <div className="relative">
            <img src="https://i.pravatar.cc/32?img=1" alt="Avatar XS" className="w-6 h-6 rounded-sm border border-cyan-500/50" />
            <div className="absolute inset-0 rounded-sm border border-cyan-400/30 animate-pulse"></div>
          </div>
          <div className="relative">
            <img src="https://i.pravatar.cc/40?img=1" alt="Avatar SM" className="w-8 h-8 rounded-sm border border-cyan-500/50" />
            <div className="absolute inset-0 rounded-sm border border-cyan-400/30 animate-pulse"></div>
          </div>
          <div className="relative">
            <img src="https://i.pravatar.cc/48?img=1" alt="Avatar MD" className="w-10 h-10 rounded-sm border border-cyan-500/50" />
            <div className="absolute inset-0 rounded-sm border border-cyan-400/30 animate-pulse"></div>
          </div>
          <div className="relative">
            <img src="https://i.pravatar.cc/64?img=1" alt="Avatar LG" className="w-14 h-14 rounded-sm border-2 border-cyan-500/50" />
            <div className="absolute inset-0 rounded-sm border-2 border-cyan-400/30 animate-pulse"></div>
          </div>
          <div className="relative">
            <img src="https://i.pravatar.cc/80?img=1" alt="Avatar XL" className="w-20 h-20 rounded-sm border-2 border-cyan-500/50" />
            <div className="absolute inset-0 rounded-sm border-2 border-cyan-400/30 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Initials */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold tracking-[0.3em] text-cyan-400 uppercase font-mono">Initials</h3>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-sm bg-gray-900 border border-cyan-500 flex items-center justify-center text-cyan-400 font-mono font-bold shadow-[0_0_10px_rgba(6,182,212,0.5),inset_0_0_20px_rgba(6,182,212,0.1)]">
            JD
          </div>
          <div className="w-12 h-12 rounded-sm bg-gray-900 border border-pink-500 flex items-center justify-center text-pink-400 font-mono font-bold shadow-[0_0_10px_rgba(236,72,153,0.5),inset_0_0_20px_rgba(236,72,153,0.1)]">
            SC
          </div>
          <div className="w-12 h-12 rounded-sm bg-gray-900 border border-yellow-400 flex items-center justify-center text-yellow-400 font-mono font-bold shadow-[0_0_10px_rgba(250,204,21,0.5),inset_0_0_20px_rgba(250,204,21,0.1)]">
            MK
          </div>
          <div className="w-12 h-12 rounded-sm bg-gray-900 border border-green-400 flex items-center justify-center text-green-400 font-mono font-bold shadow-[0_0_10px_rgba(74,222,128,0.5),inset_0_0_20px_rgba(74,222,128,0.1)]">
            AL
          </div>
        </div>
      </div>

      {/* With Icon */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold tracking-[0.3em] text-cyan-400 uppercase font-mono">With Icon</h3>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-sm bg-gray-900/80 border border-cyan-500/50 flex items-center justify-center text-cyan-400 backdrop-blur-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-cyan-500 to-pink-500 blur opacity-50"></div>
            <div className="relative w-12 h-12 rounded-sm bg-gray-900 border border-cyan-500/50 flex items-center justify-center text-cyan-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* With Status */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold tracking-[0.3em] text-cyan-400 uppercase font-mono">With Status</h3>
        <div className="flex items-center gap-4">
          <div className="relative">
            <img src="https://i.pravatar.cc/48?img=2" alt="User online" className="w-12 h-12 rounded-sm border border-cyan-500/50" />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border border-gray-950 rounded-sm shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
          </div>
          <div className="relative">
            <img src="https://i.pravatar.cc/48?img=3" alt="User away" className="w-12 h-12 rounded-sm border border-cyan-500/50" />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-400 border border-gray-950 rounded-sm shadow-[0_0_8px_rgba(250,204,21,0.8)]"></span>
          </div>
          <div className="relative">
            <img src="https://i.pravatar.cc/48?img=4" alt="User busy" className="w-12 h-12 rounded-sm border border-cyan-500/50" />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 border border-gray-950 rounded-sm shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
          </div>
          <div className="relative">
            <img src="https://i.pravatar.cc/48?img=5" alt="User offline" className="w-12 h-12 rounded-sm border border-cyan-500/50" />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-600 border border-gray-950 rounded-sm"></span>
          </div>
        </div>
      </div>

      {/* Avatar Group */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold tracking-[0.3em] text-cyan-400 uppercase font-mono">Avatar Group</h3>
        <div className="flex -space-x-2">
          <img src="https://i.pravatar.cc/40?img=6" alt="Team member" className="w-10 h-10 rounded-sm border border-cyan-500/50 bg-gray-950" />
          <img src="https://i.pravatar.cc/40?img=7" alt="Team member" className="w-10 h-10 rounded-sm border border-pink-500/50 bg-gray-950" />
          <img src="https://i.pravatar.cc/40?img=8" alt="Team member" className="w-10 h-10 rounded-sm border border-yellow-400/50 bg-gray-950" />
          <img src="https://i.pravatar.cc/40?img=9" alt="Team member" className="w-10 h-10 rounded-sm border border-green-400/50 bg-gray-950" />
          <div className="w-10 h-10 rounded-sm border border-cyan-500 bg-gray-900 flex items-center justify-center text-sm font-mono font-bold text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]">
            +5
          </div>
        </div>
      </div>

      {/* Glitch Effect */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold tracking-[0.3em] text-cyan-400 uppercase font-mono">Glitch Effect</h3>
        <div className="flex items-center gap-5">
          <div className="relative group">
            <img src="https://i.pravatar.cc/48?img=10" alt="Glitch avatar" className="w-12 h-12 rounded-sm border-2 border-cyan-500" />
            <img src="https://i.pravatar.cc/48?img=10" alt="" className="absolute inset-0 w-12 h-12 rounded-sm opacity-50 mix-blend-screen translate-x-0.5 border-2 border-red-500/50" />
            <img src="https://i.pravatar.cc/48?img=10" alt="" className="absolute inset-0 w-12 h-12 rounded-sm opacity-50 mix-blend-screen -translate-x-0.5 border-2 border-blue-500/50" />
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-sm blur-sm opacity-75"></div>
            <img src="https://i.pravatar.cc/48?img=11" alt="Neon avatar" className="relative w-12 h-12 rounded-sm border border-white/20" />
          </div>
        </div>
      </div>
    </div>
  );
}
