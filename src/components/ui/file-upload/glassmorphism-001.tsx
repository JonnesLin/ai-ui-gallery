'use client';

import { FileUpload } from './FileUpload';

export default function GlassmorphismFileUpload() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 flex items-center justify-center p-8">
      <FileUpload theme="glassmorphism" accept=".png,.jpg,.jpeg,.gif,.pdf" />
    </div>
  );
}
