import { useState } from 'react'

export default function ThreeDRadio() {
  const [selected, setSelected] = useState('option1')
  const [plan, setPlan] = useState('pro')
  const [size, setSize] = useState('medium')
  const [notification, setNotification] = useState('email')

  const options = [
    { id: 'option1', label: 'Standard Delivery' },
    { id: 'option2', label: 'Express Delivery' },
    { id: 'option3', label: 'Same Day Delivery' },
    { id: 'option4', label: 'International', disabled: true },
  ]

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals',
      icon: '📦'
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: 'Great for teams',
      icon: '🚀'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      icon: '🏢'
    },
  ]

  const sizes = [
    { id: 'small', label: 'S' },
    { id: 'medium', label: 'M' },
    { id: 'large', label: 'L' },
    { id: 'xlarge', label: 'XL' },
  ]

  const notifications = [
    { id: 'email', label: 'Email notifications', icon: '✉️' },
    { id: 'push', label: 'Push notifications', icon: '🔔' },
    { id: 'sms', label: 'SMS alerts', icon: '📱' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8 md:p-12">
      <div className="max-w-2xl mx-auto space-y-16">
        {/* Basic Radio Group - Elevated Style */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
            Delivery Method
          </h3>
          <div className="space-y-3">
            {options.map((opt) => (
              <label
                key={opt.id}
                className={`block cursor-pointer group ${
                  opt.disabled ? 'cursor-not-allowed opacity-50' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => !opt.disabled && setSelected(opt.id)}
                  disabled={opt.disabled}
                  className={`w-full flex items-center gap-4 p-5 bg-white border-2 rounded-xl transition-all duration-200 ${
                    selected === opt.id
                      ? 'border-blue-600 shadow-[0_8px_0_0_rgb(37,99,235),0_12px_20px_-4px_rgba(37,99,235,0.3)] -translate-y-1'
                      : 'border-slate-300 shadow-[0_4px_0_0_rgb(203,213,225),0_6px_12px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_0_0_rgb(203,213,225),0_10px_16px_-2px_rgba(0,0,0,0.15)] hover:-translate-y-0.5'
                  } ${
                    opt.disabled
                      ? ''
                      : 'focus:outline-none focus:ring-4 focus:ring-blue-500/20'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      selected === opt.id
                        ? 'border-blue-600 bg-blue-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]'
                        : 'border-slate-400 bg-white shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]'
                    }`}
                  >
                    {selected === opt.id && (
                      <div className="w-2.5 h-2.5 bg-white rounded-full shadow-sm" />
                    )}
                  </div>
                  <span className={`text-sm font-medium ${
                    selected === opt.id ? 'text-slate-900' : 'text-slate-700'
                  }`}>
                    {opt.label}
                  </span>
                </button>
              </label>
            ))}
          </div>
        </section>

        {/* Horizontal Radio - Size Selector with 3D Buttons */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
            Select Size
          </h3>
          <div className="flex gap-3">
            {sizes.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSize(s.id)}
                className={`flex-1 py-4 px-6 text-sm font-bold rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 ${
                  size === s.id
                    ? 'bg-emerald-500 border-emerald-700 text-white shadow-[0_6px_0_0_rgb(5,150,105),0_8px_16px_-2px_rgba(5,150,105,0.4)] -translate-y-1'
                    : 'bg-white border-slate-300 text-slate-700 shadow-[0_4px_0_0_rgb(203,213,225),0_6px_12px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_5px_0_0_rgb(203,213,225),0_8px_14px_-2px_rgba(0,0,0,0.15)] hover:-translate-y-0.5'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </section>

        {/* Card Style Radio - Premium 3D Cards */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
            Choose Your Plan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlan(p.id)}
                className={`p-6 text-left bg-white border-2 rounded-2xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-violet-500/20 ${
                  plan === p.id
                    ? 'border-violet-600 shadow-[0_10px_0_0_rgb(124,58,237),0_14px_24px_-4px_rgba(124,58,237,0.4)] -translate-y-2'
                    : 'border-slate-300 shadow-[0_6px_0_0_rgb(203,213,225),0_10px_16px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_0_0_rgb(203,213,225),0_12px_20px_-2px_rgba(0,0,0,0.15)] hover:-translate-y-1'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{p.icon}</div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      plan === p.id
                        ? 'border-violet-600 bg-violet-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]'
                        : 'border-slate-400 bg-white shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]'
                    }`}
                  >
                    {plan === p.id && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{p.name}</h4>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-slate-900">{p.price}</span>
                  <span className="text-sm text-slate-500">{p.period}</span>
                </div>
                <p className="text-xs text-slate-600">{p.description}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Notification Options - 3D List Items */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
            Notification Settings
          </h3>
          <div className="space-y-3">
            {notifications.map((notif) => (
              <button
                key={notif.id}
                type="button"
                onClick={() => setNotification(notif.id)}
                className={`w-full flex items-center justify-between p-5 bg-white border-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/20 ${
                  notification === notif.id
                    ? 'border-amber-500 shadow-[0_6px_0_0_rgb(245,158,11),0_10px_18px_-2px_rgba(245,158,11,0.4)] -translate-y-1'
                    : 'border-slate-300 shadow-[0_4px_0_0_rgb(203,213,225),0_6px_12px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_5px_0_0_rgb(203,213,225),0_8px_14px_-2px_rgba(0,0,0,0.15)] hover:-translate-y-0.5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{notif.icon}</span>
                  <span className={`text-sm font-medium ${
                    notification === notif.id ? 'text-slate-900' : 'text-slate-700'
                  }`}>
                    {notif.label}
                  </span>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                    notification === notif.id
                      ? 'border-amber-500 bg-amber-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]'
                      : 'border-slate-400 bg-white shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]'
                  }`}
                >
                  {notification === notif.id && (
                    <div className="w-2.5 h-2.5 bg-white rounded-full" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Frequency Toggle - 3D Tabs */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
            Billing Frequency
          </h3>
          <div className="inline-flex bg-slate-200 p-2 rounded-xl shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)]">
            {['Monthly', 'Yearly', 'Lifetime'].map((freq, idx) => (
              <button
                key={freq}
                type="button"
                className={`px-6 py-3 text-sm font-bold rounded-lg transition-all duration-200 ${
                  idx === 1
                    ? 'bg-white text-slate-900 shadow-[0_4px_0_0_rgb(148,163,184),0_6px_12px_-2px_rgba(0,0,0,0.2)] -translate-y-0.5'
                    : 'text-slate-600 hover:text-slate-900'
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
