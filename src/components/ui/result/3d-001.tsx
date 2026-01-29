export default function ThreeDResult() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Success State */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl transform translate-y-2 group-hover:translate-y-3 transition-transform" />
          <div className="relative bg-white rounded-2xl p-8 text-center space-y-5 transform group-hover:-translate-y-1 transition-transform">
            <div className="w-24 h-24 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl transform rotate-45 translate-y-2" />
              <div className="relative w-full h-full bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center transform hover:rotate-6 transition-transform">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Success</h2>
            <p className="text-gray-600">Your operation completed successfully</p>
            <button className="relative w-full group/btn">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl transform translate-y-1 group-hover/btn:translate-y-2 transition-transform" />
              <div className="relative py-4 bg-gradient-to-br from-green-400 to-emerald-500 text-white rounded-xl font-bold transform group-hover/btn:-translate-y-1 transition-transform">
                Continue
              </div>
            </button>
          </div>
        </div>

        {/* Error State */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl transform translate-y-2 group-hover:translate-y-3 transition-transform" />
          <div className="relative bg-white rounded-2xl p-8 text-center space-y-5 transform group-hover:-translate-y-1 transition-transform">
            <div className="w-24 h-24 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-rose-500 rounded-2xl transform rotate-45 translate-y-2" />
              <div className="relative w-full h-full bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center transform hover:rotate-6 transition-transform">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Error</h2>
            <p className="text-gray-600">Something went wrong</p>
            <div className="flex gap-3">
              <button className="relative flex-1 group/btn">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl transform translate-y-1 group-hover/btn:translate-y-2 transition-transform" />
                <div className="relative py-4 bg-gradient-to-br from-red-400 to-rose-500 text-white rounded-xl font-bold transform group-hover/btn:-translate-y-1 transition-transform">
                  Retry
                </div>
              </button>
              <button className="relative flex-1 group/btn">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl transform translate-y-1 group-hover/btn:translate-y-2 transition-transform" />
                <div className="relative py-4 bg-gradient-to-br from-gray-400 to-gray-500 text-white rounded-xl font-bold transform group-hover/btn:-translate-y-1 transition-transform">
                  Back
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Warning State */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl transform translate-y-2 group-hover:translate-y-3 transition-transform" />
          <div className="relative bg-white rounded-2xl p-8 text-center space-y-5 transform group-hover:-translate-y-1 transition-transform">
            <div className="w-24 h-24 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl transform rotate-45 translate-y-2" />
              <div className="relative w-full h-full bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center transform hover:rotate-6 transition-transform">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Warning</h2>
            <p className="text-gray-600">Please review before proceeding</p>
            <button className="relative w-full group/btn">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl transform translate-y-1 group-hover/btn:translate-y-2 transition-transform" />
              <div className="relative py-4 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-xl font-bold transform group-hover/btn:-translate-y-1 transition-transform">
                Proceed
              </div>
            </button>
          </div>
        </div>

        {/* Info State */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl transform translate-y-2 group-hover:translate-y-3 transition-transform" />
          <div className="relative bg-white rounded-2xl p-8 text-center space-y-5 transform group-hover:-translate-y-1 transition-transform">
            <div className="w-24 h-24 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl transform rotate-45 translate-y-2" />
              <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center transform hover:rotate-6 transition-transform">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Information</h2>
            <p className="text-gray-600">Here is important information</p>
            <button className="relative w-full group/btn">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl transform translate-y-1 group-hover/btn:translate-y-2 transition-transform" />
              <div className="relative py-4 bg-gradient-to-br from-blue-400 to-cyan-500 text-white rounded-xl font-bold transform group-hover/btn:-translate-y-1 transition-transform">
                Got it
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}