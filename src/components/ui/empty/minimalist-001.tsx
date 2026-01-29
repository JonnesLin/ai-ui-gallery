import { Empty } from './Empty';

export default function MinimalistEmpty() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Empty
        theme="minimalist"
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
              strokeWidth={1}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        }
        title="No Data Available"
        description="There are no items to display at this moment. Start by creating your first entry."
        action={
          <button className="px-6 py-2 border border-gray-900 text-gray-900 text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors">
            Create New
          </button>
        }
      />
    </div>
  );
}
