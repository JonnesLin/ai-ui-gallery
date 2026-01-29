import { CTA, CTATitle, CTADescription, CTAActions } from './index';

export default function DarkCTA() {
  return (
    <CTA theme="dark" layout="centered" variant="banner" className="bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black"></div>
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>

      <div className="relative z-10">
        <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 uppercase tracking-widest mb-8">
          Limited Time Offer
        </div>
        <CTATitle className="text-5xl md:text-6xl text-white">
          Build Without
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            Boundaries
          </span>
        </CTATitle>
        <CTADescription className="text-gray-400 max-w-xl mb-12">
          Unleash your creativity with tools designed for the modern developer. No limits, no compromises.
        </CTADescription>
        <CTAActions>
          <button className="group px-8 py-4 bg-white text-black font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
            Start Building
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button className="px-8 py-4 text-white font-semibold border border-gray-700 hover:border-gray-500 hover:bg-white/5 transition-all">
            View Examples
          </button>
        </CTAActions>
        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            99.9% Uptime
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            24/7 Support
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Free Updates
          </span>
        </div>
      </div>
    </CTA>
  );
}
