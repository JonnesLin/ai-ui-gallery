export default function CorporateDivider() {
  return (
    <div className="w-full min-h-screen bg-white p-8 space-y-12">
      {/* Horizontal Dividers */}
      <section className="space-y-8">
        <h2 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wide">Horizontal</h2>

        {/* Professional Thin */}
        <div className="w-full h-px bg-gray-300"></div>

        {/* Professional Medium */}
        <div className="w-full h-0.5 bg-gray-400"></div>

        {/* Blue Accent */}
        <div className="w-full h-1 bg-blue-600"></div>

        {/* Double Line Professional */}
        <div className="space-y-1">
          <div className="w-full h-px bg-gray-300"></div>
          <div className="w-full h-0.5 bg-blue-600"></div>
        </div>

        {/* Gradient Professional */}
        <div className="w-full h-1 bg-gradient-to-r from-blue-600 to-blue-800"></div>
      </section>

      {/* With Text */}
      <section className="space-y-8">
        <h2 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wide">With Text</h2>

        {/* Center Text - Clean */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-xs text-gray-600 uppercase tracking-widest font-semibold">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Section Header */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-0.5 bg-gray-300"></div>
          <div className="px-8 py-2 bg-blue-600">
            <span className="text-sm text-white font-semibold uppercase tracking-wider">Section Title</span>
          </div>
          <div className="flex-1 h-0.5 bg-gray-300"></div>
        </div>

        {/* Professional Badge */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-blue-600"></div>
          <div className="px-6 py-2 bg-white border-2 border-blue-600">
            <span className="text-sm text-blue-600 font-semibold uppercase tracking-wide">Featured</span>
          </div>
          <div className="flex-1 h-px bg-blue-600"></div>
        </div>
      </section>

      {/* With Icon */}
      <section className="space-y-8">
        <h2 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wide">With Icon</h2>

        {/* Simple Icon */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="p-2 bg-blue-600">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Outlined Icon */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-blue-600"></div>
          <div className="p-3 bg-white border-2 border-blue-600">
            <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex-1 h-px bg-blue-600"></div>
        </div>

        {/* Circle Icon */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
      </section>

      {/* Vertical Dividers */}
      <section>
        <h2 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wide">Vertical</h2>
        <div className="flex items-center justify-center gap-12 h-32 bg-gray-50 border border-gray-200 p-6">
          <div className="text-sm text-gray-700 font-medium">Department A</div>
          <div className="w-px h-full bg-gray-300"></div>
          <div className="text-sm text-gray-700 font-medium">Department B</div>
          <div className="w-0.5 h-full bg-blue-600"></div>
          <div className="text-sm text-gray-700 font-medium">Department C</div>
        </div>
      </section>

      {/* Professional Variants */}
      <section className="space-y-8">
        <h2 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wide">Professional Variants</h2>

        {/* Executive Style */}
        <div className="w-full">
          <div className="h-1 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900"></div>
          <div className="h-px bg-gray-200 mt-1"></div>
        </div>

        {/* Minimal with Accent */}
        <div className="flex items-center gap-0">
          <div className="w-16 h-0.5 bg-blue-600"></div>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Border Style */}
        <div className="w-full border-t-2 border-b border-gray-300 h-2"></div>
      </section>
    </div>
  );
}