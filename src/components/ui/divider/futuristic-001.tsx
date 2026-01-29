export default function FuturisticDivider() {
  return (
    <div className="w-full min-h-screen bg-gray-950 p-8 space-y-12">
      {/* Horizontal Dividers */}
      <section className="space-y-8">
        <h2 className="text-sm font-bold text-blue-400 mb-6 uppercase tracking-widest">Horizontal</h2>

        {/* Neon Scan Line */}
        <div className="w-full h-0.5 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>

        {/* Tech Grid */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent relative">
          <div className="absolute inset-0 flex justify-around">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-px h-2 bg-cyan-400 -translate-y-1"></div>
            ))}
          </div>
        </div>

        {/* Holographic Line */}
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>

        {/* Circuit Pattern */}
        <div className="relative w-full h-1">
          <div className="absolute inset-0 bg-emerald-500"></div>
          <div className="absolute left-1/4 top-0 w-2 h-2 bg-emerald-400 rounded-full"></div>
          <div className="absolute left-1/2 top-0 w-2 h-2 bg-emerald-400 rounded-full"></div>
          <div className="absolute left-3/4 top-0 w-2 h-2 bg-emerald-400 rounded-full"></div>
        </div>

        {/* Segmented Energy */}
        <div className="flex gap-1">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="flex-1 bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.6)]"
              style={{ height: '4px', opacity: 1 - (i % 3) * 0.3 }}
            ></div>
          ))}
        </div>
      </section>

      {/* With Text */}
      <section className="space-y-8">
        <h2 className="text-sm font-bold text-blue-400 mb-6 uppercase tracking-widest">With Text</h2>

        {/* Hologram Text */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500 to-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
          <div className="relative px-6 py-2 bg-blue-950/50 border border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            <span className="text-sm text-blue-300 font-bold uppercase tracking-widest">Access</span>
            <div className="absolute inset-0 border border-blue-400/30 translate-x-0.5 translate-y-0.5"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-blue-500 to-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
        </div>

        {/* Tech Panel */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-0.5 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]"></div>
          <div className="relative px-8 py-3 bg-gradient-to-r from-cyan-950 to-blue-950 border-2 border-cyan-500"
               style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}>
            <span className="text-sm text-cyan-300 font-black uppercase tracking-[0.2em]">System</span>
          </div>
          <div className="flex-1 h-0.5 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]"></div>
        </div>

        {/* Quantum Badge */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500 to-purple-500"></div>
          <div className="relative px-8 py-3 bg-black border border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.5)]">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 blur-sm"></div>
            <div className="absolute top-0 left-0 w-2 h-2 bg-purple-400"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-pink-400"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-pink-400"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-purple-400"></div>
            <span className="text-sm text-purple-300 font-black uppercase tracking-widest relative">Quantum</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-pink-500 to-pink-500"></div>
        </div>
      </section>

      {/* With Icon */}
      <section className="space-y-8">
        <h2 className="text-sm font-bold text-blue-400 mb-6 uppercase tracking-widest">With Icon</h2>

        {/* Energy Core */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-0.5 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
          <div className="relative p-4 bg-blue-950 border-2 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.6)]">
            <div className="absolute inset-2 border border-blue-400/30"></div>
            <svg className="w-6 h-6 text-blue-400 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <div className="absolute top-0 left-0 w-1 h-1 bg-blue-300"></div>
            <div className="absolute top-0 right-0 w-1 h-1 bg-blue-300"></div>
            <div className="absolute bottom-0 left-0 w-1 h-1 bg-blue-300"></div>
            <div className="absolute bottom-0 right-0 w-1 h-1 bg-blue-300"></div>
          </div>
          <div className="flex-1 h-0.5 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
        </div>

        {/* Hex Shield */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-cyan-500"></div>
          <div className="relative p-5 bg-gradient-to-br from-cyan-950 to-blue-950 border-2 border-cyan-400"
               style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
            <svg className="w-5 h-5 text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
          </div>
          <div className="flex-1 h-px bg-cyan-500"></div>
        </div>
      </section>

      {/* Vertical Dividers */}
      <section>
        <h2 className="text-sm font-bold text-blue-400 mb-6 uppercase tracking-widest">Vertical</h2>
        <div className="flex items-center justify-center gap-10 h-40 bg-gradient-to-b from-gray-950 to-blue-950/20 border-2 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)] p-8">
          <div className="text-sm text-blue-300 font-bold uppercase tracking-widest">Module A</div>
          <div className="w-0.5 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
          <div className="text-sm text-cyan-300 font-bold uppercase tracking-widest">Module B</div>
          <div className="w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
          <div className="text-sm text-purple-300 font-bold uppercase tracking-widest">Module C</div>
        </div>
      </section>

      {/* Special Effects */}
      <section className="space-y-8">
        <h2 className="text-sm font-bold text-blue-400 mb-6 uppercase tracking-widest">Special</h2>

        {/* Energy Wave */}
        <div className="w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-400 via-blue-600 to-purple-600 shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>

        {/* Data Stream */}
        <div className="flex gap-px">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="flex-1 bg-emerald-500 shadow-[0_0_3px_rgba(16,185,129,0.6)]"
              style={{
                height: `${Math.sin(i * 0.3) * 8 + 12}px`,
                opacity: 0.5 + Math.sin(i * 0.2) * 0.5
              }}
            ></div>
          ))}
        </div>

        {/* Quantum Dots */}
        <div className="flex gap-2 justify-center">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]"
              style={{ opacity: 0.4 + (i % 3) * 0.3 }}
            ></div>
          ))}
        </div>
      </section>
    </div>
  );
}