import { useState } from 'react';
import { Pagination } from './Pagination';

export default function NeumorphismPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 100;

  return (
    <div className="min-h-screen bg-gray-200 p-8 flex flex-col items-center justify-center gap-12">
      {/* Neumorphic Pagination */}
      <Pagination
        total={totalItems}
        pageSize={10}
        current={currentPage}
        onChange={setCurrentPage}
        theme="neumorphism"
        size="md"
        showTotal
      />

      {/* Compact Neumorphic */}
      <Pagination
        total={totalItems}
        pageSize={20}
        current={currentPage}
        onChange={setCurrentPage}
        theme="neumorphism"
        size="sm"
        siblingCount={2}
        showSizeChanger
      />

      {/* Neumorphic with Controls */}
      <Pagination
        total={totalItems}
        pageSize={10}
        current={currentPage}
        onChange={setCurrentPage}
        theme="neumorphism"
        size="lg"
        showQuickJumper
        showTotal
      />
    </div>
  );
}
