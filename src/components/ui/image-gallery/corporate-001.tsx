'use client';

import { useState } from 'react';

export default function CorporateImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('All');

  const images = [
    { id: 1, title: 'Annual Report 2024', category: 'Reports', department: 'Finance' },
    { id: 2, title: 'Q4 Performance', category: 'Analytics', department: 'Strategy' },
    { id: 3, title: 'Team Building Event', category: 'Culture', department: 'HR' },
    { id: 4, title: 'New Office Launch', category: 'Events', department: 'Operations' },
    { id: 5, title: 'Product Roadmap', category: 'Strategy', department: 'Product' },
    { id: 6, title: 'Market Analysis', category: 'Reports', department: 'Research' },
    { id: 7, title: 'Brand Guidelines', category: 'Marketing', department: 'Brand' },
    { id: 8, title: 'Investor Meeting', category: 'Events', department: 'Finance' },
  ];

  const tabs = ['All', 'Reports', 'Analytics', 'Events'];
  const filteredImages = activeTab === 'All'
    ? images
    : images.filter(img => img.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-lg bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-semibold text-gray-900">Media Library</h1>
              <p className="mt-2 text-gray-600">Corporate Assets & Resources</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Total Assets</div>
              <div className="text-3xl font-semibold text-blue-600">{images.length}</div>
            </div>
          </div>

          <div className="mt-6 flex gap-2 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`border-b-2 px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-gray-100">
                  <div className="flex h-full items-center justify-center text-6xl font-semibold text-gray-300">
                    {image.id}
                  </div>
                </div>
                <div className="border-t border-gray-100 p-4">
                  <h3 className="font-semibold text-gray-900">{image.title}</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs text-gray-500">{image.department}</span>
                    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80 p-8"
        >
          <div className="relative max-w-5xl rounded-lg bg-white p-6 shadow-2xl">
            <div className="aspect-square bg-gradient-to-br from-blue-50 to-gray-100">
              <div className="flex h-full items-center justify-center text-9xl font-semibold text-gray-300">
                {selectedImage}
              </div>
            </div>
            <div className="mt-4 border-t border-gray-200 pt-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                {images.find(img => img.id === selectedImage)?.title}
              </h2>
              <p className="mt-1 text-gray-600">
                {images.find(img => img.id === selectedImage)?.department} Department
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl font-semibold text-gray-600 transition-colors hover:bg-gray-200"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
