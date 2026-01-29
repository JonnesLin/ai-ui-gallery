'use client';

import { useState } from 'react';

export default function RetroFileUpload() {
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
    <div className="min-h-screen bg-[#f4e4c1] flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-4 rounded-lg transition-all ${
            isDragging
              ? 'border-[#d4894f] bg-[#ffe8cc] shadow-[8px_8px_0px_0px_#d4894f]'
              : 'border-[#8b4513] bg-[#fff8e7] shadow-[6px_6px_0px_0px_#8b4513]'
          }`}
        >
          <div className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#ff6b6b] border-4 border-[#8b4513] mb-6 shadow-[4px_4px_0px_0px_#8b4513]">
              <svg
                className="w-10 h-10 text-[#fff8e7]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
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
                <h3 className="text-2xl font-bold text-[#8b4513]">
                  Upload Files
                </h3>
                <p className="mt-3 text-base text-[#a0522d]">
                  Drag & drop your files or{' '}
                  <span className="underline decoration-2 underline-offset-4">
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
            <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-[#4ecdc4] border-4 border-[#8b4513] rounded-lg shadow-[3px_3px_0px_0px_#8b4513]">
              <svg
                className="w-5 h-5 text-[#fff8e7]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-bold text-[#fff8e7]">
                PNG, JPG, PDF • Max 10MB
              </span>
            </div>
          </div>
        </div>

        {files.length > 0 && (
          <div className="mt-6 space-y-4">
            {files.map((file, index) => (
              <div
                key={index}
                className="bg-[#fff8e7] border-4 border-[#8b4513] rounded-lg p-4 shadow-[4px_4px_0px_0px_#8b4513]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1 min-w-0">
                    <div className="w-14 h-14 rounded-lg bg-[#ff6b6b] border-4 border-[#8b4513] flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_#8b4513]">
                      <svg
                        className="w-7 h-7 text-[#fff8e7]"
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
                      <p className="text-base font-bold text-[#8b4513] truncate">
                        {file.name}
                      </p>
                      <p className="text-sm font-semibold text-[#a0522d]">
                        {(file.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center ml-4">
                    {uploadProgress[file.name] < 100 ? (
                      <div className="w-28 h-4 bg-[#f4e4c1] border-4 border-[#8b4513] rounded overflow-hidden mr-3">
                        <div
                          className="h-full bg-[#4ecdc4] transition-all duration-300"
                          style={{ width: `${uploadProgress[file.name] || 0}%` }}
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 bg-[#4ecdc4] border-4 border-[#8b4513] rounded-lg flex items-center justify-center mr-3 shadow-[2px_2px_0px_0px_#8b4513]">
                        <svg
                          className="w-5 h-5 text-[#fff8e7]"
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
                      className="w-10 h-10 bg-[#ff6b6b] hover:bg-[#ff5252] border-4 border-[#8b4513] rounded-lg text-[#fff8e7] transition-colors flex items-center justify-center shadow-[2px_2px_0px_0px_#8b4513] active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
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
