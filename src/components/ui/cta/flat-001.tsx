import { CTA, CTATitle, CTADescription, CTAActions } from './index';

export default function FlatCTA() {
  return (
    <CTA theme="flat" layout="split" variant="card" className="bg-sky-500">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-sky-500 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-sky-500 font-bold uppercase tracking-wider text-sm">Get Started</span>
        </div>
        <CTATitle className="text-3xl md:text-4xl text-gray-800 mb-3">
          Simple. Clean. Effective.
        </CTATitle>
        <CTADescription className="text-gray-600 mb-0">
          No frills, no distractions. Just straightforward design that gets the job done beautifully.
        </CTADescription>
      </div>

      <CTAActions className="flex-col gap-3 md:min-w-[200px]">
        <button className="w-full px-8 py-4 bg-sky-500 text-white font-bold hover:bg-sky-600 transition-colors">
          Start Free
        </button>
        <button className="w-full px-8 py-4 bg-gray-100 text-gray-800 font-bold hover:bg-gray-200 transition-colors">
          Learn More
        </button>
      </CTAActions>

      <div className="mt-10 pt-8 border-t-2 border-gray-100 col-span-full">
        <div className="flex flex-wrap gap-8 justify-between items-center">
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-emerald-400"></div>
              <span className="text-sm text-gray-600">Free Plan</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-amber-400"></div>
              <span className="text-sm text-gray-600">No Credit Card</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-rose-400"></div>
              <span className="text-sm text-gray-600">Cancel Anytime</span>
            </div>
          </div>
          <span className="text-sm text-gray-400">Join 50,000+ users</span>
        </div>
      </div>
    </CTA>
  );
}
