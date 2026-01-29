import { useState } from 'react'

export default function ThreeDCheckbox() {
  const [checked, setChecked] = useState({
    option1: true,
    option2: false,
    option3: true,
    option4: false
  })
  const [selectAll, setSelectAll] = useState<boolean | 'indeterminate'>('indeterminate')
  const [singleChecked, setSingleChecked] = useState(true)

  const handleToggle = (key: keyof typeof checked) => {
    const newChecked = { ...checked, [key]: !checked[key] }
    setChecked(newChecked)
    const values = Object.values(newChecked)
    const allChecked = values.every(Boolean)
    const noneChecked = values.every(v => !v)
    setSelectAll(allChecked ? true : noneChecked ? false : 'indeterminate')
  }

  const handleSelectAll = () => {
    const newValue = selectAll !== true
    setChecked({
      option1: newValue,
      option2: newValue,
      option3: newValue,
      option4: newValue
    })
    setSelectAll(newValue)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 flex flex-col gap-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold text-white mb-2" style={{
          textShadow: '0 4px 8px rgba(0,0,0,0.5), 0 8px 16px rgba(0,0,0,0.3)'
        }}>
          3D Elevated Checkboxes
        </h2>
        <p className="text-slate-400">Multi-layered shadows with depth perception</p>
      </div>

      {/* Basic 3D Checkboxes */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
        style={{
          boxShadow: '0 10px 30px rgba(0,0,0,0.4), 0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)'
        }}>
        <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-6">
          Elevated Options
        </h3>

        <div className="flex flex-col gap-4">
          {Object.entries(checked).map(([key, value]) => (
            <label
              key={key}
              className="flex items-center gap-4 cursor-pointer group"
            >
              <div
                onClick={() => handleToggle(key as keyof typeof checked)}
                className={`relative w-7 h-7 rounded-lg transition-all duration-300 flex items-center justify-center ${
                  value
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600'
                    : 'bg-gradient-to-br from-slate-700 to-slate-800 group-hover:from-slate-600 group-hover:to-slate-700'
                }`}
                style={{
                  boxShadow: value
                    ? '0 1px 2px rgba(59,130,246,0.5), 0 4px 8px rgba(59,130,246,0.3), 0 8px 16px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.3)'
                    : '0 2px 4px rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05), inset 0 -1px 0 rgba(0,0,0,0.5)',
                  transform: value ? 'translateY(-2px)' : 'translateY(0)'
                }}
              >
                {value && (
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                    style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-slate-200 font-medium capitalize select-none">
                {key.replace(/\d+/g, ' $&').trim()}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Indeterminate State */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
        style={{
          boxShadow: '0 10px 30px rgba(0,0,0,0.4), 0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)'
        }}>
        <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-6">
          Select All State
        </h3>

        <label className="flex items-center gap-4 cursor-pointer group">
          <div
            onClick={handleSelectAll}
            className={`relative w-7 h-7 rounded-lg transition-all duration-300 flex items-center justify-center ${
              selectAll === true || selectAll === 'indeterminate'
                ? 'bg-gradient-to-br from-blue-500 to-blue-600'
                : 'bg-gradient-to-br from-slate-700 to-slate-800 group-hover:from-slate-600 group-hover:to-slate-700'
            }`}
            style={{
              boxShadow: selectAll === true || selectAll === 'indeterminate'
                ? '0 1px 2px rgba(59,130,246,0.5), 0 4px 8px rgba(59,130,246,0.3), 0 8px 16px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.3)'
                : '0 2px 4px rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05), inset 0 -1px 0 rgba(0,0,0,0.5)',
              transform: selectAll ? 'translateY(-2px)' : 'translateY(0)'
            }}
          >
            {selectAll === true && (
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
                style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
            {selectAll === 'indeterminate' && (
              <div
                className="w-3.5 h-0.5 bg-white rounded-full"
                style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
              />
            )}
          </div>
          <span className="text-slate-200 font-medium select-none">
            All options
          </span>
        </label>
      </div>

      {/* Different Sizes */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
        style={{
          boxShadow: '0 10px 30px rgba(0,0,0,0.4), 0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)'
        }}>
        <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-6">
          Size Variants
        </h3>

        <div className="flex flex-col gap-5">
          <label className="flex items-center gap-4 cursor-pointer group">
            <div
              className="relative w-5 h-5 rounded-lg transition-all duration-300 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-600"
              style={{
                boxShadow: '0 1px 2px rgba(168,85,247,0.5), 0 3px 6px rgba(168,85,247,0.3), 0 6px 12px rgba(168,85,247,0.2), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.3)',
                transform: 'translateY(-1px)'
              }}
            >
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
                style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-slate-200 font-medium select-none">
              Small
            </span>
          </label>

          <label className="flex items-center gap-4 cursor-pointer group">
            <div
              className="relative w-7 h-7 rounded-lg transition-all duration-300 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-600"
              style={{
                boxShadow: '0 1px 2px rgba(168,85,247,0.5), 0 4px 8px rgba(168,85,247,0.3), 0 8px 16px rgba(168,85,247,0.2), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.3)',
                transform: 'translateY(-2px)'
              }}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
                style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-base text-slate-200 font-medium select-none">
              Medium
            </span>
          </label>

          <label className="flex items-center gap-4 cursor-pointer group">
            <div
              className="relative w-9 h-9 rounded-xl transition-all duration-300 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-600"
              style={{
                boxShadow: '0 2px 4px rgba(168,85,247,0.5), 0 6px 12px rgba(168,85,247,0.3), 0 12px 24px rgba(168,85,247,0.2), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -2px 0 rgba(0,0,0,0.3)',
                transform: 'translateY(-3px)'
              }}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
                style={{ filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.3))' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-lg text-slate-200 font-medium select-none">
              Large
            </span>
          </label>
        </div>
      </div>

      {/* Color Variants */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
        style={{
          boxShadow: '0 10px 30px rgba(0,0,0,0.4), 0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)'
        }}>
        <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-6">
          Color Variants
        </h3>

        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-4 cursor-pointer group">
            <div
              className="relative w-7 h-7 rounded-lg transition-all duration-300 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-600"
              style={{
                boxShadow: '0 1px 2px rgba(16,185,129,0.5), 0 4px 8px rgba(16,185,129,0.3), 0 8px 16px rgba(16,185,129,0.2), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.3)',
                transform: 'translateY(-2px)'
              }}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
                style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-slate-200 font-medium select-none">
              Success
            </span>
          </label>

          <label className="flex items-center gap-4 cursor-pointer group">
            <div
              className="relative w-7 h-7 rounded-lg transition-all duration-300 flex items-center justify-center bg-gradient-to-br from-amber-500 to-amber-600"
              style={{
                boxShadow: '0 1px 2px rgba(245,158,11,0.5), 0 4px 8px rgba(245,158,11,0.3), 0 8px 16px rgba(245,158,11,0.2), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.3)',
                transform: 'translateY(-2px)'
              }}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
                style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-slate-200 font-medium select-none">
              Warning
            </span>
          </label>

          <label className="flex items-center gap-4 cursor-pointer group">
            <div
              className="relative w-7 h-7 rounded-lg transition-all duration-300 flex items-center justify-center bg-gradient-to-br from-rose-500 to-rose-600"
              style={{
                boxShadow: '0 1px 2px rgba(244,63,94,0.5), 0 4px 8px rgba(244,63,94,0.3), 0 8px 16px rgba(244,63,94,0.2), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.3)',
                transform: 'translateY(-2px)'
              }}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
                style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-slate-200 font-medium select-none">
              Error
            </span>
          </label>

          <label className="flex items-center gap-4 cursor-pointer group">
            <div
              className="relative w-7 h-7 rounded-lg transition-all duration-300 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-cyan-600"
              style={{
                boxShadow: '0 1px 2px rgba(6,182,212,0.5), 0 4px 8px rgba(6,182,212,0.3), 0 8px 16px rgba(6,182,212,0.2), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.3)',
                transform: 'translateY(-2px)'
              }}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
                style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-slate-200 font-medium select-none">
              Info
            </span>
          </label>
        </div>
      </div>

      {/* Disabled States */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
        style={{
          boxShadow: '0 10px 30px rgba(0,0,0,0.4), 0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)'
        }}>
        <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-6">
          Disabled States
        </h3>

        <div className="flex flex-col gap-4 opacity-40">
          <label className="flex items-center gap-4 cursor-not-allowed">
            <div
              className="relative w-7 h-7 rounded-lg flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800"
              style={{
                boxShadow: '0 1px 2px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.03), inset 0 -1px 0 rgba(0,0,0,0.5)'
              }}
            />
            <span className="text-slate-400 font-medium select-none">
              Disabled unchecked
            </span>
          </label>

          <label className="flex items-center gap-4 cursor-not-allowed">
            <div
              className="relative w-7 h-7 rounded-lg flex items-center justify-center bg-gradient-to-br from-slate-600 to-slate-700"
              style={{
                boxShadow: '0 1px 2px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05), inset 0 -1px 0 rgba(0,0,0,0.5)'
              }}
            >
              <svg
                className="w-5 h-5 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-slate-400 font-medium select-none">
              Disabled checked
            </span>
          </label>
        </div>
      </div>

      {/* With Description */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
        style={{
          boxShadow: '0 10px 30px rgba(0,0,0,0.4), 0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)'
        }}>
        <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-6">
          With Description
        </h3>

        <label className="flex items-start gap-4 cursor-pointer group">
          <div
            onClick={() => setSingleChecked(!singleChecked)}
            className={`relative w-7 h-7 mt-1 rounded-lg transition-all duration-300 flex items-center justify-center flex-shrink-0 ${
              singleChecked
                ? 'bg-gradient-to-br from-blue-500 to-blue-600'
                : 'bg-gradient-to-br from-slate-700 to-slate-800 group-hover:from-slate-600 group-hover:to-slate-700'
            }`}
            style={{
              boxShadow: singleChecked
                ? '0 1px 2px rgba(59,130,246,0.5), 0 4px 8px rgba(59,130,246,0.3), 0 8px 16px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.3)'
                : '0 2px 4px rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05), inset 0 -1px 0 rgba(0,0,0,0.5)',
              transform: singleChecked ? 'translateY(-2px)' : 'translateY(0)'
            }}
          >
            {singleChecked && (
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
                style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-slate-100 font-semibold select-none">
              Enable 3D Effects
            </span>
            <span className="text-sm text-slate-400 leading-relaxed select-none">
              Activate multi-layered shadows and depth perception for enhanced visual hierarchy. This creates an elevated appearance with realistic lighting effects.
            </span>
          </div>
        </label>
      </div>

      {/* Checkbox Groups */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
        style={{
          boxShadow: '0 10px 30px rgba(0,0,0,0.4), 0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)'
        }}>
        <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-6">
          Grouped Options
        </h3>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Appearance</p>
            <label className="flex items-center gap-4 cursor-pointer group">
              <div
                className="relative w-6 h-6 rounded-lg transition-all duration-300 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600"
                style={{
                  boxShadow: '0 1px 2px rgba(59,130,246,0.5), 0 3px 6px rgba(59,130,246,0.3), 0 6px 12px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.3)',
                  transform: 'translateY(-1px)'
                }}
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-slate-200 font-medium select-none">
                Dark mode
              </span>
            </label>
            <label className="flex items-center gap-4 cursor-pointer group">
              <div
                className="relative w-6 h-6 rounded-lg transition-all duration-300 flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800 group-hover:from-slate-600 group-hover:to-slate-700"
                style={{
                  boxShadow: '0 2px 4px rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05), inset 0 -1px 0 rgba(0,0,0,0.5)'
                }}
              />
              <span className="text-sm text-slate-200 font-medium select-none">
                Animations
              </span>
            </label>
          </div>

          <div className="w-full h-px bg-slate-700/50" />

          <div className="flex flex-col gap-3">
            <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Privacy</p>
            <label className="flex items-center gap-4 cursor-pointer group">
              <div
                className="relative w-6 h-6 rounded-lg transition-all duration-300 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600"
                style={{
                  boxShadow: '0 1px 2px rgba(59,130,246,0.5), 0 3px 6px rgba(59,130,246,0.3), 0 6px 12px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.3)',
                  transform: 'translateY(-1px)'
                }}
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-slate-200 font-medium select-none">
                Analytics
              </span>
            </label>
            <label className="flex items-center gap-4 cursor-pointer group">
              <div
                className="relative w-6 h-6 rounded-lg transition-all duration-300 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600"
                style={{
                  boxShadow: '0 1px 2px rgba(59,130,246,0.5), 0 3px 6px rgba(59,130,246,0.3), 0 6px 12px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.3)',
                  transform: 'translateY(-1px)'
                }}
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-slate-200 font-medium select-none">
                Cookies
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
