export default function BrutalistCookieBanner() {
  return (
    <div className="min-h-screen bg-white flex items-end">
      {/* Cookie Banner - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-yellow-300 border-t-4 border-black p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Content */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-black text-black uppercase tracking-wide mb-1">
                  COOKIES NOTICE
                </h3>
                <p className="text-sm font-bold text-black max-w-xl">
                  We use cookies to enhance your browsing experience. By continuing to use this site, you agree to our use of cookies.{' '}
                  <a href="#privacy" className="underline hover:no-underline">
                    Read our privacy policy
                  </a>
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => console.log('Declined')}
                className="px-6 py-3 text-sm font-black uppercase tracking-wider text-black bg-white border-4 border-black transition-all duration-150 hover:bg-black hover:text-white"
              >
                Decline
              </button>
              <button
                onClick={() => console.log('Accepted')}
                className="px-6 py-3 text-sm font-black uppercase tracking-wider text-white bg-black border-4 border-black shadow-[4px_4px_0px_0px_#000] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
