'use client';

import { Tree } from './Tree';
import type { TreeNodeData } from './types';

const treeData: TreeNodeData[] = [
  {
    key: '1',
    title: 'Design System',
    icon: '🎨',
    children: [
      {
        key: '1-1',
        title: 'Components',
        icon: '🎨',
        children: [
          { key: '1-1-1', title: 'Button.tsx', icon: '✨' },
          { key: '1-1-2', title: 'Input.tsx', icon: '✨' },
          { key: '1-1-3', title: 'Card.tsx', icon: '✨' },
        ],
      },
      {
        key: '1-2',
        title: 'Tokens',
        icon: '🎨',
        children: [
          { key: '1-2-1', title: 'colors.json', icon: '✨' },
          { key: '1-2-2', title: 'spacing.json', icon: '✨' },
        ],
      },
    ],
  },
  {
    key: '2',
    title: 'Documentation',
    icon: '🎨',
    children: [
      { key: '2-1', title: 'guide.md', icon: '✨' },
    ],
  },
];

export default function GradientTree() {
  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="p-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
          <h3 className="text-xl font-bold text-white drop-shadow-lg">Project Files</h3>
        </div>
        <div className="p-4 bg-gradient-to-br from-gray-50 to-white">
          <Tree
            data={treeData}
            theme="gradient"
            expandedKeys={['1', '1-1', '1-2', '2']}
          />
        </div>
      </div>
    </div>
  );
}
