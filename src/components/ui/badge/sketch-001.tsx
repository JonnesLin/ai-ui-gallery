export default function SketchBadge() {
  return (
    <div className="min-h-screen bg-white p-8 space-y-10" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 19px, #f3f4f6 19px, #f3f4f6 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, #f3f4f6 19px, #f3f4f6 20px)' }}>
      {/* Hand-drawn Status Badges */}
      <section className="space-y-3">
        <h3 className="text-sm font-handwriting text-gray-700 underline decoration-wavy decoration-gray-400">Status</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border-2 border-gray-400 rounded-[4px_12px_4px_12px] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] transform -rotate-1">
            Default
          </span>
          <span className="px-3 py-1.5 text-xs font-medium text-blue-700 bg-white border-2 border-blue-400 rounded-[12px_4px_12px_4px] shadow-[2px_2px_0px_0px_rgba(59,130,246,0.2)] transform rotate-1">
            Primary
          </span>
          <span className="px-3 py-1.5 text-xs font-medium text-green-700 bg-white border-2 border-green-400 rounded-[4px_12px_4px_12px] shadow-[2px_2px_0px_0px_rgba(34,197,94,0.2)] transform -rotate-1">
            Success
          </span>
          <span className="px-3 py-1.5 text-xs font-medium text-amber-700 bg-white border-2 border-amber-400 rounded-[12px_4px_12px_4px] shadow-[2px_2px_0px_0px_rgba(245,158,11,0.2)] transform rotate-1">
            Warning
          </span>
          <span className="px-3 py-1.5 text-xs font-medium text-red-700 bg-white border-2 border-red-400 rounded-[4px_12px_4px_12px] shadow-[2px_2px_0px_0px_rgba(239,68,68,0.2)] transform -rotate-1">
            Error
          </span>
        </div>
      </section>

      {/* Filled Sketch Badges */}
      <section className="space-y-3">
        <h3 className="text-sm font-handwriting text-gray-700 underline decoration-wavy decoration-gray-400">Filled Style</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1.5 text-xs font-medium text-white bg-gray-700 border-2 border-gray-900 rounded-[12px_4px_12px_4px] shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] transform rotate-1">
            Gray
          </span>
          <span className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 border-2 border-blue-800 rounded-[4px_12px_4px_12px] shadow-[3px_3px_0px_0px_rgba(30,64,175,0.3)] transform -rotate-1">
            Blue
          </span>
          <span className="px-3 py-1.5 text-xs font-medium text-white bg-green-600 border-2 border-green-800 rounded-[12px_4px_12px_4px] shadow-[3px_3px_0px_0px_rgba(22,101,52,0.3)] transform rotate-1">
            Green
          </span>
          <span className="px-3 py-1.5 text-xs font-medium text-white bg-purple-600 border-2 border-purple-800 rounded-[4px_12px_4px_12px] shadow-[3px_3px_0px_0px_rgba(88,28,135,0.3)] transform -rotate-1">
            Purple
          </span>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h3 className="text-sm font-handwriting text-gray-700 underline decoration-wavy decoration-gray-400">Different Sizes</h3>
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-[10px] font-medium text-gray-700 bg-white border-2 border-gray-400 rounded-[4px_8px_4px_8px] shadow-[1px_1px_0px_0px_rgba(0,0,0,0.1)] transform -rotate-1">
            Small
          </span>
          <span className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border-2 border-gray-400 rounded-[4px_12px_4px_12px] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] transform rotate-1">
            Medium
          </span>
          <span className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-2 border-gray-400 rounded-[8px_16px_8px_16px] shadow-[3px_3px_0px_0px_rgba(0,0,0,0.1)] transform -rotate-1">
            Large
          </span>
        </div>
      </section>

      {/* With Doodle Dots */}
      <section className="space-y-3">
        <h3 className="text-sm font-handwriting text-gray-700 underline decoration-wavy decoration-gray-400">With Status Dot</h3>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-green-700 bg-white border-2 border-green-400 rounded-[12px_4px_12px_4px] shadow-[2px_2px_0px_0px_rgba(34,197,94,0.2)] transform rotate-1">
            <span className="w-2 h-2 bg-green-500 rounded-full border border-green-700" />
            Active
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border-2 border-gray-400 rounded-[4px_12px_4px_12px] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] transform -rotate-1">
            <span className="w-2 h-2 bg-gray-400 rounded-full border border-gray-600" />
            Inactive
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-amber-700 bg-white border-2 border-amber-400 rounded-[12px_4px_12px_4px] shadow-[2px_2px_0px_0px_rgba(245,158,11,0.2)] transform rotate-1">
            <span className="w-2 h-2 bg-amber-500 rounded-full border border-amber-700" />
            Pending
          </span>
        </div>
      </section>

      {/* Doodle Pills */}
      <section className="space-y-3">
        <h3 className="text-sm font-handwriting text-gray-700 underline decoration-wavy decoration-gray-400">Pill Tags</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-1.5 text-xs font-medium text-pink-700 bg-white border-2 border-pink-400 rounded-[16px_12px_16px_12px] shadow-[2px_2px_0px_0px_rgba(236,72,153,0.2)] transform -rotate-1">
            Design
          </span>
          <span className="px-4 py-1.5 text-xs font-medium text-blue-700 bg-white border-2 border-blue-400 rounded-[12px_16px_12px_16px] shadow-[2px_2px_0px_0px_rgba(59,130,246,0.2)] transform rotate-1">
            Creative
          </span>
          <span className="px-4 py-1.5 text-xs font-medium text-purple-700 bg-white border-2 border-purple-400 rounded-[16px_12px_16px_12px] shadow-[2px_2px_0px_0px_rgba(168,85,247,0.2)] transform -rotate-1">
            Artistic
          </span>
        </div>
      </section>

      {/* Count Badges */}
      <section className="space-y-3">
        <h3 className="text-sm font-handwriting text-gray-700 underline decoration-wavy decoration-gray-400">Notifications</h3>
        <div className="flex items-center gap-6">
          <div className="relative inline-flex">
            <button className="p-3 text-gray-700 bg-white border-2 border-gray-400 rounded-[8px_12px_8px_12px] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)] transform -rotate-1">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 text-[10px] font-bold text-white bg-red-500 border-2 border-red-700 rounded-[8px_4px_8px_4px] shadow-[2px_2px_0px_0px_rgba(127,29,29,0.4)] flex items-center justify-center transform rotate-12">
              5
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-3 text-gray-700 bg-white border-2 border-gray-400 rounded-[12px_8px_12px_8px] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)] transform rotate-1">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1.5 min-w-[20px] h-5 px-1.5 text-[10px] font-bold text-white bg-blue-500 border-2 border-blue-700 rounded-[4px_8px_4px_8px] shadow-[2px_2px_0px_0px_rgba(29,78,216,0.4)] flex items-center justify-center transform -rotate-12">
              28
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-3 text-gray-700 bg-white border-2 border-gray-400 rounded-[8px_12px_8px_12px] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)] transform -rotate-1">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-2 min-w-[24px] h-5 px-1.5 text-[10px] font-bold text-white bg-green-500 border-2 border-green-700 rounded-[8px_4px_8px_4px] shadow-[2px_2px_0px_0px_rgba(21,128,61,0.4)] flex items-center justify-center transform rotate-12">
              99+
            </span>
          </div>
        </div>
      </section>

      {/* Removable Sketch Badges */}
      <section className="space-y-3">
        <h3 className="text-sm font-handwriting text-gray-700 underline decoration-wavy decoration-gray-400">Removable Tags</h3>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-pink-700 bg-white border-2 border-pink-400 rounded-[12px_4px_12px_4px] shadow-[2px_2px_0px_0px_rgba(236,72,153,0.2)] transform rotate-1">
            Sketch
            <button className="text-pink-600 hover:text-pink-800 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-700 bg-white border-2 border-blue-400 rounded-[4px_12px_4px_12px] shadow-[2px_2px_0px_0px_rgba(59,130,246,0.2)] transform -rotate-1">
            Doodle
            <button className="text-blue-600 hover:text-blue-800 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-purple-700 bg-white border-2 border-purple-400 rounded-[12px_4px_12px_4px] shadow-[2px_2px_0px_0px_rgba(168,85,247,0.2)] transform rotate-1">
            Drawing
            <button className="text-purple-600 hover:text-purple-800 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
        </div>
      </section>
    </div>
  )
}
