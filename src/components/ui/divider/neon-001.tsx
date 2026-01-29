export default function NeonDivider() {
  return (
    <div className="w-full min-h-screen bg-black p-8 space-y-12">
      {/* Horizontal Dividers */}
      <section className="space-y-8">
        <h2 className="text-sm font-bold text-pink-500 mb-6 uppercase tracking-widest"
            style={{ textShadow: '0 0 10px rgba(236,72,153,0.8)' }}>Horizontal</h2>

        {/* Pink Neon */}
        <div className="w-full h-1 bg-pink-500 rounded-full shadow-[0_0_20px_rgba(236,72,153,1),0_0_40px_rgba(236,72,153,0.6)]"></div>

        {/* Blue Neon */}
        <div className="w-full h-1 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,1),0_0_40px_rgba(59,130,246,0.6)]"></div>

        {/* Green Neon */}
        <div className="w-full h-1 bg-green-500 rounded-full shadow-[0_0_20px_rgba(34,197,94,1),0_0_40px_rgba(34,197,94,0.6)]"></div>

        {/* Purple Neon */}
        <div className="w-full h-1 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,1),0_0_40px_rgba(168,85,247,0.6)]"></div>

        {/* Multi-Color Neon */}
        <div className="w-full h-1.5 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 rounded-full shadow-[0_0_25px_rgba(236,72,153,0.8),0_0_50px_rgba(59,130,246,0.6)]"></div>

        {/* Neon Tube Style */}
        <div className="flex gap-1">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="flex-1 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,1)]"
            ></div>
          ))}
        </div>
      </section>

      {/* With Text */}
      <section className="space-y-8">
        <h2 className="text-sm font-bold text-pink-500 mb-6 uppercase tracking-widest"
            style={{ textShadow: '0 0 10px rgba(236,72,153,0.8)' }}>With Text</h2>

        {/* Pink Neon Sign */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-1 bg-pink-500 rounded-full shadow-[0_0_20px_rgba(236,72,153,1)]"></div>
          <div className="px-8 py-3 bg-black border-2 border-pink-500 rounded shadow-[0_0_25px_rgba(236,72,153,0.8),inset_0_0_25px_rgba(236,72,153,0.3)]">
            <span className="text-lg text-pink-400 font-black uppercase tracking-widest"
                  style={{ textShadow: '0 0 10px rgba(244,114,182,1), 0 0 20px rgba(244,114,182,0.8)' }}>
              NEON
            </span>
          </div>
          <div className="flex-1 h-1 bg-pink-500 rounded-full shadow-[0_0_20px_rgba(236,72,153,1)]"></div>
        </div>

        {/* Cyan Neon */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,1)]"></div>
          <div className="px-6 py-2 bg-black border-2 border-cyan-400 rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.8)]">
            <span className="text-sm text-cyan-300 font-bold uppercase tracking-wider"
                  style={{ textShadow: '0 0 10px rgba(103,232,249,1)' }}>
              OPEN
            </span>
          </div>
          <div className="flex-1 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,1)]"></div>
        </div>

        {/* Multi-Color Sign */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.8)]"></div>
          <div className="relative px-10 py-4 bg-black border-4 border-transparent rounded-lg"
               style={{
                 borderImage: 'linear-gradient(to right, #ec4899, #8b5cf6) 1',
                 boxShadow: '0 0 30px rgba(236,72,153,0.6), 0 0 60px rgba(139,92,246,0.4), inset 0 0 30px rgba(236,72,153,0.2)'
               }}>
            <span className="text-base text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-black uppercase tracking-widest"
                  style={{ textShadow: '0 0 20px rgba(236,72,153,0.8)' }}>
              CLUB
            </span>
          </div>
          <div className="flex-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.8)]"></div>
        </div>
      </section>

      {/* With Icon */}
      <section className="space-y-8">
        <h2 className="text-sm font-bold text-pink-500 mb-6 uppercase tracking-widest"
            style={{ textShadow: '0 0 10px rgba(236,72,153,0.8)' }}>With Icon</h2>

        {/* Star Neon */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-1 bg-yellow-400 rounded-full shadow-[0_0_20px_rgba(250,204,21,1)]"></div>
          <div className="p-4 bg-black border-2 border-yellow-400 rounded-full shadow-[0_0_30px_rgba(250,204,21,1)]">
            <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 24 24"
                 style={{ filter: 'drop-shadow(0 0 10px rgba(253,224,71,1))' }}>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="flex-1 h-1 bg-yellow-400 rounded-full shadow-[0_0_20px_rgba(250,204,21,1)]"></div>
        </div>

        {/* Heart Neon */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-1 bg-red-500 rounded-full shadow-[0_0_20px_rgba(239,68,68,1)]"></div>
          <div className="p-4 bg-black border-2 border-red-500 rounded-full shadow-[0_0_30px_rgba(239,68,68,0.8)]">
            <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24"
                 style={{ filter: 'drop-shadow(0 0 10px rgba(248,113,113,1))' }}>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <div className="flex-1 h-1 bg-red-500 rounded-full shadow-[0_0_20px_rgba(239,68,68,1)]"></div>
        </div>

        {/* Lightning Neon */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-1 bg-blue-400 rounded-full shadow-[0_0_20px_rgba(96,165,250,1)]"></div>
          <div className="p-4 bg-black border-2 border-blue-400 shadow-[0_0_30px_rgba(96,165,250,0.8)]">
            <svg className="w-6 h-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                 style={{ filter: 'drop-shadow(0 0 10px rgba(147,197,253,1))' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="flex-1 h-1 bg-blue-400 rounded-full shadow-[0_0_20px_rgba(96,165,250,1)]"></div>
        </div>
      </section>

      {/* Vertical Dividers */}
      <section>
        <h2 className="text-sm font-bold text-pink-500 mb-6 uppercase tracking-widest"
            style={{ textShadow: '0 0 10px rgba(236,72,153,0.8)' }}>Vertical</h2>
        <div className="flex items-center justify-center gap-10 h-40 bg-black border-2 border-pink-500 rounded-lg shadow-[0_0_40px_rgba(236,72,153,0.6)] p-8">
          <div className="text-sm text-pink-400 font-bold uppercase tracking-widest"
               style={{ textShadow: '0 0 10px rgba(244,114,182,1)' }}>BAR</div>
          <div className="w-1 h-full bg-pink-500 rounded-full shadow-[0_0_20px_rgba(236,72,153,1)]"></div>
          <div className="text-sm text-cyan-400 font-bold uppercase tracking-widest"
               style={{ textShadow: '0 0 10px rgba(34,211,238,1)' }}>CLUB</div>
          <div className="w-1 h-full bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,1)]"></div>
          <div className="text-sm text-purple-400 font-bold uppercase tracking-widest"
               style={{ textShadow: '0 0 10px rgba(168,85,247,1)' }}>LOUNGE</div>
        </div>
      </section>

      {/* Special Effects */}
      <section className="space-y-8">
        <h2 className="text-sm font-bold text-pink-500 mb-6 uppercase tracking-widest"
            style={{ textShadow: '0 0 10px rgba(236,72,153,0.8)' }}>Special</h2>

        {/* Flickering Effect (static) */}
        <div className="w-full h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full shadow-[0_0_30px_rgba(236,72,153,1),0_0_60px_rgba(139,92,246,0.8),0_0_90px_rgba(34,211,238,0.6)]"></div>

        {/* Neon Tube Segments */}
        <div className="flex gap-2">
          {['bg-pink-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-red-500'].map((color, i) => (
            <div
              key={i}
              className={`flex-1 h-3 ${color} rounded-full`}
              style={{
                boxShadow: `0 0 20px ${color.replace('bg-', 'rgba(').replace('-500', ', 1)')}`
              }}
            ></div>
          ))}
        </div>

        {/* Pulse Line */}
        <div className="w-full h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full shadow-[0_0_40px_rgba(34,211,238,1)]"></div>
      </section>
    </div>
  );
}