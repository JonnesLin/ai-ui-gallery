export default function NatureButton() {
  return (
    <div
      className="flex flex-col gap-6 p-8 min-h-screen"
      style={{ background: 'linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%)' }}
    >
      <h2 className="text-sm font-medium text-emerald-700 uppercase tracking-wider">Nature Buttons</h2>

      <div className="flex flex-wrap items-center gap-4">
        {/* Forest green */}
        <button className="px-8 py-3 text-sm font-medium text-white bg-emerald-600 rounded-full transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
          Explore Nature
        </button>

        {/* Earth brown */}
        <button className="px-8 py-3 text-sm font-medium text-white bg-amber-700 rounded-full transition-all duration-300 hover:bg-amber-800 hover:shadow-lg hover:shadow-amber-700/30 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2">
          Earth
        </button>

        {/* Sky blue */}
        <button className="px-8 py-3 text-sm font-medium text-white bg-sky-500 rounded-full transition-all duration-300 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/30 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">
          Sky
        </button>

        {/* Sunset orange */}
        <button className="px-8 py-3 text-sm font-medium text-white bg-orange-500 rounded-full transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2">
          Sunset
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Leaf shape button */}
        <button
          className="px-8 py-3 text-sm font-medium text-white bg-green-600 transition-all duration-300 hover:bg-green-700 hover:shadow-lg focus:outline-none"
          style={{ borderRadius: '30px 5px 30px 5px' }}
        >
          Leaf Style
        </button>

        {/* Water droplet */}
        <button
          className="px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg focus:outline-none"
          style={{
            background: 'linear-gradient(180deg, #38bdf8 0%, #0284c7 100%)',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
          }}
        >
          Water
        </button>

        {/* Organic shape */}
        <button
          className="px-8 py-3 text-sm font-medium text-emerald-800 bg-lime-300 transition-all duration-300 hover:bg-lime-400 hover:shadow-lg focus:outline-none"
          style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
        >
          Organic
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Nature gradients */}
        <button
          className="px-8 py-3 text-sm font-medium text-white rounded-full transition-all duration-300 hover:opacity-90 hover:shadow-lg focus:outline-none"
          style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)' }}
        >
          Forest Gradient
        </button>

        <button
          className="px-8 py-3 text-sm font-medium text-white rounded-full transition-all duration-300 hover:opacity-90 hover:shadow-lg focus:outline-none"
          style={{ background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)' }}
        >
          Honey
        </button>

        <button
          className="px-8 py-3 text-sm font-medium text-white rounded-full transition-all duration-300 hover:opacity-90 hover:shadow-lg focus:outline-none"
          style={{ background: 'linear-gradient(135deg, #f472b6 0%, #ec4899 50%, #db2777 100%)' }}
        >
          Flower
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Outline nature */}
        <button className="px-8 py-3 text-sm font-medium text-emerald-600 bg-transparent border-2 border-emerald-400 rounded-full transition-all duration-300 hover:bg-emerald-50 hover:border-emerald-500 focus:outline-none">
          Leaf Border
        </button>

        <button className="px-8 py-3 text-sm font-medium text-amber-700 bg-transparent border-2 border-amber-400 rounded-full transition-all duration-300 hover:bg-amber-50 hover:border-amber-500 focus:outline-none">
          Wood Border
        </button>

        <button className="px-8 py-3 text-sm font-medium text-sky-600 bg-transparent border-2 border-sky-400 rounded-full transition-all duration-300 hover:bg-sky-50 hover:border-sky-500 focus:outline-none">
          Ocean Border
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Icon buttons with nature theme */}
        <button className="p-4 text-white bg-emerald-600 rounded-full transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30 focus:outline-none">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </button>

        <button className="p-4 text-white bg-sky-500 rounded-full transition-all duration-300 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/30 focus:outline-none">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        </button>

        {/* With icon and text */}
        <button className="px-6 py-3 text-sm font-medium text-white bg-green-600 rounded-full transition-all duration-300 hover:bg-green-700 focus:outline-none inline-flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
          </svg>
          Go Green
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Loading */}
        <button className="px-8 py-3 text-sm font-medium text-emerald-400 bg-emerald-100 rounded-full cursor-wait inline-flex items-center gap-2">
          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Growing...
        </button>

        {/* Disabled */}
        <button className="px-8 py-3 text-sm font-medium text-gray-400 bg-gray-200 rounded-full cursor-not-allowed opacity-60" disabled>
          Dormant
        </button>
      </div>

      {/* Large nature CTA */}
      <button
        className="w-full max-w-md px-8 py-5 text-base font-semibold text-white rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-green-600/30 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)' }}
      >
        Start Your Eco Journey
      </button>
    </div>
  )
}
