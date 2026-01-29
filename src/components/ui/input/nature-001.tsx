export default function NatureInput() {
  return (
    <div
      className="min-h-screen p-8 flex flex-col gap-8 max-w-md"
      style={{
        background: 'linear-gradient(180deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)',
      }}
    >
      {/* Leaf Border Input */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-emerald-700 flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
          </svg>
          Email Address
        </label>
        <input
          type="email"
          placeholder="nature@earth.com"
          className="w-full px-4 py-3 rounded-xl text-emerald-800 placeholder-emerald-400 bg-white/80 border-2 border-emerald-300 focus:border-emerald-500 focus:bg-white focus:outline-none transition-all duration-300"
        />
      </div>

      {/* Organic Shape Input */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-teal-700">
          Search Forest
        </label>
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Find in the wild..."
            className="w-full pl-12 pr-4 py-3 text-teal-800 placeholder-teal-400 bg-gradient-to-r from-teal-50 to-emerald-50 border-2 border-teal-200 focus:border-teal-400 focus:outline-none transition-all duration-300"
            style={{
              borderRadius: '24px 8px 24px 8px',
            }}
          />
        </div>
      </div>

      {/* Earth Tone Input */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-amber-800">
          Your Garden Name
        </label>
        <input
          type="text"
          placeholder="Secret Garden"
          className="w-full px-4 py-3 rounded-lg text-amber-900 placeholder-amber-500 bg-amber-50 border-2 border-amber-200 focus:border-amber-400 focus:outline-none transition-all duration-300"
          style={{
            boxShadow: '0 4px 6px -1px rgba(217, 119, 6, 0.1)',
          }}
        />
      </div>

      {/* Growing Input - Focused */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-green-700 flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Active Growth
        </label>
        <input
          type="text"
          defaultValue="Flourishing..."
          className="w-full px-4 py-3 rounded-2xl text-green-700 bg-green-50 border-2 border-green-500 focus:outline-none"
          style={{
            boxShadow: '0 0 0 4px rgba(34, 197, 94, 0.1)',
          }}
        />
        <p className="text-xs text-green-600">This field is growing!</p>
      </div>

      {/* Wilted Input - Error */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-orange-700">
          Warning - Needs Water
        </label>
        <input
          type="text"
          defaultValue="Wilting..."
          className="w-full px-4 py-3 rounded-xl text-orange-700 bg-orange-50 border-2 border-orange-400 focus:outline-none"
        />
        <p className="text-xs text-orange-600 flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Please check this field
        </p>
      </div>

      {/* Dormant Input - Disabled */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-500">
          Winter Dormancy
        </label>
        <input
          type="text"
          value="Sleeping until spring..."
          disabled
          className="w-full px-4 py-3 rounded-xl text-gray-500 bg-gray-100 border-2 border-gray-200 cursor-not-allowed"
        />
      </div>

      {/* Nature Card Form */}
      <div
        className="relative p-6 rounded-3xl mt-4 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,253,244,0.9) 100%)',
          boxShadow: '0 10px 40px -10px rgba(34, 197, 94, 0.3)',
        }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <svg viewBox="0 0 100 100" fill="currentColor" className="text-emerald-600">
            <path d="M50,0 C60,20 80,30 100,30 C80,40 70,60 70,80 C60,70 40,70 30,80 C30,60 20,40 0,30 C20,30 40,20 50,0 Z" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
          <svg viewBox="0 0 100 100" fill="currentColor" className="text-teal-600">
            <path d="M50,0 C60,20 80,30 100,30 C80,40 70,60 70,80 C60,70 40,70 30,80 C30,60 20,40 0,30 C20,30 40,20 50,0 Z" />
          </svg>
        </div>

        <h3 className="text-lg font-semibold text-emerald-800 mb-5 flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          Plant a Seed
        </h3>

        <div className="flex flex-col gap-4 relative">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl text-emerald-800 placeholder-emerald-400 bg-white/80 border-2 border-emerald-200 focus:border-emerald-400 focus:outline-none transition-all duration-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl text-teal-800 placeholder-teal-400 bg-white/80 border-2 border-teal-200 focus:border-teal-400 focus:outline-none transition-all duration-300"
          />
          <input
            type="text"
            placeholder="Favorite Plant"
            className="w-full px-4 py-3 rounded-xl text-green-800 placeholder-green-400 bg-white/80 border-2 border-green-200 focus:border-green-400 focus:outline-none transition-all duration-300"
          />
          <button className="w-full py-3 rounded-xl text-white font-medium bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-emerald-200">
            Start Growing
          </button>
        </div>
      </div>
    </div>
  );
}
