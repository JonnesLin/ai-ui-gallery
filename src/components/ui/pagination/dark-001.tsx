import { useState } from 'react';
import { Pagination } from './Pagination';

export default function DarkPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 100;

  return (
    <div className="min-h-screen bg-gray-900 p-8 flex flex-col items-center justify-center gap-12">
      {/* Dark Theme Pagination */}
      <Pagination
        total={totalItems}
        pageSize={10}
        current={currentPage}
        onChange={setCurrentPage}
        theme="dark"
        size="md"
        showTotal
        showSizeChanger
      />

      {/* Compact Dark */}
      <Pagination
        total={totalItems}
        pageSize={20}
        current={currentPage}
        onChange={setCurrentPage}
        theme="dark"
        size="sm"
        siblingCount={2}
      />

      {/* Dark with Quick Jumper */}
      <Pagination
        total={totalItems}
        pageSize={10}
        current={currentPage}
        onChange={setCurrentPage}
        theme="dark"
        size="lg"
        showQuickJumper
        showTotal
      />
    </div>
  );
}
