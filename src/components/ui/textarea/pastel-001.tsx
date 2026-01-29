export default function PastelTextarea() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-purple-600">Pastel Textarea</h2>
          <p className="text-sm text-purple-500">Soft and gentle multi-line input</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Basic Textarea */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-purple-600">Basic</label>
            <textarea
              className="w-full px-4 py-3 bg-purple-50 border-2 border-purple-200 rounded-2xl text-purple-800 placeholder:text-purple-400 focus:outline-none focus:border-purple-300 focus:bg-white resize-none"
              rows={4}
              placeholder="Enter your text..."
            />
          </div>

          {/* With Label */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-pink-600">Message</label>
            <textarea
              className="w-full px-4 py-3 bg-pink-50 border-2 border-pink-200 rounded-2xl text-pink-800 placeholder:text-pink-400 focus:outline-none focus:border-pink-300 focus:bg-white resize-none"
              rows={4}
              placeholder="Type your message..."
            />
          </div>

          {/* Small Size */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-blue-600">Small</label>
            <textarea
              className="w-full px-3 py-2 text-sm bg-blue-50 border-2 border-blue-200 rounded-xl text-blue-800 placeholder:text-blue-400 focus:outline-none focus:border-blue-300 focus:bg-white resize-none"
              rows={3}
              placeholder="Small textarea..."
            />
          </div>

          {/* Large Size */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-green-600">Large</label>
            <textarea
              className="w-full px-5 py-4 bg-green-50 border-2 border-green-200 rounded-2xl text-green-800 placeholder:text-green-400 focus:outline-none focus:border-green-300 focus:bg-white resize-none"
              rows={6}
              placeholder="Large textarea..."
            />
          </div>

          {/* With Character Count */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-indigo-600">With Counter</label>
            <div className="relative">
              <textarea
                className="w-full px-4 py-3 bg-indigo-50 border-2 border-indigo-200 rounded-2xl text-indigo-800 placeholder:text-indigo-400 focus:outline-none focus:border-indigo-300 focus:bg-white resize-none"
                rows={4}
                placeholder="Max 200 characters..."
                maxLength={200}
              />
              <div className="absolute bottom-3 right-3 px-3 py-1 bg-indigo-200 text-indigo-700 rounded-full text-xs font-medium">
                0/200
              </div>
            </div>
          </div>

          {/* Error State */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-red-600">Error</label>
            <textarea
              className="w-full px-4 py-3 bg-red-50 border-2 border-red-300 rounded-2xl text-red-800 placeholder:text-red-400 focus:outline-none focus:border-red-400 focus:bg-white resize-none"
              rows={4}
              placeholder="This field has an error..."
            />
            <p className="text-sm text-red-500">This field is required</p>
          </div>

          {/* Disabled State */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-400">Disabled</label>
            <textarea
              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-400 placeholder:text-gray-300 cursor-not-allowed resize-none"
              rows={4}
              placeholder="Disabled textarea..."
              disabled
            />
          </div>

          {/* With Helper Text */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-teal-600">Comments</label>
            <textarea
              className="w-full px-4 py-3 bg-teal-50 border-2 border-teal-200 rounded-2xl text-teal-800 placeholder:text-teal-400 focus:outline-none focus:border-teal-300 focus:bg-white resize-none"
              rows={4}
              placeholder="Add your comments..."
            />
            <p className="text-sm text-teal-500">Please be respectful and constructive</p>
          </div>
        </div>
      </div>
    </div>
  );
}
