import { useState } from 'react';
import { Radio, RadioGroup } from './index';

export default function MaterialRadio() {
  const [selected, setSelected] = useState('option1');
  const [plan, setPlan] = useState('pro');
  const [size, setSize] = useState('medium');

  const options = [
    { id: 'option1', label: 'First option' },
    { id: 'option2', label: 'Second option' },
    { id: 'option3', label: 'Third option' },
    { id: 'option4', label: 'Disabled option', disabled: true },
  ]

  const plans = [
    { id: 'basic', name: 'Basic', price: '$9', period: '/mo', description: 'Essential features for individuals', icon: '📦' },
    { id: 'pro', name: 'Professional', price: '$29', period: '/mo', description: 'Advanced tools for teams', icon: '🚀' },
    { id: 'enterprise', name: 'Enterprise', price: '$99', period: '/mo', description: 'Full platform access', icon: '🏢' },
  ]

  const sizes = [
    { id: 'small', label: 'Small' },
    { id: 'medium', label: 'Medium' },
    { id: 'large', label: 'Large' },
    { id: 'xlarge', label: 'Extra Large' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-8 md:p-12">
      <div className="max-w-2xl mx-auto space-y-16">
        {/* Basic Radio Group */}
        <section className="space-y-4">
          <h3 className="text-sm font-medium text-gray-900 mb-4">
            Select an option
          </h3>
          <RadioGroup name="options" value={selected} onChange={setSelected}>
            {options.map((opt) => (
              <Radio
                key={opt.id}
                value={opt.id}
                theme="material"
                label={opt.label}
                disabled={opt.disabled}
                color="primary"
                size="md"
              />
            ))}
          </RadioGroup>
        </section>

        {/* Horizontal Radio - Chips Style */}
        <section className="space-y-4">
          <h3 className="text-sm font-medium text-gray-900 mb-4">
            Choose size
          </h3>
          <div className="flex gap-3 flex-wrap">
            {sizes.map((s) => (
              <label key={s.id} className="cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  checked={size === s.id}
                  onChange={() => setSize(s.id)}
                  className="sr-only peer"
                />
                <button
                  type="button"
                  onClick={() => setSize(s.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                    size === s.id
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
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
          <h3 className="text-sm font-medium text-gray-900 mb-4">
            Select your plan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlan(p.id)}
                className={`p-6 text-left rounded-xl transition-all duration-200 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                  plan === p.id
                    ? 'bg-blue-50 shadow-lg shadow-blue-100 border-2 border-blue-600'
                    : 'bg-white border-2 border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-2xl">{p.icon}</div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      plan === p.id ? 'border-blue-600' : 'border-gray-400'
                    }`}
                  >
                    <span
                      className={`w-2.5 h-2.5 rounded-full bg-blue-600 transition-all duration-200 ${
                        plan === p.id ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                      }`}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <h4 className={`text-base font-semibold mb-1 ${plan === p.id ? 'text-blue-900' : 'text-gray-900'}`}>
                    {p.name}
                  </h4>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-2xl font-bold ${plan === p.id ? 'text-blue-600' : 'text-gray-900'}`}>
                      {p.price}
                    </span>
                    <span className="text-sm text-gray-500">{p.period}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{p.description}</p>
                {plan === p.id && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Tabs Style */}
        <section className="space-y-4">
          <h3 className="text-sm font-medium text-gray-900 mb-4">
            Update frequency
          </h3>
          <div className="inline-flex bg-gray-200 rounded-lg p-1">
            {['Daily', 'Weekly', 'Monthly'].map((freq, idx) => (
              <button
                key={freq}
                type="button"
                className={`px-8 py-2.5 text-sm font-medium rounded-md transition-all duration-200 ${
                  idx === 1
                    ? 'bg-white text-gray-900 shadow-md'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {freq}
              </button>
            ))}
          </div>
        </section>

        {/* List with Dividers */}
        <section className="space-y-4">
          <h3 className="text-sm font-medium text-gray-900 mb-4">
            Notification settings
          </h3>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 divide-y divide-gray-200">
            {['Email notifications', 'Push notifications', 'SMS notifications'].map((option, idx) => (
              <label key={option} className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                <span className="text-sm text-gray-700">{option}</span>
                <button
                  type="button"
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                    idx === 0 ? 'border-blue-600' : 'border-gray-400'
                  }`}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full bg-blue-600 transition-all duration-200 ${
                      idx === 0 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    }`}
                  />
                </button>
              </label>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
