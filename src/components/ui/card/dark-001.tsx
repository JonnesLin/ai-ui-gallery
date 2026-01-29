export default function DarkCards() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Card */}
          <div className="bg-[#141414] rounded-2xl overflow-hidden border border-[#222] hover:border-[#333] transition-colors group">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://picsum.photos/seed/dark1/400/300"
                alt="Product"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">New Release</span>
              <h3 className="mt-2 text-lg font-semibold text-white">Premium Headphones</h3>
              <p className="mt-1 text-sm text-gray-500">Experience crystal-clear sound</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold text-white">$349</span>
                <button className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-[#141414] rounded-2xl p-6 border border-[#222]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm text-gray-400 uppercase tracking-wider">Revenue</h3>
              <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">+12.5%</span>
            </div>
            <p className="text-4xl font-bold text-white">$84,293</p>
            <p className="mt-1 text-sm text-gray-500">Updated 2 hours ago</p>
            <div className="mt-6 flex items-end gap-1 h-20">
              {[35, 55, 40, 70, 45, 85, 60, 75, 50, 90, 65, 80].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-emerald-500/50 to-emerald-400/20 rounded-t"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 border border-[#222]">
            <div className="flex items-center gap-4">
              <img
                src="https://picsum.photos/seed/dark2/100/100"
                alt="Avatar"
                className="w-14 h-14 rounded-full object-cover ring-2 ring-purple-500/50"
              />
              <div>
                <h3 className="text-lg font-semibold text-white">Marcus Chen</h3>
                <p className="text-sm text-gray-400">Senior Developer</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Building scalable systems and mentoring the next generation of developers.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="text-center p-3 bg-white/5 rounded-xl">
                <p className="text-lg font-bold text-white">142</p>
                <p className="text-xs text-gray-500">Projects</p>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-xl">
                <p className="text-lg font-bold text-white">8.4K</p>
                <p className="text-xs text-gray-500">Followers</p>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-xl">
                <p className="text-lg font-bold text-white">56</p>
                <p className="text-xs text-gray-500">Awards</p>
              </div>
            </div>
          </div>

          {/* Article Card */}
          <div className="lg:col-span-2 bg-[#141414] rounded-2xl overflow-hidden border border-[#222] flex flex-col md:flex-row">
            <div className="md:w-1/2 aspect-video md:aspect-auto">
              <img
                src="https://picsum.photos/seed/dark3/600/400"
                alt="Article"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">Technology</span>
              <h3 className="mt-2 text-xl font-semibold text-white leading-tight">
                The Future of AI in Product Design
              </h3>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                Exploring how artificial intelligence is revolutionizing the way we approach design challenges and create user experiences.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src="https://picsum.photos/seed/dark4/40/40"
                  alt="Author"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm text-white">Sarah Kim</p>
                  <p className="text-xs text-gray-500">Jan 28, 2026 · 8 min read</p>
                </div>
              </div>
            </div>
          </div>

          {/* Notification Card */}
          <div className="bg-[#141414] rounded-2xl p-5 border border-[#222]">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-medium">System Update</h3>
                <p className="mt-1 text-sm text-gray-400">A new version is available. Please update to enjoy the latest features.</p>
                <div className="mt-4 flex gap-2">
                  <button className="px-3 py-1.5 bg-white text-black text-xs font-medium rounded-lg hover:bg-gray-200 transition-colors">
                    Update Now
                  </button>
                  <button className="px-3 py-1.5 text-gray-400 text-xs hover:text-white transition-colors">
                    Later
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="bg-gradient-to-br from-purple-900/50 to-[#141414] rounded-2xl p-6 border border-purple-500/30">
            <span className="text-xs text-purple-400 font-medium uppercase tracking-wider">Pro Plan</span>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-white">$49</span>
              <span className="text-gray-500">/month</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">Perfect for growing teams</p>
            <ul className="mt-6 space-y-3">
              {['Unlimited projects', 'Advanced analytics', 'Priority support', 'Custom integrations'].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                  <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full py-3 bg-purple-500 text-white font-medium rounded-xl hover:bg-purple-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Feature Card */}
          <div className="bg-[#141414] rounded-2xl p-6 border border-[#222] hover:border-cyan-500/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
              <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">Lightning Fast</h3>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              Optimized performance ensures your applications run at peak efficiency.
            </p>
          </div>

          {/* Task Card */}
          <div className="bg-[#141414] rounded-2xl p-6 border border-[#222]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-medium">Today's Tasks</h3>
              <span className="text-xs text-gray-500">3/5 completed</span>
            </div>
            <div className="space-y-3">
              {[
                { text: 'Review design specs', done: true },
                { text: 'Update documentation', done: true },
                { text: 'Team standup meeting', done: true },
                { text: 'Code review session', done: false },
                { text: 'Deploy to staging', done: false },
              ].map((task, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${task.done ? 'bg-emerald-500 border-emerald-500' : 'border-gray-600'}`}>
                    {task.done && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-sm ${task.done ? 'text-gray-500 line-through' : 'text-gray-300'}`}>
                    {task.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Weather Card */}
          <div className="bg-gradient-to-br from-blue-900/30 to-[#141414] rounded-2xl p-6 border border-blue-500/20">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-400">San Francisco</p>
                <p className="text-5xl font-light text-white mt-2">18°</p>
                <p className="text-gray-400 mt-1">Partly Cloudy</p>
              </div>
              <div className="text-6xl">
                <svg className="w-16 h-16 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 7a5 5 0 100 10 5 5 0 000-10z" />
                </svg>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-4 gap-2">
              {['Mon', 'Tue', 'Wed', 'Thu'].map((day, i) => (
                <div key={day} className="text-center p-2 bg-white/5 rounded-lg">
                  <p className="text-xs text-gray-500">{day}</p>
                  <p className="text-lg text-white mt-1">{16 + i}°</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
