import Input from './Input';

export default function DarkInput() {
  return (
    <div className="min-h-screen p-8 flex flex-col gap-8 max-w-md bg-[#0d0d0d]">
      {/* Basic Dark Input */}
      <Input
        theme="dark"
        label="Email Address"
        type="email"
        placeholder="you@example.com"
      />

      {/* Dark Input with Icon */}
      <Input
        theme="dark"
        label="Search"
        type="text"
        placeholder="Search..."
        leftIcon={
          <svg
            className="w-5 h-5"
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
        }
      />

      {/* Focused State with Glow */}
      <Input
        theme="dark"
        label="Username (Focused)"
        type="text"
        defaultValue="darkuser"
        helperText="Glow effect on focus"
      />

      {/* Error State */}
      <Input
        theme="dark"
        label="Password"
        type="password"
        defaultValue="error"
        error="Invalid credentials"
      />

      {/* Success State */}
      <Input
        theme="dark"
        label="Verification Code"
        type="text"
        defaultValue="VERIFIED"
        success
        rightIcon={
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        }
      />

      {/* Disabled State */}
      <Input
        theme="dark"
        label="Account ID (Disabled)"
        type="text"
        value="ACC-DARK-001"
        disabled
      />

      {/* Dark Card with Input Group */}
      <div className="p-6 rounded-xl bg-[#141414] border border-[#2a2a2a]">
        <h3 className="text-lg font-semibold text-white mb-4">Login</h3>
        <div className="flex flex-col gap-4">
          <Input
            theme="dark"
            type="text"
            placeholder="Username"
            leftIcon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            }
          />
          <Input
            theme="dark"
            type="password"
            placeholder="Password"
            leftIcon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            }
          />
          <button className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
