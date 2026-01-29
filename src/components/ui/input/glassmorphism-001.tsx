import Input from './Input';

export default function GlassmorphismInput() {
  return (
    <div
      className="min-h-screen p-8 flex flex-col gap-8 max-w-md"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      }}
    >
      {/* Basic Glass Input */}
      <Input
        theme="glassmorphism"
        label="Email Address"
        type="email"
        placeholder="you@example.com"
      />

      {/* Glass Input with Icon */}
      <Input
        theme="glassmorphism"
        label="Search"
        type="text"
        placeholder="Search anything..."
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

      {/* Focused State */}
      <Input
        theme="glassmorphism"
        label="Username"
        type="text"
        defaultValue="glassuser"
        helperText="Active/focused state preview"
      />

      {/* Error State */}
      <Input
        theme="glassmorphism"
        label="Password"
        type="password"
        defaultValue="error"
        error="Invalid password format"
      />

      {/* Disabled State */}
      <Input
        theme="glassmorphism"
        label="Organization"
        type="text"
        value="Glass Corp Inc."
        disabled
      />

      {/* Glass Card with Input Group */}
      <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
        <h3 className="text-lg font-semibold text-white mb-4">Contact Form</h3>
        <div className="flex flex-col gap-4">
          <Input
            theme="glassmorphism"
            type="text"
            placeholder="Full Name"
          />
          <Input
            theme="glassmorphism"
            type="email"
            placeholder="Email"
          />
          <textarea
            placeholder="Message"
            rows={3}
            className="w-full px-4 py-3 rounded-lg text-white placeholder-white/50 bg-white/10 backdrop-blur-sm border border-white/20 focus:bg-white/20 focus:border-white/40 focus:outline-none transition-all duration-300 resize-none"
          />
        </div>
      </div>
    </div>
  );
}
