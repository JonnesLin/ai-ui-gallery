export default function PastelCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-pink-200/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200/50 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative">
        <div className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-10 md:p-14 shadow-xl shadow-purple-200/30 border border-white">
          <div className="text-center">
            <div className="flex justify-center gap-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-pink-300"></span>
              <span className="w-3 h-3 rounded-full bg-purple-300"></span>
              <span className="w-3 h-3 rounded-full bg-blue-300"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
              Create Something
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"> Beautiful</span>
            </h2>
            <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
              Bring your sweetest ideas to life with our delightful suite of creative tools. Designed to inspire joy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-300/50 transition-all hover:-translate-y-0.5">
                Get Started Free
              </button>
              <button className="px-10 py-4 bg-white text-gray-600 font-semibold rounded-full border border-gray-200 hover:border-purple-300 hover:text-purple-500 transition-all">
                See Examples
              </button>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Forever free plan
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No credit card
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
