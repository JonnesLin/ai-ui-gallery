import { useState } from 'react'

export default function PlayfulRadio() {
  const [selected, setSelected] = useState('option1')
  const [plan, setPlan] = useState('pro')
  const [size, setSize] = useState('medium')

  const options = [
    { id: 'option1', label: 'Option One', emoji: '🎨' },
    { id: 'option2', label: 'Option Two', emoji: '🚀' },
    { id: 'option3', label: 'Option Three', emoji: '🌈' },
    { id: 'option4', label: 'Option Four', emoji: '⭐', disabled: true },
  ]

  const plans = [
    { id: 'basic', name: 'Basic', price: '$9', period: '/mo', description: 'Perfect start!', emoji: '🌱', color: 'bg-green-400' },
    { id: 'pro', name: 'Pro', price: '$29', period: '/mo', description: 'Most popular!', emoji: '🔥', color: 'bg-orange-400' },
    { id: 'enterprise', name: 'Enterprise', price: '$99', period: '/mo', description: 'Go big!', emoji: '💎', color: 'bg-purple-400' },
  ]

  const sizes = [
    { id: 'small', label: 'S', emoji: '🐜' },
    { id: 'medium', label: 'M', emoji: '🐶' },
    { id: 'large', label: 'L', emoji: '🦁' },
    { id: 'xlarge', label: 'XL', emoji: '🦖' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 p-8 md:p-12">
      <div className="max-w-2xl mx-auto space-y-16">
        {/* Basic Radio Group */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold text-purple-600 flex items-center gap-2">
            <span className="text-2xl">✨</span>
            Pick Your Favorite
          </h3>
          <div className="space-y-3">
            {options.map((opt) => (
              <label
                key={opt.id}
                className={`flex items-center gap-4 cursor-pointer group ${
                  opt.disabled ? 'cursor-not-allowed opacity-40' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => !opt.disabled && setSelected(opt.id)}
                  disabled={opt.disabled}
                  className={`w-8 h-8 rounded-full border-4 flex items-center justify-center transition-all transform ${
                    selected === opt.id
                      ? 'border-pink-400 bg-pink-200 scale-110 rotate-12'
                      : 'border-purple-300 bg-white group-hover:border-pink-300 group-hover:scale-105'
                  } ${opt.disabled ? '' : 'focus:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-offset-2'}`}
                >
                  <span className="text-lg">{selected === opt.id ? '💖' : opt.emoji}</span>
                </button>
                <span className="text-purple-700 text-lg font-medium">{opt.label}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Horizontal Radio - Sizes */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold text-orange-600 flex items-center gap-2">
            <span className="text-2xl">📏</span>
            Choose Your Size
          </h3>
          <div className="flex gap-3">
            {sizes.map((s) => (
              <label key={s.id} className="cursor-pointer group flex-1">
                <button
                  type="button"
                  onClick={() => setSize(s.id)}
                  className={`w-full aspect-square rounded-2xl border-4 flex flex-col items-center justify-center gap-1 text-lg font-bold transition-all transform focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-offset-2 ${
                    size === s.id
                      ? 'border-orange-400 bg-orange-200 text-orange-700 scale-110 shadow-lg'
                      : 'border-orange-300 bg-white text-orange-500 group-hover:border-orange-400 group-hover:scale-105'
                  }`}
                >
                  <span className="text-2xl">{s.emoji}</span>
                  <span>{s.label}</span>
                </button>
              </label>
            ))}
          </div>
        </section>

        {/* Card Style Radio */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold text-blue-600 flex items-center gap-2">
            <span className="text-2xl">🎁</span>
            Pick Your Plan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlan(p.id)}
                className={`p-6 text-center border-4 rounded-3xl transition-all transform focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 ${
                  plan === p.id
                    ? 'border-blue-400 bg-blue-100 scale-105 shadow-xl rotate-1'
                    : 'border-blue-300 bg-white hover:border-blue-400 hover:scale-102 hover:shadow-lg'
                }`}
              >
                <div className="text-5xl mb-3">{p.emoji}</div>
                <div className="text-xl font-bold text-gray-800 mb-2">{p.name}</div>
                <div className="mb-2">
                  <span className="text-3xl font-black text-gray-900">{p.price}</span>
                  <span className="text-sm text-gray-500">{p.period}</span>
                </div>
                <div className={`inline-block px-4 py-1 rounded-full text-white text-sm font-bold ${p.color}`}>
                  {p.description}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Bubble Radio Buttons */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold text-green-600 flex items-center gap-2">
            <span className="text-2xl">📅</span>
            How Often?
          </h3>
          <div className="flex gap-3 justify-center">
            {[
              { label: 'Daily', emoji: '☀️' },
              { label: 'Weekly', emoji: '📆' },
              { label: 'Monthly', emoji: '🗓️' }
            ].map((freq, idx) => (
              <button
                key={freq.label}
                type="button"
                className={`px-8 py-4 rounded-full border-4 font-bold text-base transition-all transform flex items-center gap-2 ${
                  idx === 1
                    ? 'border-green-400 bg-green-200 text-green-700 scale-110 shadow-lg'
                    : 'border-green-300 bg-white text-green-600 hover:scale-105 hover:border-green-400'
                }`}
              >
                <span className="text-xl">{freq.emoji}</span>
                {freq.label}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
