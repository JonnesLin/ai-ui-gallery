import { BackToTop } from './BackToTop';

export default function GlassmorphismBackToTop() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl" />

      {/* Demo page content */}
      <div className="relative z-10 p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold text-white mb-6">Glassmorphism Back to Top</h1>
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
          <p className="text-white/90 leading-relaxed mb-4">
            The glassmorphism style features frosted glass effects, subtle transparency,
            and beautiful blur effects that create depth and elegance.
          </p>
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i} className="text-white/70 mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          ))}
        </div>
      </div>

      {/* Default button - bottom right */}
      <BackToTop theme="glassmorphism" visibleOffset={200} />

      {/* With label - bottom left */}
      <BackToTop
        theme="glassmorphism"
        position="bottom-left"
        label="Back to Top"
        visibleOffset={200}
      />
    </div>
  );
}
