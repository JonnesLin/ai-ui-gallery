export default function ThreeDEmpty() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <div className="flex flex-col items-center max-w-md px-8 text-center">
        <div className="relative mb-12 perspective-1000">
          <div className="w-40 h-40 relative transform-gpu transition-transform hover:rotate-y-12 hover:rotate-x-6 duration-500"
               style={{ transformStyle: 'preserve-3d', transform: 'rotateX(15deg) rotateY(-15deg)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-2xl"
                 style={{ transform: 'translateZ(20px)' }}>
              <svg
                className="w-full h-full p-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl opacity-60"
                 style={{ transform: 'translateZ(10px)' }}></div>

            <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 to-purple-800 rounded-2xl opacity-40"
                 style={{ transform: 'translateZ(0px)' }}></div>
          </div>

          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/10 rounded-full blur-xl"></div>
        </div>

        <h2 className="text-4xl font-bold text-indigo-900 mb-4"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
          No Content
        </h2>

        <p className="text-indigo-700 text-base mb-10 leading-relaxed">
          This space is ready for your content. Add items to bring this area to life in three dimensions.
        </p>

        <button className="px-10 py-4 bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
                style={{ boxShadow: '0 10px 25px -5px rgba(99,102,241,0.5)' }}>
          Add Content
        </button>
      </div>
    </div>
  );
}
