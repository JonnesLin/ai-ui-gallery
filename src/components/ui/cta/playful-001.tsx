export default function PlayfulCTA() {
  return (
    <section className="py-20 px-4 bg-yellow-400 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-20 h-20 bg-pink-500 rounded-full opacity-80"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500 rounded-lg rotate-12 opacity-80"></div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-green-500 rounded-full opacity-80"></div>
      <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-purple-500 rounded-2xl -rotate-12 opacity-70"></div>
      <div className="absolute top-1/3 right-10 w-8 h-8 bg-red-500 rotate-45 opacity-80"></div>

      <div className="max-w-4xl mx-auto relative">
        <div className="bg-white rounded-3xl p-10 md:p-14 shadow-2xl transform hover:rotate-1 transition-transform duration-300">
          <div className="text-center">
            <div className="text-6xl mb-6">
              <span className="inline-block animate-bounce">&#127881;</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Let&apos;s Have Some
              <span className="text-pink-500"> Fun!</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto">
              Life&apos;s too short for boring software. Jump in and experience the joy of creating!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg rounded-2xl hover:shadow-xl hover:scale-105 transition-all">
                <span className="inline-block group-hover:animate-bounce">&#127752;</span>
                {' '}Start Playing
              </button>
              <button className="px-10 py-4 bg-yellow-400 text-gray-800 font-bold text-lg rounded-2xl border-4 border-gray-800 hover:bg-yellow-300 transition-colors">
                Watch Video &#9658;
              </button>
            </div>
            <div className="mt-10 flex justify-center gap-2">
              <span className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold">#Creative</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">#Easy</span>
              <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold">#Free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
