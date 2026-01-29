import { useState } from 'react';
import { Pagination } from './Pagination';

export default function FlatPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const totalItems = 100;

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center gap-12">
      {/* Full Featured Pagination */}
      <Pagination
        total={totalItems}
        pageSize={pageSize}
        current={currentPage}
        onChange={setCurrentPage}
        theme="flat"
        size="md"
        showTotal
        showSizeChanger
        showQuickJumper
      />

      {/* Compact Pagination */}
      <Pagination
        total={totalItems}
        pageSize={20}
        current={currentPage}
        onChange={setCurrentPage}
        theme="flat"
        size="sm"
        siblingCount={2}
      />

      {/* Minimal Pagination */}
      <Pagination
        total={totalItems}
        pageSize={10}
        current={currentPage}
        onChange={setCurrentPage}
        theme="minimalist"
        size="sm"
        showTotal={(total, range) => (
          <span className="text-sm text-gray-600">
            Page {currentPage} of {Math.ceil(total / 10)}
          </span>
        )}
      />

      {/* Simple Pagination */}
      <Pagination
        total={totalItems}
        pageSize={10}
        current={currentPage}
        onChange={setCurrentPage}
        theme="flat"
        size="lg"
        siblingCount={0}
      />
    </div>
  );
}
