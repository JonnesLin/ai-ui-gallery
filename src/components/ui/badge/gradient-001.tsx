export default function GradientBadge() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-10">
      {/* Status Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Status</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-gray-600 to-gray-800 rounded-full">
            Default
          </span>
          <span className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-full">
            Primary
          </span>
          <span className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-green-500 to-green-700 rounded-full">
            Success
          </span>
          <span className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-amber-400 to-orange-500 rounded-full">
            Warning
          </span>
          <span className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-red-700 rounded-full">
            Error
          </span>
          <span className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
            Info
          </span>
        </div>
      </section>

      {/* Vibrant Gradients */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Vibrant</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full">
            Sunset
          </span>
          <span className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full">
            Berry
          </span>
          <span className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 rounded-full">
            Ocean
          </span>
          <span className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-full">
            Galaxy
          </span>
          <span className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-full">
            Fire
          </span>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Sizes</h3>
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
            Small
          </span>
          <span className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
            Medium
          </span>
          <span className="px-4 py-1.5 text-base font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
            Large
          </span>
        </div>
      </section>

      {/* With Dot */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">With Dot</h3>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 rounded-full">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Online
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 rounded-full">
            <span className="w-2 h-2 bg-gray-400 rounded-full" />
            Offline
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 rounded-full">
            <span className="w-2 h-2 bg-amber-400 rounded-full" />
            Away
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 rounded-full">
            <span className="w-2 h-2 bg-red-400 rounded-full" />
            Busy
          </span>
        </div>
      </section>

      {/* Gradient Border */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Gradient Border</h3>
        <div className="flex flex-wrap gap-3">
          <span className="relative px-3 py-1 text-sm font-medium text-gray-800 bg-white rounded-full">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 -z-10 p-[2px]">
              <span className="block w-full h-full bg-white rounded-full" />
            </span>
            Outlined
          </span>
          <span className="relative px-3 py-1 text-sm font-medium text-gray-800 bg-white rounded-full">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 -z-10 p-[2px]">
              <span className="block w-full h-full bg-white rounded-full" />
            </span>
            Ocean
          </span>
          <span className="relative px-3 py-1 text-sm font-medium text-gray-800 bg-white rounded-full">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-red-500 -z-10 p-[2px]">
              <span className="block w-full h-full bg-white rounded-full" />
            </span>
            Warm
          </span>
        </div>
      </section>

      {/* Count Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Count</h3>
        <div className="flex items-center gap-6">
          <div className="relative inline-flex">
            <button className="p-3 text-gray-600 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 text-xs font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              5
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-3 text-gray-600 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-2 min-w-[24px] h-5 px-1.5 text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
              24
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-3 text-gray-600 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-2.5 min-w-[28px] h-5 px-1.5 text-xs font-bold text-white bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
              99+
            </span>
          </div>
        </div>
      </section>

      {/* Animated Gradient */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Animated</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite] rounded-full">
            Flowing
          </span>
          <span className="px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite] rounded-full">
            Rainbow
          </span>
        </div>
        <style>{`
          @keyframes gradient {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
          }
        `}</style>
      </section>

      {/* Removable Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Removable</h3>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-full">
            React
            <button className="p-0.5 hover:bg-white/20 rounded-full transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
            TypeScript
            <button className="p-0.5 hover:bg-white/20 rounded-full transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-green-500 rounded-full">
            Tailwind
            <button className="p-0.5 hover:bg-white/20 rounded-full transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
        </div>
      </section>
    </div>
  )
}
