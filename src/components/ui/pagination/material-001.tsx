import { useState } from 'react';
import { Pagination } from './Pagination';

export default function MaterialPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 100;

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center gap-12">
      {/* Material Design Pagination */}
      <Pagination
        total={totalItems}
        pageSize={10}
        current={currentPage}
        onChange={setCurrentPage}
        theme="material"
        size="md"
        showTotal
        showSizeChanger
      />

      {/* Material Raised Buttons */}
      <Pagination
        total={totalItems}
        pageSize={20}
        current={currentPage}
        onChange={setCurrentPage}
        theme="material"
        size="lg"
        siblingCount={2}
      />

      {/* Floating Action Style */}
      <Pagination
        total={totalItems}
        pageSize={10}
        current={currentPage}
        onChange={setCurrentPage}
        theme="material"
        size="md"
        siblingCount={0}
        showTotal={(total, range) => (
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-md">
            <span className="text-lg text-gray-900 font-medium">{currentPage}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{Math.ceil(total / 10)}</span>
          </div>
        )}
      />

      {/* Compact Material */}
      <Pagination
        total={totalItems}
        pageSize={10}
        current={currentPage}
        onChange={setCurrentPage}
        theme="material"
        size="sm"
        showQuickJumper
      />
    </div>
  );
}
