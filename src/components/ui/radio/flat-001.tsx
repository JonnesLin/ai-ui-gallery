import { useState } from 'react';
import { Radio, RadioGroup } from './index';

export default function FlatRadio() {
  const [selected, setSelected] = useState('option2');
  const [plan, setPlan] = useState('pro');
  const [color, setColor] = useState('blue');
  const [size, setSize] = useState('medium');

  const options = [
    { id: 'option1', label: 'Option One' },
    { id: 'option2', label: 'Option Two' },
    { id: 'option3', label: 'Option Three' },
    { id: 'option4', label: 'Option Four', disabled: true },
  ]

  const plans = [
    { id: 'basic', name: 'Basic', price: '$9', period: '/month', description: 'For individuals' },
    { id: 'pro', name: 'Pro', price: '$29', period: '/month', description: 'For small teams' },
    { id: 'enterprise', name: 'Enterprise', price: '$99', period: '/month', description: 'For organizations' },
  ]

  const colors = [
    { id: 'blue', name: 'Blue', color: 'bg-blue-500' },
    { id: 'green', name: 'Green', color: 'bg-green-500' },
    { id: 'red', name: 'Red', color: 'bg-red-500' },
    { id: 'purple', name: 'Purple', color: 'bg-purple-500' },
  ]

  const sizes = [
    { id: 'small', label: 'S' },
    { id: 'medium', label: 'M' },
    { id: 'large', label: 'L' },
    { id: 'xlarge', label: 'XL' },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-8 md:p-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Flat Radio Buttons</h1>
          <p className="text-gray-600">Pure solid colors with no gradients or shadows</p>
        </div>

        {/* Basic Radio Group */}
        <section className="bg-white p-6">
          <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-4">
            Select Option
          </h3>
          <RadioGroup name="options" value={selected} onChange={setSelected}>
            {options.map((opt) => (
              <Radio
                key={opt.id}
                value={opt.id}
                theme="flat"
                label={opt.label}
                disabled={opt.disabled}
                color="primary"
                size="lg"
              />
            ))}
          </RadioGroup>
        </section>

        {/* Horizontal Radio - Sizes */}
        <section className="bg-white p-6">
          <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-4">
            Size
          </h3>
          <div className="flex gap-6">
            {sizes.map((s) => (
              <label key={s.id} className="flex items-center gap-2 cursor-pointer group">
                <button
                  type="button"
                  onClick={() => setSize(s.id)}
                  className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                    size === s.id
                      ? 'bg-blue-500'
                      : 'bg-gray-300 group-hover:bg-gray-400'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full bg-white transition-transform ${
                      size === s.id ? 'scale-100' : 'scale-0'
                    }`}
                  />
                </button>
                <span className="text-gray-700 text-sm font-medium">{s.label}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Card Style Radio */}
        <section className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
            Choose Plan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlan(p.id)}
                className={`p-6 text-left transition-all ${
                  plan === p.id
                    ? 'bg-blue-500'
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-sm font-bold ${
                    plan === p.id ? 'text-white' : 'text-gray-800'
                  }`}>
                    {p.name}
                  </span>
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan === p.id ? 'bg-white' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full transition-transform ${
                        plan === p.id ? 'scale-100 bg-blue-500' : 'scale-0 bg-white'
                      }`}
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <span className={`text-2xl font-bold ${
                    plan === p.id ? 'text-white' : 'text-gray-800'
                  }`}>
                    {p.price}
                  </span>
                  <span className={`text-sm ${
                    plan === p.id ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {p.period}
                  </span>
                </div>
                <p className={`text-xs ${
                  plan === p.id ? 'text-blue-100' : 'text-gray-600'
                }`}>
                  {p.description}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* Color Radio */}
        <section className="bg-white p-6">
          <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-4">
            Choose Color
          </h3>
          <div className="flex gap-4">
            {colors.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setColor(c.id)}
                className="flex flex-col items-center gap-2 group"
              >
                <div
                  className={`w-12 h-12 ${c.color} transition-transform ${
                    color === c.id ? 'scale-110' : 'scale-100 group-hover:scale-105'
                  } flex items-center justify-center`}
                >
                  {color === c.id && (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className={`text-xs ${
                  color === c.id ? 'text-gray-800 font-semibold' : 'text-gray-500'
                }`}>
                  {c.name}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Button Group Style */}
        <section className="bg-white p-6">
          <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-4">
            Frequency
          </h3>
          <div className="inline-flex">
            {['Daily', 'Weekly', 'Monthly'].map((freq, idx) => (
              <button
                key={freq}
                type="button"
                onClick={() => {}}
                className={`px-6 py-3 text-sm font-semibold transition-colors ${
                  idx === 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } ${idx === 0 ? '' : ''} ${idx === 2 ? '' : ''}`}
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
