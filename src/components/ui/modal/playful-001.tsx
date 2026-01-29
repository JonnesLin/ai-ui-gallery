import { useState } from 'react'

export default function PlayfulModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 flex items-center justify-center p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 text-sm font-bold text-purple-600 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative bg-white rounded-[2rem] shadow-2xl max-w-md w-full overflow-hidden transform hover:scale-[1.02] transition-transform">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-300 rounded-full opacity-60" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-300 rounded-full opacity-60" />
            </div>

            <div className="relative p-8">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-purple-400 hover:text-purple-600 hover:bg-purple-100 rounded-full transition-all hover:rotate-90"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center transform rotate-3 shadow-lg">
                    <span className="text-5xl transform -rotate-3">🎮</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-white text-lg shadow-md animate-bounce">
                    ✓
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-extrabold text-center text-gray-800 mb-2">
                Level Up! 🚀
              </h2>
              <p className="text-center text-gray-500 mb-6">
                You've reached Level 10! Unlock new powers and special rewards.
              </p>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-purple-600">Progress</span>
                  <span className="text-sm font-bold text-pink-500">2,450 / 3,000 XP</span>
                </div>
                <div className="h-4 bg-white rounded-full overflow-hidden shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full transition-all duration-500"
                    style={{ width: '82%' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { emoji: '💎', value: '+100', label: 'Gems' },
                  { emoji: '⭐', value: '+50', label: 'Stars' },
                  { emoji: '🏆', value: '+1', label: 'Trophy' }
                ].map((reward, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-3 text-center hover:bg-gray-100 transition-colors">
                    <span className="text-2xl block mb-1">{reward.emoji}</span>
                    <span className="text-sm font-bold text-gray-800 block">{reward.value}</span>
                    <span className="text-xs text-gray-500">{reward.label}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                Claim Rewards! 🎁
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
