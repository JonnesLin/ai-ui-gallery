export default function SketchButton() {
  return (
    <div className="flex flex-col gap-6 p-8 min-h-screen bg-amber-50">
      <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Sketch Buttons</h2>

      <div className="flex flex-wrap items-center gap-6">
        {/* Hand-drawn style */}
        <button
          className="px-8 py-3 text-sm font-bold text-gray-800 bg-white transition-all duration-200 hover:bg-gray-100 active:translate-y-0.5 focus:outline-none"
          style={{
            fontFamily: 'Comic Sans MS, cursive',
            border: '3px solid #1f2937',
            borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
            boxShadow: '4px 4px 0 #1f2937'
          }}
        >
          Click Me!
        </button>

        {/* Scribble fill */}
        <button
          className="px-8 py-3 text-sm font-bold text-white transition-all duration-200 hover:opacity-90 active:translate-y-0.5 focus:outline-none"
          style={{
            fontFamily: 'Comic Sans MS, cursive',
            backgroundColor: '#3b82f6',
            border: '3px solid #1e40af',
            borderRadius: '15px 225px 15px 255px/255px 15px 225px 15px',
            boxShadow: '3px 3px 0 #1e40af'
          }}
        >
          Submit
        </button>

        {/* Doodle outline */}
        <button
          className="px-8 py-3 text-sm font-bold text-gray-700 bg-transparent transition-all duration-200 hover:bg-gray-100 focus:outline-none"
          style={{
            fontFamily: 'Comic Sans MS, cursive',
            border: '3px dashed #374151',
            borderRadius: '225px 15px 255px 15px/15px 255px 15px 225px'
          }}
        >
          Doodle
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-6">
        {/* Colorful sketch */}
        <button
          className="px-8 py-3 text-sm font-bold text-white transition-all duration-200 hover:opacity-90 focus:outline-none"
          style={{
            fontFamily: 'Comic Sans MS, cursive',
            backgroundColor: '#ef4444',
            border: '3px solid #b91c1c',
            borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
            boxShadow: '4px 4px 0 #b91c1c'
          }}
        >
          Important!
        </button>

        <button
          className="px-8 py-3 text-sm font-bold text-gray-800 transition-all duration-200 hover:opacity-90 focus:outline-none"
          style={{
            fontFamily: 'Comic Sans MS, cursive',
            backgroundColor: '#fbbf24',
            border: '3px solid #d97706',
            borderRadius: '15px 255px 15px 225px/225px 15px 255px 15px',
            boxShadow: '4px 4px 0 #d97706'
          }}
        >
          Notice
        </button>

        <button
          className="px-8 py-3 text-sm font-bold text-white transition-all duration-200 hover:opacity-90 focus:outline-none"
          style={{
            fontFamily: 'Comic Sans MS, cursive',
            backgroundColor: '#22c55e',
            border: '3px solid #15803d',
            borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
            boxShadow: '4px 4px 0 #15803d'
          }}
        >
          Done!
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-6">
        {/* Notebook paper style */}
        <button
          className="px-8 py-3 text-sm font-bold text-blue-800 transition-all duration-200 hover:bg-blue-100 focus:outline-none"
          style={{
            fontFamily: 'Comic Sans MS, cursive',
            backgroundColor: '#fff',
            border: '2px solid #3b82f6',
            borderRadius: '2px',
            backgroundImage: 'repeating-linear-gradient(#fff, #fff 24px, #93c5fd 25px)',
            boxShadow: '3px 3px 0 #1e40af'
          }}
        >
          Take Notes
        </button>

        {/* Crayon style */}
        <button
          className="px-8 py-3 text-sm font-bold text-white transition-all duration-200 hover:opacity-90 focus:outline-none"
          style={{
            fontFamily: 'Comic Sans MS, cursive',
            backgroundColor: '#8b5cf6',
            border: '4px solid #7c3aed',
            borderRadius: '4px',
            boxShadow: 'inset 0 -4px 0 rgba(0,0,0,0.2), 3px 3px 0 #5b21b6'
          }}
        >
          Crayon
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-6">
        {/* Icon buttons */}
        <button
          className="p-4 text-gray-800 bg-white transition-all duration-200 hover:bg-gray-100 focus:outline-none"
          style={{
            border: '3px solid #1f2937',
            borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
            boxShadow: '3px 3px 0 #1f2937'
          }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>

        <button
          className="p-4 text-rose-600 bg-white transition-all duration-200 hover:bg-rose-50 focus:outline-none"
          style={{
            border: '3px solid #e11d48',
            borderRadius: '15px 255px 15px 225px/225px 15px 255px 15px',
            boxShadow: '3px 3px 0 #be123c'
          }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>

        {/* With icon and text */}
        <button
          className="px-6 py-3 text-sm font-bold text-gray-800 bg-white transition-all duration-200 hover:bg-gray-100 focus:outline-none inline-flex items-center gap-2"
          style={{
            fontFamily: 'Comic Sans MS, cursive',
            border: '3px solid #1f2937',
            borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
            boxShadow: '3px 3px 0 #1f2937'
          }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
          Edit
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-6">
        {/* Loading */}
        <button
          className="px-8 py-3 text-sm font-bold text-gray-400 bg-gray-100 cursor-wait inline-flex items-center gap-2"
          style={{
            fontFamily: 'Comic Sans MS, cursive',
            border: '3px solid #9ca3af',
            borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px'
          }}
        >
          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Drawing...
        </button>

        {/* Disabled */}
        <button
          className="px-8 py-3 text-sm font-bold text-gray-400 bg-gray-100 cursor-not-allowed"
          style={{
            fontFamily: 'Comic Sans MS, cursive',
            border: '3px solid #d1d5db',
            borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px'
          }}
          disabled
        >
          Can't Click
        </button>
      </div>

      {/* Large sketch CTA */}
      <button
        className="w-full max-w-md px-8 py-5 text-lg font-bold text-white transition-all duration-200 hover:opacity-90 active:translate-y-0.5 focus:outline-none"
        style={{
          fontFamily: 'Comic Sans MS, cursive',
          backgroundColor: '#3b82f6',
          border: '4px solid #1e40af',
          borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
          boxShadow: '6px 6px 0 #1e40af'
        }}
      >
        Let's Get Started!
      </button>
    </div>
  )
}
