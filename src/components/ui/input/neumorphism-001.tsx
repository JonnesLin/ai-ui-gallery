import Input from './Input';

export default function NeumorphismInput() {
  return (
    <div className="min-h-screen p-8 flex flex-col gap-8 max-w-md bg-[#e0e5ec]">
      {/* Basic Neumorphic Input */}
      <Input
        theme="neumorphism"
        label="Email Address"
        type="email"
        placeholder="you@example.com"
      />

      {/* Neumorphic Input with Icon */}
      <Input
        theme="neumorphism"
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

      {/* Convex (Raised) Input */}
      <Input
        theme="neumorphism"
        label="Username (Raised Style)"
        type="text"
        placeholder="Enter username"
        variant="outlined"
      />

      {/* Focused State */}
      <Input
        theme="neumorphism"
        label="Active Input"
        type="text"
        defaultValue="Typing here..."
        helperText="Deep pressed effect when focused"
        success
      />

      {/* Error State */}
      <Input
        theme="neumorphism"
        label="Password"
        type="password"
        defaultValue="error"
        error="Password is too weak"
      />

      {/* Disabled State */}
      <Input
        theme="neumorphism"
        label="Disabled Field"
        type="text"
        value="Cannot edit"
        disabled
      />

      {/* Neumorphic Card with Inputs */}
      <div
        className="p-6 rounded-3xl bg-[#e0e5ec]"
        style={{
          boxShadow: '12px 12px 24px #b8bec7, -12px -12px 24px #ffffff',
        }}
      >
        <h3 className="text-lg font-semibold text-gray-700 mb-5">Sign Up</h3>
        <div className="flex flex-col gap-4">
          <Input
            theme="neumorphism"
            type="text"
            placeholder="Full Name"
            size="sm"
          />
          <Input
            theme="neumorphism"
            type="email"
            placeholder="Email"
            size="sm"
          />
          <button
            className="w-full py-3 rounded-xl text-gray-700 font-medium bg-[#e0e5ec] border-none cursor-pointer transition-all duration-200 hover:scale-[0.98]"
            style={{
              boxShadow: '6px 6px 12px #b8bec7, -6px -6px 12px #ffffff',
            }}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
