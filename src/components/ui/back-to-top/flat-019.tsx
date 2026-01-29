import { BackToTop } from './BackToTop';

export default function FlatBackToTop() {
  return (
    <div className="min-h-screen bg-slate-50 relative">
      {/* Demo page content */}
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold text-slate-800 mb-6">
          Flat Back to Top
        </h1>
        <div className="rounded-lg p-6 bg-white">
          <p className="text-slate-600 leading-relaxed mb-4">
            Flat design eliminates depth cues like shadows and gradients, relying on
            simple shapes, bold colors, and clear typography for visual hierarchy.
          </p>
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i} className="text-slate-500 mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          ))}
        </div>
      </div>

      {/* Default button - bottom right */}
      <BackToTop theme="flat" visibleOffset={200} />

      {/* With label - bottom left */}
      <BackToTop
        theme="flat"
        position="bottom-left"
        label="Top"
        visibleOffset={200}
      />
    </div>
  );
}
