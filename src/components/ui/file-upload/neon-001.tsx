'use client';

import { useState } from 'react';

export default function NeonFileUpload() {
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
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`bg-black border-2 rounded-lg transition-all ${
            isDragging
              ? 'border-pink-500 shadow-[0_0_40px_rgba(236,72,153,0.6),inset_0_0_20px_rgba(236,72,153,0.1)]'
              : 'border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.5),inset_0_0_15px_rgba(6,182,212,0.05)]'
          }`}
        >
          <div className="p-12 text-center">
            <div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-pink-500 mb-6 relative"
              style={{
                boxShadow:
                  '0 0 30px rgba(236,72,153,0.6), inset 0 0 15px rgba(236,72,153,0.3)',
              }}
            >
              <div className="absolute inset-0 rounded-full bg-pink-500/10 animate-pulse"></div>
              <svg
                className="w-10 h-10 text-pink-500 relative z-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                style={{ filter: 'drop-shadow(0 0 8px rgba(236,72,153,0.8))' }}
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
                  className="text-2xl font-bold text-cyan-400 uppercase tracking-wider"
                  style={{
                    textShadow:
                      '0 0 10px rgba(6,182,212,0.8), 0 0 20px rgba(6,182,212,0.5), 0 0 30px rgba(6,182,212,0.3)',
                  }}
                >
                  Upload Files
                </h3>
                <p
                  className="mt-3 text-sm text-pink-400"
                  style={{
                    textShadow: '0 0 10px rgba(236,72,153,0.6)',
                  }}
                >
                  Drag & drop or{' '}
                  <span
                    className="underline font-semibold"
                    style={{
                      textShadow: '0 0 15px rgba(236,72,153,0.8)',
                    }}
                  >
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
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 border border-cyan-500/50 rounded-full"
              style={{
                boxShadow: '0 0 15px rgba(6,182,212,0.4), inset 0 0 10px rgba(6,182,212,0.1)',
              }}
            >
              <span
                className="text-xs text-cyan-300 uppercase tracking-wider font-medium"
                style={{
                  textShadow: '0 0 8px rgba(6,182,212,0.6)',
                }}
              >
                PNG • JPG • PDF • Max 10MB
              </span>
            </div>
          </div>
        </div>

        {files.length > 0 && (
          <div className="mt-6 space-y-3">
            {files.map((file, index) => (
              <div
                key={index}
                className="bg-black border-2 border-pink-500/50 rounded-lg p-4"
                style={{
                  boxShadow: '0 0 20px rgba(236,72,153,0.3), inset 0 0 10px rgba(236,72,153,0.05)',
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1 min-w-0">
                    <div
                      className="w-12 h-12 rounded-lg border-2 border-cyan-500 flex items-center justify-center flex-shrink-0"
                      style={{
                        boxShadow: '0 0 20px rgba(6,182,212,0.5), inset 0 0 10px rgba(6,182,212,0.2)',
                      }}
                    >
                      <svg
                        className="w-6 h-6 text-cyan-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        style={{ filter: 'drop-shadow(0 0 5px rgba(6,182,212,0.8))' }}
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
                        className="text-sm font-semibold text-cyan-300 truncate"
                        style={{
                          textShadow: '0 0 8px rgba(6,182,212,0.5)',
                        }}
                      >
                        {file.name}
                      </p>
                      <p
                        className="text-xs text-pink-400"
                        style={{
                          textShadow: '0 0 6px rgba(236,72,153,0.5)',
                        }}
                      >
                        {(file.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center ml-4">
                    {uploadProgress[file.name] < 100 ? (
                      <div
                        className="w-24 h-2 bg-black border border-cyan-500/50 rounded-full overflow-hidden mr-3"
                        style={{
                          boxShadow: 'inset 0 0 10px rgba(6,182,212,0.3)',
                        }}
                      >
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500 transition-all duration-300"
                          style={{
                            width: `${uploadProgress[file.name] || 0}%`,
                            boxShadow: '0 0 10px rgba(236,72,153,0.8)',
                          }}
                        />
                      </div>
                    ) : (
                      <div
                        className="w-6 h-6 rounded-full border-2 border-pink-500 flex items-center justify-center mr-3"
                        style={{
                          boxShadow: '0 0 15px rgba(236,72,153,0.8)',
                        }}
                      >
                        <svg
                          className="w-4 h-4 text-pink-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                          style={{ filter: 'drop-shadow(0 0 5px rgba(236,72,153,0.8))' }}
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
                      className="text-cyan-400 hover:text-pink-400 transition-colors"
                      style={{
                        filter: 'drop-shadow(0 0 5px rgba(6,182,212,0.6))',
                      }}
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
