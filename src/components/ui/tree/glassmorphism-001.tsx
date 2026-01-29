'use client';

import { Tree } from './Tree';
import type { TreeNodeData } from './types';

const treeData: TreeNodeData[] = [
  {
    key: '1',
    title: 'Projects',
    icon: '📂',
    children: [
      {
        key: '1-1',
        title: 'Web App',
        icon: '📂',
        children: [
          { key: '1-1-1', title: 'index.html', icon: '📋' },
          { key: '1-1-2', title: 'styles.css', icon: '📋' },
        ],
      },
      {
        key: '1-2',
        title: 'Mobile App',
        icon: '📂',
        children: [
          { key: '1-2-1', title: 'App.tsx', icon: '📋' },
        ],
      },
    ],
  },
  {
    key: '2',
    title: 'Documents',
    icon: '📂',
    children: [
      { key: '2-1', title: 'resume.pdf', icon: '📋' },
      { key: '2-2', title: 'notes.txt', icon: '📋' },
    ],
  },
  { key: '3', title: 'config.json', icon: '📋' },
];

export default function GlassmorphismTree() {
  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div
        className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10" />
        <div className="relative p-6 border-b border-white/10">
          <h3 className="text-xl font-bold text-white drop-shadow-lg">File System</h3>
        </div>
        <div className="relative p-4">
          <Tree
            data={treeData}
            theme="glassmorphism"
            expandedKeys={['1', '1-1', '1-2', '2']}
          />
        </div>
      </div>
    </div>
  );
}
