'use client';

import { FileUpload } from './FileUpload';

export default function MinimalistFileUpload() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <FileUpload theme="minimalist" accept=".png,.jpg,.jpeg,.pdf" />
    </div>
  );
}
