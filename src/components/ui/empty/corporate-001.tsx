import { Empty } from './Empty';

export default function CorporateEmpty() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center max-w-lg">
        <Empty
          theme="corporate"
          image={
            <div className="w-full h-full bg-blue-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-1/2 h-1/2 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          }
          title="No Documents Available"
          description="There are currently no documents in your workspace. Upload or create a new document to get started with your project."
          action={
            <>
              <div className="flex gap-4">
                <button className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
                  Upload Document
                </button>
                <button className="px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors">
                  Create New
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 w-full text-center">
                <p className="text-gray-500 text-sm">
                  Need help? Contact <span className="text-blue-600 font-medium">support@company.com</span>
                </p>
              </div>
            </>
          }
        />
      </div>
    </div>
  );
}
