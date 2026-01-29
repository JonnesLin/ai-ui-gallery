import { useState } from 'react';
import { Pagination } from './Pagination';

/**
 * Example usage of the Pagination component
 * This file demonstrates all available features
 */
export default function PaginationTestExample() {
  const [currentPage1, setCurrentPage1] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);
  const [currentPage3, setCurrentPage3] = useState(1);

  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-16">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Basic Pagination</h2>
        <Pagination
          total={100}
          pageSize={10}
          current={currentPage1}
          onChange={setCurrentPage1}
          theme="minimalist"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Full Featured Pagination</h2>
        <Pagination
          total={500}
          pageSize={20}
          current={currentPage2}
          onChange={setCurrentPage2}
          theme="material"
          size="md"
          showTotal
          showSizeChanger
          showQuickJumper
          siblingCount={2}
        />
      </section>

      <section className="bg-gray-900 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">Dark Theme</h2>
        <Pagination
          total={100}
          pageSize={10}
          current={currentPage3}
          onChange={setCurrentPage3}
          theme="dark"
          size="lg"
          showTotal
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Compact Mode</h2>
        <Pagination
          total={50}
          pageSize={10}
          current={currentPage1}
          onChange={setCurrentPage1}
          theme="flat"
          size="sm"
          siblingCount={0}
        />
      </section>

      <section className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">Glassmorphism Theme</h2>
        <Pagination
          total={100}
          pageSize={10}
          current={currentPage2}
          onChange={setCurrentPage2}
          theme="glassmorphism"
          size="md"
        />
      </section>

      <section className="bg-gray-200 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Neumorphism Theme</h2>
        <Pagination
          total={100}
          pageSize={10}
          current={currentPage3}
          onChange={setCurrentPage3}
          theme="neumorphism"
          size="md"
          showTotal
        />
      </section>

      <section className="bg-slate-900 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">Gradient Theme</h2>
        <Pagination
          total={100}
          pageSize={10}
          current={currentPage1}
          onChange={setCurrentPage1}
          theme="gradient"
          size="md"
          showQuickJumper
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Disabled State</h2>
        <Pagination
          total={100}
          pageSize={10}
          current={5}
          onChange={() => {}}
          theme="material"
          disabled
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Custom Total Display</h2>
        <Pagination
          total={250}
          pageSize={25}
          current={currentPage2}
          onChange={setCurrentPage2}
          theme="flat"
          showTotal={(total, [start, end]) => (
            <div className="text-sm font-semibold text-blue-600">
              Showing items {start} to {end} of {total} total
            </div>
          )}
        />
      </section>
    </div>
  );
}
