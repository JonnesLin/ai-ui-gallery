import { Empty } from './Empty';

export default function GlassmorphismEmpty() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="relative">
        <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl"></div>

        <Empty
          theme="glassmorphism"
          image={
            <svg
              className="w-full h-full"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          }
          title="Nothing Here Yet"
          description="Your inbox is empty. When you receive new messages, they will appear here."
          action={
            <button className="px-8 py-3 bg-white/30 backdrop-blur-md text-white font-medium rounded-full border border-white/40 hover:bg-white/40 transition-all shadow-lg">
              Refresh
            </button>
          }
        />
      </div>
    </div>
  );
}
