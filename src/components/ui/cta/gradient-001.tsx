import { CTA, CTATitle, CTADescription, CTAActions } from './index';

export default function GradientCTA() {
  return (
    <CTA
      theme="gradient"
      layout="centered"
      variant="banner"
      className="bg-gradient-to-br from-rose-500 via-fuchsia-500 to-indigo-500"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>

      <div className="relative z-10">
        <CTATitle className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Make Something Amazing
        </CTATitle>
        <CTADescription className="text-xl text-white/90 font-light">
          Transform your ideas into reality with our powerful suite of creative tools. Start your journey today.
        </CTADescription>
        <CTAActions>
          <button className="px-10 py-4 bg-white text-fuchsia-600 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/25 transition-all hover:-translate-y-1">
            Start Creating
          </button>
          <button className="px-10 py-4 bg-transparent text-white rounded-full font-bold text-lg border-2 border-white/50 hover:bg-white/10 hover:border-white transition-all">
            See Gallery
          </button>
        </CTAActions>
        <div className="mt-12 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-teal-500 border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border-2 border-white"></div>
          </div>
          <span className="text-white/90 text-sm font-medium">
            Join 50,000+ creators
          </span>
        </div>
      </div>
    </CTA>
  );
}
