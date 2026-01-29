'use client';

import { useState } from 'react';

export default function ThreeDFileUpload() {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      handleFiles(selectedFiles);
    }
  };

  const handleFiles = (newFiles: File[]) => {
    setFiles(prev => [...prev, ...newFiles]);
    newFiles.forEach(file => {
      simulateUpload(file.name);
    });
  };

  const simulateUpload = (fileName: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(prev => ({ ...prev, [fileName]: progress }));
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 200);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-8 perspective-[1000px]">
      <div className="w-full max-w-2xl">
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl transition-all ${
            isDragging
              ? 'shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] scale-105'
              : 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]'
          }`}
          style={{
            transform: isDragging ? 'translateZ(20px) rotateX(2deg)' : 'translateZ(10px)',
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="p-12 text-center relative">
            <div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 mb-6 relative"
              style={{
                transform: 'translateZ(30px)',
                transformStyle: 'preserve-3d',
                boxShadow:
                  '0 10px 25px -5px rgba(99, 102, 241, 0.5), 0 0 0 3px rgba(255,255,255,0.3)',
              }}
            >
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 to-pink-400 opacity-50 blur-sm"
                style={{ transform: 'translateZ(-5px)' }}
              ></div>
              <svg
                className="w-10 h-10 text-white relative z-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            <div
              className="mt-4"
              style={{
                transform: 'translateZ(20px)',
                transformStyle: 'preserve-3d',
              }}
            >
              <label className="cursor-pointer">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  Upload Files
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  Drag and drop your files or{' '}
                  <span className="text-purple-600 font-semibold underline">
                    browse
                  </span>
                </p>
                <input
                  type="file"
                  className="hidden"
                  multiple
                  onChange={handleFileInput}
                />
              </label>
            </div>
            <div
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full border border-purple-200"
              style={{
                transform: 'translateZ(15px)',
                boxShadow: '0 4px 10px -2px rgba(139, 92, 246, 0.2)',
              }}
            >
              <svg
                className="w-4 h-4 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-xs text-purple-700 font-medium">
                PNG, JPG, PDF up to 10MB
              </span>
            </div>
          </div>
        </div>

        {files.length > 0 && (
          <div className="mt-6 space-y-4">
            {files.map((file, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.25)] transition-all"
                style={{
                  transform: 'translateZ(8px)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1 min-w-0">
                    <div
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 relative"
                      style={{
                        transform: 'translateZ(15px)',
                        boxShadow:
                          '0 8px 20px -5px rgba(99, 102, 241, 0.4), 0 0 0 2px rgba(255,255,255,0.2)',
                      }}
                    >
                      <div
                        className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-400 to-pink-400 opacity-50 blur-sm"
                        style={{ transform: 'translateZ(-3px)' }}
                      ></div>
                      <svg
                        className="w-7 h-7 text-white relative z-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4 flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(file.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center ml-4">
                    {uploadProgress[file.name] < 100 ? (
                      <div
                        className="w-28 h-2.5 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full overflow-hidden mr-3"
                        style={{
                          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
                        }}
                      >
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 relative"
                          style={{
                            width: `${uploadProgress[file.name] || 0}%`,
                            boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)',
                          }}
                        >
                          <div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                            style={{ transform: 'translateZ(2px)' }}
                          ></div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3"
                        style={{
                          transform: 'translateZ(10px)',
                          boxShadow:
                            '0 6px 15px -3px rgba(34, 197, 94, 0.5), 0 0 0 2px rgba(255,255,255,0.3)',
                        }}
                      >
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    )}
                    <button
                      onClick={() => removeFile(index)}
                      className="w-9 h-9 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 hover:from-red-100 hover:to-red-200 text-gray-600 hover:text-red-600 transition-all flex items-center justify-center"
                      style={{
                        transform: 'translateZ(8px)',
                        boxShadow: '0 4px 10px -2px rgba(0,0,0,0.15)',
                      }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
