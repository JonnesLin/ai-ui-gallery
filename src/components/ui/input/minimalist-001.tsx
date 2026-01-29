import Input from './Input';

export default function MinimalistInput() {
  return (
    <div className="flex flex-col gap-8 p-8 max-w-md bg-white min-h-screen">
      {/* Basic Input */}
      <Input
        theme="minimalist"
        label="Email Address"
        type="email"
        placeholder="you@example.com"
      />

      {/* Input with Icon */}
      <Input
        theme="minimalist"
        label="Search"
        type="text"
        placeholder="Search anything..."
        leftIcon={
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        }
      />

      {/* Focused State Demo */}
      <Input
        theme="minimalist"
        label="Username"
        type="text"
        defaultValue="johnsmith"
        helperText="This is how focus state looks"
      />

      {/* Error State */}
      <Input
        theme="minimalist"
        label="Password"
        type="password"
        defaultValue="weak"
        error="Password must be at least 8 characters"
      />

      {/* Disabled State */}
      <Input
        theme="minimalist"
        label="Account ID"
        type="text"
        value="ACC-2024-001"
        disabled
        helperText="This field cannot be edited"
      />

      {/* Input with Prefix */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium tracking-wide text-gray-500 uppercase">
          Website
        </label>
        <div className="flex items-center border-b border-gray-200 focus-within:border-gray-900 transition-colors duration-300">
          <span className="text-gray-300 text-sm">https://</span>
          <input
            type="text"
            placeholder="yoursite.com"
            className="flex-1 px-1 py-3 text-gray-900 placeholder-gray-300 bg-transparent border-0 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
