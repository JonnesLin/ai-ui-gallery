import { useState } from 'react';
import { Radio, RadioGroup } from './index';

export default function NeumorphismRadio() {
  const [selected, setSelected] = useState('option2');
  const [plan, setPlan] = useState('standard');
  const [speed, setSpeed] = useState('normal');

  const options = [
    { id: 'option1', label: 'Light Mode' },
    { id: 'option2', label: 'Dark Mode' },
    { id: 'option3', label: 'Auto' },
    { id: 'option4', label: 'System', disabled: true },
  ]

  const plans = [
    { id: 'basic', name: 'Basic', price: '$15', storage: '10 GB' },
    { id: 'standard', name: 'Standard', price: '$30', storage: '50 GB' },
    { id: 'premium', name: 'Premium', price: '$60', storage: '200 GB' },
  ]

  const speeds = [
    { id: 'slow', label: '0.5x' },
    { id: 'normal', label: '1x' },
    { id: 'fast', label: '1.5x' },
    { id: 'faster', label: '2x' },
  ]

  return (
    <div className="min-h-screen bg-[#e0e5ec] p-8 md:p-12">
      <div className="max-w-2xl mx-auto space-y-12">
        {/* Basic Radio Group */}
        <section className="rounded-3xl p-8 bg-[#e0e5ec] shadow-[20px_20px_60px_#bec3c9,-20px_-20px_60px_#ffffff]">
          <h3 className="text-sm font-semibold text-gray-500 mb-6 tracking-wide">
            APPEARANCE
          </h3>
          <RadioGroup name="appearance" value={selected} onChange={setSelected}>
            {options.map((opt) => (
              <Radio
                key={opt.id}
                value={opt.id}
                theme="neumorphism"
                label={opt.label}
                disabled={opt.disabled}
                color="primary"
                size="lg"
              />
            ))}
          </RadioGroup>
        </section>

        {/* Speed Selector */}
        <section className="rounded-3xl p-8 bg-[#e0e5ec] shadow-[20px_20px_60px_#bec3c9,-20px_-20px_60px_#ffffff]">
          <h3 className="text-sm font-semibold text-gray-500 mb-6 tracking-wide">
            PLAYBACK SPEED
          </h3>
          <div className="flex gap-4">
            {speeds.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSpeed(s.id)}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-semibold transition-all duration-300 focus:outline-none ${
                  speed === s.id
                    ? 'shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff] text-blue-500'
                    : 'shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff] text-gray-500 hover:text-gray-700'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </section>

        {/* Card Style Radio */}
        <section className="space-y-6">
          <h3 className="text-sm font-semibold text-gray-500 tracking-wide">
            STORAGE PLAN
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlan(p.id)}
                className={`p-6 text-left rounded-3xl transition-all duration-300 focus:outline-none ${
                  plan === p.id
                    ? 'shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff]'
                    : 'shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff]'
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className={`font-semibold ${plan === p.id ? 'text-blue-500' : 'text-gray-600'}`}>
                    {p.name}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      plan === p.id
                        ? 'shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]'
                        : 'shadow-[2px_2px_4px_#bec3c9,-2px_-2px_4px_#ffffff]'
                    }`}
                  >
                    <span
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        plan === p.id
                          ? 'bg-gradient-to-br from-blue-400 to-blue-600'
                          : 'bg-transparent'
                      }`}
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <span className={`text-2xl font-bold ${plan === p.id ? 'text-gray-700' : 'text-gray-500'}`}>
                    {p.price}
                  </span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
                <p className="text-sm text-gray-400">{p.storage} storage</p>
              </button>
            ))}
          </div>
        </section>

        {/* Pill Radio */}
        <section className="rounded-3xl p-8 bg-[#e0e5ec] shadow-[20px_20px_60px_#bec3c9,-20px_-20px_60px_#ffffff]">
          <h3 className="text-sm font-semibold text-gray-500 mb-6 tracking-wide">
            NOTIFICATION
          </h3>
          <div className="inline-flex p-2 rounded-2xl shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff]">
            {['All', 'Mentions', 'None'].map((notif) => (
              <button
                key={notif}
                type="button"
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  notif === 'Mentions'
                    ? 'shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff] text-blue-500 bg-[#e0e5ec]'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {notif}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
