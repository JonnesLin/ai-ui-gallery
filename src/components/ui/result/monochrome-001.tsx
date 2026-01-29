export default function MonochromeResult() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Success State */}
        <div className="bg-white border border-gray-300 rounded-xl p-8 text-center space-y-5 shadow-lg">
          <div className="w-20 h-20 mx-auto bg-gray-900 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Success</h2>
          <p className="text-gray-600">Your operation completed successfully</p>
          <button className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold transition-colors">
            Continue
          </button>
        </div>

        {/* Error State */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center space-y-5 shadow-lg">
          <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white">Error</h2>
          <p className="text-gray-300">Something went wrong with your request</p>
          <div className="flex gap-3">
            <button className="flex-1 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-lg font-semibold transition-colors">
              Retry
            </button>
            <button className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors">
              Back
            </button>
          </div>
        </div>

        {/* Warning State */}
        <div className="bg-white border-2 border-gray-900 rounded-xl p-8 text-center space-y-5 shadow-lg">
          <div className="w-20 h-20 mx-auto border-4 border-gray-900 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Warning</h2>
          <p className="text-gray-700">Please review before proceeding</p>
          <button className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold transition-colors">
            Proceed
          </button>
        </div>

        {/* Info State */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 text-center space-y-5 shadow-lg">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white">Information</h2>
          <p className="text-gray-300">Here is some important information</p>
          <button className="w-full py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-lg font-semibold transition-colors">
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}