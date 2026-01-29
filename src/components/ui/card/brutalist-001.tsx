export default function BrutalistCards() {
  return (
    <div className="min-h-screen bg-white p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Card */}
          <div className="border-4 border-black bg-white">
            <div className="aspect-square border-b-4 border-black overflow-hidden">
              <img
                src="https://picsum.photos/seed/brut1/400/400"
                alt="Product"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="p-4">
              <span className="text-xs font-black uppercase tracking-widest">New</span>
              <h3 className="mt-2 text-2xl font-black uppercase">Industrial Chair</h3>
              <p className="mt-2 text-sm">Raw steel frame. Minimal design. Maximum impact.</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-black">$299</span>
                <button className="px-4 py-2 bg-black text-white font-black uppercase text-sm hover:bg-white hover:text-black border-2 border-black transition-colors">
                  Buy
                </button>
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="border-4 border-black bg-yellow-300">
            <div className="p-6">
              <div className="w-20 h-20 border-4 border-black bg-white overflow-hidden">
                <img
                  src="https://picsum.photos/seed/brut2/100/100"
                  alt="Avatar"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <h3 className="mt-4 text-2xl font-black uppercase">Max Power</h3>
              <p className="text-sm font-bold uppercase tracking-widest">Architect</p>
              <p className="mt-4 text-sm">Building structures that challenge conventions. Form follows function.</p>
              <div className="mt-6 flex gap-2">
                <button className="flex-1 py-2 bg-black text-yellow-300 font-black uppercase text-xs">
                  Follow
                </button>
                <button className="flex-1 py-2 bg-white text-black font-black uppercase text-xs border-2 border-black">
                  Contact
                </button>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="border-4 border-black bg-white">
            <div className="border-b-4 border-black p-4 bg-black text-white">
              <span className="text-xs font-black uppercase tracking-widest">Statistics</span>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between border-b-2 border-black pb-4">
                <span className="font-bold uppercase">Users</span>
                <span className="text-3xl font-black">12,847</span>
              </div>
              <div className="flex items-center justify-between border-b-2 border-black pb-4">
                <span className="font-bold uppercase">Revenue</span>
                <span className="text-3xl font-black">$84K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold uppercase">Growth</span>
                <span className="text-3xl font-black">+127%</span>
              </div>
            </div>
          </div>

          {/* Article Card */}
          <div className="lg:col-span-2 border-4 border-black bg-white flex flex-col md:flex-row">
            <div className="md:w-1/2 border-r-0 md:border-r-4 border-b-4 md:border-b-0 border-black">
              <img
                src="https://picsum.photos/seed/brut3/600/400"
                alt="Article"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <span className="text-xs font-black uppercase tracking-widest bg-black text-white inline-block px-2 py-1 w-fit">
                Manifesto
              </span>
              <h3 className="mt-4 text-3xl font-black uppercase leading-tight">
                Against Digital Perfection
              </h3>
              <p className="mt-4 text-sm">
                We reject polish. We embrace raw edges. Design should provoke, not pacify. Read our full statement on honest aesthetics.
              </p>
              <a href="#" className="mt-6 inline-flex items-center gap-2 font-black uppercase text-sm hover:underline underline-offset-4">
                Read More
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>

          {/* Quote Card */}
          <div className="border-4 border-black bg-red-500 text-white p-6">
            <div className="text-6xl font-black leading-none">"</div>
            <p className="text-xl font-bold leading-tight mt-2">
              Good design is obvious. Great design is transparent.
            </p>
            <div className="mt-6 pt-4 border-t-2 border-white/50">
              <p className="font-black uppercase">Joe Sparano</p>
            </div>
          </div>

          {/* Feature Card */}
          <div className="border-4 border-black bg-white p-6 relative">
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-black" />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-black" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-black" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-black" />
            <div className="w-16 h-16 border-4 border-black flex items-center justify-center bg-yellow-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-black uppercase">Raw Power</h3>
            <p className="mt-2 text-sm">
              Uncompromising performance. No bloat. Pure functionality distilled to its essence.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="border-4 border-black bg-white">
            <div className="p-4 bg-black text-white">
              <span className="text-xs font-black uppercase tracking-widest">Pro Plan</span>
            </div>
            <div className="p-6">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black">$49</span>
                <span className="font-bold uppercase">/mo</span>
              </div>
              <ul className="mt-6 space-y-2">
                {['Unlimited access', 'Priority support', 'No watermarks', 'API access'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <span className="w-4 h-4 bg-black flex items-center justify-center text-white text-xs">✓</span>
                    <span className="font-bold uppercase">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full py-3 bg-black text-white font-black uppercase hover:bg-yellow-300 hover:text-black transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Notification Card */}
          <div className="border-4 border-black bg-blue-500 text-white p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border-4 border-white flex items-center justify-center font-black text-2xl">
                !
              </div>
              <div className="flex-1">
                <h3 className="font-black uppercase">System Alert</h3>
                <p className="mt-2 text-sm text-white/90">
                  Maintenance scheduled for midnight. Save your work. Back up everything.
                </p>
              </div>
            </div>
            <button className="mt-4 w-full py-2 bg-white text-blue-500 font-black uppercase text-sm">
              Acknowledge
            </button>
          </div>

          {/* Task Card */}
          <div className="lg:col-span-2 border-4 border-black bg-white">
            <div className="p-4 bg-black text-white flex items-center justify-between">
              <span className="font-black uppercase">Today's Tasks</span>
              <span className="font-black">03/05</span>
            </div>
            <div className="divide-y-4 divide-black">
              {[
                { text: 'REVIEW BLUEPRINTS', done: true },
                { text: 'CLIENT MEETING', done: true },
                { text: 'MATERIAL SOURCING', done: true },
                { text: 'SITE INSPECTION', done: false },
                { text: 'DOCUMENTATION', done: false },
              ].map((task, i) => (
                <div key={i} className={`p-4 flex items-center gap-4 ${task.done ? 'bg-gray-200' : ''}`}>
                  <div className={`w-6 h-6 border-4 border-black flex items-center justify-center ${task.done ? 'bg-black text-white' : ''}`}>
                    {task.done && '✓'}
                  </div>
                  <span className={`font-black uppercase ${task.done ? 'line-through text-gray-500' : ''}`}>
                    {task.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Minimal Card */}
          <div className="border-4 border-black bg-white p-6">
            <div className="text-8xl font-black leading-none">01</div>
            <h3 className="mt-4 text-xl font-black uppercase">First Principle</h3>
            <p className="mt-2 text-sm">
              Strip away the unnecessary. What remains is truth.
            </p>
            <div className="mt-6 h-1 bg-black w-16" />
          </div>
        </div>
      </div>
    </div>
  )
}
