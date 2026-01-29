import { useState } from 'react';
import { Pagination } from './Pagination';

export default function GradientPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 100;

  return (
    <div className="min-h-screen bg-slate-900 p-8 flex flex-col items-center justify-center gap-12">
      {/* Basic Gradient Pagination */}
      <Pagination
        total={totalItems}
        pageSize={10}
        current={currentPage}
        onChange={setCurrentPage}
        theme="gradient"
        size="md"
      />

      {/* Gradient Border Pagination */}
      <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
        <div className="bg-slate-900 rounded-2xl p-4">
          <Pagination
            total={totalItems}
            pageSize={10}
            current={currentPage}
            onChange={setCurrentPage}
            theme="gradient"
            size="sm"
            showTotal={(total, range) => (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 font-bold">
                {currentPage} / {Math.ceil(total / 10)}
              </span>
            )}
          />
        </div>
      </div>

      {/* Animated Gradient Pills */}
      <Pagination
        total={50}
        pageSize={10}
        current={currentPage}
        onChange={setCurrentPage}
        theme="gradient"
        size="lg"
        siblingCount={2}
      />

      {/* Rainbow Progress with Pagination */}
      <div className="w-96">
        <div className="h-2 rounded-full bg-slate-800 overflow-hidden mb-6">
          <div
            className="h-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 transition-all duration-500"
            style={{ width: `${(currentPage / Math.ceil(totalItems / 10)) * 100}%` }}
          />
        </div>
        <Pagination
          total={totalItems}
          pageSize={10}
          current={currentPage}
          onChange={setCurrentPage}
          theme="gradient"
          size="md"
          siblingCount={1}
        />
      </div>
    </div>
  );
}
