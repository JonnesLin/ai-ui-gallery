import { useState } from 'react';
import { Pagination } from './Pagination';

export default function GlassmorphismPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-8 flex flex-col items-center justify-center gap-12">
      {/* Glass Pagination */}
      <Pagination
        total={totalItems}
        pageSize={10}
        current={currentPage}
        onChange={setCurrentPage}
        theme="glassmorphism"
        size="md"
        showTotal
      />

      {/* Compact Glass */}
      <Pagination
        total={totalItems}
        pageSize={20}
        current={currentPage}
        onChange={setCurrentPage}
        theme="glassmorphism"
        size="sm"
        siblingCount={2}
        showSizeChanger
      />

      {/* Glass with Controls */}
      <Pagination
        total={totalItems}
        pageSize={10}
        current={currentPage}
        onChange={setCurrentPage}
        theme="glassmorphism"
        size="lg"
        showQuickJumper
        showTotal
      />
    </div>
  );
}
