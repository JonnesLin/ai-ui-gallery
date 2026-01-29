import { useState } from 'react'

export default function PastelRadio() {
  const [selected, setSelected] = useState('option1')
  const [plan, setPlan] = useState('pro')
  const [size, setSize] = useState('medium')

  const options = [
    { id: 'option1', label: 'Option One', color: 'pink' },
    { id: 'option2', label: 'Option Two', color: 'blue' },
    { id: 'option3', label: 'Option Three', color: 'purple' },
    { id: 'option4', label: 'Option Four', color: 'green', disabled: true },
  ]

  const plans = [
    { id: 'basic', name: 'Basic', price: '$9', period: '/month', description: 'For individuals', color: 'pink' },
    { id: 'pro', name: 'Pro', price: '$29', period: '/month', description: 'For small teams', color: 'purple' },
    { id: 'enterprise', name: 'Enterprise', price: '$99', period: '/month', description: 'For organizations', color: 'blue' },
  ]

  const sizes = [
    { id: 'small', label: 'S' },
    { id: 'medium', label: 'M' },
    { id: 'large', label: 'L' },
    { id: 'xlarge', label: 'XL' },
  ]

  const colorClasses = {
    pink: {
      selected: 'border-pink-300 bg-pink-100',
      unselected: 'border-pink-200 hover:border-pink-300 hover:bg-pink-50',
      dot: 'bg-pink-400',
      text: 'text-pink-600'
    },
    blue: {
      selected: 'border-blue-300 bg-blue-100',
      unselected: 'border-blue-200 hover:border-blue-300 hover:bg-blue-50',
      dot: 'bg-blue-400',
      text: 'text-blue-600'
    },
    purple: {
      selected: 'border-purple-300 bg-purple-100',
      unselected: 'border-purple-200 hover:border-purple-300 hover:bg-purple-50',
      dot: 'bg-purple-400',
      text: 'text-purple-600'
    },
    green: {
      selected: 'border-green-300 bg-green-100',
      unselected: 'border-green-200 hover:border-green-300 hover:bg-green-50',
      dot: 'bg-green-400',
      text: 'text-green-600'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-8 md:p-12">
      <div className="max-w-2xl mx-auto space-y-16">
        {/* Basic Radio Group */}
        <section className="space-y-4">
          <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wide">
            Select Option
          </h3>
          <div className="space-y-3">
            {options.map((opt) => {
              const colors = colorClasses[opt.color as keyof typeof colorClasses]
              return (
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
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      selected === opt.id
                        ? colors.selected
                        : colors.unselected
                    } ${opt.disabled ? '' : 'focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2'}`}
                  >
                    <span
                      className={`w-3 h-3 rounded-full transition-transform duration-200 ${colors.dot} ${
                        selected === opt.id ? 'scale-100' : 'scale-0'
                      }`}
                    />
                  </button>
                  <span className="text-purple-700 text-base">{opt.label}</span>
                </label>
              )
            })}
          </div>
        </section>

        {/* Horizontal Radio - Sizes */}
        <section className="space-y-4">
          <h3 className="text-sm font-semibold text-pink-400 uppercase tracking-wide">
            Size
          </h3>
          <div className="flex gap-3">
            {sizes.map((s) => (
              <label key={s.id} className="cursor-pointer group">
                <button
                  type="button"
                  onClick={() => setSize(s.id)}
                  className={`w-14 h-14 rounded-full border-2 flex items-center justify-center text-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 ${
                    size === s.id
                      ? 'border-pink-300 bg-pink-100 text-pink-600'
                      : 'border-pink-200 bg-white text-pink-400 group-hover:border-pink-300 group-hover:bg-pink-50'
                  }`}
                >
                  {s.label}
                </button>
              </label>
            ))}
          </div>
        </section>

        {/* Card Style Radio */}
        <section className="space-y-4">
          <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wide">
            Choose Plan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((p) => {
              const colors = colorClasses[p.color as keyof typeof colorClasses]
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPlan(p.id)}
                  className={`p-6 text-left border-2 rounded-3xl transition-all focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 ${
                    plan === p.id
                      ? colors.selected + ' shadow-lg'
                      : 'border-purple-200 bg-white hover:border-purple-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className={`text-base font-semibold ${colors.text}`}>{p.name}</span>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        plan === p.id ? colors.selected.split(' ')[0] : 'border-purple-200 bg-white'
                      }`}
                    >
                      <span
                        className={`w-2.5 h-2.5 rounded-full transition-transform duration-200 ${colors.dot} ${
                          plan === p.id ? 'scale-100' : 'scale-0'
                        }`}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <span className={`text-3xl font-bold ${colors.text}`}>{p.price}</span>
                    <span className="text-sm text-purple-400">{p.period}</span>
                  </div>
                  <p className="text-sm text-purple-500">{p.description}</p>
                </button>
              )
            })}
          </div>
        </section>

        {/* Pill Radio Buttons */}
        <section className="space-y-4">
          <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wide">
            Frequency
          </h3>
          <div className="inline-flex gap-2 p-1 bg-white rounded-full border-2 border-purple-200">
            {['Daily', 'Weekly', 'Monthly'].map((freq, idx) => (
              <button
                key={freq}
                type="button"
                className={`px-6 py-2 text-sm font-semibold rounded-full transition-all ${
                  idx === 1
                    ? 'bg-gradient-to-r from-purple-200 to-pink-200 text-purple-700 shadow-sm'
                    : 'text-purple-400 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                {freq}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
