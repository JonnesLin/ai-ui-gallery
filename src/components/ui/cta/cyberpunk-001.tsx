export default function CyberpunkCTA() {
  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black"></div>
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,255,0.03)_50%)] bg-[length:100%_4px]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-75 blur"></div>
          <div className="relative bg-black border border-cyan-500/50 p-10 md:p-14">
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-pink-400"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-pink-400"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400"></div>

            <div className="text-center">
              <div className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-6 animate-pulse">
                System Online
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-2 tracking-tight">
                JACK IN
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-white/80 mb-6 font-mono">
                TO THE FUTURE
              </h3>
              <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto font-mono leading-relaxed">
                {'>'} Neural interface ready. Augment your reality. Break the system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold uppercase tracking-wider hover:from-cyan-400 hover:to-cyan-300 transition-all relative overflow-hidden">
                  <span className="relative z-10">Initialize</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                </button>
                <button className="px-8 py-4 bg-transparent text-pink-400 font-bold uppercase tracking-wider border border-pink-500/50 hover:bg-pink-500/10 hover:border-pink-400 transition-all">
                  Documentation
                </button>
              </div>
              <div className="mt-10 flex justify-center gap-6 text-xs font-mono text-gray-500 uppercase tracking-wider">
                <span className="text-cyan-400">[SECURE]</span>
                <span className="text-purple-400">[ENCRYPTED]</span>
                <span className="text-pink-400">[ANONYMOUS]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
