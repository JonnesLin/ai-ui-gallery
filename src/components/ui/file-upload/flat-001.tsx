'use client';

import { FileUpload } from './FileUpload';

export default function FlatFileUpload() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-8">
      <FileUpload theme="flat" accept=".png,.jpg,.jpeg,.pdf" />
    </div>
  );
}
