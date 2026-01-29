export default function DarkDivider() {
  return (
    <div className="w-full min-h-screen bg-gray-950 p-8 space-y-12">
      {/* Horizontal Dividers */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-gray-100 mb-6">Horizontal</h2>

        {/* Subtle Gray */}
        <div className="w-full h-px bg-gray-800"></div>

        {/* Medium Gray */}
        <div className="w-full h-px bg-gray-700"></div>

        {/* Bright Gray */}
        <div className="w-full h-0.5 bg-gray-600"></div>

        {/* Glowing Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>

        {/* Double Line */}
        <div className="space-y-1">
          <div className="w-full h-px bg-gray-700"></div>
          <div className="w-full h-px bg-gray-800"></div>
        </div>
      </section>

      {/* With Text */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-gray-100 mb-6">With Text</h2>

        {/* Center Text - Subtle */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-800"></div>
          <span className="text-xs text-gray-500 uppercase tracking-wider">or</span>
          <div className="flex-1 h-px bg-gray-800"></div>
        </div>

        {/* Center Text - Bright */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="text-sm text-gray-300 font-medium px-4 py-1 bg-gray-900 border border-gray-800 rounded">Section</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Glowing Text */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-cyan-500/30"></div>
          <span className="text-sm text-cyan-400 font-medium px-4 py-1 bg-cyan-950/50 border border-cyan-900/50 rounded">Featured</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-cyan-500/30 to-cyan-500/30"></div>
        </div>
      </section>

      {/* With Icon */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-gray-100 mb-6">With Icon</h2>

        {/* Simple Icon */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-800"></div>
          <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <div className="flex-1 h-px bg-gray-800"></div>
        </div>

        {/* Icon with Background */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-700"></div>
          <div className="p-2 bg-gray-900 border border-gray-800 rounded-lg">
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Glowing Icon */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-purple-500/30"></div>
          <div className="p-2 bg-purple-950/50 border border-purple-900/50 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-purple-500/30 to-purple-500/30"></div>
        </div>
      </section>

      {/* Vertical Dividers */}
      <section>
        <h2 className="text-sm font-medium text-gray-100 mb-6">Vertical</h2>
        <div className="flex items-center justify-center gap-8 h-32 bg-gray-900 border border-gray-800 rounded-xl p-6">
          <div className="text-sm text-gray-300">Item 1</div>
          <div className="w-px h-full bg-gray-800"></div>
          <div className="text-sm text-gray-300">Item 2</div>
          <div className="w-px h-full bg-gray-700"></div>
          <div className="text-sm text-gray-300">Item 3</div>
          <div className="w-px h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"></div>
          <div className="text-sm text-gray-300">Item 4</div>
        </div>
      </section>

      {/* Special Effects */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-gray-100 mb-6">Special Effects</h2>

        {/* Gradient Glow */}
        <div className="w-full h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-50"></div>

        {/* Animated Glow (static representation) */}
        <div className="w-full h-px bg-gray-800 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-sm"></div>
        </div>

        {/* Thick Neon */}
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
      </section>
    </div>
  );
}