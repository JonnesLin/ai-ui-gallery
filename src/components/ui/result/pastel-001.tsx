export default function PastelResult() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Success State */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 text-center space-y-5 shadow-lg">
          <div className="w-20 h-20 mx-auto bg-green-200 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-semibold text-green-700">Success</h2>
          <p className="text-green-600/80">Everything went smoothly</p>
          <button className="w-full py-3 bg-green-200 hover:bg-green-300 text-green-700 rounded-full font-medium transition-colors">
            Continue
          </button>
        </div>

        {/* Error State */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 text-center space-y-5 shadow-lg">
          <div className="w-20 h-20 mx-auto bg-red-200 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-3xl font-semibold text-red-700">Oops!</h2>
          <p className="text-red-600/80">Something didn't work as expected</p>
          <div className="flex gap-3">
            <button className="flex-1 py-3 bg-red-200 hover:bg-red-300 text-red-700 rounded-full font-medium transition-colors">
              Try Again
            </button>
            <button className="flex-1 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full font-medium transition-colors">
              Go Back
            </button>
          </div>
        </div>

        {/* Warning State */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 text-center space-y-5 shadow-lg">
          <div className="w-20 h-20 mx-auto bg-yellow-200 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-3xl font-semibold text-yellow-700">Heads Up</h2>
          <p className="text-yellow-600/80">Please take a moment to review</p>
          <button className="w-full py-3 bg-yellow-200 hover:bg-yellow-300 text-yellow-700 rounded-full font-medium transition-colors">
            I Understand
          </button>
        </div>

        {/* Info State */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 text-center space-y-5 shadow-lg">
          <div className="w-20 h-20 mx-auto bg-blue-200 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-semibold text-blue-700">Good to Know</h2>
          <p className="text-blue-600/80">Here's some helpful information</p>
          <button className="w-full py-3 bg-blue-200 hover:bg-blue-300 text-blue-700 rounded-full font-medium transition-colors">
            Thanks
          </button>
        </div>
      </div>
    </div>
  );
}