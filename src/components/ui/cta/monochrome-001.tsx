export default function MonochromeCTA() {
  return (
    <section className="py-24 px-4 bg-neutral-100 relative">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#e5e5e5_25%,transparent_25%,transparent_75%,#e5e5e5_75%,#e5e5e5),linear-gradient(45deg,#e5e5e5_25%,transparent_25%,transparent_75%,#e5e5e5_75%,#e5e5e5)] bg-[length:20px_20px] bg-[position:0_0,10px_10px] opacity-50"></div>

      <div className="max-w-4xl mx-auto relative">
        <div className="bg-white border border-neutral-200 p-12 md:p-16">
          <div className="grid md:grid-cols-[1fr,auto,1fr] gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
                Less is
                <span className="block">More</span>
              </h2>
            </div>

            <div className="hidden md:block w-px h-32 bg-neutral-200"></div>

            <div>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Embrace simplicity. Focus on what matters. Strip away the noise and discover clarity in design.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="px-6 py-3 bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors">
                  Get Started
                </button>
                <button className="px-6 py-3 text-neutral-900 font-medium border border-neutral-300 hover:border-neutral-900 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-200">
            <div className="flex flex-wrap justify-between items-center gap-4 text-sm text-neutral-400">
              <span>Minimalism since 2020</span>
              <div className="flex gap-6">
                <span className="text-neutral-900 font-semibold">10K+</span>
                <span>Users</span>
                <span className="text-neutral-900 font-semibold">99%</span>
                <span>Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
