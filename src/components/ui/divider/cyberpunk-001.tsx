export default function CyberpunkDivider() {
  return (
    <div className="w-full min-h-screen bg-black p-8 space-y-12">
      {/* Horizontal Dividers */}
      <section className="space-y-8">
        <h2 className="text-sm font-bold text-cyan-400 mb-6 uppercase tracking-widest">Horizontal</h2>

        {/* Neon Cyan */}
        <div className="w-full h-0.5 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8),0_0_20px_rgba(6,182,212,0.4)]"></div>

        {/* Neon Pink */}
        <div className="w-full h-0.5 bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.8),0_0_20px_rgba(236,72,153,0.4)]"></div>

        {/* Double Neon */}
        <div className="space-y-1">
          <div className="w-full h-px bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
          <div className="w-full h-px bg-pink-400 shadow-[0_0_8px_rgba(244,114,182,0.6)]"></div>
        </div>

        {/* Glitch Effect */}
        <div className="relative w-full h-1">
          <div className="absolute inset-0 bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,1)]"></div>
          <div className="absolute left-0 top-0 w-3/4 h-full bg-pink-500 shadow-[0_0_15px_rgba(236,72,153,1)] translate-x-0.5"></div>
        </div>

        {/* Segmented Neon */}
        <div className="flex gap-1">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex-1 h-1 bg-cyan-500 shadow-[0_0_5px_rgba(6,182,212,0.8)]"></div>
          ))}
        </div>
      </section>

      {/* With Text */}
      <section className="space-y-8">
        <h2 className="text-sm font-bold text-cyan-400 mb-6 uppercase tracking-widest">With Text</h2>

        {/* Neon Text */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
          <span className="text-lg font-black text-pink-500 uppercase tracking-wider" style={{
            textShadow: '0 0 10px rgba(236,72,153,0.8), 0 0 20px rgba(236,72,153,0.5)'
          }}>OR</span>
          <div className="flex-1 h-px bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.8)]"></div>
        </div>

        {/* Glowing Box */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-0.5 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
          <div className="px-6 py-2 bg-black border-2 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.6),inset_0_0_15px_rgba(6,182,212,0.2)]">
            <span className="text-sm text-cyan-400 font-bold uppercase tracking-widest">ACCESS</span>
          </div>
          <div className="flex-1 h-0.5 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
        </div>

        {/* Hexagonal Badge */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-500 to-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.6)]"></div>
          <div className="relative px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 shadow-[0_0_20px_rgba(236,72,153,0.8)]" style={{
            clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)'
          }}>
            <span className="text-sm text-white font-black uppercase tracking-widest">CYBER</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-purple-500 to-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.6)]"></div>
        </div>
      </section>

      {/* With Icon */}
      <section className="space-y-8">
        <h2 className="text-sm font-bold text-cyan-400 mb-6 uppercase tracking-widest">With Icon</h2>

        {/* Glowing Icon */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
          <div className="p-3 bg-black border-2 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.8)]">
            <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="flex-1 h-px bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
        </div>

        {/* Circuit Style */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-0.5 bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.8)]"></div>
          <div className="relative p-4 bg-gradient-to-br from-pink-600 to-purple-600 shadow-[0_0_25px_rgba(236,72,153,1)]">
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,1)]"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,1)]"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,1)]"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,1)]"></div>
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <div className="flex-1 h-0.5 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
        </div>
      </section>

      {/* Vertical Dividers */}
      <section>
        <h2 className="text-sm font-bold text-cyan-400 mb-6 uppercase tracking-widest">Vertical</h2>
        <div className="flex items-center justify-center gap-8 h-32 bg-gradient-to-r from-black via-gray-900 to-black border-2 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)] p-6">
          <div className="text-sm text-cyan-400 font-bold uppercase tracking-widest">NODE 1</div>
          <div className="w-px h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
          <div className="text-sm text-pink-400 font-bold uppercase tracking-widest">NODE 2</div>
          <div className="w-px h-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.8)]"></div>
          <div className="text-sm text-purple-400 font-bold uppercase tracking-widest">NODE 3</div>
        </div>
      </section>

      {/* Special Effects */}
      <section className="space-y-8">
        <h2 className="text-sm font-bold text-cyan-400 mb-6 uppercase tracking-widest">Special</h2>

        {/* Animated Pulse (static) */}
        <div className="w-full h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 shadow-[0_0_20px_rgba(6,182,212,0.8)]"></div>

        {/* Data Stream */}
        <div className="flex gap-0.5">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="flex-1 bg-cyan-500 shadow-[0_0_5px_rgba(6,182,212,0.8)]"
              style={{ height: `${Math.random() * 16 + 4}px` }}
            ></div>
          ))}
        </div>
      </section>
    </div>
  );
}