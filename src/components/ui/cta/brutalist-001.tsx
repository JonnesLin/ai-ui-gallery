import { CTA, CTATitle, CTADescription, CTAActions } from './index';

export default function BrutalistCTA() {
  return (
    <CTA theme="flat" layout="left" variant="banner" className="bg-yellow-300">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.03)_2px,rgba(0,0,0,0.03)_4px)]"></div>

      <div className="relative border-4 border-black bg-white p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <div className="border-b-4 border-black pb-6 mb-8">
          <span className="inline-block bg-black text-yellow-300 px-3 py-1 text-xs font-mono uppercase tracking-wider mb-4">
            Announcement
          </span>
          <CTATitle className="text-5xl md:text-7xl font-black text-black uppercase tracking-tight leading-none mb-0">
            No More
            <br />
            Excuses
          </CTATitle>
        </div>

        <CTADescription className="text-xl text-black font-mono max-w-2xl mx-0">
          Stop waiting. Stop planning. Stop overthinking.
          <span className="bg-yellow-300 px-1">Start doing.</span>
        </CTADescription>

        <CTAActions className="justify-start">
          <button className="px-8 py-4 bg-black text-white font-black text-lg uppercase tracking-wide hover:bg-yellow-300 hover:text-black border-4 border-black transition-colors">
            Do It Now
          </button>
          <button className="px-8 py-4 bg-white text-black font-black text-lg uppercase tracking-wide border-4 border-black hover:bg-black hover:text-white transition-colors">
            Read Manifesto
          </button>
        </CTAActions>

        <div className="mt-10 pt-6 border-t-2 border-dashed border-black">
          <p className="font-mono text-sm text-black/70 uppercase tracking-wider">
            * 100% Free * No BS * Just Action
          </p>
        </div>
      </div>
    </CTA>
  );
}
