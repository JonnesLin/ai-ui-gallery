export default function BrutalistHero() {
  return (
    <section className="min-h-screen bg-[#f5f5dc] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-6xl mx-auto">
        {/* Raw header */}
        <div className="border-8 border-black p-4 mb-8">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <span className="text-xl font-mono font-bold uppercase">BRUTALIST.DESIGN</span>
            <div className="flex gap-4 font-mono uppercase text-sm">
              <span className="hover:line-through cursor-pointer">About</span>
              <span className="hover:line-through cursor-pointer">Work</span>
              <span className="hover:line-through cursor-pointer">Contact</span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black uppercase leading-[0.85] tracking-tighter">
              RAW
              <span className="block text-[#ff3333]">POWER</span>
            </h1>

            <p className="text-xl md:text-2xl font-mono leading-relaxed border-l-8 border-black pl-6 max-w-lg">
              NO DECORATION. NO PRETENSE. JUST PURE, HONEST, FUNCTIONAL DESIGN.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-black text-[#f5f5dc] font-mono font-bold uppercase text-lg border-4 border-black hover:bg-[#f5f5dc] hover:text-black transition-colors">
                ENTER
              </button>
              <button className="px-8 py-4 bg-transparent text-black font-mono font-bold uppercase text-lg border-4 border-black hover:bg-black hover:text-[#f5f5dc] transition-colors">
                MANIFESTO
              </button>
            </div>
          </div>

          {/* Decorative box */}
          <div className="relative hidden md:block">
            <div className="absolute top-0 right-0 w-full h-full border-8 border-black bg-[#ff3333]" />
            <div className="absolute top-6 right-6 w-full h-full border-8 border-black bg-[#f5f5dc] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-9xl font-black">01</div>
                <div className="font-mono uppercase text-lg">ISSUE NUMBER</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t-8 border-black pt-8">
          <div className="flex flex-wrap justify-between items-end gap-8">
            <div className="font-mono text-sm uppercase space-y-1">
              <div>ESTABLISHED 2024</div>
              <div>LATITUDE 40.7128</div>
              <div>LONGITUDE -74.0060</div>
            </div>
            <div className="font-mono text-6xl md:text-8xl font-black">
              NYC
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
