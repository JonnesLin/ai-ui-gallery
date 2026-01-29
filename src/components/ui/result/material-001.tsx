export default function MaterialResult() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Success State */}
        <div className="bg-white rounded-2xl p-8 text-center space-y-6 shadow-[0_2px_4px_rgba(0,0,0,0.05),0_8px_16px_rgba(0,0,0,0.1)]">
          <div className="w-20 h-20 mx-auto bg-green-500 rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(34,197,94,0.3)]">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-medium text-gray-900">Success</h2>
          <p className="text-gray-600">Your operation completed successfully</p>
          <button className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium shadow-[0_2px_8px_rgba(34,197,94,0.2)] hover:shadow-[0_4px_12px_rgba(34,197,94,0.3)] transition-all">
            Continue
          </button>
        </div>

        {/* Error State */}
        <div className="bg-white rounded-2xl p-8 text-center space-y-6 shadow-[0_2px_4px_rgba(0,0,0,0.05),0_8px_16px_rgba(0,0,0,0.1)]">
          <div className="w-20 h-20 mx-auto bg-red-500 rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(239,68,68,0.3)]">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-2xl font-medium text-gray-900">Error</h2>
          <p className="text-gray-600">Something went wrong with your request</p>
          <div className="flex gap-4">
            <button className="flex-1 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium shadow-[0_2px_8px_rgba(239,68,68,0.2)] hover:shadow-[0_4px_12px_rgba(239,68,68,0.3)] transition-all">
              Retry
            </button>
            <button className="flex-1 py-3 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg font-medium shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.15)] transition-all">
              Back
            </button>
          </div>
        </div>

        {/* Warning State */}
        <div className="bg-white rounded-2xl p-8 text-center space-y-6 shadow-[0_2px_4px_rgba(0,0,0,0.05),0_8px_16px_rgba(0,0,0,0.1)]">
          <div className="w-20 h-20 mx-auto bg-orange-500 rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(249,115,22,0.3)]">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-medium text-gray-900">Warning</h2>
          <p className="text-gray-600">Please review before proceeding</p>
          <button className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium shadow-[0_2px_8px_rgba(249,115,22,0.2)] hover:shadow-[0_4px_12px_rgba(249,115,22,0.3)] transition-all">
            Proceed
          </button>
        </div>

        {/* Info State */}
        <div className="bg-white rounded-2xl p-8 text-center space-y-6 shadow-[0_2px_4px_rgba(0,0,0,0.05),0_8px_16px_rgba(0,0,0,0.1)]">
          <div className="w-20 h-20 mx-auto bg-blue-500 rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(59,130,246,0.3)]">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-medium text-gray-900">Information</h2>
          <p className="text-gray-600">Here is some important information</p>
          <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium shadow-[0_2px_8px_rgba(59,130,246,0.2)] hover:shadow-[0_4px_12px_rgba(59,130,246,0.3)] transition-all">
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}