import { useState } from 'react';
import { Radio, RadioGroup } from './index';

export default function DarkRadio() {
  const [selected, setSelected] = useState('option2');
  const [plan, setPlan] = useState('pro');
  const [priority, setPriority] = useState('medium');

  const options = [
    { id: 'option1', label: 'Enable Analytics', description: 'Track user behavior and performance' },
    { id: 'option2', label: 'Enable Notifications', description: 'Get alerts for important events' },
    { id: 'option3', label: 'Enable Auto-sync', description: 'Sync data across devices' },
    { id: 'option4', label: 'Enable Debug Mode', description: 'For development only', disabled: true },
  ]

  const plans = [
    { id: 'starter', name: 'Starter', price: '$0', description: 'Perfect for trying out', features: ['5 projects', '1GB storage', 'Email support'] },
    { id: 'pro', name: 'Pro', price: '$19', description: 'For growing teams', features: ['Unlimited projects', '100GB storage', 'Priority support'] },
    { id: 'enterprise', name: 'Enterprise', price: '$49', description: 'For large organizations', features: ['Custom solutions', 'Unlimited storage', '24/7 support'] },
  ]

  const priorities = [
    { id: 'low', label: 'Low', color: 'bg-emerald-500' },
    { id: 'medium', label: 'Medium', color: 'bg-amber-500' },
    { id: 'high', label: 'High', color: 'bg-rose-500' },
    { id: 'critical', label: 'Critical', color: 'bg-purple-500' },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 p-8 md:p-12">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Basic Radio Group */}
        <section className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
          <h3 className="text-sm font-medium text-zinc-400 mb-6">Settings</h3>
          <RadioGroup name="settings" value={selected} onChange={setSelected}>
            {options.map((opt) => (
              <Radio
                key={opt.id}
                value={opt.id}
                theme="dark"
                label={opt.label}
                description={opt.description}
                disabled={opt.disabled}
                color="primary"
                size="md"
              />
            ))}
          </RadioGroup>
        </section>

        {/* Priority Selector */}
        <section className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
          <h3 className="text-sm font-medium text-zinc-400 mb-6">Priority Level</h3>
          <div className="flex flex-wrap gap-3">
            {priorities.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPriority(p.id)}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-600 ${
                  priority === p.id
                    ? 'bg-zinc-800 border border-zinc-600'
                    : 'bg-zinc-900 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <span className={`w-3 h-3 rounded-full ${p.color}`} />
                <span className={`text-sm font-medium ${priority === p.id ? 'text-zinc-100' : 'text-zinc-400'}`}>
                  {p.label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Card Style Radio */}
        <section className="space-y-6">
          <h3 className="text-sm font-medium text-zinc-400">Choose Your Plan</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlan(p.id)}
                className={`relative p-6 text-left rounded-2xl transition-all duration-200 focus:outline-none ${
                  plan === p.id
                    ? 'bg-gradient-to-b from-zinc-800 to-zinc-900 border-2 border-blue-500/50 shadow-lg shadow-blue-500/10'
                    : 'bg-zinc-900 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {plan === p.id && (
                  <div className="absolute top-4 right-4">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500">
                      <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                )}
                <span className={`text-lg font-semibold ${plan === p.id ? 'text-white' : 'text-zinc-300'}`}>
                  {p.name}
                </span>
                <div className="mt-3 mb-4">
                  <span className="text-3xl font-bold text-white">{p.price}</span>
                  <span className="text-zinc-500">/month</span>
                </div>
                <p className="text-sm text-zinc-500 mb-4">{p.description}</p>
                <ul className="space-y-2">
                  {p.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-zinc-400">
                      <svg className="w-4 h-4 text-zinc-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </button>
            ))}
          </div>
        </section>

        {/* Segmented Control */}
        <section className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
          <h3 className="text-sm font-medium text-zinc-400 mb-6">View Mode</h3>
          <div className="inline-flex bg-zinc-800 rounded-xl p-1">
            {['Grid', 'List', 'Compact'].map((mode) => (
              <button
                key={mode}
                type="button"
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  mode === 'List'
                    ? 'bg-zinc-700 text-white shadow-lg'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
