export default function SketchInput() {
  return (
    <div className="min-h-screen p-8 flex flex-col gap-8 max-w-md bg-[#fffef5]">
      {/* Basic Sketch Input */}
      <div className="flex flex-col gap-2">
        <label
          className="text-sm text-gray-700"
          style={{ fontFamily: '"Patrick Hand", cursive' }}
        >
          Email Address
        </label>
        <input
          type="email"
          placeholder="your@email.com"
          className="w-full px-4 py-3 text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none"
          style={{
            fontFamily: '"Patrick Hand", cursive',
            fontSize: '18px',
            borderBottom: '3px solid #374151',
            borderRadius: '0',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' stroke='%23374151' stroke-width='3' stroke-dasharray='8%2C 12' stroke-dashoffset='0' stroke-linecap='round'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Doodle Border Input */}
      <div className="flex flex-col gap-2">
        <label
          className="text-sm text-gray-700"
          style={{ fontFamily: '"Patrick Hand", cursive' }}
        >
          Search Notes
        </label>
        <div className="relative">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <rect
              x="2"
              y="2"
              width="calc(100% - 4px)"
              height="calc(100% - 4px)"
              fill="none"
              stroke="#374151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: '10 5 20 5 15 10',
              }}
            />
          </svg>
          <div className="relative flex items-center">
            <span className="absolute left-4 text-xl">🔍</span>
            <input
              type="text"
              placeholder="Find your notes..."
              className="w-full pl-12 pr-4 py-4 text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none"
              style={{
                fontFamily: '"Patrick Hand", cursive',
                fontSize: '18px',
              }}
            />
          </div>
        </div>
      </div>

      {/* Notebook Paper Input */}
      <div className="flex flex-col gap-2">
        <label
          className="text-sm text-gray-700"
          style={{ fontFamily: '"Patrick Hand", cursive' }}
        >
          Quick Note
        </label>
        <div
          className="relative px-4 py-3"
          style={{
            backgroundImage: 'repeating-linear-gradient(transparent, transparent 27px, #e5e7eb 28px)',
            borderLeft: '3px solid #ef4444',
          }}
        >
          <input
            type="text"
            placeholder="Write something..."
            className="w-full text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none"
            style={{
              fontFamily: '"Patrick Hand", cursive',
              fontSize: '18px',
              lineHeight: '28px',
            }}
          />
        </div>
      </div>

      {/* Circled Input - Focused */}
      <div className="flex flex-col gap-2">
        <label
          className="text-sm text-blue-600"
          style={{ fontFamily: '"Patrick Hand", cursive' }}
        >
          Important! (Focused)
        </label>
        <div className="relative">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 50" preserveAspectRatio="none">
            <ellipse
              cx="100"
              cy="25"
              rx="98"
              ry="23"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                strokeDasharray: '15 8',
              }}
            />
          </svg>
          <input
            type="text"
            defaultValue="This is selected!"
            className="w-full px-6 py-3 text-blue-600 bg-blue-50/50 focus:outline-none text-center"
            style={{
              fontFamily: '"Patrick Hand", cursive',
              fontSize: '18px',
            }}
          />
        </div>
      </div>

      {/* Crossed Out Input - Error */}
      <div className="flex flex-col gap-2">
        <label
          className="text-sm text-red-600"
          style={{ fontFamily: '"Patrick Hand", cursive' }}
        >
          Wrong Answer!
        </label>
        <div className="relative">
          <input
            type="text"
            defaultValue="Nope, try again"
            className="w-full px-4 py-3 text-red-500 bg-red-50 focus:outline-none"
            style={{
              fontFamily: '"Patrick Hand", cursive',
              fontSize: '18px',
              border: '2px dashed #ef4444',
            }}
          />
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <line x1="10" y1="50%" x2="calc(100% - 10px)" y2="50%" stroke="#ef4444" strokeWidth="2" />
          </svg>
        </div>
        <p
          className="text-xs text-red-500"
          style={{ fontFamily: '"Patrick Hand", cursive' }}
        >
          * Oops! Check this again
        </p>
      </div>

      {/* Erased Input - Disabled */}
      <div className="flex flex-col gap-2">
        <label
          className="text-sm text-gray-400"
          style={{ fontFamily: '"Patrick Hand", cursive' }}
        >
          Erased
        </label>
        <input
          type="text"
          value="Can't edit this"
          disabled
          className="w-full px-4 py-3 text-gray-400 bg-gray-100 cursor-not-allowed"
          style={{
            fontFamily: '"Patrick Hand", cursive',
            fontSize: '18px',
            border: '2px dotted #d1d5db',
          }}
        />
      </div>

      {/* Sketch Notepad Form */}
      <div
        className="relative p-6 mt-4"
        style={{
          background: '#fffef5',
          boxShadow: '4px 4px 0 #374151',
          border: '2px solid #374151',
        }}
      >
        <div
          className="absolute top-0 left-4 right-4 h-6 flex justify-around"
          style={{
            borderBottom: '2px dashed #374151',
          }}
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full bg-[#fffef5] border-2 border-gray-700 -translate-y-2"
            />
          ))}
        </div>

        <h3
          className="text-xl text-gray-800 mb-5 mt-4 underline decoration-wavy decoration-2"
          style={{ fontFamily: '"Patrick Hand", cursive' }}
        >
          Sign Up Form
        </h3>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">1.</span>
            <input
              type="text"
              placeholder="Your Name"
              className="flex-1 px-2 py-2 text-gray-800 placeholder-gray-400 bg-transparent border-b-2 border-dashed border-gray-400 focus:border-gray-700 focus:outline-none"
              style={{
                fontFamily: '"Patrick Hand", cursive',
                fontSize: '16px',
              }}
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">2.</span>
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-2 py-2 text-gray-800 placeholder-gray-400 bg-transparent border-b-2 border-dashed border-gray-400 focus:border-gray-700 focus:outline-none"
              style={{
                fontFamily: '"Patrick Hand", cursive',
                fontSize: '16px',
              }}
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">3.</span>
            <input
              type="password"
              placeholder="Secret Password"
              className="flex-1 px-2 py-2 text-gray-800 placeholder-gray-400 bg-transparent border-b-2 border-dashed border-gray-400 focus:border-gray-700 focus:outline-none"
              style={{
                fontFamily: '"Patrick Hand", cursive',
                fontSize: '16px',
              }}
            />
          </div>
          <button
            className="mt-2 py-3 text-gray-800 font-medium bg-yellow-200 hover:bg-yellow-300 transition-colors duration-200"
            style={{
              fontFamily: '"Patrick Hand", cursive',
              fontSize: '18px',
              border: '2px solid #374151',
              boxShadow: '3px 3px 0 #374151',
            }}
          >
            Submit!
          </button>
        </div>
      </div>
    </div>
  );
}
