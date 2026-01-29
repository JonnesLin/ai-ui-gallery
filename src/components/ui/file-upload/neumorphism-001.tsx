'use client';

import { FileUpload } from './FileUpload';

export default function NeumorphismFileUpload() {
  return (
    <div className="min-h-screen bg-[#e0e5ec] flex items-center justify-center p-8">
      <FileUpload theme="neumorphism" accept=".png,.jpg,.jpeg,.pdf" />
    </div>
  );
}
