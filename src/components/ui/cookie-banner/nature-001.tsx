export default function NatureCookieBanner() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50 flex items-end">
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-white/90 backdrop-blur-sm border-t border-green-200 shadow-lg shadow-green-900/10">
          <div className="max-w-6xl mx-auto px-6 py-5">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-green-900 mb-1">
                    Cookie Notice
                  </h3>
                  <p className="text-sm text-green-800/70 max-w-xl">
                    We use cookies to nurture your browsing experience, like sunlight helps a garden grow.{' '}
                    <a href="#privacy" className="text-green-600 hover:text-green-700 underline underline-offset-2">
                      Learn more
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={() => console.log('Declined')}
                  className="px-5 py-2.5 text-sm font-medium text-green-700 bg-transparent border border-green-300 rounded-full hover:bg-green-50 transition-colors duration-200"
                >
                  Decline
                </button>
                <button
                  onClick={() => console.log('Accepted')}
                  className="px-5 py-2.5 text-sm font-medium text-white bg-green-600 border border-green-600 rounded-full hover:bg-green-700 transition-colors duration-200 shadow-md shadow-green-600/20"
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
