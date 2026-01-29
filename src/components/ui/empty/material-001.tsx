export default function MaterialEmpty() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center max-w-md px-8 text-center">
        <div className="mb-8 relative">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
            <svg
              className="w-16 h-16 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-medium text-gray-900 mb-3">
          No items yet
        </h2>

        <p className="text-gray-600 text-base mb-8 leading-relaxed">
          Get started by creating a new item. Your content will appear here.
        </p>

        <button className="px-6 py-3 bg-indigo-500 text-white font-medium rounded hover:bg-indigo-600 transition-colors shadow-md hover:shadow-lg">
          Create new item
        </button>

        <div className="mt-12 flex gap-2">
          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
