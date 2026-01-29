import { useState } from 'react'

export default function MonochromeModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 text-sm font-medium text-neutral-900 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50 hover:border-neutral-400 transition-all"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-neutral-900/40"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-200" />

            <div className="p-8">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-full transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-neutral-900 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-neutral-900">
                    Notification Settings
                  </h2>
                  <p className="text-sm text-neutral-500">
                    Manage your preferences
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  { label: 'Email notifications', desc: 'Receive updates via email', checked: true },
                  { label: 'Push notifications', desc: 'Browser push alerts', checked: false },
                  { label: 'SMS notifications', desc: 'Text message alerts', checked: true }
                ].map((item, index) => (
                  <label key={index} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg cursor-pointer hover:bg-neutral-100 transition-colors group">
                    <div>
                      <p className="text-sm font-medium text-neutral-900 group-hover:text-neutral-800">
                        {item.label}
                      </p>
                      <p className="text-xs text-neutral-500">{item.desc}</p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        defaultChecked={item.checked}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-neutral-300 rounded-full peer-checked:bg-neutral-900 transition-colors" />
                      <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm peer-checked:translate-x-5 transition-transform" />
                    </div>
                  </label>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3 text-sm font-medium text-neutral-700 bg-neutral-100 rounded-lg hover:bg-neutral-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3 text-sm font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
