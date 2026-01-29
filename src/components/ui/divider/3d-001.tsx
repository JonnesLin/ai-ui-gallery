export default function ThreeDDivider() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8 space-y-12">
      {/* Horizontal Dividers */}
      <section className="space-y-8">
        <h2 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wide">Horizontal</h2>

        {/* Raised Bar */}
        <div className="w-full h-2 bg-gradient-to-b from-gray-300 to-gray-400 shadow-[0_4px_6px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.5)]"></div>

        {/* Deep Groove */}
        <div className="w-full h-3 bg-gray-200 rounded shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),inset_0_-1px_2px_rgba(255,255,255,0.5)]"></div>

        {/* Extruded */}
        <div className="w-full h-4 bg-gradient-to-b from-blue-400 to-blue-600 shadow-[0_6px_12px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.2)]"></div>

        {/* Beveled */}
        <div className="w-full h-3 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 shadow-[0_2px_8px_rgba(0,0,0,0.2)]" style={{
          boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -2px 0 rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2)'
        }}></div>

        {/* Layered 3D */}
        <div className="relative w-full h-2">
          <div className="absolute inset-0 bg-gray-500 translate-y-2 blur-sm opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-gray-500 shadow-[0_4px_8px_rgba(0,0,0,0.3)]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent h-1/2"></div>
        </div>
      </section>

      {/* With Text */}
      <section className="space-y-8">
        <h2 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wide">With Text</h2>

        {/* 3D Button Style */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-2 bg-gradient-to-b from-gray-300 to-gray-400 shadow-[0_3px_6px_rgba(0,0,0,0.2)]"></div>
          <div className="relative px-8 py-3 bg-gradient-to-b from-blue-400 to-blue-600 shadow-[0_6px_12px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
            <span className="text-sm text-white font-bold uppercase tracking-wide relative z-10">Featured</span>
          </div>
          <div className="flex-1 h-2 bg-gradient-to-b from-gray-300 to-gray-400 shadow-[0_3px_6px_rgba(0,0,0,0.2)]"></div>
        </div>

        {/* Embossed Text */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-1 bg-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"></div>
          <div className="px-10 py-4 bg-gray-200 shadow-[inset_0_2px_8px_rgba(0,0,0,0.15)]">
            <span className="text-base text-gray-600 font-bold uppercase tracking-wider" style={{
              textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(0,0,0,0.2)'
            }}>Section</span>
          </div>
          <div className="flex-1 h-1 bg-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"></div>
        </div>

        {/* Floating Badge */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-2 bg-gradient-to-b from-purple-400 to-purple-600 shadow-[0_4px_8px_rgba(0,0,0,0.2)]"></div>
          <div className="relative">
            <div className="absolute inset-0 bg-purple-600 translate-y-2 blur-md opacity-40"></div>
            <div className="relative px-8 py-3 bg-gradient-to-b from-purple-400 to-purple-600 shadow-[0_8px_16px_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.3)]">
              <span className="text-sm text-white font-bold uppercase tracking-wide">Premium</span>
            </div>
          </div>
          <div className="flex-1 h-2 bg-gradient-to-b from-purple-400 to-purple-600 shadow-[0_4px_8px_rgba(0,0,0,0.2)]"></div>
        </div>
      </section>

      {/* With Icon */}
      <section className="space-y-8">
        <h2 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wide">With Icon</h2>

        {/* 3D Circular Icon */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-2 bg-gradient-to-b from-gray-300 to-gray-400 shadow-[0_4px_6px_rgba(0,0,0,0.2)]"></div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-full translate-y-2 blur-md opacity-40"></div>
            <div className="relative p-4 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.4)]">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div className="flex-1 h-2 bg-gradient-to-b from-gray-300 to-gray-400 shadow-[0_4px_6px_rgba(0,0,0,0.2)]"></div>
        </div>

        {/* Extruded Square */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-2 bg-gradient-to-b from-green-400 to-green-600 shadow-[0_4px_8px_rgba(0,0,0,0.2)]"></div>
          <div className="relative">
            <div className="absolute inset-0 bg-green-700 translate-x-2 translate-y-2"></div>
            <div className="relative p-4 bg-gradient-to-br from-green-400 to-green-600 shadow-[0_6px_12px_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.3)]">
              <svg className="w-6 h-6 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
          <div className="flex-1 h-2 bg-gradient-to-b from-green-400 to-green-600 shadow-[0_4px_8px_rgba(0,0,0,0.2)]"></div>
        </div>
      </section>

      {/* Vertical Dividers */}
      <section>
        <h2 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wide">Vertical</h2>
        <div className="flex items-center justify-center gap-10 h-40 bg-gradient-to-b from-white to-gray-100 shadow-[inset_0_2px_8px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] p-8">
          <div className="text-sm text-gray-700 font-semibold">Item 1</div>
          <div className="w-2 h-full bg-gradient-to-r from-gray-300 to-gray-400 shadow-[0_0_8px_rgba(0,0,0,0.2),inset_1px_0_0_rgba(255,255,255,0.5)]"></div>
          <div className="text-sm text-gray-700 font-semibold">Item 2</div>
          <div className="w-2 h-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-[0_0_12px_rgba(0,0,0,0.3),inset_1px_0_0_rgba(255,255,255,0.4)]"></div>
          <div className="text-sm text-gray-700 font-semibold">Item 3</div>
        </div>
      </section>

      {/* Special Effects */}
      <section className="space-y-8">
        <h2 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wide">Special Effects</h2>

        {/* Metallic Bar */}
        <div className="w-full h-4 bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 shadow-[0_6px_12px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.2)]"></div>

        {/* Glass Effect */}
        <div className="relative w-full h-3">
          <div className="absolute inset-0 bg-blue-300/30 backdrop-blur-sm shadow-[0_4px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.6)]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent h-1/2"></div>
        </div>

        {/* Multi-Layer 3D */}
        <div className="relative w-full h-2">
          <div className="absolute inset-0 bg-red-800 translate-y-3 opacity-20 blur-md"></div>
          <div className="absolute inset-0 bg-red-700 translate-y-2"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-red-400 to-red-600 shadow-[0_6px_12px_rgba(0,0,0,0.3)]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
        </div>
      </section>
    </div>
  );
}