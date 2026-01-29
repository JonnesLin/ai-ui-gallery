import { useState } from 'react'

export default function BrutalistRadio() {
  const [selected, setSelected] = useState('option1')
  const [plan, setPlan] = useState('pro')
  const [size, setSize] = useState('medium')

  const options = [
    { id: 'option1', label: 'OPTION ONE' },
    { id: 'option2', label: 'OPTION TWO' },
    { id: 'option3', label: 'OPTION THREE' },
    { id: 'option4', label: 'OPTION FOUR', disabled: true },
  ]

  const plans = [
    { id: 'basic', name: 'BASIC', price: '$9', period: '/MO', description: 'FOR INDIVIDUALS' },
    { id: 'pro', name: 'PRO', price: '$29', period: '/MO', description: 'FOR SMALL TEAMS' },
    { id: 'enterprise', name: 'ENTERPRISE', price: '$99', period: '/MO', description: 'FOR ORGANIZATIONS' },
  ]

  const sizes = [
    { id: 'small', label: 'S' },
    { id: 'medium', label: 'M' },
    { id: 'large', label: 'L' },
    { id: 'xlarge', label: 'XL' },
  ]

  return (
    <div className="min-h-screen bg-white p-8 md:p-12">
      <div className="max-w-2xl mx-auto space-y-12">
        {/* Basic Radio Group */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold tracking-wider text-black uppercase border-b-4 border-black pb-2 inline-block">
            SELECT OPTION
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
                  className={`w-7 h-7 border-4 border-black flex items-center justify-center transition-colors ${
                    selected === opt.id
                      ? 'bg-black'
                      : 'bg-white hover:bg-gray-100'
                  } ${opt.disabled ? '' : 'focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-black'}`}
                >
                  <span
                    className={`w-3 h-3 bg-white ${
                      selected === opt.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </button>
                <span className="text-black text-base font-bold tracking-wide">{opt.label}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Horizontal Radio - Sizes */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold tracking-wider text-black uppercase border-b-4 border-black pb-2 inline-block">
            SIZE
          </h3>
          <div className="flex gap-4">
            {sizes.map((s) => (
              <label key={s.id} className="cursor-pointer group">
                <button
                  type="button"
                  onClick={() => setSize(s.id)}
                  className={`w-16 h-16 border-4 border-black flex items-center justify-center font-black text-xl transition-colors focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-black ${
                    size === s.id
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:bg-gray-100'
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
          <h3 className="text-sm font-bold tracking-wider text-black uppercase border-b-4 border-black pb-2 inline-block">
            CHOOSE PLAN
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlan(p.id)}
                className={`p-6 text-left border-4 border-black transition-all focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-black ${
                  plan === p.id
                    ? 'bg-black text-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]'
                    : 'bg-white text-black hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-base font-black tracking-wider">{p.name}</span>
                  <div
                    className={`w-6 h-6 border-4 flex items-center justify-center ${
                      plan === p.id ? 'border-white bg-white' : 'border-black bg-black'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 ${
                        plan === p.id ? 'bg-black' : 'bg-white'
                      }`}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-3xl font-black">{p.price}</span>
                  <span className="text-sm font-bold">{p.period}</span>
                </div>
                <p className="text-xs font-bold tracking-wider">{p.description}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Block Radio Buttons */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold tracking-wider text-black uppercase border-b-4 border-black pb-2 inline-block">
            FREQUENCY
          </h3>
          <div className="flex gap-0">
            {['DAILY', 'WEEKLY', 'MONTHLY'].map((freq, idx) => (
              <button
                key={freq}
                type="button"
                className={`px-8 py-4 text-base font-black transition-all border-4 border-black ${
                  idx === 1
                    ? 'bg-black text-white z-10 shadow-[4px_4px_0_0_rgba(0,0,0,1)]'
                    : 'bg-white text-black hover:bg-gray-100'
                } ${idx > 0 ? '-ml-1' : ''}`}
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
