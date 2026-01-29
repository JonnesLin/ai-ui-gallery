import { BackToTop } from './BackToTop';

export default function CyberpunkBackToTop() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Cyberpunk grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Demo page content */}
      <div className="relative z-10 p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 mb-6 uppercase tracking-wider">
          Cyberpunk Back to Top
        </h1>
        <div className="rounded-none p-6 bg-slate-900/80 border border-cyan-500/50 backdrop-blur-sm
                        shadow-[0_0_20px_rgba(0,255,255,0.2),inset_0_0_20px_rgba(0,255,255,0.05)]">
          <p className="text-cyan-100 leading-relaxed mb-4 font-mono">
            CYBERPUNK AESTHETICS MERGE NEON COLORS, GLITCH EFFECTS, AND FUTURISTIC
            TECH VIBES. HIGH CONTRAST. DIGITAL CHAOS. PURE EDGE.
          </p>
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i} className="text-slate-400 mb-4 leading-relaxed font-mono text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          ))}
        </div>
      </div>

      {/* Default button - bottom right */}
      <BackToTop theme="cyberpunk" visibleOffset={200} />

      {/* With label - bottom left */}
      <BackToTop
        theme="cyberpunk"
        position="bottom-left"
        label="TOP"
        visibleOffset={200}
      />
    </div>
  );
}
