import { Empty } from './Empty';

export default function GradientEmpty() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <Empty
        theme="gradient"
        image={
          <div className="w-full h-full bg-gradient-to-br from-white/40 to-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm rotate-12 hover:rotate-0 transition-transform duration-500">
            <svg
              className="w-2/3 h-2/3 text-white -rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
        }
        title="No Items Found"
        description="Your collection is currently empty. Add your first item to get started on your journey."
        action={
          <button className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-full hover:scale-105 transition-transform shadow-2xl shadow-black/20">
            Add New Item
          </button>
        }
      />
    </div>
  );
}
