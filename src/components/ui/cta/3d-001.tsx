export default function ThreeDCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-100 via-white to-purple-100 relative overflow-hidden" style={{ perspective: '1000px' }}>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-indigo-200/50 rounded-3xl transform rotate-12 -skew-y-6"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-200/50 rounded-3xl transform -rotate-12 skew-y-6"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div
          className="bg-white rounded-3xl p-10 md:p-14 shadow-2xl transform transition-all duration-300 hover:scale-[1.02]"
          style={{
            transformStyle: 'preserve-3d',
            boxShadow: '0 25px 50px -12px rgba(79, 70, 229, 0.25), 0 0 0 1px rgba(79, 70, 229, 0.05)',
          }}
        >
          <div className="text-center" style={{ transform: 'translateZ(20px)' }}>
            <div
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-8 shadow-lg"
              style={{ transform: 'translateZ(40px)' }}
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Add Another
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Dimension</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
              Break free from flat design. Create immersive experiences that pop off the screen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ transform: 'translateZ(30px)' }}>
              <button className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-1 transition-all">
                Explore 3D
              </button>
              <button className="px-10 py-4 text-indigo-600 font-semibold rounded-xl border-2 border-indigo-200 hover:border-indigo-600 hover:bg-indigo-50 transition-all">
                View Demo
              </button>
            </div>

            <div className="mt-12 flex justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">3D</span>
                </div>
                <span>Full 3D Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 font-bold">VR</span>
                </div>
                <span>VR Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
