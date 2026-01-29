export default function RetroResult() {
  return (
    <div className="min-h-screen bg-[#f5e6d3] flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Success State */}
        <div className="bg-[#fff8dc] border-4 border-[#8b4513] rounded-lg p-8 text-center space-y-4 shadow-[8px_8px_0px_0px_rgba(139,69,19,1)]">
          <div className="w-20 h-20 mx-auto bg-[#90ee90] border-4 border-[#228b22] rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-[#228b22]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#8b4513]" style={{ fontFamily: 'Georgia, serif' }}>
            Success!
          </h2>
          <p className="text-lg text-[#654321]">Your operation was successful</p>
          <button className="px-8 py-3 bg-[#ff6b6b] border-4 border-[#8b0000] text-white text-lg font-bold rounded-lg shadow-[4px_4px_0px_0px_rgba(139,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            Continue
          </button>
        </div>

        {/* Error State */}
        <div className="bg-[#fff8dc] border-4 border-[#8b4513] rounded-lg p-8 text-center space-y-4 shadow-[8px_8px_0px_0px_rgba(139,69,19,1)]">
          <div className="w-20 h-20 mx-auto bg-[#ffcccb] border-4 border-[#8b0000] rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-[#8b0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#8b4513]" style={{ fontFamily: 'Georgia, serif' }}>
            Error
          </h2>
          <p className="text-lg text-[#654321]">Something went wrong</p>
          <div className="flex gap-4">
            <button className="flex-1 px-6 py-3 bg-[#ff6b6b] border-4 border-[#8b0000] text-white text-lg font-bold rounded-lg shadow-[4px_4px_0px_0px_rgba(139,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              Retry
            </button>
            <button className="flex-1 px-6 py-3 bg-[#deb887] border-4 border-[#8b7355] text-[#654321] text-lg font-bold rounded-lg shadow-[4px_4px_0px_0px_rgba(139,115,85,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              Back
            </button>
          </div>
        </div>

        {/* Warning State */}
        <div className="bg-[#fff8dc] border-4 border-[#8b4513] rounded-lg p-8 text-center space-y-4 shadow-[8px_8px_0px_0px_rgba(139,69,19,1)]">
          <div className="w-20 h-20 mx-auto bg-[#ffeb3b] border-4 border-[#f57c00] rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-[#f57c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#8b4513]" style={{ fontFamily: 'Georgia, serif' }}>
            Warning
          </h2>
          <p className="text-lg text-[#654321]">Please review carefully</p>
          <button className="px-8 py-3 bg-[#ff6b6b] border-4 border-[#8b0000] text-white text-lg font-bold rounded-lg shadow-[4px_4px_0px_0px_rgba(139,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            Proceed
          </button>
        </div>

        {/* Info State */}
        <div className="bg-[#fff8dc] border-4 border-[#8b4513] rounded-lg p-8 text-center space-y-4 shadow-[8px_8px_0px_0px_rgba(139,69,19,1)]">
          <div className="w-20 h-20 mx-auto bg-[#87ceeb] border-4 border-[#4682b4] rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-[#4682b4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#8b4513]" style={{ fontFamily: 'Georgia, serif' }}>
            Information
          </h2>
          <p className="text-lg text-[#654321]">Here is some useful info</p>
          <button className="px-8 py-3 bg-[#ff6b6b] border-4 border-[#8b0000] text-white text-lg font-bold rounded-lg shadow-[4px_4px_0px_0px_rgba(139,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}