export default function NeumorphismErrorPage() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8 inline-block rounded-full p-8 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
          <svg className="w-32 h-32 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h1 className="text-8xl font-bold text-gray-600 mb-6 shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] rounded-2xl py-4">
          500
        </h1>

        <h2 className="text-3xl font-bold text-gray-700 mb-4">Server Error</h2>
        <p className="text-gray-600 mb-8">
          Something went wrong on our end. We're working to fix it.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 rounded-xl text-gray-700 font-semibold shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] transition-all">
            Go Home
          </button>
          <button className="px-6 py-3 rounded-xl text-gray-700 font-semibold shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] transition-all">
            Retry
          </button>
        </div>
      </div>
    </div>
  );
}
