import { useState } from 'react'

export default function NatureRadio() {
  const [selected, setSelected] = useState('option1')
  const [plan, setPlan] = useState('pro')
  const [size, setSize] = useState('medium')

  const options = [
    { id: 'option1', label: 'Spring Meadow' },
    { id: 'option2', label: 'Summer Forest' },
    { id: 'option3', label: 'Autumn Leaves' },
    { id: 'option4', label: 'Winter Pine', disabled: true },
  ]

  const plans = [
    { id: 'basic', name: 'Seedling', price: '$9', period: '/month', description: 'Start your journey', icon: '🌱' },
    { id: 'pro', name: 'Bloom', price: '$29', period: '/month', description: 'Grow and flourish', icon: '🌸' },
    { id: 'enterprise', name: 'Evergreen', price: '$99', period: '/month', description: 'Sustain and thrive', icon: '🌲' },
  ]

  const sizes = [
    { id: 'small', label: 'S', icon: '🍃' },
    { id: 'medium', label: 'M', icon: '🌿' },
    { id: 'large', label: 'L', icon: '🌳' },
    { id: 'xlarge', label: 'XL', icon: '🏔️' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100 p-8 md:p-12">
      <div className="max-w-2xl mx-auto space-y-16">
        {/* Basic Radio Group */}
        <section className="space-y-4">
          <h3 className="text-sm font-semibold text-green-700 flex items-center gap-2">
            <span className="text-lg">🌿</span>
            Choose Season
          </h3>
          <div className="space-y-3 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-green-200 shadow-sm">
            {options.map((opt) => (
              <label
                key={opt.id}
                className={`flex items-center gap-4 cursor-pointer group p-3 rounded-xl transition-all ${
                  opt.disabled ? 'cursor-not-allowed opacity-40' : 'hover:bg-green-50/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => !opt.disabled && setSelected(opt.id)}
                  disabled={opt.disabled}
                  className={`w-6 h-6 rounded-full border-3 flex items-center justify-center transition-all ${
                    selected === opt.id
                      ? 'border-green-500 bg-gradient-to-br from-green-200 to-emerald-200'
                      : 'border-green-300 bg-white group-hover:border-green-400 group-hover:bg-green-50'
                  } ${opt.disabled ? '' : 'focus:outline-none focus:ring-3 focus:ring-green-400 focus:ring-offset-2'}`}
                >
                  {selected === opt.id && (
                    <span className="w-3 h-3 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-sm" />
                  )}
                </button>
                <span className="text-green-800 text-base font-medium">{opt.label}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Horizontal Radio - Sizes */}
        <section className="space-y-4">
          <h3 className="text-sm font-semibold text-green-700 flex items-center gap-2">
            <span className="text-lg">🌾</span>
            Growth Size
          </h3>
          <div className="flex gap-3">
            {sizes.map((s) => (
              <label key={s.id} className="cursor-pointer group flex-1">
                <button
                  type="button"
                  onClick={() => setSize(s.id)}
                  className={`w-full aspect-square rounded-2xl border-3 flex flex-col items-center justify-center gap-2 transition-all focus:outline-none focus:ring-3 focus:ring-green-400 focus:ring-offset-2 ${
                    size === s.id
                      ? 'border-green-500 bg-gradient-to-br from-green-100 to-emerald-100 shadow-lg'
                      : 'border-green-300 bg-white/60 backdrop-blur-sm group-hover:border-green-400 group-hover:bg-green-50 group-hover:shadow-md'
                  }`}
                >
                  <span className="text-2xl">{s.icon}</span>
                  <span className={`text-base font-semibold ${size === s.id ? 'text-green-700' : 'text-green-600'}`}>
                    {s.label}
                  </span>
                </button>
              </label>
            ))}
          </div>
        </section>

        {/* Card Style Radio */}
        <section className="space-y-4">
          <h3 className="text-sm font-semibold text-green-700 flex items-center gap-2">
            <span className="text-lg">🌻</span>
            Select Your Plan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlan(p.id)}
                className={`p-6 text-center border-3 rounded-2xl transition-all focus:outline-none focus:ring-3 focus:ring-green-400 focus:ring-offset-2 ${
                  plan === p.id
                    ? 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg'
                    : 'border-green-300 bg-white/60 backdrop-blur-sm hover:border-green-400 hover:bg-green-50 hover:shadow-md'
                }`}
              >
                <div className="text-5xl mb-3">{p.icon}</div>
                <div className="text-lg font-bold text-green-800 mb-2">{p.name}</div>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-green-900">{p.price}</span>
                  <span className="text-sm text-green-600">{p.period}</span>
                </div>
                <p className="text-sm text-green-700">{p.description}</p>
                {plan === p.id && (
                  <div className="mt-4 pt-4 border-t border-green-300">
                    <div className="w-5 h-5 rounded-full mx-auto border-3 border-green-500 bg-gradient-to-br from-green-200 to-emerald-200 flex items-center justify-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-600" />
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Organic Radio Buttons */}
        <section className="space-y-4">
          <h3 className="text-sm font-semibold text-green-700 flex items-center gap-2">
            <span className="text-lg">🌺</span>
            Frequency
          </h3>
          <div className="inline-flex gap-2 p-2 bg-white/60 backdrop-blur-sm rounded-full border-2 border-green-200">
            {[
              { label: 'Daily', icon: '☀️' },
              { label: 'Weekly', icon: '🌙' },
              { label: 'Monthly', icon: '⭐' }
            ].map((freq, idx) => (
              <button
                key={freq.label}
                type="button"
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                  idx === 1
                    ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-md'
                    : 'text-green-700 hover:bg-green-100'
                }`}
              >
                <span>{freq.icon}</span>
                {freq.label}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
