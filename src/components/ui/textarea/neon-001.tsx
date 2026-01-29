export default function NeonTextarea() {
  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">
            Neon Textarea
          </h2>
          <p className="text-sm text-cyan-400">Glowing neon multi-line input</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Basic Textarea */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-pink-500">Basic</label>
            <textarea
              className="w-full px-4 py-3 bg-gray-900 border-2 border-pink-500 rounded-lg text-pink-300 placeholder:text-pink-700 focus:outline-none focus:border-pink-400 focus:shadow-[0_0_20px_rgba(236,72,153,0.6)] resize-none"
              rows={4}
              placeholder="Enter your text..."
            />
          </div>

          {/* With Label */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-cyan-500">Message</label>
            <textarea
              className="w-full px-4 py-3 bg-gray-900 border-2 border-cyan-500 rounded-lg text-cyan-300 placeholder:text-cyan-700 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(6,182,212,0.6)] resize-none"
              rows={4}
              placeholder="Type your message..."
            />
          </div>

          {/* Small Size */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-purple-500">Small</label>
            <textarea
              className="w-full px-3 py-2 text-sm bg-gray-900 border-2 border-purple-500 rounded-md text-purple-300 placeholder:text-purple-700 focus:outline-none focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.6)] resize-none"
              rows={3}
              placeholder="Small textarea..."
            />
          </div>

          {/* Large Size */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-green-500">Large</label>
            <textarea
              className="w-full px-5 py-4 bg-gray-900 border-2 border-green-500 rounded-lg text-green-300 placeholder:text-green-700 focus:outline-none focus:border-green-400 focus:shadow-[0_0_25px_rgba(34,197,94,0.6)] resize-none"
              rows={6}
              placeholder="Large textarea..."
            />
          </div>

          {/* With Character Count */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-yellow-500">With Counter</label>
            <div className="relative">
              <textarea
                className="w-full px-4 py-3 bg-gray-900 border-2 border-yellow-500 rounded-lg text-yellow-300 placeholder:text-yellow-700 focus:outline-none focus:border-yellow-400 focus:shadow-[0_0_20px_rgba(234,179,8,0.6)] resize-none"
                rows={4}
                placeholder="Max 200 characters..."
                maxLength={200}
              />
              <div className="absolute bottom-3 right-3 px-3 py-1 bg-yellow-500 text-gray-900 rounded-md text-xs font-bold shadow-[0_0_15px_rgba(234,179,8,0.8)]">
                0/200
              </div>
            </div>
          </div>

          {/* Error State */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-red-500">Error</label>
            <textarea
              className="w-full px-4 py-3 bg-gray-900 border-2 border-red-500 rounded-lg text-red-300 placeholder:text-red-700 focus:outline-none focus:border-red-400 focus:shadow-[0_0_20px_rgba(239,68,68,0.6)] resize-none animate-pulse"
              rows={4}
              placeholder="This field has an error..."
            />
            <p className="text-sm text-red-500 drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]">This field is required</p>
          </div>

          {/* Disabled State */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-600">Disabled</label>
            <textarea
              className="w-full px-4 py-3 bg-gray-950 border-2 border-gray-700 rounded-lg text-gray-600 placeholder:text-gray-700 cursor-not-allowed resize-none"
              rows={4}
              placeholder="Disabled textarea..."
              disabled
            />
          </div>

          {/* With Helper Text */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-blue-500">Comments</label>
            <textarea
              className="w-full px-4 py-3 bg-gray-900 border-2 border-blue-500 rounded-lg text-blue-300 placeholder:text-blue-700 focus:outline-none focus:border-blue-400 focus:shadow-[0_0_20px_rgba(59,130,246,0.6)] resize-none"
              rows={4}
              placeholder="Add your comments..."
            />
            <p className="text-sm text-blue-400 drop-shadow-[0_0_5px_rgba(59,130,246,0.6)]">Please be respectful</p>
          </div>
        </div>
      </div>
    </div>
  );
}
