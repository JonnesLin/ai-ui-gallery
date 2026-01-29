export default function FlatInput() {
  return (
    <div className="flex flex-col gap-8 p-8 max-w-md bg-gray-50 min-h-screen">
      {/* Basic Input */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">Email Address</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded focus:border-blue-500 focus:outline-none transition-colors duration-200"
        />
      </div>

      {/* Input with Prefix Icon */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">Search</label>
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full pl-10 pr-4 py-3 text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded focus:border-blue-500 focus:outline-none transition-colors duration-200"
          />
        </div>
      </div>

      {/* Input with Suffix Icon */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">Password</label>
        <div className="relative">
          <input
            type="password"
            placeholder="Enter password"
            defaultValue="securepass123"
            className="w-full pl-4 pr-10 py-3 text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded focus:border-blue-500 focus:outline-none transition-colors duration-200"
          />
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </div>
      </div>

      {/* Large Size */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">Company Name</label>
        <input
          type="text"
          placeholder="Acme Corporation"
          className="w-full px-5 py-4 text-lg text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded focus:border-blue-500 focus:outline-none transition-colors duration-200"
        />
      </div>

      {/* Small Size */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">Code</label>
        <input
          type="text"
          placeholder="ABC123"
          className="w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded focus:border-blue-500 focus:outline-none transition-colors duration-200"
        />
      </div>

      {/* Focused State Demo */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-blue-600">Username (Focused)</label>
        <input
          type="text"
          defaultValue="john_doe"
          className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-white border-2 border-blue-500 rounded focus:outline-none transition-colors duration-200"
        />
        <p className="text-xs text-gray-500">This shows the focused state</p>
      </div>

      {/* Error State */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-red-600">Email (Error)</label>
        <input
          type="email"
          defaultValue="invalid-email"
          className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-white border-2 border-red-500 rounded focus:border-red-600 focus:outline-none transition-colors duration-200"
        />
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-xs text-red-500">Please enter a valid email address</p>
        </div>
      </div>

      {/* Success State */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-green-600">Username (Valid)</label>
        <input
          type="text"
          defaultValue="john_doe"
          className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-white border-2 border-green-500 rounded focus:border-green-600 focus:outline-none transition-colors duration-200"
        />
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-xs text-green-600">Username is available</p>
        </div>
      </div>

      {/* Disabled State */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-400">Account ID (Disabled)</label>
        <input
          type="text"
          value="ACC-2024-001"
          disabled
          className="w-full px-4 py-3 text-gray-400 bg-gray-100 border border-gray-200 rounded cursor-not-allowed"
        />
        <p className="text-xs text-gray-400">This field cannot be edited</p>
      </div>

      {/* Read Only State */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">License Key (Read Only)</label>
        <input
          type="text"
          value="XXXX-XXXX-XXXX-XXXX"
          readOnly
          className="w-full px-4 py-3 text-gray-600 bg-gray-50 border border-gray-300 rounded cursor-default select-all"
        />
        <p className="text-xs text-gray-500">Click to select and copy</p>
      </div>

      {/* Input with Prefix Text */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">Website URL</label>
        <div className="flex items-center bg-white border border-gray-300 rounded overflow-hidden focus-within:border-blue-500 transition-colors duration-200">
          <span className="px-3 py-3 text-gray-500 bg-gray-50 border-r border-gray-300 text-sm">
            https://
          </span>
          <input
            type="text"
            placeholder="example.com"
            className="flex-1 px-3 py-3 text-gray-900 placeholder-gray-400 bg-white focus:outline-none"
          />
        </div>
      </div>

      {/* Input with Suffix Text */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">Price</label>
        <div className="flex items-center bg-white border border-gray-300 rounded overflow-hidden focus-within:border-blue-500 transition-colors duration-200">
          <input
            type="number"
            placeholder="0.00"
            className="flex-1 px-3 py-3 text-gray-900 placeholder-gray-400 bg-white focus:outline-none"
          />
          <span className="px-3 py-3 text-gray-500 bg-gray-50 border-l border-gray-300 text-sm">
            USD
          </span>
        </div>
      </div>

      {/* Colored Variants */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-blue-600">Blue</label>
          <input
            type="text"
            placeholder="Primary"
            className="w-full px-3 py-2 text-gray-900 placeholder-gray-400 bg-blue-50 border border-blue-500 rounded focus:border-blue-600 focus:outline-none transition-colors duration-200"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-purple-600">Purple</label>
          <input
            type="text"
            placeholder="Secondary"
            className="w-full px-3 py-2 text-gray-900 placeholder-gray-400 bg-purple-50 border border-purple-500 rounded focus:border-purple-600 focus:outline-none transition-colors duration-200"
          />
        </div>
      </div>
    </div>
  );
}
