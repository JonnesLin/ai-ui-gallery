export default function PlayfulBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg transform rotate-12 hover:rotate-0 transition-transform">
                <span className="text-2xl">🎨</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                Fun Blog!
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-purple-600 hover:text-pink-500 font-semibold transition-colors transform hover:scale-110">
                Stories
              </a>
              <a href="#" className="text-blue-600 hover:text-green-500 font-semibold transition-colors transform hover:scale-110">
                Games
              </a>
              <button className="px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full hover:from-yellow-400 hover:to-pink-500 transition-all shadow-lg transform hover:scale-105">
                Join Fun!
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Fun Badge */}
        <div className="flex items-center gap-4 mb-6">
          <span className="px-5 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold rounded-full shadow-lg transform -rotate-3 hover:rotate-0 transition-transform">
            ✨ Creative Design
          </span>
          <span className="text-purple-600 font-semibold">March 28, 2024</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 leading-tight mb-8 transform hover:scale-105 transition-transform">
          Let's Play! Making Design Fun and Friendly
        </h1>

        {/* Author */}
        <div className="flex items-center gap-4 pb-8 mb-8 border-b-4 border-dashed border-purple-300">
          <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg transform hover:rotate-12 transition-transform">
            <img
              src="https://picsum.photos/seed/authorplay/80/80"
              alt="Author"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xl font-bold text-purple-700">Sunny Rivera</p>
            <p className="text-sm text-pink-600 font-semibold">Chief Fun Officer 🎉</p>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 relative group">
          <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:rotate-1 transition-transform">
            <img
              src="https://picsum.photos/seed/playful1/1200/514"
              alt="Featured"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 py-3 rounded-full font-bold shadow-xl transform rotate-6 group-hover:rotate-12 transition-transform">
            WOW! 🌈
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
          <div className="p-6 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-3xl border-4 border-white shadow-lg">
            <p className="text-2xl font-bold text-purple-700">
              Hey there! 👋 Ready to make design fun? Let's dive into the colorful world
              where every click brings a smile!
            </p>
          </div>

          <p>
            Playful design isn't just about being silly—it's about creating experiences that
            spark joy, encourage exploration, and make people feel good. It's the digital
            equivalent of a playground: inviting, exciting, and full of surprises!
          </p>

          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 pt-6">
            What Makes Design Playful? 🎪
          </h2>

          <p>
            Think bright colors, bouncy animations, friendly shapes, and unexpected delights.
            Playful design speaks in exclamation marks! It uses emojis 😄 It celebrates
            curves over corners and adds a dash of whimsy to everything!
          </p>

          {/* Fun Elements Grid */}
          <div className="my-10 grid md:grid-cols-2 gap-4">
            {[
              { emoji: '🌈', title: 'Rainbow Colors!', desc: 'Bright, happy hues everywhere', bg: 'from-pink-200 to-purple-200' },
              { emoji: '✨', title: 'Surprise & Delight', desc: 'Hidden animations and easter eggs', bg: 'from-yellow-200 to-orange-200' },
              { emoji: '🎈', title: 'Bouncy Elements', desc: 'Things that wiggle, jiggle, and pop', bg: 'from-blue-200 to-purple-200' },
              { emoji: '💕', title: 'Friendly Shapes', desc: 'Rounded corners and soft edges', bg: 'from-pink-200 to-red-200' },
            ].map((item) => (
              <div key={item.title} className={`p-6 bg-gradient-to-br ${item.bg} rounded-3xl shadow-lg border-4 border-white transform hover:scale-105 hover:rotate-2 transition-all cursor-pointer`}>
                <span className="text-5xl block mb-3">{item.emoji}</span>
                <h3 className="text-xl font-black text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-700 font-semibold">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 pt-6">
            Color is Your BFF! 🎨
          </h2>

          <p>
            Don't be scared of color! Playful design embraces the full rainbow. Mix yellows
            with pinks, purples with oranges, blues with greens. As long as there's contrast
            for readability, the sky's the limit!
          </p>

          {/* Color Palette */}
          <div className="my-10 p-8 bg-white rounded-3xl shadow-xl border-4 border-dashed border-purple-300">
            <h3 className="text-2xl font-black text-purple-700 mb-6 text-center">
              Our Happy Palette! 🌈
            </h3>
            <div className="grid grid-cols-5 gap-4">
              {[
                { color: 'bg-pink-400', name: 'Pink' },
                { color: 'bg-purple-400', name: 'Purple' },
                { color: 'bg-blue-400', name: 'Blue' },
                { color: 'bg-green-400', name: 'Green' },
                { color: 'bg-yellow-400', name: 'Yellow' },
              ].map((item) => (
                <div key={item.name} className="text-center">
                  <div className={`${item.color} h-20 rounded-2xl shadow-lg mb-2 transform hover:scale-110 transition-transform cursor-pointer`} />
                  <span className="text-sm font-bold text-gray-700">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fun Quote */}
          <div className="my-10 p-8 bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200 rounded-3xl shadow-xl border-4 border-white relative overflow-hidden">
            <div className="absolute top-0 right-0 text-9xl opacity-10">🎉</div>
            <p className="text-2xl md:text-3xl font-black text-purple-700 italic mb-4 relative z-10">
              "Design is not just what it looks like and feels like. Design is how it makes
              you feel!"
            </p>
            <p className="text-lg font-bold text-pink-600 relative z-10">— Happy Designer 😊</p>
          </div>

          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 pt-6">
            Animation = Magic! ✨
          </h2>

          <p>
            Things that move are more fun than things that don't. Buttons that bounce when
            you click them, icons that wiggle on hover, confetti that celebrates your
            success—these micro-interactions turn ordinary experiences into memorable ones!
          </p>

          {/* Images */}
          <div className="my-10 grid grid-cols-2 gap-6">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-pink-300 transform hover:-rotate-3 transition-transform">
              <img
                src="https://picsum.photos/seed/play2/600/600"
                alt="Playful example"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-purple-300 transform hover:rotate-3 transition-transform">
              <img
                src="https://picsum.photos/seed/play3/600/600"
                alt="Fun design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 pt-6">
            Don't Forget Accessibility! 👏
          </h2>

          <p>
            Playful doesn't mean irresponsible! Make sure your fun colors have good contrast,
            your animations respect reduced-motion preferences, and your interface works for
            everyone. Fun should be inclusive!
          </p>

          {/* Tips List */}
          <div className="my-10 space-y-3">
            {[
              'Use rounded corners (border-radius is your friend!)',
              'Add hover effects that respond to user interaction',
              'Include emojis and friendly icons',
              "Embrace asymmetry—things don't have to be perfectly aligned",
              'Add micro-animations for delight',
              'Use playful language in your copy',
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-lg border-2 border-purple-200 hover:border-pink-400 transition-colors transform hover:translate-x-2">
                <span className="text-2xl">{['🎯', '✨', '😊', '🎨', '🎪', '💬'][i]}</span>
                <p className="text-gray-800 font-semibold">{tip}</p>
              </div>
            ))}
          </div>

          <div className="p-8 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-3xl shadow-xl border-4 border-white text-center">
            <p className="text-2xl font-black text-white mb-2">
              Remember: Design should be FUN! 🎉
            </p>
            <p className="text-lg text-white font-semibold">
              If you're smiling while you work, you're doing it right!
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t-4 border-dashed border-purple-300">
          <div className="flex flex-wrap gap-3">
            {[
              { tag: 'Playful', color: 'from-pink-400 to-purple-400' },
              { tag: 'Fun Design', color: 'from-yellow-400 to-orange-400' },
              { tag: 'Happy UI', color: 'from-blue-400 to-green-400' },
              { tag: 'Joy', color: 'from-purple-400 to-pink-400' },
            ].map(({ tag, color }) => (
              <span key={tag} className={`px-5 py-3 bg-gradient-to-r ${color} text-white font-bold rounded-full shadow-lg transform hover:scale-110 hover:rotate-3 transition-all cursor-pointer`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 border-y-8 border-white shadow-2xl">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-8 border-white shadow-2xl shrink-0 transform hover:rotate-12 transition-transform">
              <img
                src="https://picsum.photos/seed/authorplay/200/200"
                alt="Sunny Rivera"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text mb-2">
                Sunny Rivera
              </h3>
              <p className="text-lg text-purple-600 font-bold mb-4">Chief Fun Officer 🎉</p>
              <p className="text-gray-700 leading-relaxed font-semibold mb-6">
                Sunny believes every pixel should spark joy! With 10 years of experience
                creating playful interfaces, she's on a mission to make the internet a
                happier place, one bouncy button at a time!
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-black rounded-full shadow-lg hover:from-yellow-400 hover:to-pink-500 transform hover:scale-110 transition-all">
                Let's Be Friends! 🤗
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-8 text-center">
          More Fun Reads! 📚
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { seed: 'play4', title: 'Color Psychology!', emoji: '🌈' },
            { seed: 'play5', title: 'Animation Tricks!', emoji: '✨' },
            { seed: 'play6', title: 'Happy Icons!', emoji: '😊' },
          ].map((post) => (
            <a key={post.seed} href="#" className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-purple-200 hover:border-pink-400 transform hover:scale-105 hover:rotate-2 transition-all">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={`https://picsum.photos/seed/${post.seed}/400/300`}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-lg">
                    {post.emoji}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-black text-purple-700 group-hover:text-pink-500 transition-colors">
                    {post.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 text-white">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <div className="text-4xl mb-4">🎨 ✨ 🌈</div>
          <p className="text-2xl font-black mb-2">Fun Blog!</p>
          <p className="mb-6">Making the internet a happier place!</p>
          <div className="flex items-center justify-center gap-8 text-sm font-bold">
            <a href="#" className="hover:scale-110 transition-transform">Privacy</a>
            <a href="#" className="hover:scale-110 transition-transform">Terms</a>
            <a href="#" className="hover:scale-110 transition-transform">Say Hi!</a>
          </div>
          <div className="mt-8 pt-8 border-t-2 border-white/30">
            <p className="text-sm">© 2024 Fun Blog. All smiles reserved! 😊</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
