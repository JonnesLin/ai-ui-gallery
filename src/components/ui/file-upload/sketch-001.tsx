'use client';

import { useState } from 'react';

export default function SketchFileUpload() {
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
    <div className="min-h-screen bg-white flex items-center justify-center p-8 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      <div className="w-full max-w-2xl relative z-10">
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`bg-white border-2 transition-all relative ${
            isDragging ? 'border-gray-600' : 'border-gray-800'
          }`}
          style={{
            transform: 'rotate(-0.5deg)',
            boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
          }}
        >
          <div className="p-12 text-center">
            <div
              className="inline-flex items-center justify-center w-20 h-20 mb-6 border-3 border-gray-800 bg-white relative"
              style={{
                transform: 'rotate(2deg)',
                borderRadius: '50% 45% 50% 45%',
              }}
            >
              <svg
                className="w-10 h-10 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                style={{ transform: 'rotate(-2deg)' }}
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
                <h3
                  className="text-2xl font-bold text-gray-800"
                  style={{
                    fontFamily: 'Comic Sans MS, cursive, sans-serif',
                    transform: 'rotate(0.5deg)',
                  }}
                >
                  Upload Files
                </h3>
                <p
                  className="mt-3 text-base text-gray-600"
                  style={{
                    fontFamily: 'Comic Sans MS, cursive, sans-serif',
                    transform: 'rotate(-0.3deg)',
                  }}
                >
                  Drag & drop or{' '}
                  <span className="underline decoration-wavy decoration-2 underline-offset-4">
                    click here
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
              className="mt-6 inline-block px-5 py-2.5 bg-white border-2 border-gray-800"
              style={{
                transform: 'rotate(-1deg)',
                boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
              }}
            >
              <span
                className="text-xs text-gray-700 font-bold uppercase"
                style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
              >
                PNG, JPG, PDF • 10MB Max
              </span>
            </div>
          </div>
          <svg
            className="absolute top-2 right-2 w-6 h-6 text-gray-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path d="M9 22V12h6v10" />
          </svg>
        </div>

        {files.length > 0 && (
          <div className="mt-6 space-y-4">
            {files.map((file, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-800 p-4 relative"
                style={{
                  transform: `rotate(${index % 2 === 0 ? '0.5' : '-0.5'}deg)`,
                  boxShadow: '3px 3px 0px 0px rgba(0,0,0,1)',
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1 min-w-0">
                    <div
                      className="w-12 h-12 border-2 border-gray-800 bg-white flex items-center justify-center flex-shrink-0"
                      style={{
                        transform: 'rotate(-2deg)',
                        borderRadius: '20% 25% 20% 25%',
                      }}
                    >
                      <svg
                        className="w-6 h-6 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4 flex-1 min-w-0">
                      <p
                        className="text-sm font-bold text-gray-900 truncate"
                        style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
                      >
                        {file.name}
                      </p>
                      <p
                        className="text-xs text-gray-600"
                        style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
                      >
                        {(file.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center ml-4">
                    {uploadProgress[file.name] < 100 ? (
                      <div
                        className="w-24 h-3 bg-white border-2 border-gray-800 mr-3 overflow-hidden"
                        style={{ transform: 'rotate(0.5deg)' }}
                      >
                        <div
                          className="h-full bg-gray-800 transition-all duration-300"
                          style={{ width: `${uploadProgress[file.name] || 0}%` }}
                        />
                      </div>
                    ) : (
                      <div
                        className="w-8 h-8 border-2 border-gray-800 bg-white flex items-center justify-center mr-3"
                        style={{
                          transform: 'rotate(-3deg)',
                          borderRadius: '50% 45% 50% 45%',
                        }}
                      >
                        <svg
                          className="w-4 h-4 text-gray-800"
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
                      className="w-8 h-8 border-2 border-gray-800 bg-white hover:bg-gray-100 text-gray-800 transition-colors flex items-center justify-center"
                      style={{
                        transform: 'rotate(2deg)',
                        borderRadius: '30% 25% 30% 25%',
                      }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
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
                <svg
                  className="absolute bottom-1 right-1 w-4 h-4 text-gray-200"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
