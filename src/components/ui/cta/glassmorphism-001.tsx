import { CTA, CTATitle, CTADescription, CTAActions } from './index';

export default function GlassmorphismCTA() {
  return (
    <CTA
      theme="glassmorphism"
      layout="centered"
      variant="banner"
      className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 min-h-[500px] flex items-center"
    >
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 md:p-16 shadow-2xl">
        <CTATitle className="text-white mb-5">
          Ready to Transform?
        </CTATitle>
        <CTADescription className="text-xl text-white/70">
          Join thousands of innovators already leveraging our platform to build the future.
        </CTADescription>
        <CTAActions>
          <button className="px-8 py-4 bg-white text-purple-700 rounded-2xl font-semibold hover:bg-white/90 transition-all hover:scale-105 shadow-lg">
            Start Free Trial
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-2xl font-semibold border border-white/30 hover:bg-white/20 transition-all">
            Watch Demo
          </button>
        </CTAActions>
        <p className="mt-8 text-white/50 text-sm">
          No credit card required • Cancel anytime
        </p>
      </div>
    </CTA>
  );
}
