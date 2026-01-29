export default function PastelCards() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Card */}
          <div className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100">
              <img
                src="https://picsum.photos/seed/pastel1/400/400"
                alt="Product"
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
            <div className="mt-4">
              <span className="text-xs font-medium text-pink-400 uppercase tracking-wider">Skincare</span>
              <h3 className="mt-1 text-lg font-semibold text-gray-800">Rose Petal Serum</h3>
              <p className="mt-1 text-sm text-gray-500">Gentle daily hydration</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold text-purple-600">$42</span>
                <button className="px-4 py-2 bg-gradient-to-r from-pink-300 to-purple-300 text-white rounded-full text-sm font-medium hover:from-pink-400 hover:to-purple-400 transition-colors">
                  Add to Bag
                </button>
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-6">
            <div className="flex items-center gap-4">
              <img
                src="https://picsum.photos/seed/pastel2/100/100"
                alt="Avatar"
                className="w-16 h-16 rounded-full object-cover ring-4 ring-white"
              />
              <div>
                <h3 className="font-semibold text-gray-800">Mia Thompson</h3>
                <p className="text-sm text-blue-600">Wellness Coach</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Helping you find balance and joy in everyday moments. Let's start your wellness journey together.
            </p>
            <div className="mt-6 flex gap-3">
              <button className="flex-1 py-2.5 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                Follow
              </button>
              <button className="flex-1 py-2.5 bg-blue-400 rounded-full text-sm font-medium text-white hover:bg-blue-500 transition-colors">
                Message
              </button>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-3xl p-6">
            <h3 className="text-sm font-medium text-teal-600 uppercase tracking-wider">This Week</h3>
            <div className="mt-4 space-y-4">
              <div className="bg-white/70 rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Steps</span>
                  <span className="text-2xl font-bold text-teal-600">12,847</span>
                </div>
                <div className="mt-2 h-2 bg-teal-200 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-teal-400 rounded-full" />
                </div>
              </div>
              <div className="bg-white/70 rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Calories</span>
                  <span className="text-2xl font-bold text-green-600">1,840</span>
                </div>
                <div className="mt-2 h-2 bg-green-200 rounded-full overflow-hidden">
                  <div className="h-full w-[72%] bg-green-400 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Recipe Card */}
          <div className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row">
            <div className="md:w-1/2 aspect-video md:aspect-auto bg-gradient-to-br from-yellow-100 to-orange-100">
              <img
                src="https://picsum.photos/seed/pastel3/600/400"
                alt="Recipe"
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <span className="text-xs font-medium text-orange-400 uppercase tracking-wider">Recipe</span>
              <h3 className="mt-2 text-xl font-semibold text-gray-800">Lavender Honey Cake</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                A delicate sponge infused with culinary lavender and drizzled with wildflower honey.
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  45 min
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                  Easy
                </span>
              </div>
              <button className="mt-6 py-3 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full text-gray-800 font-medium hover:from-yellow-400 hover:to-orange-400 transition-colors">
                View Recipe
              </button>
            </div>
          </div>

          {/* Quote Card */}
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-6">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
              <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>
            <p className="text-gray-700 leading-relaxed italic">
              "Happiness is not something ready-made. It comes from your own actions."
            </p>
            <p className="mt-4 text-sm font-medium text-purple-600">— Dalai Lama</p>
          </div>

          {/* Notification Card */}
          <div className="bg-white rounded-3xl p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-200 to-teal-200 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Order Shipped!</h3>
                <p className="mt-1 text-sm text-gray-500">Your package is on its way. Track your delivery for updates.</p>
                <button className="mt-3 text-sm font-medium text-teal-600 hover:text-teal-700">
                  Track Order →
                </button>
              </div>
            </div>
          </div>

          {/* Weather Card */}
          <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-3xl p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-blue-600">Tokyo, Japan</p>
                <p className="text-4xl font-light text-gray-800 mt-2">22°C</p>
                <p className="text-gray-600 mt-1">Partly Cloudy</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 7a5 5 0 100 10 5 5 0 000-10z" />
                </svg>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-4 gap-2">
              {['Mon', 'Tue', 'Wed', 'Thu'].map((day, i) => (
                <div key={day} className="text-center bg-white/60 rounded-xl p-2">
                  <p className="text-xs text-gray-500">{day}</p>
                  <p className="text-lg font-semibold text-gray-700 mt-1">{20 + i}°</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Card */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border-2 border-purple-200">
            <div className="text-center">
              <span className="text-xs font-medium text-purple-400 uppercase tracking-wider">Premium</span>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-gray-800">$12</span>
                <span className="text-gray-500">/month</span>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {['Unlimited access', 'Exclusive content', 'Priority support', 'Custom themes'].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-5 h-5 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full font-medium hover:from-pink-500 hover:to-purple-500 transition-colors">
              Get Started
            </button>
          </div>

          {/* Task Card */}
          <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl p-6">
            <h3 className="font-semibold text-gray-800">Today's Goals</h3>
            <div className="mt-4 space-y-3">
              {[
                { text: 'Morning meditation', done: true },
                { text: '30 min yoga session', done: true },
                { text: 'Journal entry', done: false },
                { text: 'Evening walk', done: false },
              ].map((task, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/60 rounded-xl p-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${task.done ? 'bg-pink-400 border-pink-400' : 'border-pink-300'}`}>
                    {task.done && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-sm ${task.done ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                    {task.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
