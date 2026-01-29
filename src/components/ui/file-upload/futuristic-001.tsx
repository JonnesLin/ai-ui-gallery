'use client';

import { useState } from 'react';

export default function FuturisticFileUpload() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="w-full max-w-2xl relative z-10">
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative bg-slate-900/50 backdrop-blur-xl border rounded-2xl transition-all overflow-hidden ${
            isDragging
              ? 'border-blue-400 shadow-[0_0_50px_rgba(59,130,246,0.5)]'
              : 'border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)]'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>

          <div className="relative p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mb-6 shadow-[0_0_30px_rgba(59,130,246,0.5)] relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 animate-ping opacity-20"></div>
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
            <div className="mt-4">
              <label className="cursor-pointer">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 tracking-wider">
                  UPLOAD FILES
                </h3>
                <p className="mt-3 text-sm text-blue-300/80">
                  Drag & drop your files or{' '}
                  <span className="text-blue-400 font-semibold underline decoration-blue-400/50">
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
            <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-blue-950/50 border border-blue-500/30 rounded-lg backdrop-blur-sm">
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-blue-400 animate-pulse"></div>
                <div className="w-1 h-1 rounded-full bg-blue-400 animate-pulse delay-100"></div>
                <div className="w-1 h-1 rounded-full bg-blue-400 animate-pulse delay-200"></div>
              </div>
              <span className="text-xs text-blue-300/70 font-medium tracking-wide">
                PNG • JPG • PDF • MAX 10MB
              </span>
            </div>
          </div>
        </div>

        {files.length > 0 && (
          <div className="mt-6 space-y-3">
            {files.map((file, index) => (
              <div
                key={index}
                className="relative bg-slate-900/50 backdrop-blur-xl border border-blue-500/20 rounded-xl p-4 shadow-lg hover:border-blue-400/40 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5"></div>
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center flex-1 min-w-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                      <svg
                        className="w-6 h-6 text-white"
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
                      <p className="text-sm font-medium text-blue-100 truncate tracking-wide">
                        {file.name}
                      </p>
                      <p className="text-xs text-blue-400/70">
                        {(file.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center ml-4">
                    {uploadProgress[file.name] < 100 ? (
                      <div className="w-24 h-1.5 bg-slate-800/80 rounded-full overflow-hidden mr-3 border border-blue-900/50">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 relative"
                          style={{ width: `${uploadProgress[file.name] || 0}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_1s_infinite]"></div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center mr-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
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
                      </div>
                    )}
                    <button
                      onClick={() => removeFile(index)}
                      className="text-blue-400/60 hover:text-blue-300 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
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
