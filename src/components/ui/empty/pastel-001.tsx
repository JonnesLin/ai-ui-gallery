import { Empty } from './Empty';

export default function PastelEmpty() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <Empty
        theme="pastel"
        image={
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-1/2 h-1/2 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-200 rounded-full shadow-md"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-200 rounded-full shadow-md"></div>
          </div>
        }
        title="No Favorites Yet"
        description="Your favorites list is waiting for you to add items you love. Start exploring and save your favorites!"
        action={
          <button className="px-8 py-3 bg-gradient-to-r from-pink-300 to-purple-300 text-white font-medium rounded-full hover:from-pink-400 hover:to-purple-400 transition-all shadow-lg hover:shadow-xl">
            Explore Items
          </button>
        }
      />
    </div>
  );
}
