import { BackToTop } from './BackToTop';

export default function RetroBackToTop() {
  return (
    <div className="min-h-screen bg-amber-50 relative">
      {/* Demo page content */}
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-amber-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
          Retro Back to Top
        </h1>
        <div className="rounded-lg p-6 bg-amber-100 border-2 border-amber-300 shadow-md">
          <p className="text-amber-800 leading-relaxed mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Retro designs evoke nostalgia with warm color palettes, vintage typography,
            and classic UI patterns from the 80s and 90s era.
          </p>
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i} className="text-amber-700 mb-4 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          ))}
        </div>
      </div>

      {/* Default button - bottom right */}
      <BackToTop theme="material" visibleOffset={200} />

      {/* With label - bottom left */}
      <BackToTop
        theme="material"
        position="bottom-left"
        label="Top"
        visibleOffset={200}
      />
    </div>
  );
}
