export default function CyberpunkProgress() {
  return (
    <div className="min-h-screen bg-black p-8 md:p-12">
      <div className="max-w-xl mx-auto space-y-10">
        {/* Basic Progress */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.3em] font-mono">// BASIC_PROGRESS</h3>
          <div className="space-y-4">
            <div className="h-2 bg-cyan-950 border border-cyan-500/30 relative overflow-hidden">
              <div className="h-full w-1/4 bg-cyan-400" style={{ boxShadow: '0 0 10px #22d3ee, 0 0 20px #22d3ee' }} />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-[scan_2s_linear_infinite]" />
            </div>
            <div className="h-2 bg-cyan-950 border border-cyan-500/30 relative overflow-hidden">
              <div className="h-full w-1/2 bg-cyan-400" style={{ boxShadow: '0 0 10px #22d3ee, 0 0 20px #22d3ee' }} />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-[scan_2s_linear_infinite]" />
            </div>
            <div className="h-2 bg-cyan-950 border border-cyan-500/30 relative overflow-hidden">
              <div className="h-full w-3/4 bg-cyan-400" style={{ boxShadow: '0 0 10px #22d3ee, 0 0 20px #22d3ee' }} />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-[scan_2s_linear_infinite]" />
            </div>
          </div>
          <style>{`
            @keyframes scan {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
          `}</style>
        </div>

        {/* HUD Display */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.3em] font-mono">// HUD_DISPLAY</h3>
          <div className="relative border border-cyan-500/50 bg-black/80 p-6 clip-corners">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />
            <div className="flex justify-between text-sm mb-3 font-mono">
              <span className="text-cyan-400">SYSTEM_UPLOAD.exe</span>
              <span className="text-pink-500 animate-pulse">65%</span>
            </div>
            <div className="h-4 bg-cyan-950/50 border border-cyan-500/30">
              <div
                className="h-full w-[65%] bg-gradient-to-r from-cyan-500 to-pink-500"
                style={{ boxShadow: '0 0 15px #22d3ee' }}
              />
            </div>
            <div className="mt-2 text-xs text-cyan-600 font-mono">
              &gt; TRANSFERRING DATA PACKETS...
            </div>
          </div>
        </div>

        {/* Neon Colors */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.3em] font-mono">// STATUS_CODES</h3>
          <div className="space-y-4">
            <div className="border border-green-500/30 bg-green-950/20 p-4">
              <div className="flex justify-between text-sm mb-2 font-mono">
                <span className="text-green-400">[SUCCESS]</span>
                <span className="text-green-400">100%</span>
              </div>
              <div className="h-2 bg-green-950">
                <div className="h-full w-full bg-green-400" style={{ boxShadow: '0 0 10px #4ade80' }} />
              </div>
            </div>
            <div className="border border-yellow-500/30 bg-yellow-950/20 p-4">
              <div className="flex justify-between text-sm mb-2 font-mono">
                <span className="text-yellow-400">[WARNING]</span>
                <span className="text-yellow-400">70%</span>
              </div>
              <div className="h-2 bg-yellow-950">
                <div className="h-full w-[70%] bg-yellow-400" style={{ boxShadow: '0 0 10px #facc15' }} />
              </div>
            </div>
            <div className="border border-red-500/30 bg-red-950/20 p-4">
              <div className="flex justify-between text-sm mb-2 font-mono">
                <span className="text-red-400">[CRITICAL]</span>
                <span className="text-red-400 animate-pulse">35%</span>
              </div>
              <div className="h-2 bg-red-950">
                <div className="h-full w-[35%] bg-red-500" style={{ boxShadow: '0 0 10px #ef4444' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Circular HUD */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.3em] font-mono">// CIRCULAR_HUD</h3>
          <div className="flex items-center justify-around">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
                <circle cx="64" cy="64" r="54" fill="none" stroke="#164e63" strokeWidth="4" />
                <circle
                  cx="64"
                  cy="64"
                  r="54"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="4"
                  strokeDasharray="339.29"
                  strokeDashoffset="254.47"
                  strokeLinecap="round"
                  style={{ filter: 'drop-shadow(0 0 6px #22d3ee)' }}
                />
                <circle cx="64" cy="64" r="46" fill="none" stroke="#164e63" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-black text-cyan-400 font-mono" style={{ textShadow: '0 0 10px #22d3ee' }}>25%</span>
                <span className="text-xs text-cyan-600 font-mono">CPU</span>
              </div>
            </div>
            <div className="relative w-32 h-32">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
                <circle cx="64" cy="64" r="54" fill="none" stroke="#831843" strokeWidth="4" />
                <circle
                  cx="64"
                  cy="64"
                  r="54"
                  fill="none"
                  stroke="#ec4899"
                  strokeWidth="4"
                  strokeDasharray="339.29"
                  strokeDashoffset="84.82"
                  strokeLinecap="round"
                  style={{ filter: 'drop-shadow(0 0 6px #ec4899)' }}
                />
                <circle cx="64" cy="64" r="46" fill="none" stroke="#831843" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-black text-pink-400 font-mono" style={{ textShadow: '0 0 10px #ec4899' }}>75%</span>
                <span className="text-xs text-pink-600 font-mono">MEM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Glitch Progress */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.3em] font-mono">// GLITCH_BAR</h3>
          <div className="relative h-6 bg-cyan-950 border border-cyan-500/30 overflow-hidden">
            <div className="h-full w-[60%] bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 animate-[glitchBar_0.3s_infinite]" />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)]" />
          </div>
          <style>{`
            @keyframes glitchBar {
              0%, 100% { clip-path: inset(0 0 0 0); }
              20% { clip-path: inset(5% 0 10% 0); }
              40% { clip-path: inset(10% 0 5% 0); }
              60% { clip-path: inset(2% 0 15% 0); }
              80% { clip-path: inset(8% 0 2% 0); }
            }
          `}</style>
        </div>

        {/* Segmented Digital */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.3em] font-mono">// SEGMENTS</h3>
          <div className="flex gap-1">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 h-6 ${i < 14 ? 'bg-cyan-400' : 'bg-cyan-950'}`}
                style={i < 14 ? { boxShadow: '0 0 5px #22d3ee' } : {}}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs font-mono text-cyan-600">
            <span>0x00</span>
            <span className="text-cyan-400">LOADING: 70%</span>
            <span>0xFF</span>
          </div>
        </div>

        {/* Multi-layer */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.3em] font-mono">// SYSTEM_STATS</h3>
          <div className="border border-cyan-500/30 bg-black/80 p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-16 text-xs font-mono text-cyan-600">CORE_1</span>
                <div className="flex-1 h-2 bg-cyan-950">
                  <div className="h-full w-[85%] bg-red-500" style={{ boxShadow: '0 0 8px #ef4444' }} />
                </div>
                <span className="w-10 text-xs font-mono text-red-400">85%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-16 text-xs font-mono text-cyan-600">CORE_2</span>
                <div className="flex-1 h-2 bg-cyan-950">
                  <div className="h-full w-[60%] bg-yellow-400" style={{ boxShadow: '0 0 8px #facc15' }} />
                </div>
                <span className="w-10 text-xs font-mono text-yellow-400">60%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-16 text-xs font-mono text-cyan-600">CORE_3</span>
                <div className="flex-1 h-2 bg-cyan-950">
                  <div className="h-full w-[40%] bg-green-400" style={{ boxShadow: '0 0 8px #4ade80' }} />
                </div>
                <span className="w-10 text-xs font-mono text-green-400">40%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
