export default function FuturisticResult() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />

      <div className="w-full max-w-md space-y-8 relative z-10">
        {/* Success State */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition" />
          <div className="relative bg-black border border-green-500/50 rounded-2xl p-8 text-center space-y-5">
            <div className="w-24 h-24 mx-auto relative">
              <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping" />
              <div className="relative w-full h-full bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-green-400" style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}>
              SUCCESS
            </h2>
            <p className="text-green-300/70 text-sm font-mono">OPERATION EXECUTED SUCCESSFULLY</p>
            <button className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-black rounded-xl font-bold uppercase tracking-wider transition-all">
              Proceed
            </button>
          </div>
        </div>

        {/* Error State */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-rose-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition" />
          <div className="relative bg-black border border-red-500/50 rounded-2xl p-8 text-center space-y-5">
            <div className="w-24 h-24 mx-auto relative">
              <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping" />
              <div className="relative w-full h-full bg-gradient-to-br from-red-400 to-rose-500 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-red-400" style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}>
              ERROR
            </h2>
            <p className="text-red-300/70 text-sm font-mono">SYSTEM ENCOUNTERED AN ERROR</p>
            <div className="flex gap-3">
              <button className="flex-1 py-4 bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-400 hover:to-rose-400 text-black rounded-xl font-bold uppercase tracking-wider transition-all">
                Retry
              </button>
              <button className="flex-1 py-4 border border-red-500/50 text-red-400 hover:bg-red-500/10 rounded-xl font-bold uppercase tracking-wider transition-all">
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* Warning State */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition" />
          <div className="relative bg-black border border-yellow-500/50 rounded-2xl p-8 text-center space-y-5">
            <div className="w-24 h-24 mx-auto relative">
              <div className="absolute inset-0 bg-yellow-500/20 rounded-full animate-ping" />
              <div className="relative w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-yellow-400" style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}>
              WARNING
            </h2>
            <p className="text-yellow-300/70 text-sm font-mono">AUTHORIZATION REQUIRED</p>
            <button className="w-full py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black rounded-xl font-bold uppercase tracking-wider transition-all">
              Continue
            </button>
          </div>
        </div>

        {/* Info State */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition" />
          <div className="relative bg-black border border-blue-500/50 rounded-2xl p-8 text-center space-y-5">
            <div className="w-24 h-24 mx-auto relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping" />
              <div className="relative w-full h-full bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-blue-400" style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}>
              INFO
            </h2>
            <p className="text-blue-300/70 text-sm font-mono">DATA UPDATE NOTIFICATION</p>
            <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-black rounded-xl font-bold uppercase tracking-wider transition-all">
              Acknowledge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}