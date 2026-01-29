export default function NatureTextarea() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-green-800">Nature Textarea</h2>
          <p className="text-sm text-green-700">Organic inspired multi-line input</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Basic Textarea */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-green-700">Basic</label>
            <textarea
              className="w-full px-4 py-3 bg-white border-2 border-green-300 rounded-2xl text-green-900 placeholder:text-green-500 focus:outline-none focus:border-green-500 focus:shadow-lg focus:shadow-green-200/50 resize-none"
              rows={4}
              placeholder="Enter your text..."
            />
          </div>

          {/* With Label */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-emerald-700">Message</label>
            <textarea
              className="w-full px-4 py-3 bg-emerald-50 border-2 border-emerald-400 rounded-2xl text-emerald-900 placeholder:text-emerald-500 focus:outline-none focus:border-emerald-600 focus:shadow-lg focus:shadow-emerald-200/50 resize-none"
              rows={4}
              placeholder="Type your message..."
            />
          </div>

          {/* Small Size */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-teal-700">Small</label>
            <textarea
              className="w-full px-3 py-2 text-sm bg-teal-50 border-2 border-teal-300 rounded-xl text-teal-900 placeholder:text-teal-500 focus:outline-none focus:border-teal-500 focus:shadow-md focus:shadow-teal-200/50 resize-none"
              rows={3}
              placeholder="Small textarea..."
            />
          </div>

          {/* Large Size */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-lime-700">Large</label>
            <textarea
              className="w-full px-5 py-4 bg-lime-50 border-2 border-lime-400 rounded-2xl text-lime-900 placeholder:text-lime-500 focus:outline-none focus:border-lime-600 focus:shadow-xl focus:shadow-lime-200/50 resize-none"
              rows={6}
              placeholder="Large textarea..."
            />
          </div>

          {/* With Character Count */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-green-700">With Counter</label>
            <div className="relative">
              <textarea
                className="w-full px-4 py-3 bg-white border-2 border-green-300 rounded-2xl text-green-900 placeholder:text-green-500 focus:outline-none focus:border-green-500 focus:shadow-lg focus:shadow-green-200/50 resize-none"
                rows={4}
                placeholder="Max 200 characters..."
                maxLength={200}
              />
              <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-green-500 text-white rounded-full text-xs font-medium shadow-md">
                0/200
              </div>
            </div>
          </div>

          {/* Error State */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-green-700">Error</label>
            <textarea
              className="w-full px-4 py-3 bg-red-50 border-2 border-red-400 rounded-2xl text-red-900 placeholder:text-red-500 focus:outline-none focus:border-red-600 focus:shadow-lg focus:shadow-red-200/50 resize-none"
              rows={4}
              placeholder="This field has an error..."
            />
            <p className="text-sm text-red-700">This field is required</p>
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
            <label className="text-sm font-medium text-green-700">Comments</label>
            <textarea
              className="w-full px-4 py-3 bg-white border-2 border-green-300 rounded-2xl text-green-900 placeholder:text-green-500 focus:outline-none focus:border-green-500 focus:shadow-lg focus:shadow-green-200/50 resize-none"
              rows={4}
              placeholder="Add your comments..."
            />
            <p className="text-sm text-green-600">Share your thoughts naturally</p>
          </div>
        </div>
      </div>
    </div>
  );
}
