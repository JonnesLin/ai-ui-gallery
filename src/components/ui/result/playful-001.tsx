export default function PlayfulResult() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 via-pink-300 to-purple-300 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Success State */}
        <div className="bg-white rounded-[2rem] p-8 text-center space-y-5 shadow-2xl transform hover:scale-105 transition-transform">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform">
            <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
              Yay! 🎉
            </h2>
            <p className="text-lg text-gray-700 font-medium">You did it! Everything worked perfectly</p>
          </div>
          <button className="w-full py-4 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white rounded-2xl font-bold text-lg shadow-lg transform hover:-translate-y-1 transition-all">
            Keep Going!
          </button>
        </div>

        {/* Error State */}
        <div className="bg-white rounded-[2rem] p-8 text-center space-y-5 shadow-2xl transform hover:scale-105 transition-transform">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform">
            <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">
              Oops! 😅
            </h2>
            <p className="text-lg text-gray-700 font-medium">Don't worry, let's try that again</p>
          </div>
          <div className="flex gap-3">
            <button className="flex-1 py-4 bg-gradient-to-r from-red-400 to-rose-500 hover:from-red-500 hover:to-rose-600 text-white rounded-2xl font-bold shadow-lg transform hover:-translate-y-1 transition-all">
              Retry
            </button>
            <button className="flex-1 py-4 bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-800 rounded-2xl font-bold shadow-lg transform hover:-translate-y-1 transition-all">
              Back
            </button>
          </div>
        </div>

        {/* Warning State */}
        <div className="bg-white rounded-[2rem] p-8 text-center space-y-5 shadow-2xl transform hover:scale-105 transition-transform">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
            <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
              Wait! ⚠️
            </h2>
            <p className="text-lg text-gray-700 font-medium">Take a quick look before continuing</p>
          </div>
          <button className="w-full py-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white rounded-2xl font-bold text-lg shadow-lg transform hover:-translate-y-1 transition-all">
            Got It!
          </button>
        </div>

        {/* Info State */}
        <div className="bg-white rounded-[2rem] p-8 text-center space-y-5 shadow-2xl transform hover:scale-105 transition-transform">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center transform -rotate-6 hover:rotate-0 transition-transform">
            <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              Hey! 💡
            </h2>
            <p className="text-lg text-gray-700 font-medium">Here's something you should know</p>
          </div>
          <button className="w-full py-4 bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600 text-white rounded-2xl font-bold text-lg shadow-lg transform hover:-translate-y-1 transition-all">
            Thanks!
          </button>
        </div>
      </div>
    </div>
  );
}