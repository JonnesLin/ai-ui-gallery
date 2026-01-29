export default function MaterialDivider() {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-8 space-y-12">
      {/* Horizontal Dividers */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-gray-900 mb-6 uppercase tracking-wide">Horizontal</h2>

        {/* Standard Material Divider */}
        <div className="w-full h-px bg-gray-300"></div>

        {/* Inset Divider */}
        <div className="w-full pl-16">
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        {/* Middle Inset */}
        <div className="flex">
          <div className="w-16"></div>
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="w-16"></div>
        </div>

        {/* Thick Divider */}
        <div className="w-full h-0.5 bg-gray-400"></div>

        {/* With Elevation */}
        <div className="w-full h-px bg-gray-300 shadow-sm"></div>
      </section>

      {/* With Text */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-gray-900 mb-6 uppercase tracking-wide">With Text</h2>

        {/* Center Text */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-xs text-gray-600 uppercase tracking-wider">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Material Chip */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="px-4 py-1 bg-gray-200 rounded-full">
            <span className="text-sm text-gray-700 font-medium">Section</span>
          </div>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Elevated Chip */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="px-5 py-2 bg-white rounded-full shadow-md">
            <span className="text-sm text-gray-800 font-medium">Featured</span>
          </div>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Primary Color */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-blue-300"></div>
          <div className="px-5 py-2 bg-blue-600 rounded shadow-md">
            <span className="text-sm text-white font-medium uppercase tracking-wide">Important</span>
          </div>
          <div className="flex-1 h-px bg-blue-300"></div>
        </div>
      </section>

      {/* With Icon */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-gray-900 mb-6 uppercase tracking-wide">With Icon</h2>

        {/* Icon with Background */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Elevated Icon */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Primary Icon */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-blue-300"></div>
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="flex-1 h-px bg-blue-300"></div>
        </div>

        {/* FAB Style */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
      </section>

      {/* Vertical Dividers */}
      <section>
        <h2 className="text-sm font-medium text-gray-900 mb-6 uppercase tracking-wide">Vertical</h2>
        <div className="flex items-center justify-center gap-8 h-32 bg-white rounded-lg shadow-sm p-6">
          <div className="text-sm text-gray-700 font-medium">Item 1</div>
          <div className="w-px h-full bg-gray-300"></div>
          <div className="text-sm text-gray-700 font-medium">Item 2</div>
          <div className="w-px h-20 bg-gray-400"></div>
          <div className="text-sm text-gray-700 font-medium">Item 3</div>
          <div className="w-px h-full bg-gray-300"></div>
          <div className="text-sm text-gray-700 font-medium">Item 4</div>
        </div>
      </section>

      {/* List Dividers */}
      <section className="space-y-4">
        <h2 className="text-sm font-medium text-gray-900 mb-6 uppercase tracking-wide">List Dividers</h2>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4">
            <div className="text-sm text-gray-900 font-medium">List Item 1</div>
            <div className="text-xs text-gray-600 mt-1">Description text</div>
          </div>
          <div className="w-full h-px bg-gray-200"></div>

          <div className="px-6 py-4">
            <div className="text-sm text-gray-900 font-medium">List Item 2</div>
            <div className="text-xs text-gray-600 mt-1">Description text</div>
          </div>
          <div className="w-full pl-6 h-px">
            <div className="h-full bg-gray-200"></div>
          </div>

          <div className="px-6 py-4">
            <div className="text-sm text-gray-900 font-medium">List Item 3</div>
            <div className="text-xs text-gray-600 mt-1">Description text</div>
          </div>
        </div>
      </section>

      {/* Cards with Dividers */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-gray-900 mb-6 uppercase tracking-wide">Card Dividers</h2>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4">
            <h3 className="text-lg font-semibold text-gray-900">Card Title</h3>
          </div>
          <div className="w-full h-px bg-gray-200"></div>
          <div className="px-6 py-4">
            <p className="text-sm text-gray-600">Card content goes here with relevant information.</p>
          </div>
          <div className="w-full h-px bg-gray-200"></div>
          <div className="px-6 py-3 bg-gray-50">
            <button className="text-sm text-blue-600 font-medium uppercase tracking-wide">Action</button>
          </div>
        </div>
      </section>
    </div>
  );
}