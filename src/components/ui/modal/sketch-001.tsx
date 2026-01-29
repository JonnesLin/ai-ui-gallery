import { useState } from 'react'

export default function SketchModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-8" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23d97706\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 text-sm font-medium text-amber-800 bg-white border-2 border-amber-800 rounded-md hover:bg-amber-100 transition-colors"
        style={{
          borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
          boxShadow: '2px 3px 0 rgba(0,0,0,0.1)'
        }}
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-amber-900/20"
            onClick={() => setIsOpen(false)}
          />

          <div
            className="relative bg-white max-w-md w-full p-8 border-3 border-amber-800"
            style={{
              borderWidth: '3px',
              borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
              boxShadow: '4px 6px 0 rgba(0,0,0,0.15)'
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-amber-800 hover:bg-amber-100 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex justify-center mb-6">
              <div
                className="w-20 h-20 bg-amber-100 flex items-center justify-center border-2 border-amber-800"
                style={{
                  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
                }}
              >
                <svg className="w-10 h-10 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
            </div>

            <h2
              className="text-2xl font-bold text-center text-amber-900 mb-2"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Quick Note
            </h2>
            <p className="text-center text-amber-700 text-sm mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Jot down your thoughts before they slip away!
            </p>

            <div
              className="bg-amber-50 p-4 mb-6 border-2 border-amber-300"
              style={{
                borderRadius: '15px 255px 15px 255px/255px 15px 255px 15px',
                backgroundImage: 'repeating-linear-gradient(transparent, transparent 27px, #fbbf24 27px, #fbbf24 28px)'
              }}
            >
              <textarea
                className="w-full bg-transparent resize-none focus:outline-none text-amber-800 leading-7"
                rows={4}
                placeholder="Write something here..."
                style={{ fontFamily: 'Georgia, serif' }}
              />
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 text-sm font-medium text-amber-700 bg-white border-2 border-amber-400 hover:bg-amber-50 transition-colors"
                style={{
                  borderRadius: '15px 225px 15px 225px/225px 15px 225px 15px'
                }}
              >
                Discard
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 text-sm font-medium text-white bg-amber-600 border-2 border-amber-700 hover:bg-amber-700 transition-colors"
                style={{
                  borderRadius: '225px 15px 225px 15px/15px 225px 15px 225px',
                  boxShadow: '2px 3px 0 rgba(0,0,0,0.2)'
                }}
              >
                Save Note
              </button>
            </div>

            <svg className="absolute -bottom-4 -right-4 w-12 h-12 text-amber-400 opacity-50" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}
