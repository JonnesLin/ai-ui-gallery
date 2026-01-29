import { useState } from 'react'

export default function SketchRadio() {
  const [selected, setSelected] = useState('option1')
  const [plan, setPlan] = useState('pro')
  const [size, setSize] = useState('medium')

  const options = [
    { id: 'option1', label: 'First Choice' },
    { id: 'option2', label: 'Second Choice' },
    { id: 'option3', label: 'Third Choice' },
    { id: 'option4', label: 'Not Available', disabled: true },
  ]

  const plans = [
    { id: 'basic', name: 'Basic', price: '$12', period: '/mo', description: 'Great for starters', icon: '✏️' },
    { id: 'pro', name: 'Pro', price: '$29', period: '/mo', description: 'Perfect for creators', icon: '✨' },
    { id: 'enterprise', name: 'Team', price: '$79', period: '/mo', description: 'Built for teams', icon: '🚀' },
  ]

  const sizes = [
    { id: 'small', label: 'S' },
    { id: 'medium', label: 'M' },
    { id: 'large', label: 'L' },
    { id: 'xlarge', label: 'XL' },
  ]

  return (
    <div className="min-h-screen bg-[#fdfbf7] p-8 md:p-12" style={{
      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(0,0,0,0.03) 30px, rgba(0,0,0,0.03) 31px)`
    }}>
      <div className="max-w-2xl mx-auto space-y-16">
        {/* Basic Radio Group with Hand-drawn Style */}
        <section className="space-y-5">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide relative inline-block">
            Pick One
            <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 2" preserveAspectRatio="none">
              <path d="M0,1 Q25,0 50,1 T100,1" stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </h3>
          <div className="space-y-3">
            {options.map((opt) => (
              <label
                key={opt.id}
                className={`flex items-center gap-4 p-4 cursor-pointer group relative ${
                  opt.disabled ? 'cursor-not-allowed opacity-40' : ''
                }`}
                style={{
                  background: selected === opt.id ? '#fff' : 'transparent',
                  border: '2px solid #374151',
                  borderRadius: '8px',
                  boxShadow: selected === opt.id ? '4px 4px 0 #374151' : 'none',
                  transform: selected === opt.id ? 'translate(-2px, -2px)' : 'none',
                  transition: 'all 0.2s',
                }}
              >
                <button
                  type="button"
                  onClick={() => !opt.disabled && setSelected(opt.id)}
                  disabled={opt.disabled}
                  className={`w-7 h-7 rounded-full border-2 border-gray-800 flex items-center justify-center transition-all duration-200 ${
                    opt.disabled ? '' : 'focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2'
                  }`}
                  style={{
                    background: selected === opt.id ? '#fbbf24' : '#fff',
                    transform: selected === opt.id ? 'rotate(-3deg)' : 'rotate(0deg)',
                  }}
                >
                  {selected === opt.id && (
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <path d="M3,8 L7,12 L13,4" stroke="#374151" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
                <span className="text-sm font-medium text-gray-800" style={{ fontFamily: '"Indie Flower", cursive' }}>
                  {opt.label}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* Horizontal Radio - Doodle Style */}
        <section className="space-y-5">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide relative inline-block">
            Size
            <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 2" preserveAspectRatio="none">
              <path d="M0,1 Q25,0 50,1 T100,1" stroke="#10b981" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </h3>
          <div className="flex gap-3 flex-wrap">
            {sizes.map((s, idx) => (
              <label key={s.id} className="cursor-pointer">
                <button
                  type="button"
                  onClick={() => setSize(s.id)}
                  className={`px-6 py-3 border-2 border-gray-800 text-sm font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2`}
                  style={{
                    background: size === s.id ? '#10b981' : '#fff',
                    borderRadius: '20px',
                    boxShadow: size === s.id ? '3px 3px 0 #374151' : 'none',
                    transform: size === s.id ? `translate(-2px, -2px) rotate(${idx % 2 === 0 ? '-2deg' : '2deg'})` : 'rotate(0deg)',
                    color: size === s.id ? '#fff' : '#374151',
                  }}
                >
                  {s.label}
                </button>
              </label>
            ))}
          </div>
        </section>

        {/* Card Style Radio - Sketch Cards */}
        <section className="space-y-5">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide relative inline-block">
            Choose Your Plan
            <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 2" preserveAspectRatio="none">
              <path d="M0,1 Q25,0 50,1 T100,1" stroke="#8b5cf6" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlan(p.id)}
                className={`p-6 text-left border-3 border-gray-800 transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2`}
                style={{
                  background: plan === p.id ? '#fef3c7' : '#fff',
                  borderWidth: '2px',
                  borderRadius: '12px',
                  boxShadow: plan === p.id ? '5px 5px 0 #374151' : '2px 2px 0 #d1d5db',
                  transform: plan === p.id ? `translate(-3px, -3px) rotate(${idx % 2 === 0 ? '-1deg' : '1deg'})` : 'rotate(0deg)',
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-2xl">{p.icon}</span>
                  <div
                    className="w-6 h-6 rounded-full border-2 border-gray-800 flex items-center justify-center"
                    style={{
                      background: plan === p.id ? '#8b5cf6' : '#fff',
                      transform: plan === p.id ? 'rotate(-5deg)' : 'rotate(0deg)',
                    }}
                  >
                    {plan === p.id && (
                      <span className="w-3 h-3 rounded-full bg-white"></span>
                    )}
                  </div>
                </div>
                <div className="mb-3">
                  <h4 className="text-base font-bold text-gray-800 mb-1">{p.name}</h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-gray-900">{p.price}</span>
                    <span className="text-sm text-gray-600">{p.period}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 border-t-2 border-dashed border-gray-300 pt-3">
                  {p.description}
                </p>
                {plan === p.id && (
                  <svg className="absolute -top-2 -right-2 w-8 h-8" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" r="14" fill="#fbbf24" stroke="#374151" strokeWidth="2"/>
                    <path d="M10,16 L14,20 L22,12" stroke="#374151" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Scribble Tabs */}
        <section className="space-y-5">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide relative inline-block">
            Frequency
            <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 2" preserveAspectRatio="none">
              <path d="M0,1 Q25,0 50,1 T100,1" stroke="#ec4899" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </h3>
          <div className="inline-flex gap-2 p-2 bg-white border-2 border-gray-800 rounded-lg">
            {['Daily', 'Weekly', 'Monthly'].map((freq, idx) => (
              <button
                key={freq}
                type="button"
                className="px-6 py-2.5 text-sm font-bold transition-all duration-200 border-2 border-transparent rounded"
                style={{
                  background: idx === 1 ? '#ec4899' : 'transparent',
                  color: idx === 1 ? '#fff' : '#374151',
                  borderColor: idx === 1 ? '#374151' : 'transparent',
                  boxShadow: idx === 1 ? '2px 2px 0 #374151' : 'none',
                  transform: idx === 1 ? 'translate(-1px, -1px) rotate(-1deg)' : 'rotate(0deg)',
                }}
              >
                {freq}
              </button>
            ))}
          </div>
        </section>

        {/* Hand-drawn List */}
        <section className="space-y-5">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide relative inline-block">
            Notifications
            <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 2" preserveAspectRatio="none">
              <path d="M0,1 Q25,0 50,1 T100,1" stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </h3>
          <div className="space-y-2">
            {['Email updates', 'Push notifications', 'SMS alerts'].map((item, idx) => (
              <label key={item} className="flex items-center justify-between p-4 bg-white border-2 border-gray-800 rounded-lg cursor-pointer hover:shadow-[3px_3px_0_#374151] transition-all duration-200" style={{ transform: `rotate(${idx % 2 === 0 ? '-0.5deg' : '0.5deg'})` }}>
                <span className="text-sm font-medium text-gray-800">{item}</span>
                <div
                  className="w-6 h-6 rounded-full border-2 border-gray-800 flex items-center justify-center"
                  style={{
                    background: idx === 0 ? '#3b82f6' : '#fff',
                  }}
                >
                  {idx === 0 && (
                    <span className="w-3 h-3 rounded-full bg-white"></span>
                  )}
                </div>
              </label>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
