import { BackToTop } from './BackToTop';

export default function GradientBackToTop() {
  return (
    <div className="min-h-screen bg-slate-100 relative">
      {/* Demo page content */}
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-6">
          Gradient Back to Top
        </h1>
        <div className="rounded-2xl p-6 bg-white shadow-xl">
          <p className="text-gray-600 leading-relaxed mb-4">
            Gradient styles create vibrant, flowing color transitions that bring energy
            and modern aesthetic to UI components.
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
      <BackToTop theme="gradient" visibleOffset={200} />

      {/* With label - bottom left */}
      <BackToTop
        theme="gradient"
        position="bottom-left"
        label="Top"
        visibleOffset={200}
      />
    </div>
  );
}
