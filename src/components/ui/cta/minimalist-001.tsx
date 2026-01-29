import { CTA, CTATitle, CTADescription, CTAActions } from './index';

export default function MinimalistCTA() {
  return (
    <CTA theme="minimalist" layout="centered" variant="simple">
      <CTATitle className="font-light text-gray-900">
        Start building today
      </CTATitle>
      <CTADescription className="text-gray-500 max-w-xl">
        Simple tools for complex problems. No clutter, just results.
      </CTADescription>
      <CTAActions>
        <button className="px-8 py-3.5 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors">
          Get Started
        </button>
        <button className="px-8 py-3.5 text-gray-900 text-sm font-medium border border-gray-200 hover:border-gray-900 transition-colors">
          Learn More
        </button>
      </CTAActions>
      <p className="mt-8 text-xs text-gray-400 tracking-wide uppercase">
        Free forever for individuals
      </p>
    </CTA>
  );
}
