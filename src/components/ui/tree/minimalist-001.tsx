'use client';

import { Tree } from './Tree';
import type { TreeNodeData } from './types';

const treeData: TreeNodeData[] = [
  {
    key: '1',
    title: 'src',
    icon: '📁',
    children: [
      {
        key: '1-1',
        title: 'components',
        icon: '📁',
        children: [
          { key: '1-1-1', title: 'Header.tsx', icon: '📄' },
          { key: '1-1-2', title: 'Footer.tsx', icon: '📄' },
        ],
      },
      {
        key: '1-2',
        title: 'utils',
        icon: '📁',
        children: [
          { key: '1-2-1', title: 'helpers.ts', icon: '📄' },
        ],
      },
      { key: '1-3', title: 'index.ts', icon: '📄' },
    ],
  },
  {
    key: '2',
    title: 'public',
    icon: '📁',
    children: [
      { key: '2-1', title: 'logo.svg', icon: '📄' },
      { key: '2-2', title: 'favicon.ico', icon: '📄' },
    ],
  },
  { key: '3', title: 'package.json', icon: '📄' },
  { key: '4', title: 'README.md', icon: '📄' },
];

export default function MinimalistTree() {
  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">File Explorer</h3>
        </div>
        <div className="p-2">
          <Tree
            data={treeData}
            theme="minimalist"
            expandedKeys={['1', '1-1', '2']}
          />
        </div>
      </div>
    </div>
  );
}
