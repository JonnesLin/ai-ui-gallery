export default function PlayfulTextarea() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-purple-600">Playful Textarea</h2>
          <p className="text-sm text-pink-600">Fun and friendly multi-line input</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Basic Textarea */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-purple-600">Basic</label>
            <textarea
              className="w-full px-4 py-3 bg-white border-4 border-purple-300 rounded-3xl text-purple-900 placeholder:text-purple-400 focus:outline-none focus:border-purple-500 focus:rotate-1 transition-transform resize-none"
              rows={4}
              placeholder="Enter your text..."
            />
          </div>

          {/* With Label */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-pink-600">Message</label>
            <textarea
              className="w-full px-4 py-3 bg-pink-50 border-4 border-pink-300 rounded-3xl text-pink-900 placeholder:text-pink-400 focus:outline-none focus:border-pink-500 focus:-rotate-1 transition-transform resize-none"
              rows={4}
              placeholder="Type your message..."
            />
          </div>

          {/* Small Size */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-blue-600">Small</label>
            <textarea
              className="w-full px-3 py-2 text-sm bg-blue-50 border-3 border-blue-300 rounded-2xl text-blue-900 placeholder:text-blue-400 focus:outline-none focus:border-blue-500 focus:scale-105 transition-transform resize-none"
              rows={3}
              placeholder="Small textarea..."
            />
          </div>

          {/* Large Size */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-green-600">Large</label>
            <textarea
              className="w-full px-5 py-4 bg-green-50 border-4 border-green-300 rounded-3xl text-green-900 placeholder:text-green-400 focus:outline-none focus:border-green-500 focus:rotate-1 transition-transform resize-none"
              rows={6}
              placeholder="Large textarea..."
            />
          </div>

          {/* With Character Count */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-orange-600">With Counter</label>
            <div className="relative">
              <textarea
                className="w-full px-4 py-3 bg-orange-50 border-4 border-orange-300 rounded-3xl text-orange-900 placeholder:text-orange-400 focus:outline-none focus:border-orange-500 transition-all resize-none"
                rows={4}
                placeholder="Max 200 characters..."
                maxLength={200}
              />
              <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-orange-500 text-white rounded-full text-xs font-bold shadow-lg">
                0/200
              </div>
            </div>
          </div>

          {/* Error State */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-red-600">Error</label>
            <textarea
              className="w-full px-4 py-3 bg-red-50 border-4 border-red-400 rounded-3xl text-red-900 placeholder:text-red-400 focus:outline-none focus:border-red-600 focus:animate-pulse resize-none"
              rows={4}
              placeholder="This field has an error..."
            />
            <p className="text-sm text-red-600 font-bold">Oops! This field is required</p>
          </div>

          {/* Disabled State */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-400">Disabled</label>
            <textarea
              className="w-full px-4 py-3 bg-gray-100 border-4 border-gray-300 rounded-3xl text-gray-400 placeholder:text-gray-300 cursor-not-allowed opacity-60 resize-none"
              rows={4}
              placeholder="Disabled textarea..."
              disabled
            />
          </div>

          {/* With Helper Text */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-teal-600">Comments</label>
            <textarea
              className="w-full px-4 py-3 bg-teal-50 border-4 border-teal-300 rounded-3xl text-teal-900 placeholder:text-teal-400 focus:outline-none focus:border-teal-500 focus:-rotate-1 transition-transform resize-none"
              rows={4}
              placeholder="Add your comments..."
            />
            <p className="text-sm text-teal-600 font-medium">Please be kind and have fun!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
