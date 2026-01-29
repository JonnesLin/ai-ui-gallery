import { BackToTop } from './BackToTop';

export default function BrutalistBackToTop() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Demo page content */}
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-black text-black uppercase tracking-tight mb-6 border-b-4 border-black pb-2">
          Brutalist Back to Top
        </h1>
        <div className="border-4 border-black p-6 bg-yellow-300">
          <p className="text-black font-mono leading-relaxed mb-4">
            BRUTALIST DESIGN STRIPS AWAY DECORATION, EMBRACING RAW FORMS,
            BOLD TYPOGRAPHY, AND HARSH CONTRASTS. NO POLISH. JUST FUNCTION.
          </p>
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i} className="text-black font-mono mb-4 leading-relaxed text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          ))}
        </div>
      </div>

      {/* Default button - bottom right */}
      <BackToTop
        theme="flat"
        visibleOffset={200}
        icon={<span className="text-2xl font-black">↑</span>}
        className="!bg-black !text-white !border-4 !border-black !rounded-none hover:!bg-yellow-400 hover:!text-black !shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      />

      {/* With label - bottom left */}
      <BackToTop
        theme="flat"
        position="bottom-left"
        label="BACK"
        visibleOffset={200}
        className="!bg-white !text-black !border-4 !border-black !rounded-none hover:!bg-yellow-400 !shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] !font-black !uppercase"
      />
    </div>
  );
}
