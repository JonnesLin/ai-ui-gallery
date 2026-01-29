import { useState } from 'react';
import { Pagination } from './Pagination';

export default function MinimalistPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 100;

  return (
    <div className="min-h-screen bg-white p-8 flex flex-col items-center justify-center gap-12">
      {/* Clean Minimalist */}
      <Pagination
        total={totalItems}
        pageSize={10}
        current={currentPage}
        onChange={setCurrentPage}
        theme="minimalist"
        size="md"
        showTotal
      />

      {/* Ultra Minimal */}
      <Pagination
        total={totalItems}
        pageSize={10}
        current={currentPage}
        onChange={setCurrentPage}
        theme="minimalist"
        size="sm"
        siblingCount={0}
        showTotal={(total, range) => (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-900 font-medium">Page {currentPage}</span>
            <span className="text-sm text-gray-400">of</span>
            <span className="text-sm text-gray-600">{Math.ceil(total / 10)}</span>
          </div>
        )}
      />

      {/* Minimalist with Controls */}
      <Pagination
        total={totalItems}
        pageSize={10}
        current={currentPage}
        onChange={setCurrentPage}
        theme="minimalist"
        size="lg"
        showSizeChanger
        showQuickJumper
      />
    </div>
  );
}
