export default function NatureResult() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Success State */}
        <div className="bg-white/80 backdrop-blur-sm border-2 border-green-200 rounded-3xl p-8 text-center space-y-5 shadow-xl">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center border-4 border-green-300">
            <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-semibold text-green-800">Success</h2>
          <p className="text-green-700">Your action bloomed successfully</p>
          <button className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-2xl font-medium shadow-lg transition-all">
            Continue Growing
          </button>
        </div>

        {/* Error State */}
        <div className="bg-white/80 backdrop-blur-sm border-2 border-red-200 rounded-3xl p-8 text-center space-y-5 shadow-xl">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-100 to-rose-100 rounded-full flex items-center justify-center border-4 border-red-300">
            <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-3xl font-semibold text-red-800">Error</h2>
          <p className="text-red-700">Something withered in the process</p>
          <div className="flex gap-3">
            <button className="flex-1 py-4 bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white rounded-2xl font-medium shadow-lg transition-all">
              Try Again
            </button>
            <button className="flex-1 py-4 bg-gradient-to-r from-stone-400 to-stone-500 hover:from-stone-500 hover:to-stone-600 text-white rounded-2xl font-medium shadow-lg transition-all">
              Go Back
            </button>
          </div>
        </div>

        {/* Warning State */}
        <div className="bg-white/80 backdrop-blur-sm border-2 border-amber-200 rounded-3xl p-8 text-center space-y-5 shadow-xl">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full flex items-center justify-center border-4 border-amber-300">
            <svg className="w-12 h-12 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-3xl font-semibold text-amber-800">Warning</h2>
          <p className="text-amber-700">Please nurture this carefully</p>
          <button className="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white rounded-2xl font-medium shadow-lg transition-all">
            Proceed Mindfully
          </button>
        </div>

        {/* Info State */}
        <div className="bg-white/80 backdrop-blur-sm border-2 border-sky-200 rounded-3xl p-8 text-center space-y-5 shadow-xl">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-sky-100 to-blue-100 rounded-full flex items-center justify-center border-4 border-sky-300">
            <svg className="w-12 h-12 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-semibold text-sky-800">Information</h2>
          <p className="text-sky-700">Fresh insights await you</p>
          <button className="w-full py-4 bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white rounded-2xl font-medium shadow-lg transition-all">
            Understood
          </button>
        </div>
      </div>
    </div>
  );
}