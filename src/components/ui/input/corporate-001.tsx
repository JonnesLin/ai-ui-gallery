export default function CorporateInput() {
  return (
    <div className="min-h-screen p-8 flex flex-col gap-6 max-w-md bg-slate-50">
      {/* Standard Corporate Input */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-slate-700">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          placeholder="name@company.com"
          className="w-full px-3.5 py-2.5 rounded-md text-slate-900 placeholder-slate-400 bg-white border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-150"
        />
        <p className="text-xs text-slate-500">We will use this for account verification</p>
      </div>

      {/* Input with Icon */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-slate-700">
          Search Records
        </label>
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
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
            placeholder="Search by name, ID, or department..."
            className="w-full pl-10 pr-3.5 py-2.5 rounded-md text-slate-900 placeholder-slate-400 bg-white border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-150"
          />
        </div>
      </div>

      {/* Input with Prefix */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-slate-700">
          Website
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 py-2.5 rounded-l-md text-sm text-slate-600 bg-slate-100 border border-r-0 border-slate-300">
            https://
          </span>
          <input
            type="text"
            placeholder="www.company.com"
            className="flex-1 px-3.5 py-2.5 rounded-r-md text-slate-900 placeholder-slate-400 bg-white border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-150"
          />
        </div>
      </div>

      {/* Focused State */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-blue-600">
          Employee ID
        </label>
        <input
          type="text"
          defaultValue="EMP-2024-0001"
          className="w-full px-3.5 py-2.5 rounded-md text-slate-900 bg-white border-2 border-blue-500 ring-2 ring-blue-500/20 focus:outline-none"
        />
        <p className="text-xs text-blue-600">This field is currently active</p>
      </div>

      {/* Error State */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-red-600">
          Tax ID Number <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          defaultValue="INVALID-FORMAT"
          className="w-full px-3.5 py-2.5 rounded-md text-slate-900 bg-red-50 border-2 border-red-500 focus:outline-none"
        />
        <p className="text-xs text-red-600 flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Please enter a valid tax identification number
        </p>
      </div>

      {/* Success State */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-green-700">
          Verification Code
        </label>
        <div className="relative">
          <input
            type="text"
            defaultValue="VERIFIED-OK"
            className="w-full px-3.5 py-2.5 pr-10 rounded-md text-slate-900 bg-green-50 border-2 border-green-500 focus:outline-none"
          />
          <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <p className="text-xs text-green-600">Verification successful</p>
      </div>

      {/* Disabled State */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-slate-400">
          Account Status
        </label>
        <input
          type="text"
          value="Active - Enterprise Plan"
          disabled
          className="w-full px-3.5 py-2.5 rounded-md text-slate-500 bg-slate-100 border border-slate-200 cursor-not-allowed"
        />
        <p className="text-xs text-slate-400">This field cannot be modified</p>
      </div>

      {/* Corporate Form Card */}
      <div className="p-6 rounded-lg bg-white border border-slate-200 shadow-sm mt-4">
        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-200">
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">Employee Information</h3>
            <p className="text-xs text-slate-500">Required for HR records</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-slate-600">First Name</label>
              <input
                type="text"
                placeholder="John"
                className="px-3 py-2 rounded-md text-sm text-slate-900 placeholder-slate-400 bg-white border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-slate-600">Last Name</label>
              <input
                type="text"
                placeholder="Smith"
                className="px-3 py-2 rounded-md text-sm text-slate-900 placeholder-slate-400 bg-white border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-slate-600">Department</label>
            <input
              type="text"
              placeholder="e.g., Engineering, Marketing"
              className="px-3 py-2 rounded-md text-sm text-slate-900 placeholder-slate-400 bg-white border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 focus:outline-none"
            />
          </div>
          <button className="w-full py-2.5 rounded-md text-sm text-white font-medium bg-blue-600 hover:bg-blue-700 transition-colors duration-150">
            Save Information
          </button>
        </div>
      </div>
    </div>
  );
}
