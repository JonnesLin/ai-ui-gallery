import { useState } from 'react'

export default function SketchCheckbox() {
  const [checked, setChecked] = useState({
    idea: true,
    draft: false,
    concept: true,
    sketch: false
  })
  const [selectAll, setSelectAll] = useState<boolean | 'indeterminate'>('indeterminate')

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
      idea: newValue,
      draft: newValue,
      concept: newValue,
      sketch: newValue
    })
    setSelectAll(newValue)
  }

  return (
    <div className="flex flex-col gap-8 p-8 max-w-md bg-white min-h-screen" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
      <h2 className="text-2xl font-bold text-gray-800 relative inline-block">
        Sketch Checkboxes
        <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8">
          <path d="M 0 4 Q 50 2 100 4 T 200 4" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </h2>

      {/* Basic Checkboxes */}
      <div className="flex flex-col gap-5 bg-yellow-50 p-6 relative" style={{ border: '2px solid #333', borderRadius: '4px', transform: 'rotate(-0.5deg)' }}>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(0,0,0,0.03) 19px, rgba(0,0,0,0.03) 20px)'
        }} />

        <h3 className="text-sm font-bold text-gray-700 relative z-10">
          Creative Options
        </h3>

        {Object.entries(checked).map(([key, value]) => (
          <label
            key={key}
            className="flex items-center gap-3 cursor-pointer group relative z-10"
          >
            <div
              onClick={() => handleToggle(key as keyof typeof checked)}
              className={`w-7 h-7 transition-all duration-200 flex items-center justify-center relative ${
                value ? 'bg-gray-800' : 'bg-white group-hover:bg-gray-50'
              }`}
              style={{
                border: '2px solid #333',
                borderRadius: '2px',
                transform: value ? 'rotate(2deg)' : 'rotate(-1deg)'
              }}
            >
              {value && (
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} strokeLinecap="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-sm text-gray-700 font-medium capitalize">
              {key}
            </span>
          </label>
        ))}
      </div>

      {/* Indeterminate State */}
      <div className="flex flex-col gap-5 bg-blue-50 p-6 relative" style={{ border: '2px solid #333', borderRadius: '4px', transform: 'rotate(0.5deg)' }}>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(0,0,0,0.03) 19px, rgba(0,0,0,0.03) 20px)'
        }} />

        <h3 className="text-sm font-bold text-gray-700 relative z-10">
          Select All
        </h3>

        <label className="flex items-center gap-3 cursor-pointer group relative z-10">
          <div
            onClick={handleSelectAll}
            className={`w-7 h-7 transition-all duration-200 flex items-center justify-center relative ${
              selectAll === true || selectAll === 'indeterminate' ? 'bg-gray-800' : 'bg-white group-hover:bg-gray-50'
            }`}
            style={{
              border: '2px solid #333',
              borderRadius: '2px',
              transform: selectAll ? 'rotate(-2deg)' : 'rotate(1deg)'
            }}
          >
            {selectAll === true && (
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} strokeLinecap="round">
                <path d="M5 13l4 4L19 7" />
              </svg>
            )}
            {selectAll === 'indeterminate' && (
              <div className="w-4 h-0.5 bg-white" style={{ transform: 'rotate(-3deg)' }} />
            )}
          </div>
          <span className="text-sm text-gray-700 font-medium">All ideas</span>
        </label>
      </div>

      {/* Disabled States */}
      <div className="flex flex-col gap-5 bg-gray-100 p-6 relative opacity-60" style={{ border: '2px solid #666', borderRadius: '4px', transform: 'rotate(-0.3deg)' }}>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{
          background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px)'
        }} />

        <h3 className="text-sm font-bold text-gray-600 relative z-10">
          Not Available
        </h3>

        <label className="flex items-center gap-3 cursor-not-allowed relative z-10">
          <div className="w-7 h-7 bg-white" style={{ border: '2px solid #666', borderRadius: '2px', transform: 'rotate(1deg)' }} />
          <span className="text-sm text-gray-600 font-medium">Locked option</span>
        </label>

        <label className="flex items-center gap-3 cursor-not-allowed relative z-10">
          <div className="w-7 h-7 bg-gray-400 flex items-center justify-center" style={{ border: '2px solid #666', borderRadius: '2px', transform: 'rotate(-1deg)' }}>
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} strokeLinecap="round">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm text-gray-600 font-medium">Fixed option</span>
        </label>
      </div>

      {/* With Description */}
      <div className="flex flex-col gap-5 bg-green-50 p-6 relative" style={{ border: '2px solid #333', borderRadius: '4px', transform: 'rotate(0.3deg)' }}>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(0,0,0,0.03) 19px, rgba(0,0,0,0.03) 20px)'
        }} />

        <h3 className="text-sm font-bold text-gray-700 relative z-10">
          Detailed Option
        </h3>

        <label className="flex items-start gap-3 cursor-pointer group relative z-10">
          <div className="w-7 h-7 mt-0.5 bg-gray-800 flex items-center justify-center flex-shrink-0" style={{ border: '2px solid #333', borderRadius: '2px', transform: 'rotate(-2deg)' }}>
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} strokeLinecap="round">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-gray-700 font-bold">Creative Mode</span>
            <span className="text-xs text-gray-600 leading-relaxed">
              Enable freehand drawing and experimental features
            </span>
          </div>
        </label>
      </div>

      {/* Different Sizes */}
      <div className="flex flex-col gap-5 bg-purple-50 p-6 relative" style={{ border: '2px solid #333', borderRadius: '4px', transform: 'rotate(-0.4deg)' }}>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(0,0,0,0.03) 19px, rgba(0,0,0,0.03) 20px)'
        }} />

        <h3 className="text-sm font-bold text-gray-700 relative z-10">
          Size Options
        </h3>

        <label className="flex items-center gap-3 cursor-pointer group relative z-10">
          <div className="w-5 h-5 bg-gray-800 flex items-center justify-center" style={{ border: '2px solid #333', borderRadius: '2px', transform: 'rotate(2deg)' }}>
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} strokeLinecap="round">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm text-gray-700 font-medium">Small sketch</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer group relative z-10">
          <div className="w-9 h-9 bg-gray-800 flex items-center justify-center" style={{ border: '2px solid #333', borderRadius: '2px', transform: 'rotate(-1deg)' }}>
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} strokeLinecap="round">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-base text-gray-700 font-medium">Large sketch</span>
        </label>
      </div>
    </div>
  )
}
