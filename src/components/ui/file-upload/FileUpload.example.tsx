'use client';

import { FileUpload } from './FileUpload';
import type { UploadedFile } from './FileUpload.types';

/**
 * Example usage of the FileUpload component with different configurations
 */
export default function FileUploadExamples() {
  const handleChange = (files: File[]) => {
    console.log('Files added:', files);
  };

  const handleRemove = (file: UploadedFile) => {
    console.log('File removed:', file.name);
  };

  const handleError = (error: Error) => {
    console.error('Upload error:', error.message);
    alert(error.message);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-4">Minimalist Theme</h2>
        <FileUpload
          theme="minimalist"
          accept=".png,.jpg,.jpeg,.pdf"
          onChange={handleChange}
          onRemove={handleRemove}
          onError={handleError}
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Material Theme</h2>
        <div className="bg-[#fafafa] p-8 rounded-lg">
          <FileUpload
            theme="material"
            accept=".png,.jpg,.jpeg,.pdf"
            maxFiles={5}
            onChange={handleChange}
            onRemove={handleRemove}
            onError={handleError}
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-white">Dark Theme</h2>
        <div className="bg-[#0a0a0a] p-8 rounded-lg">
          <FileUpload
            theme="dark"
            accept=".png,.jpg,.jpeg,.gif,.pdf"
            onChange={handleChange}
            onRemove={handleRemove}
            onError={handleError}
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Glassmorphism Theme</h2>
        <div className="bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 p-8 rounded-lg">
          <FileUpload
            theme="glassmorphism"
            accept="image/*,.pdf"
            onChange={handleChange}
            onRemove={handleRemove}
            onError={handleError}
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Single File Upload</h2>
        <FileUpload
          theme="minimalist"
          accept=".pdf"
          multiple={false}
          maxSize={5}
          onChange={handleChange}
          onRemove={handleRemove}
          onError={handleError}
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Disabled State</h2>
        <FileUpload
          theme="minimalist"
          accept=".png,.jpg,.jpeg"
          disabled
          onChange={handleChange}
          onRemove={handleRemove}
          onError={handleError}
        />
      </section>
    </div>
  );
}
