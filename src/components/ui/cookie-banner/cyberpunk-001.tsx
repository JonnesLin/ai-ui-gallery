export default function CyberpunkCookieBanner() {
  return (
    <div className="min-h-screen bg-black flex items-end relative overflow-hidden">
      {/* Scanline effect background */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,255,255,0.03)_50%,transparent_100%)] bg-[length:100%_4px] pointer-events-none" />

      {/* Cookie Banner - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        {/* Glow line at top */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

        <div className="relative bg-black/95 border-t border-cyan-500/30 backdrop-blur-sm">
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 py-5 relative">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              {/* Content */}
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 border border-cyan-500/50 bg-cyan-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  {/* Corner accents */}
                  <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-cyan-500" />
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-cyan-500" />
                </div>

                <div>
                  <h3 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-[0.2em] mb-1 flex items-center gap-2">
                    <span className="text-pink-500">&gt;</span>
                    DATA_CONSENT
                    <span className="animate-pulse">_</span>
                  </h3>
                  <p className="text-sm font-mono text-gray-400 max-w-xl">
                    This system uses tracking cookies for enhanced functionality.{' '}
                    <a href="#privacy" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
                      [VIEW_POLICY]
                    </a>
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={() => console.log('Declined')}
                  className="px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-gray-500 border border-gray-700 hover:text-pink-400 hover:border-pink-500/50 transition-all duration-300"
                >
                  &lt;DECLINE/&gt;
                </button>
                <button
                  onClick={() => console.log('Accepted')}
                  className="px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-black bg-cyan-500 border border-cyan-400 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300"
                >
                  &lt;ACCEPT/&gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
