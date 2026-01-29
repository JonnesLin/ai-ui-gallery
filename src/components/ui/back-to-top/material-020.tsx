import { BackToTop } from './BackToTop';

export default function MaterialBackToTop() {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Demo page content */}
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-medium text-gray-900 mb-6">
          Material Back to Top
        </h1>
        <div className="rounded-lg p-6 bg-white shadow-sm">
          <p className="text-gray-600 leading-relaxed mb-4">
            Material Design combines bold colors, purposeful motion, and tactile surfaces.
            Elevation creates hierarchy through consistent shadow systems.
          </p>
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i} className="text-gray-500 mb-4 leading-relaxed">
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
        label="Back to Top"
        visibleOffset={200}
      />
    </div>
  );
}
