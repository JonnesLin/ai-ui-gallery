export default function CorporateErrorPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-blue-600 px-8 py-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded"></div>
              <span className="text-white font-semibold">Enterprise Portal</span>
            </div>
          </div>

          <div className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-6">
              <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We apologize for the inconvenience. The page you requested could not be found.
              Please verify the URL or contact your system administrator.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 max-w-md mx-auto">
              <div className="text-left text-sm">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Error Code:</span>
                  <span className="font-mono text-gray-900">404</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-mono text-gray-900">Not Found</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Request ID:</span>
                  <span className="font-mono text-gray-900">REQ-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors">
                Return to Dashboard
              </button>
              <button className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded hover:bg-gray-50 transition-colors">
                Contact Support
              </button>
            </div>
          </div>

          <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              © 2024 Enterprise Corporation. All rights reserved. | Support: support@enterprise.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
