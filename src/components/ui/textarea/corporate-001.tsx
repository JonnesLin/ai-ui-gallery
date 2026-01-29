export default function CorporateTextarea() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">Corporate Textarea</h2>
          <p className="text-sm text-slate-600">Professional multi-line input</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Basic Textarea */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-slate-700">Basic</label>
            <textarea
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none"
              rows={4}
              placeholder="Enter your text..."
            />
          </div>

          {/* With Label */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-slate-700">Message</label>
            <textarea
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none"
              rows={4}
              placeholder="Type your message..."
            />
          </div>

          {/* Small Size */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-slate-700">Small</label>
            <textarea
              className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none"
              rows={3}
              placeholder="Small textarea..."
            />
          </div>

          {/* Large Size */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-slate-700">Large</label>
            <textarea
              className="w-full px-5 py-4 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none"
              rows={6}
              placeholder="Large textarea..."
            />
          </div>

          {/* With Character Count */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-slate-700">With Counter</label>
            <div className="relative">
              <textarea
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none"
                rows={4}
                placeholder="Max 200 characters..."
                maxLength={200}
              />
              <div className="absolute bottom-3 right-3 text-xs text-slate-500 font-medium">
                0/200
              </div>
            </div>
          </div>

          {/* Error State */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-slate-700">Error</label>
            <textarea
              className="w-full px-4 py-3 bg-white border border-red-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 resize-none"
              rows={4}
              placeholder="This field has an error..."
            />
            <p className="text-sm text-red-600">This field is required</p>
          </div>

          {/* Disabled State */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-slate-400">Disabled</label>
            <textarea
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-400 placeholder:text-slate-300 cursor-not-allowed resize-none"
              rows={4}
              placeholder="Disabled textarea..."
              disabled
            />
          </div>

          {/* With Helper Text */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-slate-700">Comments</label>
            <textarea
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none"
              rows={4}
              placeholder="Add your comments..."
            />
            <p className="text-sm text-slate-500">Please be respectful and constructive</p>
          </div>
        </div>
      </div>
    </div>
  );
}
