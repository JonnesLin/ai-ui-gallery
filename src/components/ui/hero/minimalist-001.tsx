export default function MinimalistHero() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-neutral-900 mb-8">
          Less is more.
        </h1>
        <p className="text-lg md:text-xl text-neutral-500 max-w-xl mx-auto mb-12 leading-relaxed">
          Embrace simplicity. Build products that focus on what truly matters.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-800 transition-colors">
            Get Started
          </button>
          <button className="px-8 py-4 border border-neutral-200 text-neutral-700 text-sm font-medium tracking-wide hover:border-neutral-400 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
