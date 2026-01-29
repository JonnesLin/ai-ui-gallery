export default function CorporateResult() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Success State */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 text-center space-y-4 shadow-sm">
          <div className="w-16 h-16 mx-auto bg-green-50 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">Success</h2>
          <p className="text-gray-600">Your request has been processed successfully</p>
          <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors">
            Continue
          </button>
        </div>

        {/* Error State */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 text-center space-y-4 shadow-sm">
          <div className="w-16 h-16 mx-auto bg-red-50 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">Error</h2>
          <p className="text-gray-600">We encountered an issue processing your request</p>
          <div className="flex gap-3">
            <button className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors">
              Try Again
            </button>
            <button className="flex-1 py-3 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-md font-medium transition-colors">
              Cancel
            </button>
          </div>
        </div>

        {/* Warning State */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 text-center space-y-4 shadow-sm">
          <div className="w-16 h-16 mx-auto bg-yellow-50 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">Warning</h2>
          <p className="text-gray-600">Please review the information before proceeding</p>
          <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors">
            Acknowledge
          </button>
        </div>

        {/* Info State */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 text-center space-y-4 shadow-sm">
          <div className="w-16 h-16 mx-auto bg-blue-50 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">Information</h2>
          <p className="text-gray-600">Your profile has been updated with new settings</p>
          <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors">
            Understood
          </button>
        </div>
      </div>
    </div>
  );
}