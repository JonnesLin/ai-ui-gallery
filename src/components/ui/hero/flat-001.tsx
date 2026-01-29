export default function FlatHero() {
  return (
    <section className="min-h-screen bg-[#3498db] relative overflow-hidden flex items-center justify-center px-6">
      {/* Flat geometric shapes */}
      <div className="absolute top-20 left-[10%] w-40 h-40 bg-[#e74c3c] hidden lg:block" />
      <div className="absolute top-32 left-[15%] w-24 h-24 bg-[#f39c12] hidden lg:block" />
      <div className="absolute bottom-20 right-[10%] w-48 h-48 bg-[#2ecc71] rounded-full hidden lg:block" />
      <div className="absolute bottom-40 right-[20%] w-20 h-20 bg-[#9b59b6] rotate-45 hidden lg:block" />
      <div className="absolute top-1/2 right-[5%] w-32 h-8 bg-[#1abc9c] hidden lg:block" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-white">
          <div className="w-4 h-4 bg-[#e74c3c]" />
          <span className="font-bold text-[#2c3e50] uppercase tracking-wide text-sm">Flat Design</span>
          <div className="w-4 h-4 bg-[#2ecc71]" />
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 uppercase tracking-tight">
          Pure
          <span className="block text-[#2c3e50]">Simplicity</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
          No shadows. No gradients. No distractions.
          Just bold colors, clean typography, and honest design.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-5 bg-[#2c3e50] text-white font-bold uppercase tracking-wide hover:bg-[#1a252f] transition-colors">
            Get Started
          </button>
          <button className="px-10 py-5 bg-white text-[#2c3e50] font-bold uppercase tracking-wide hover:bg-[#ecf0f1] transition-colors">
            Learn More
          </button>
        </div>

        {/* Flat icons row */}
        <div className="mt-20 flex flex-wrap justify-center gap-6">
          <div className="w-20 h-20 bg-[#e74c3c] flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
            </svg>
          </div>
          <div className="w-20 h-20 bg-[#f39c12] flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="w-20 h-20 bg-[#2ecc71] flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="w-20 h-20 bg-[#9b59b6] flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
            </svg>
          </div>
          <div className="w-20 h-20 bg-[#1abc9c] flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
