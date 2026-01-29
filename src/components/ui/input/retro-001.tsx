export default function RetroInput() {
  return (
    <div
      className="min-h-screen p-8 flex flex-col gap-8 max-w-md"
      style={{
        background: 'linear-gradient(180deg, #1a0a2e 0%, #16213e 50%, #0f3460 100%)',
      }}
    >
      {/* Retro Neon Input */}
      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-bold tracking-wider"
          style={{
            fontFamily: '"Press Start 2P", monospace',
            color: '#ff6b6b',
            textShadow: '0 0 10px #ff6b6b',
          }}
        >
          EMAIL
        </label>
        <input
          type="email"
          placeholder="enter@email.com"
          className="w-full px-4 py-4 text-cyan-300 placeholder-cyan-700 bg-transparent border-2 border-cyan-400 focus:outline-none"
          style={{
            fontFamily: '"VT323", monospace',
            fontSize: '18px',
            boxShadow: '0 0 10px #06b6d4, inset 0 0 10px rgba(6, 182, 212, 0.1)',
          }}
        />
      </div>

      {/* Pixel Border Input */}
      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-bold tracking-wider text-yellow-400"
          style={{
            fontFamily: '"Press Start 2P", monospace',
            textShadow: '2px 2px 0 #000',
          }}
        >
          PLAYER NAME
        </label>
        <div
          className="relative p-1"
          style={{
            background: '#facc15',
            boxShadow: '4px 4px 0 #000',
          }}
        >
          <input
            type="text"
            placeholder="ENTER NAME..."
            className="w-full px-4 py-3 text-black placeholder-gray-600 bg-[#2d1b4e] border-none focus:outline-none"
            style={{
              fontFamily: '"VT323", monospace',
              fontSize: '20px',
            }}
          />
        </div>
      </div>

      {/* 80s Synthwave Input */}
      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-bold tracking-wider"
          style={{
            background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: '"Press Start 2P", monospace',
          }}
        >
          SEARCH
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="FIND..."
            className="w-full px-4 py-4 text-white placeholder-purple-400 bg-transparent focus:outline-none"
            style={{
              fontFamily: '"VT323", monospace',
              fontSize: '20px',
              borderBottom: '3px solid',
              borderImage: 'linear-gradient(90deg, #ff00ff, #00ffff) 1',
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-1 opacity-50 blur-sm"
            style={{
              background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
            }}
          />
        </div>
      </div>

      {/* VHS Glitch Input */}
      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-bold tracking-wider text-white relative"
          style={{
            fontFamily: '"Press Start 2P", monospace',
          }}
        >
          <span className="relative">
            PASSWORD
            <span
              className="absolute top-0 left-0 text-red-500 opacity-70"
              style={{ transform: 'translateX(2px)' }}
            >
              PASSWORD
            </span>
            <span
              className="absolute top-0 left-0 text-cyan-500 opacity-70"
              style={{ transform: 'translateX(-2px)' }}
            >
              PASSWORD
            </span>
          </span>
        </label>
        <input
          type="password"
          defaultValue="retro123"
          className="w-full px-4 py-4 text-green-400 bg-black/50 border-2 border-green-400 focus:outline-none"
          style={{
            fontFamily: '"VT323", monospace',
            fontSize: '20px',
            textShadow: '0 0 5px #22c55e',
            boxShadow: '0 0 10px rgba(34, 197, 94, 0.3)',
          }}
        />
      </div>

      {/* Error State - Arcade Style */}
      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-bold tracking-wider text-red-500"
          style={{
            fontFamily: '"Press Start 2P", monospace',
            textShadow: '0 0 10px #ef4444',
            animation: 'blink 0.5s infinite',
          }}
        >
          <style>{`
            @keyframes blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }
          `}</style>
          ERROR!
        </label>
        <input
          type="text"
          defaultValue="INVALID"
          className="w-full px-4 py-4 text-red-400 bg-red-900/30 border-2 border-red-500 focus:outline-none"
          style={{
            fontFamily: '"VT323", monospace',
            fontSize: '20px',
            boxShadow: '0 0 15px rgba(239, 68, 68, 0.5)',
          }}
        />
        <p
          className="text-xs text-red-400"
          style={{
            fontFamily: '"Press Start 2P", monospace',
            textShadow: '0 0 5px #ef4444',
          }}
        >
          GAME OVER
        </p>
      </div>

      {/* Retro Terminal */}
      <div
        className="p-4 mt-4"
        style={{
          background: '#000',
          border: '4px solid #22c55e',
          boxShadow: '0 0 20px rgba(34, 197, 94, 0.3), inset 0 0 50px rgba(34, 197, 94, 0.1)',
        }}
      >
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-green-800">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span
            className="ml-2 text-green-400 text-xs"
            style={{ fontFamily: '"VT323", monospace' }}
          >
            TERMINAL v1.0
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span
              className="text-green-400"
              style={{ fontFamily: '"VT323", monospace', fontSize: '18px' }}
            >
              {'>'} USER:
            </span>
            <input
              type="text"
              placeholder="_"
              className="flex-1 px-2 py-1 text-green-400 placeholder-green-700 bg-transparent border-none focus:outline-none"
              style={{
                fontFamily: '"VT323", monospace',
                fontSize: '18px',
                caretColor: '#22c55e',
              }}
            />
          </div>
          <div className="flex items-center gap-2">
            <span
              className="text-green-400"
              style={{ fontFamily: '"VT323", monospace', fontSize: '18px' }}
            >
              {'>'} PASS:
            </span>
            <input
              type="password"
              placeholder="_"
              className="flex-1 px-2 py-1 text-green-400 placeholder-green-700 bg-transparent border-none focus:outline-none"
              style={{
                fontFamily: '"VT323", monospace',
                fontSize: '18px',
                caretColor: '#22c55e',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
