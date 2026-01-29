import { Empty } from './Empty';

export default function NeumorphismEmpty() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="rounded-3xl bg-gray-200 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
        <Empty
          theme="neumorphism"
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          }
          title="No Results Found"
          description="We couldn't find any matches for your search. Try adjusting your filters or search terms."
          action={
            <button className="px-8 py-3 bg-gray-200 text-gray-700 font-medium rounded-full shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all">
              Clear Filters
            </button>
          }
        />
      </div>
    </div>
  );
}
