import { useState } from 'react';
import { Radio, RadioGroup } from './index';

export default function MinimalistRadio() {
  const [selected, setSelected] = useState('option1');
  const [plan, setPlan] = useState('pro');
  const [size, setSize] = useState('medium');

  const options = [
    { id: 'option1', label: 'Option One' },
    { id: 'option2', label: 'Option Two' },
    { id: 'option3', label: 'Option Three' },
    { id: 'option4', label: 'Option Four', disabled: true },
  ];

  const plans = [
    { id: 'basic', name: 'Basic', price: '$9', period: '/month', description: 'For individuals' },
    { id: 'pro', name: 'Pro', price: '$29', period: '/month', description: 'For small teams' },
    { id: 'enterprise', name: 'Enterprise', price: '$99', period: '/month', description: 'For organizations' },
  ];

  const sizes = [
    { id: 'small', label: 'S' },
    { id: 'medium', label: 'M' },
    { id: 'large', label: 'L' },
    { id: 'xlarge', label: 'XL' },
  ];

  return (
    <div className="min-h-screen bg-white p-8 md:p-12">
      <div className="max-w-2xl mx-auto space-y-16">
        {/* Basic Radio Group */}
        <section className="space-y-4">
          <h3 className="text-xs font-medium tracking-widest text-neutral-400 uppercase">
            Select Option
          </h3>
          <RadioGroup name="options" value={selected} onChange={setSelected}>
            {options.map((opt) => (
              <Radio
                key={opt.id}
                value={opt.id}
                theme="minimalist"
                label={opt.label}
                disabled={opt.disabled}
                color="primary"
                size="md"
              />
            ))}
          </RadioGroup>
        </section>

        {/* Horizontal Radio - Sizes */}
        <section className="space-y-4">
          <h3 className="text-xs font-medium tracking-widest text-neutral-400 uppercase">
            Size
          </h3>
          <RadioGroup name="sizes" value={size} onChange={setSize} orientation="horizontal">
            {sizes.map((s) => (
              <Radio
                key={s.id}
                value={s.id}
                theme="minimalist"
                label={s.label}
                color="primary"
                size="sm"
              />
            ))}
          </RadioGroup>
        </section>

        {/* Card Style Radio */}
        <section className="space-y-4">
          <h3 className="text-xs font-medium tracking-widest text-neutral-400 uppercase">
            Choose Plan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlan(p.id)}
                className={`p-6 text-left border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 ${
                  plan === p.id
                    ? 'border-neutral-900'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-sm font-medium text-neutral-900">{p.name}</span>
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      plan === p.id ? 'border-neutral-900' : 'border-neutral-300'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full bg-neutral-900 transition-transform duration-200 ${
                        plan === p.id ? 'scale-100' : 'scale-0'
                      }`}
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-2xl font-light text-neutral-900">{p.price}</span>
                  <span className="text-sm text-neutral-400">{p.period}</span>
                </div>
                <p className="text-xs text-neutral-500">{p.description}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Inline Radio with Line */}
        <section className="space-y-4">
          <h3 className="text-xs font-medium tracking-widest text-neutral-400 uppercase">
            Frequency
          </h3>
          <div className="inline-flex border-b border-neutral-200">
            {['Daily', 'Weekly', 'Monthly'].map((freq, idx) => (
              <button
                key={freq}
                type="button"
                className={`px-6 py-3 text-sm transition-colors duration-200 relative ${
                  idx === 1
                    ? 'text-neutral-900 font-medium'
                    : 'text-neutral-400 hover:text-neutral-600'
                }`}
              >
                {freq}
                {idx === 1 && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900" />
                )}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
