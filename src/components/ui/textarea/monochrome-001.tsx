export default function MonochromeTextarea() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-black">Monochrome Textarea</h2>
          <p className="text-sm text-gray-700">Black and white multi-line input</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Basic Textarea */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-black">Basic</label>
            <textarea
              className="w-full px-4 py-3 bg-white border-2 border-black rounded-md text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 resize-none"
              rows={4}
              placeholder="Enter your text..."
            />
          </div>

          {/* With Label */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-black">Message</label>
            <textarea
              className="w-full px-4 py-3 bg-white border-2 border-gray-800 rounded-md text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 resize-none"
              rows={4}
              placeholder="Type your message..."
            />
          </div>

          {/* Small Size */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-black">Small</label>
            <textarea
              className="w-full px-3 py-2 text-sm bg-white border-2 border-gray-600 rounded text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 resize-none"
              rows={3}
              placeholder="Small textarea..."
            />
          </div>

          {/* Large Size */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-black">Large</label>
            <textarea
              className="w-full px-5 py-4 bg-white border-2 border-black rounded-md text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 resize-none"
              rows={6}
              placeholder="Large textarea..."
            />
          </div>

          {/* With Character Count */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-black">With Counter</label>
            <div className="relative">
              <textarea
                className="w-full px-4 py-3 bg-white border-2 border-black rounded-md text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 resize-none"
                rows={4}
                placeholder="Max 200 characters..."
                maxLength={200}
              />
              <div className="absolute bottom-3 right-3 px-2 py-1 bg-black text-white text-xs font-bold">
                0/200
              </div>
            </div>
          </div>

          {/* Error State */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-black">Error</label>
            <textarea
              className="w-full px-4 py-3 bg-white border-2 border-black rounded-md text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 resize-none"
              rows={4}
              placeholder="This field has an error..."
            />
            <p className="text-sm text-black font-semibold">This field is required</p>
          </div>

          {/* Disabled State */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-400">Disabled</label>
            <textarea
              className="w-full px-4 py-3 bg-gray-200 border-2 border-gray-400 rounded-md text-gray-500 placeholder:text-gray-400 cursor-not-allowed resize-none"
              rows={4}
              placeholder="Disabled textarea..."
              disabled
            />
          </div>

          {/* With Helper Text */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-black">Comments</label>
            <textarea
              className="w-full px-4 py-3 bg-white border-2 border-gray-700 rounded-md text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 resize-none"
              rows={4}
              placeholder="Add your comments..."
            />
            <p className="text-sm text-gray-700 font-medium">Please be respectful and constructive</p>
          </div>
        </div>
      </div>
    </div>
  );
}
