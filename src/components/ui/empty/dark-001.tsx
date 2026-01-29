import { Empty } from './Empty';

export default function DarkEmpty() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <Empty
        theme="dark"
        image={
          <>
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
            <svg
              className="w-full h-full"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </>
        }
        title="No Notifications"
        description="You're all caught up! There are no new notifications at this time."
        action={
          <button className="px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
            Go to Dashboard
          </button>
        }
      />
    </div>
  );
}
