'use client';

import { useState } from 'react';

export default function PastelFileUpload() {
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
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`bg-white/70 backdrop-blur-sm border-3 rounded-3xl transition-all ${
            isDragging
              ? 'border-purple-300 shadow-2xl scale-105'
              : 'border-pink-200 shadow-xl'
          }`}
        >
          <div className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 mb-6 shadow-lg">
              <svg
                className="w-10 h-10 text-purple-400"
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
            <div className="mt-4">
              <label className="cursor-pointer">
                <h3 className="text-xl font-semibold text-purple-600">
                  Upload Your Files
                </h3>
                <p className="mt-2 text-sm text-purple-400">
                  Drag and drop files here or{' '}
                  <span className="text-pink-500 font-medium underline">
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
            <div className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full border border-pink-200">
              <svg
                className="w-4 h-4 text-purple-500"
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
              <span className="text-xs text-purple-600 font-medium">
                PNG, JPG, PDF up to 10MB
              </span>
            </div>
          </div>
        </div>

        {files.length > 0 && (
          <div className="mt-6 space-y-3">
            {files.map((file, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm border-2 border-pink-200 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg
                        className="w-6 h-6 text-purple-500"
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
                      <p className="text-sm font-semibold text-purple-700 truncate">
                        {file.name}
                      </p>
                      <p className="text-xs text-purple-400">
                        {(file.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center ml-4">
                    {uploadProgress[file.name] < 100 ? (
                      <div className="w-24 h-2 bg-purple-100 rounded-full overflow-hidden mr-3 shadow-inner">
                        <div
                          className="h-full bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 transition-all duration-300"
                          style={{ width: `${uploadProgress[file.name] || 0}%` }}
                        />
                      </div>
                    ) : (
                      <div className="w-6 h-6 bg-gradient-to-br from-green-300 to-emerald-300 rounded-full flex items-center justify-center mr-3 shadow-md">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
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
                      className="w-8 h-8 rounded-lg bg-pink-100 hover:bg-pink-200 text-purple-400 hover:text-purple-600 transition-all flex items-center justify-center shadow-sm"
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
