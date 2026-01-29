'use client';

import { FileUpload } from './FileUpload';

export default function DarkFileUpload() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-8">
      <FileUpload theme="dark" accept=".png,.jpg,.jpeg,.gif,.pdf" />
    </div>
  );
}
