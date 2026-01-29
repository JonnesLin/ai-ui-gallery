import { CTA, CTATitle, CTADescription, CTAActions } from './index';

export default function NeumorphismCTA() {
  return (
    <CTA theme="neumorphism" layout="centered" variant="simple" className="bg-[#e0e5ec]">
      <div className="rounded-3xl p-12 md:p-16 bg-[#e0e5ec] shadow-[20px_20px_60px_#bec3c9,-20px_-20px_60px_#ffffff]">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#e0e5ec] shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff] mb-8">
          <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <CTATitle className="text-gray-700 mb-5">
          Elevate Your Workflow
        </CTATitle>
        <CTADescription className="text-gray-500 max-w-xl">
          Experience the perfect blend of form and function with our intuitive platform.
        </CTADescription>
        <CTAActions className="gap-6">
          <button className="px-10 py-4 rounded-xl bg-[#e0e5ec] text-blue-600 font-semibold shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#bec3c9,inset_-8px_-8px_16px_#ffffff] transition-all duration-300">
            Get Started
          </button>
          <button className="px-10 py-4 rounded-xl bg-[#e0e5ec] text-gray-600 font-semibold shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#bec3c9,inset_-8px_-8px_16px_#ffffff] transition-all duration-300">
            Learn More
          </button>
        </CTAActions>
        <p className="mt-8 text-gray-400 text-sm">
          Trusted by 10,000+ teams worldwide
        </p>
      </div>
    </CTA>
  );
}
