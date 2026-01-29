import { BackToTop } from './BackToTop';

export default function NeumorphismBackToTop() {
  return (
    <div className="min-h-screen bg-[#e0e5ec] relative">
      {/* Demo page content */}
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6">Neumorphism Back to Top</h1>
        <div className="rounded-2xl p-6 bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff]">
          <p className="text-gray-600 leading-relaxed mb-4">
            Neumorphism combines background colors with soft shadows to create extruded shapes
            that appear to push through the surface.
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
      <BackToTop theme="neumorphism" visibleOffset={200} />

      {/* With label - bottom left */}
      <BackToTop
        theme="neumorphism"
        position="bottom-left"
        label="Top"
        visibleOffset={200}
      />
    </div>
  );
}
