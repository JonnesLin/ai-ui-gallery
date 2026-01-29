import { BackToTop } from './BackToTop';

export default function PastelBackToTop() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative">
      {/* Demo page content */}
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold text-purple-400 mb-6">
          Pastel Back to Top
        </h1>
        <div className="rounded-3xl p-6 bg-white/70 shadow-lg shadow-purple-100/50 border border-purple-100">
          <p className="text-purple-300 leading-relaxed mb-4">
            Pastel designs feature soft, muted colors that create a gentle, calming
            aesthetic. Think macaron colors and dreamy vibes.
          </p>
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i} className="text-purple-200 mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          ))}
        </div>
      </div>

      {/* Default button - bottom right */}
      <BackToTop theme="pastel" visibleOffset={200} />

      {/* With label - bottom left */}
      <BackToTop
        theme="pastel"
        position="bottom-left"
        label="Top"
        visibleOffset={200}
      />
    </div>
  );
}
