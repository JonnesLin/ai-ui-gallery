export default function LuxuryResult() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Success State */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-600/20 rounded-lg p-10 text-center space-y-6 shadow-2xl">
          <div className="w-20 h-20 mx-auto rounded-full border-2 border-yellow-600 bg-gradient-to-br from-yellow-600/10 to-yellow-900/10 flex items-center justify-center">
            <svg className="w-10 h-10 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl font-serif text-yellow-600 tracking-wide">Success</h2>
            <p className="text-gray-400 font-light text-sm tracking-wider">YOUR REQUEST HAS BEEN COMPLETED</p>
          </div>
          <button className="w-full py-4 border border-yellow-600 text-yellow-600 rounded font-serif tracking-wider hover:bg-yellow-600 hover:text-black transition-all">
            CONTINUE
          </button>
        </div>

        {/* Error State */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-red-900/20 rounded-lg p-10 text-center space-y-6 shadow-2xl">
          <div className="w-20 h-20 mx-auto rounded-full border-2 border-red-800 bg-gradient-to-br from-red-900/10 to-red-950/10 flex items-center justify-center">
            <svg className="w-10 h-10 text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl font-serif text-red-800 tracking-wide">Error</h2>
            <p className="text-gray-400 font-light text-sm tracking-wider">AN ISSUE HAS OCCURRED</p>
          </div>
          <div className="flex gap-4">
            <button className="flex-1 py-4 border border-red-800 text-red-800 rounded font-serif tracking-wider hover:bg-red-800 hover:text-white transition-all">
              RETRY
            </button>
            <button className="flex-1 py-4 border border-gray-700 text-gray-400 rounded font-serif tracking-wider hover:bg-gray-700 hover:text-white transition-all">
              RETURN
            </button>
          </div>
        </div>

        {/* Warning State */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-900/20 rounded-lg p-10 text-center space-y-6 shadow-2xl">
          <div className="w-20 h-20 mx-auto rounded-full border-2 border-amber-700 bg-gradient-to-br from-amber-900/10 to-amber-950/10 flex items-center justify-center">
            <svg className="w-10 h-10 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl font-serif text-amber-700 tracking-wide">Warning</h2>
            <p className="text-gray-400 font-light text-sm tracking-wider">PLEASE REVIEW CAREFULLY</p>
          </div>
          <button className="w-full py-4 border border-amber-700 text-amber-700 rounded font-serif tracking-wider hover:bg-amber-700 hover:text-black transition-all">
            PROCEED
          </button>
        </div>

        {/* Info State */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-900/20 rounded-lg p-10 text-center space-y-6 shadow-2xl">
          <div className="w-20 h-20 mx-auto rounded-full border-2 border-blue-800 bg-gradient-to-br from-blue-900/10 to-blue-950/10 flex items-center justify-center">
            <svg className="w-10 h-10 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl font-serif text-blue-800 tracking-wide">Information</h2>
            <p className="text-gray-400 font-light text-sm tracking-wider">IMPORTANT NOTICE</p>
          </div>
          <button className="w-full py-4 border border-blue-800 text-blue-800 rounded font-serif tracking-wider hover:bg-blue-800 hover:text-white transition-all">
            ACKNOWLEDGE
          </button>
        </div>
      </div>
    </div>
  );
}