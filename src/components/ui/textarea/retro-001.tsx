export default function RetroTextarea() {
  return (
    <div className="min-h-screen bg-amber-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-amber-900" style={{ fontFamily: 'Georgia, serif' }}>
            Retro Textarea
          </h2>
          <p className="text-sm text-amber-700">Vintage inspired multi-line input</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Basic Textarea */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-amber-900">Basic</label>
            <textarea
              className="w-full px-4 py-3 bg-amber-100 border-2 border-amber-900 rounded-sm shadow-[4px_4px_0px_0px_rgba(120,53,15,1)] text-amber-900 placeholder:text-amber-600 focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(120,53,15,1)] resize-none"
              style={{ fontFamily: 'Georgia, serif' }}
              rows={4}
              placeholder="Enter your text..."
            />
          </div>

          {/* With Label */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-amber-900">Message</label>
            <textarea
              className="w-full px-4 py-3 bg-orange-100 border-2 border-orange-900 rounded-sm shadow-[4px_4px_0px_0px_rgba(124,45,18,1)] text-orange-900 placeholder:text-orange-600 focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(124,45,18,1)] resize-none"
              style={{ fontFamily: 'Georgia, serif' }}
              rows={4}
              placeholder="Type your message..."
            />
          </div>

          {/* Small Size */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-amber-900">Small</label>
            <textarea
              className="w-full px-3 py-2 text-sm bg-yellow-100 border-2 border-yellow-900 rounded-sm shadow-[3px_3px_0px_0px_rgba(113,63,18,1)] text-yellow-900 placeholder:text-yellow-600 focus:outline-none focus:shadow-[5px_5px_0px_0px_rgba(113,63,18,1)] resize-none"
              style={{ fontFamily: 'Georgia, serif' }}
              rows={3}
              placeholder="Small textarea..."
            />
          </div>

          {/* Large Size */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-amber-900">Large</label>
            <textarea
              className="w-full px-5 py-4 bg-amber-100 border-2 border-amber-900 rounded-sm shadow-[5px_5px_0px_0px_rgba(120,53,15,1)] text-amber-900 placeholder:text-amber-600 focus:outline-none focus:shadow-[7px_7px_0px_0px_rgba(120,53,15,1)] resize-none"
              style={{ fontFamily: 'Georgia, serif' }}
              rows={6}
              placeholder="Large textarea..."
            />
          </div>

          {/* With Character Count */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-amber-900">With Counter</label>
            <div className="relative">
              <textarea
                className="w-full px-4 py-3 bg-amber-100 border-2 border-amber-900 rounded-sm shadow-[4px_4px_0px_0px_rgba(120,53,15,1)] text-amber-900 placeholder:text-amber-600 focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(120,53,15,1)] resize-none"
                style={{ fontFamily: 'Georgia, serif' }}
                rows={4}
                placeholder="Max 200 characters..."
                maxLength={200}
              />
              <div className="absolute bottom-3 right-3 px-2 py-1 bg-amber-900 text-amber-100 font-semibold text-xs rounded-sm">
                0/200
              </div>
            </div>
          </div>

          {/* Error State */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-amber-900">Error</label>
            <textarea
              className="w-full px-4 py-3 bg-red-100 border-2 border-red-900 rounded-sm shadow-[4px_4px_0px_0px_rgba(127,29,29,1)] text-red-900 placeholder:text-red-600 focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(127,29,29,1)] resize-none"
              style={{ fontFamily: 'Georgia, serif' }}
              rows={4}
              placeholder="This field has an error..."
            />
            <p className="text-sm text-red-900 font-semibold">This field is required</p>
          </div>

          {/* Disabled State */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-amber-600">Disabled</label>
            <textarea
              className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-300 rounded-sm shadow-[4px_4px_0px_0px_rgba(217,119,6,0.3)] text-amber-400 placeholder:text-amber-400 cursor-not-allowed resize-none"
              style={{ fontFamily: 'Georgia, serif' }}
              rows={4}
              placeholder="Disabled textarea..."
              disabled
            />
          </div>

          {/* With Helper Text */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-amber-900">Comments</label>
            <textarea
              className="w-full px-4 py-3 bg-teal-100 border-2 border-teal-900 rounded-sm shadow-[4px_4px_0px_0px_rgba(19,78,74,1)] text-teal-900 placeholder:text-teal-600 focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(19,78,74,1)] resize-none"
              style={{ fontFamily: 'Georgia, serif' }}
              rows={4}
              placeholder="Add your comments..."
            />
            <p className="text-sm text-amber-700">Please be respectful and constructive</p>
          </div>
        </div>
      </div>
    </div>
  );
}
