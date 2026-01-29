export default function GlassmorphismDivider() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-8 space-y-12">
      {/* Horizontal Dividers */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-white/90 mb-6 backdrop-blur-sm bg-white/10 inline-block px-3 py-1 rounded">Horizontal</h2>

        {/* Glass Line */}
        <div className="w-full h-px bg-white/30 backdrop-blur-sm"></div>

        {/* Thick Glass */}
        <div className="w-full h-1 bg-white/20 backdrop-blur-md rounded-full"></div>

        {/* Gradient Glass */}
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent backdrop-blur-sm"></div>

        {/* Double Glass */}
        <div className="space-y-2">
          <div className="w-full h-px bg-white/25 backdrop-blur-sm"></div>
          <div className="w-full h-px bg-white/25 backdrop-blur-sm"></div>
        </div>
      </section>

      {/* With Text */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-white/90 mb-6 backdrop-blur-sm bg-white/10 inline-block px-3 py-1 rounded">With Text</h2>

        {/* Center Text */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-white/30 backdrop-blur-sm"></div>
          <span className="text-xs text-white/80 uppercase tracking-wider backdrop-blur-md bg-white/10 px-4 py-2 rounded-full">or</span>
          <div className="flex-1 h-px bg-white/30 backdrop-blur-sm"></div>
        </div>

        {/* With Glass Card */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-white/30 backdrop-blur-sm"></div>
          <div className="backdrop-blur-lg bg-white/20 px-6 py-2 rounded-lg border border-white/30">
            <span className="text-sm text-white font-medium">Section</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/30 to-white/30 backdrop-blur-sm"></div>
        </div>
      </section>

      {/* With Icon */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-white/90 mb-6 backdrop-blur-sm bg-white/10 inline-block px-3 py-1 rounded">With Icon</h2>

        {/* Glass Icon Container */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-white/30 backdrop-blur-sm"></div>
          <div className="backdrop-blur-lg bg-white/20 p-3 rounded-full border border-white/30">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex-1 h-px bg-white/30 backdrop-blur-sm"></div>
        </div>

        {/* Floating Glass Dot */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/40 to-white/40"></div>
          <div className="w-3 h-3 rounded-full bg-white/30 backdrop-blur-md border border-white/40"></div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/40 to-white/40"></div>
        </div>
      </section>

      {/* Vertical Dividers */}
      <section>
        <h2 className="text-sm font-medium text-white/90 mb-6 backdrop-blur-sm bg-white/10 inline-block px-3 py-1 rounded">Vertical</h2>
        <div className="flex items-center justify-center gap-8 h-32 backdrop-blur-sm bg-white/5 rounded-2xl p-6">
          <div className="text-sm text-white/90 font-medium">Item 1</div>
          <div className="w-px h-full bg-white/30 backdrop-blur-sm"></div>
          <div className="text-sm text-white/90 font-medium">Item 2</div>
          <div className="w-0.5 h-full bg-white/20 backdrop-blur-md rounded-full"></div>
          <div className="text-sm text-white/90 font-medium">Item 3</div>
        </div>
      </section>

      {/* Special Effects */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-white/90 mb-6 backdrop-blur-sm bg-white/10 inline-block px-3 py-1 rounded">Special Effects</h2>

        {/* Glowing Glass */}
        <div className="w-full h-1 bg-white/30 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>

        {/* Frosted Glass */}
        <div className="w-full h-2 backdrop-blur-xl bg-white/10 rounded-full border border-white/20"></div>
      </section>
    </div>
  );
}