export default function NeonCookieBanner() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-end">
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent" />

        <div className="bg-gray-950/95 backdrop-blur-sm border-t border-pink-500/20">
          <div className="max-w-6xl mx-auto px-6 py-5">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(236,72,153,0.3)]">
                  <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-pink-400 mb-1 tracking-wide">
                    Cookie Notice
                  </h3>
                  <p className="text-sm text-gray-400 max-w-xl">
                    We use cookies to power up your experience.{' '}
                    <a href="#privacy" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={() => console.log('Declined')}
                  className="px-5 py-2.5 text-sm font-medium text-gray-400 border border-gray-700 rounded-lg hover:text-pink-400 hover:border-pink-500/50 transition-all duration-300"
                >
                  Decline
                </button>
                <button
                  onClick={() => console.log('Accepted')}
                  className="px-5 py-2.5 text-sm font-bold text-white bg-pink-600 rounded-lg hover:bg-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all duration-300"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
