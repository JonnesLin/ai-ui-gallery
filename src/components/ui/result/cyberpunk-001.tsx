export default function CyberpunkResult() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="w-full max-w-md space-y-8 relative z-10">
        {/* Success State */}
        <div className="bg-black border-2 border-green-500 rounded-none p-8 text-center space-y-4 relative shadow-[0_0_20px_rgba(34,197,94,0.5)]">
          <div className="absolute top-0 right-0 w-2 h-2 bg-green-500" />
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-green-500" />
          <div className="w-20 h-20 mx-auto border-2 border-green-500 bg-green-500/10 flex items-center justify-center relative">
            <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-green-500 uppercase tracking-wider" style={{ fontFamily: 'monospace' }}>
            SUCCESS
          </h2>
          <p className="text-green-400/80 font-mono text-sm">OPERATION_COMPLETED_0x001</p>
          <button className="w-full py-3 bg-green-500/20 border-2 border-green-500 text-green-500 font-mono uppercase hover:bg-green-500 hover:text-black transition-all">
            &gt; CONTINUE
          </button>
        </div>

        {/* Error State */}
        <div className="bg-black border-2 border-red-500 rounded-none p-8 text-center space-y-4 relative shadow-[0_0_20px_rgba(239,68,68,0.5)]">
          <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-red-500 animate-pulse" />
          <div className="w-20 h-20 mx-auto border-2 border-red-500 bg-red-500/10 flex items-center justify-center relative">
            <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-red-500 uppercase tracking-wider" style={{ fontFamily: 'monospace' }}>
            ERROR
          </h2>
          <p className="text-red-400/80 font-mono text-sm">SYSTEM_FAILURE_0xFF1</p>
          <div className="flex gap-3">
            <button className="flex-1 py-3 bg-red-500/20 border-2 border-red-500 text-red-500 font-mono uppercase hover:bg-red-500 hover:text-black transition-all">
              &gt; RETRY
            </button>
            <button className="flex-1 py-3 bg-red-500/10 border-2 border-red-500/50 text-red-500/70 font-mono uppercase hover:border-red-500 hover:text-red-500 transition-all">
              &gt; ABORT
            </button>
          </div>
        </div>

        {/* Warning State */}
        <div className="bg-black border-2 border-yellow-500 rounded-none p-8 text-center space-y-4 relative shadow-[0_0_20px_rgba(234,179,8,0.5)]">
          <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-500 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-yellow-500 animate-pulse" />
          <div className="w-20 h-20 mx-auto border-2 border-yellow-500 bg-yellow-500/10 flex items-center justify-center relative">
            <svg className="w-10 h-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-yellow-500 uppercase tracking-wider" style={{ fontFamily: 'monospace' }}>
            WARNING
          </h2>
          <p className="text-yellow-400/80 font-mono text-sm">AUTHORIZATION_REQUIRED_0xA01</p>
          <button className="w-full py-3 bg-yellow-500/20 border-2 border-yellow-500 text-yellow-500 font-mono uppercase hover:bg-yellow-500 hover:text-black transition-all">
            &gt; PROCEED
          </button>
        </div>

        {/* Info State */}
        <div className="bg-black border-2 border-cyan-500 rounded-none p-8 text-center space-y-4 relative shadow-[0_0_20px_rgba(6,182,212,0.5)]">
          <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-500" />
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-500" />
          <div className="w-20 h-20 mx-auto border-2 border-cyan-500 bg-cyan-500/10 flex items-center justify-center relative">
            <svg className="w-10 h-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-cyan-500 uppercase tracking-wider" style={{ fontFamily: 'monospace' }}>
            INFO
          </h2>
          <p className="text-cyan-400/80 font-mono text-sm">DATA_UPDATE_0xB12</p>
          <button className="w-full py-3 bg-cyan-500/20 border-2 border-cyan-500 text-cyan-500 font-mono uppercase hover:bg-cyan-500 hover:text-black transition-all">
            &gt; ACKNOWLEDGE
          </button>
        </div>
      </div>
    </div>
  );
}