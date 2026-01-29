export default function BrutalistResult() {
  return (
    <div className="min-h-screen bg-yellow-400 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Success State */}
        <div className="bg-white border-8 border-black p-8 text-center space-y-4">
          <div className="w-24 h-24 mx-auto bg-green-500 border-4 border-black flex items-center justify-center">
            <svg className="w-14 h-14 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl font-black uppercase tracking-tight">SUCCESS</h2>
          <p className="text-xl font-bold uppercase">Operation Complete</p>
          <button className="w-full py-4 bg-black text-white text-xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-colors">
            CONTINUE
          </button>
        </div>

        {/* Error State */}
        <div className="bg-white border-8 border-black p-8 text-center space-y-4">
          <div className="w-24 h-24 mx-auto bg-red-500 border-4 border-black flex items-center justify-center">
            <svg className="w-14 h-14 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-4xl font-black uppercase tracking-tight">ERROR</h2>
          <p className="text-xl font-bold uppercase">Request Failed</p>
          <div className="grid grid-cols-2 gap-4">
            <button className="py-4 bg-black text-white text-xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-colors">
              RETRY
            </button>
            <button className="py-4 bg-white text-black text-xl font-black uppercase border-4 border-black hover:bg-black hover:text-white transition-colors">
              BACK
            </button>
          </div>
        </div>

        {/* Warning State */}
        <div className="bg-white border-8 border-black p-8 text-center space-y-4">
          <div className="w-24 h-24 mx-auto bg-yellow-300 border-4 border-black flex items-center justify-center">
            <svg className="w-14 h-14 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-4xl font-black uppercase tracking-tight">WARNING</h2>
          <p className="text-xl font-bold uppercase">Review Required</p>
          <button className="w-full py-4 bg-black text-white text-xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-colors">
            PROCEED
          </button>
        </div>

        {/* Info State */}
        <div className="bg-white border-8 border-black p-8 text-center space-y-4">
          <div className="w-24 h-24 mx-auto bg-blue-500 border-4 border-black flex items-center justify-center">
            <svg className="w-14 h-14 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-4xl font-black uppercase tracking-tight">INFO</h2>
          <p className="text-xl font-bold uppercase">Important Notice</p>
          <button className="w-full py-4 bg-black text-white text-xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-colors">
            GOT IT
          </button>
        </div>
      </div>
    </div>
  );
}