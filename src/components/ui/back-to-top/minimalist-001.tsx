import { BackToTop } from './BackToTop';

export default function MinimalistBackToTop() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Demo page content */}
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-light text-gray-900 mb-6">Minimalist Back to Top</h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          Scroll down to see the back to top button in action. The minimalist style features clean lines,
          subtle interactions, and maximum clarity.
        </p>
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i} className="text-gray-500 mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        ))}
      </div>

      {/* Default button - bottom right */}
      <BackToTop theme="minimalist" visibleOffset={200} />

      {/* With label - bottom left */}
      <BackToTop
        theme="minimalist"
        position="bottom-left"
        label="Top"
        visibleOffset={200}
      />
    </div>
  );
}
