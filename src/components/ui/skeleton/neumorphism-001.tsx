export default function NeumorphismSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-gray-100">
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="flex items-center gap-4 p-6 rounded-3xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]">
          <div className="w-16 h-16 rounded-full shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] animate-pulse" />
          <div className="flex-1 space-y-3">
            <div className="h-5 rounded-lg w-1/4 shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] animate-pulse" />
            <div className="h-3 rounded-lg w-1/6 shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] animate-pulse" />
          </div>
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 rounded-3xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] space-y-4">
              <div className="h-48 rounded-2xl shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] animate-pulse" />
              <div className="h-4 rounded-lg w-3/4 shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] animate-pulse" />
              <div className="h-3 rounded-lg w-full shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] animate-pulse" />
            </div>
          ))}
        </div>

        {/* List Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]">
              <div className="w-12 h-12 rounded-xl shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-4 rounded-lg w-1/3 shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] animate-pulse" />
                <div className="h-3 rounded-lg w-2/3 shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
