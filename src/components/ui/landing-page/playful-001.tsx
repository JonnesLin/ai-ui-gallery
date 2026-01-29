export default function PlayfulLandingPage() {
  return (
    <div className="min-h-screen bg-yellow-50 text-purple-900">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-2xl font-black text-orange-500 rotate-[-2deg] inline-block">FunTime!</span>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-sm font-bold text-purple-600 hover:text-orange-500 hover:scale-110 transition-all">Features</a>
            <a href="#pricing" className="text-sm font-bold text-purple-600 hover:text-orange-500 hover:scale-110 transition-all">Pricing</a>
            <a href="#about" className="text-sm font-bold text-purple-600 hover:text-orange-500 hover:scale-110 transition-all">About</a>
          </div>
          <button className="px-6 py-2 bg-orange-400 text-white font-bold rounded-full hover:bg-orange-500 hover:scale-105 transition-all shadow-lg">
            Join Fun
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-8 animate-bounce">
            <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full mx-auto" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-purple-800 transform rotate-[-1deg]">
            Life's Too Short<br/>
            <span className="text-orange-500 rotate-[1deg] inline-block">To Be Boring!</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-600 max-w-2xl mx-auto mb-12 font-semibold">
            Let's make work fun again! Build amazing things while having a blast.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-lg font-black rounded-full hover:scale-110 transition-all shadow-xl">
              Start Playing
            </button>
            <button className="px-12 py-4 bg-white text-purple-700 text-lg font-black rounded-full border-4 border-purple-400 hover:scale-105 transition-all shadow-lg">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-6 text-purple-800 rotate-[-1deg]">
            Super Powers!
          </h2>
          <p className="text-center text-xl text-purple-600 mb-16 font-bold">
            Everything you need to unleash creativity
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Joy Mode', desc: 'Work becomes play. Every interaction brings a smile.', emoji: '😊', bg: 'bg-pink-200', rotate: 'rotate-[-3deg]' },
              { title: 'Super Fast', desc: 'Zoom zoom! Lightning speed meets playful design.', emoji: '⚡', bg: 'bg-yellow-200', rotate: 'rotate-[2deg]' },
              { title: 'Magic Touch', desc: 'Delightful animations and surprising interactions.', emoji: '✨', bg: 'bg-blue-200', rotate: 'rotate-[-2deg]' },
            ].map((feature, i) => (
              <div key={i} className={`p-8 ${feature.bg} rounded-3xl transform ${feature.rotate} hover:scale-105 hover:rotate-0 transition-all shadow-lg hover:shadow-2xl`}>
                <div className="text-6xl mb-4">{feature.emoji}</div>
                <h3 className="text-2xl font-black mb-3 text-purple-800">{feature.title}</h3>
                <p className="text-purple-700 font-semibold leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 bg-orange-300">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '1M+', label: 'Happy Users', emoji: '🎉' },
              { value: '100%', label: 'Fun Factor', emoji: '🎨' },
              { value: '∞', label: 'Creativity', emoji: '🚀' },
              { value: '0', label: 'Boring Stuff', emoji: '🎭' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:scale-110 transition-all transform hover:rotate-3">
                <div className="text-4xl mb-2">{stat.emoji}</div>
                <div className="text-4xl font-black mb-2 text-purple-700">{stat.value}</div>
                <div className="text-sm font-bold text-purple-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-6 bg-purple-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">💬</div>
          <blockquote className="text-2xl md:text-3xl font-black text-purple-800 mb-6 leading-relaxed">
            "This is the most fun I've had building products. My team actually looks forward to work now!"
          </blockquote>
          <div className="font-bold text-purple-600">
            - Happy Customer, CEO of Awesome Inc.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white drop-shadow-lg transform rotate-[-2deg]">
            Ready to Play?
          </h2>
          <p className="text-2xl text-white mb-12 font-bold max-w-xl mx-auto">
            Join the fun revolution. Life's better when you're having fun!
          </p>
          <button className="px-16 py-6 bg-white text-purple-700 text-2xl font-black rounded-full hover:scale-110 transition-all shadow-2xl">
            Let's Go! 🚀
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-purple-800 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-lg font-bold">© 2024 FunTime - Spread the Joy!</span>
          <div className="flex gap-8">
            <a href="#" className="text-lg font-bold hover:text-yellow-300 hover:scale-110 transition-all">Twitter</a>
            <a href="#" className="text-lg font-bold hover:text-yellow-300 hover:scale-110 transition-all">Instagram</a>
            <a href="#" className="text-lg font-bold hover:text-yellow-300 hover:scale-110 transition-all">TikTok</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
