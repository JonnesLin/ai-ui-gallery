export default function MaterialInput() {
  return (
    <div className="flex flex-col gap-8 p-8 max-w-md bg-white min-h-screen">
      {/* Basic Input - Standard Material */}
      <div className="relative">
        <input
          type="email"
          id="email"
          placeholder=" "
          className="peer w-full px-4 pt-6 pb-2 text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-indigo-600 focus:outline-none transition-colors duration-200"
        />
        <label
          htmlFor="email"
          className="absolute left-4 top-4 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
        >
          Email Address
        </label>
      </div>

      {/* Input with Prefix Icon - Outlined Material */}
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 peer-focus:text-indigo-600 transition-colors z-10"
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
          id="search"
          placeholder=" "
          className="peer w-full pl-12 pr-4 pt-6 pb-2 text-gray-900 bg-transparent border border-gray-300 rounded focus:border-indigo-600 focus:border-2 focus:outline-none transition-all duration-200"
        />
        <label
          htmlFor="search"
          className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:translate-y-0 peer-focus:left-3 peer-focus:px-1 peer-focus:text-xs peer-focus:text-indigo-600 peer-focus:bg-white peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white"
        >
          Search
        </label>
      </div>

      {/* Input with Suffix Icon - Filled Material */}
      <div className="relative">
        <input
          type="password"
          id="password"
          placeholder=" "
          defaultValue="password123"
          className="peer w-full pl-4 pr-12 pt-6 pb-2 text-gray-900 bg-gray-100 rounded-t border-b-2 border-gray-400 focus:bg-gray-200 focus:border-indigo-600 focus:outline-none transition-all duration-200"
        />
        <label
          htmlFor="password"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-indigo-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs"
        >
          Password
        </label>
        <svg
          className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors"
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

      {/* Large Size - Outlined */}
      <div className="relative">
        <input
          type="text"
          id="company"
          placeholder=" "
          className="peer w-full px-6 pt-7 pb-3 text-lg text-gray-900 bg-transparent border-2 border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none transition-all duration-200"
        />
        <label
          htmlFor="company"
          className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-lg peer-focus:top-0 peer-focus:translate-y-0 peer-focus:left-4 peer-focus:px-2 peer-focus:text-sm peer-focus:text-indigo-600 peer-focus:bg-white peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-white"
        >
          Company Name
        </label>
      </div>

      {/* Small Size - Standard */}
      <div className="relative">
        <input
          type="text"
          id="code"
          placeholder=" "
          className="peer w-full px-3 pt-5 pb-1 text-sm text-gray-900 bg-transparent border-b border-gray-300 focus:border-indigo-600 focus:outline-none transition-colors duration-200"
        />
        <label
          htmlFor="code"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-indigo-600 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs"
        >
          Code
        </label>
      </div>

      {/* Error State - Outlined */}
      <div className="relative">
        <input
          type="email"
          id="error-email"
          placeholder=" "
          defaultValue="invalid-email"
          className="peer w-full px-4 pt-6 pb-2 text-gray-900 bg-transparent border-2 border-red-600 rounded focus:border-red-600 focus:outline-none transition-all duration-200"
        />
        <label
          htmlFor="error-email"
          className="absolute left-4 top-0 px-1 text-xs text-red-600 bg-white"
        >
          Email (Error)
        </label>
        <div className="flex items-center gap-2 mt-2 ml-4">
          <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-xs text-red-600">Please enter a valid email address</p>
        </div>
      </div>

      {/* Success State - Filled */}
      <div className="relative">
        <input
          type="text"
          id="username"
          placeholder=" "
          defaultValue="john_doe"
          className="peer w-full px-4 pt-6 pb-2 text-gray-900 bg-green-50 rounded-t border-b-2 border-green-600 focus:bg-green-100 focus:outline-none transition-all duration-200"
        />
        <label
          htmlFor="username"
          className="absolute left-4 top-2 text-xs text-green-600"
        >
          Username
        </label>
        <svg
          className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-xs text-green-600 mt-2 ml-4">Username is available</p>
      </div>

      {/* Disabled State - Outlined */}
      <div className="relative">
        <input
          type="text"
          id="account-id"
          placeholder=" "
          value="ACC-2024-001"
          disabled
          className="peer w-full px-4 pt-6 pb-2 text-gray-400 bg-transparent border border-gray-200 rounded cursor-not-allowed"
        />
        <label
          htmlFor="account-id"
          className="absolute left-4 top-0 px-1 text-xs text-gray-400 bg-white"
        >
          Account ID
        </label>
        <p className="text-xs text-gray-400 mt-2 ml-4">This field cannot be edited</p>
      </div>

      {/* Helper Text - Standard */}
      <div className="relative">
        <input
          type="tel"
          id="phone"
          placeholder=" "
          className="peer w-full px-4 pt-6 pb-2 text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-indigo-600 focus:outline-none transition-colors duration-200"
        />
        <label
          htmlFor="phone"
          className="absolute left-4 top-4 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
        >
          Phone Number
        </label>
        <p className="text-xs text-gray-500 mt-2 ml-4">Format: +1 (555) 123-4567</p>
      </div>

      {/* Character Counter - Filled */}
      <div className="relative">
        <input
          type="text"
          id="bio"
          placeholder=" "
          maxLength={50}
          defaultValue="Software Engineer"
          className="peer w-full px-4 pt-6 pb-2 text-gray-900 bg-gray-100 rounded-t border-b-2 border-gray-400 focus:bg-gray-200 focus:border-indigo-600 focus:outline-none transition-all duration-200"
        />
        <label
          htmlFor="bio"
          className="absolute left-4 top-2 text-xs text-gray-600"
        >
          Bio
        </label>
        <p className="text-xs text-gray-500 mt-2 ml-4 text-right">17 / 50</p>
      </div>
    </div>
  );
}
