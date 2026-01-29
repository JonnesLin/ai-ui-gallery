'use client';

import { FileUpload } from './FileUpload';

export default function MaterialFileUpload() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-8">
      <FileUpload theme="material" accept=".png,.jpg,.jpeg,.pdf" />
    </div>
  );
}
