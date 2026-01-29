export default function RetroCookieBanner() {
  return (
    <div className="min-h-screen bg-indigo-950 flex items-end">
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-gray-900 border-t-2 border-green-500/60">
          <div className="max-w-6xl mx-auto px-6 py-5">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-green-500/50 bg-green-500/10 flex items-center justify-center flex-shrink-0 font-mono text-green-400 text-lg font-bold">
                  C:
                </div>
                <div>
                  <h3 className="text-sm font-mono font-bold text-green-400 uppercase tracking-wider mb-1">
                    &gt; COOKIE_CONSENT.EXE
                  </h3>
                  <p className="text-sm font-mono text-green-300/70 max-w-xl">
                    This website uses cookies to optimize performance.{' '}
                    <a href="#privacy" className="text-green-400 hover:text-green-300 underline">
                      [VIEW POLICY]
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={() => console.log('Declined')}
                  className="px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-green-500/70 border border-green-500/40 hover:bg-green-500/10 hover:text-green-400 transition-colors duration-200"
                >
                  [N] Decline
                </button>
                <button
                  onClick={() => console.log('Accepted')}
                  className="px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-gray-900 bg-green-500 border border-green-400 hover:bg-green-400 transition-colors duration-200"
                >
                  [Y] Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
