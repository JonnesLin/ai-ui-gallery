import { useState } from 'react'

export default function PlayfulCheckbox() {
  const [checked, setChecked] = useState({
    pizza: true,
    burger: false,
    tacos: true,
    sushi: false
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
      pizza: newValue,
      burger: newValue,
      tacos: newValue,
      sushi: newValue
    })
    setSelectAll(newValue)
  }

  return (
    <div className="flex flex-col gap-8 p-8 max-w-md bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 min-h-screen">
      <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 animate-pulse">
        Playful Checkboxes!
      </h2>

      {/* Basic Checkboxes */}
      <div className="flex flex-col gap-4 bg-white p-6 rounded-3xl border-4 border-pink-400 shadow-xl transform rotate-1">
        <h3 className="text-lg font-bold text-pink-500 mb-2">
          Favorite Foods
        </h3>

        {Object.entries(checked).map(([key, value]) => (
          <label
            key={key}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div
              onClick={() => handleToggle(key as keyof typeof checked)}
              className={`w-8 h-8 rounded-full border-4 transition-all duration-300 flex items-center justify-center transform group-hover:scale-110 ${
                value
                  ? 'border-pink-400 bg-gradient-to-br from-pink-400 to-purple-500 shadow-lg'
                  : 'border-pink-300 bg-white group-hover:border-pink-400 group-hover:rotate-12'
              }`}
            >
              {value && (
                <span className="text-2xl">✓</span>
              )}
            </div>
            <span className="text-base text-gray-700 font-semibold capitalize transform group-hover:translate-x-1 transition-transform">
              {key}
            </span>
          </label>
        ))}
      </div>

      {/* Indeterminate State */}
      <div className="flex flex-col gap-4 bg-white p-6 rounded-3xl border-4 border-blue-400 shadow-xl transform -rotate-1">
        <h3 className="text-lg font-bold text-blue-500 mb-2">
          Select Everything!
        </h3>

        <label className="flex items-center gap-3 cursor-pointer group">
          <div
            onClick={handleSelectAll}
            className={`w-8 h-8 rounded-full border-4 transition-all duration-300 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-180 ${
              selectAll === true || selectAll === 'indeterminate'
                ? 'border-blue-400 bg-gradient-to-br from-blue-400 to-cyan-500 shadow-lg'
                : 'border-blue-300 bg-white group-hover:border-blue-400'
            }`}
          >
            {selectAll === true && <span className="text-2xl">✓</span>}
            {selectAll === 'indeterminate' && <span className="text-2xl">-</span>}
          </div>
          <span className="text-base text-gray-700 font-semibold">Pick all foods!</span>
        </label>
      </div>

      {/* Disabled States */}
      <div className="flex flex-col gap-4 bg-gray-200 p-6 rounded-3xl border-4 border-gray-400 shadow-xl">
        <h3 className="text-lg font-bold text-gray-500 mb-2">
          Not Available
        </h3>

        <label className="flex items-center gap-3 cursor-not-allowed opacity-50">
          <div className="w-8 h-8 rounded-full border-4 border-gray-400 bg-white" />
          <span className="text-base text-gray-500 font-semibold">Can't pick this</span>
        </label>

        <label className="flex items-center gap-3 cursor-not-allowed opacity-50">
          <div className="w-8 h-8 rounded-full border-4 border-gray-400 bg-gray-400 flex items-center justify-center">
            <span className="text-2xl text-white">✓</span>
          </div>
          <span className="text-base text-gray-500 font-semibold">Already chosen</span>
        </label>
      </div>

      {/* Different Sizes */}
      <div className="flex flex-col gap-4 bg-white p-6 rounded-3xl border-4 border-purple-400 shadow-xl transform rotate-1">
        <h3 className="text-lg font-bold text-purple-500 mb-2">
          Different Sizes
        </h3>

        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="w-6 h-6 rounded-full border-4 border-purple-300 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center transform group-hover:scale-110 shadow-lg">
            <span className="text-lg">✓</span>
          </div>
          <span className="text-sm text-gray-700 font-semibold">Tiny checkbox</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="w-12 h-12 rounded-full border-4 border-orange-400 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center transform group-hover:scale-110 shadow-lg">
            <span className="text-4xl">✓</span>
          </div>
          <span className="text-xl text-gray-700 font-bold">Huge checkbox!</span>
        </label>
      </div>

      {/* With Description */}
      <div className="flex flex-col gap-4 bg-white p-6 rounded-3xl border-4 border-green-400 shadow-xl transform -rotate-1">
        <h3 className="text-lg font-bold text-green-500 mb-2">
          Special Option
        </h3>

        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="w-8 h-8 mt-0.5 rounded-full border-4 border-green-400 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 shadow-lg">
            <span className="text-2xl">✓</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-base text-gray-700 font-bold">Super Cool Feature!</span>
            <span className="text-sm text-gray-500">
              This checkbox does something really awesome and fun!
            </span>
          </div>
        </label>
      </div>
    </div>
  )
}
