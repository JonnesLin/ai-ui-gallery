import { BackToTop } from './BackToTop';

export default function DarkBackToTop() {
  return (
    <div className="min-h-screen bg-gray-950 relative">
      {/* Demo page content */}
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold text-white mb-6">Dark Mode Back to Top</h1>
        <div className="rounded-xl p-6 bg-gray-900 border border-gray-800">
          <p className="text-gray-300 leading-relaxed mb-4">
            Dark mode designs feature deep backgrounds with carefully balanced contrast
            and accent colors that pop without straining the eyes.
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
      <BackToTop theme="dark" visibleOffset={200} />

      {/* With label - bottom left */}
      <BackToTop
        theme="dark"
        position="bottom-left"
        label="Top"
        visibleOffset={200}
      />
    </div>
  );
}
