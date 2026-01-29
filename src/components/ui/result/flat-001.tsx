export default function FlatResult() {
  return (
    <div className="min-h-screen bg-[#ecf0f1] flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Success State */}
        <div className="bg-white rounded-lg p-8 text-center space-y-5">
          <div className="w-24 h-24 mx-auto bg-[#2ecc71] rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#2c3e50]">Success</h2>
          <p className="text-[#7f8c8d] text-lg">Your operation was successful</p>
          <button className="w-full py-4 bg-[#2ecc71] hover:bg-[#27ae60] text-white rounded-lg font-semibold text-lg transition-colors">
            Continue
          </button>
        </div>

        {/* Error State */}
        <div className="bg-white rounded-lg p-8 text-center space-y-5">
          <div className="w-24 h-24 mx-auto bg-[#e74c3c] rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#2c3e50]">Error</h2>
          <p className="text-[#7f8c8d] text-lg">Something went wrong</p>
          <div className="flex gap-3">
            <button className="flex-1 py-4 bg-[#e74c3c] hover:bg-[#c0392b] text-white rounded-lg font-semibold transition-colors">
              Retry
            </button>
            <button className="flex-1 py-4 bg-[#95a5a6] hover:bg-[#7f8c8d] text-white rounded-lg font-semibold transition-colors">
              Back
            </button>
          </div>
        </div>

        {/* Warning State */}
        <div className="bg-white rounded-lg p-8 text-center space-y-5">
          <div className="w-24 h-24 mx-auto bg-[#f39c12] rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#2c3e50]">Warning</h2>
          <p className="text-[#7f8c8d] text-lg">Please review before proceeding</p>
          <button className="w-full py-4 bg-[#f39c12] hover:bg-[#e67e22] text-white rounded-lg font-semibold text-lg transition-colors">
            Proceed
          </button>
        </div>

        {/* Info State */}
        <div className="bg-white rounded-lg p-8 text-center space-y-5">
          <div className="w-24 h-24 mx-auto bg-[#3498db] rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#2c3e50]">Information</h2>
          <p className="text-[#7f8c8d] text-lg">Here is some useful information</p>
          <button className="w-full py-4 bg-[#3498db] hover:bg-[#2980b9] text-white rounded-lg font-semibold text-lg transition-colors">
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}