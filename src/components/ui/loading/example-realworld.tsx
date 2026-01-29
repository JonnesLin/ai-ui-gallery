import { useState, useEffect } from 'react';
import { Loading } from './Loading';

/**
 * Real-world usage examples showing practical integration patterns
 */

// Example 1: Data Fetching
function DataTable() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setData(['Item 1', 'Item 2', 'Item 3']);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="border rounded-lg p-12 flex items-center justify-center">
        <Loading variant="spinner" size="md" theme="material" label="Loading data..." />
      </div>
    );
  }

  return (
    <div className="border rounded-lg">
      {data.map((item, i) => (
        <div key={i} className="p-4 border-b last:border-b-0">
          {item}
        </div>
      ))}
    </div>
  );
}

// Example 2: Form Submission
function FormWithLoading() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border rounded-lg p-6">
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full px-4 py-2 border rounded"
        disabled={submitting}
      />
      <button
        type="submit"
        disabled={submitting}
        className="w-full px-4 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50 flex items-center justify-center gap-3"
      >
        {submitting ? (
          <>
            <Loading variant="spinner" size="sm" theme="material" color="white" />
            <span>Submitting...</span>
          </>
        ) : (
          <span>Submit</span>
        )}
      </button>
    </form>
  );
}

// Example 3: Image Loading
function ImageCard() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="relative bg-gray-100" style={{ height: '200px' }}>
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loading variant="pulse" size="lg" theme="material" />
          </div>
        )}
        <img
          src="https://via.placeholder.com/400x200"
          alt="Example"
          onLoad={() => setImageLoaded(true)}
          className={imageLoaded ? 'opacity-100' : 'opacity-0'}
          style={{ transition: 'opacity 0.3s' }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold">Image Title</h3>
        <p className="text-sm text-gray-600">Image description</p>
      </div>
    </div>
  );
}

// Example 4: Infinite Scroll Loading
function InfiniteList() {
  const [items, setItems] = useState(Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`));
  const [loadingMore, setLoadingMore] = useState(false);

  const loadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      const newItems = Array.from(
        { length: 5 },
        (_, i) => `Item ${items.length + i + 1}`
      );
      setItems([...items, ...newItems]);
      setLoadingMore(false);
    }, 1500);
  };

  return (
    <div className="border rounded-lg">
      <div className="divide-y max-h-80 overflow-y-auto">
        {items.map((item, i) => (
          <div key={i} className="p-4">
            {item}
          </div>
        ))}
      </div>
      {loadingMore ? (
        <div className="p-4 flex items-center justify-center border-t">
          <Loading variant="dots" size="sm" theme="material" />
        </div>
      ) : (
        <button
          onClick={loadMore}
          className="w-full p-4 border-t hover:bg-gray-50 text-sm font-medium text-indigo-600"
        >
          Load More
        </button>
      )}
    </div>
  );
}

// Example 5: Skeleton to Content Transition
function ContentCard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  return (
    <div className="border rounded-lg p-6">
      {loading ? (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Loading variant="pulse" size="sm" theme="material" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
              <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded animate-pulse" />
            <div className="h-3 bg-gray-200 rounded animate-pulse" />
            <div className="h-3 bg-gray-200 rounded animate-pulse w-5/6" />
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-indigo-600 rounded-full" />
            <div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-gray-600">Software Engineer</p>
            </div>
          </div>
          <p className="text-sm text-gray-700">
            This is the actual content that appears after loading completes.
            The skeleton provides a smooth visual transition.
          </p>
        </div>
      )}
    </div>
  );
}

// Main Export
export default function ExampleRealworld() {
  return (
    <div className="space-y-8 p-6">
      <section>
        <h2 className="text-lg font-semibold mb-4">1. Data Table Loading</h2>
        <DataTable />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">2. Form Submission</h2>
        <FormWithLoading />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">3. Image Loading</h2>
        <div className="grid grid-cols-3 gap-4">
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">4. Infinite Scroll</h2>
        <InfiniteList />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">5. Skeleton Loading</h2>
        <div className="grid grid-cols-2 gap-4">
          <ContentCard />
          <ContentCard />
        </div>
      </section>
    </div>
  );
}
