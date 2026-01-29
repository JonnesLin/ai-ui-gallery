'use client';

import { useState } from 'react';

interface TreeNode {
  id: string;
  name: string;
  type: 'folder' | 'file';
  children?: TreeNode[];
}

const treeData: TreeNode[] = [
  {
    id: '1',
    name: 'My Computer',
    type: 'folder',
    children: [
      {
        id: '1-1',
        name: 'Program Files',
        type: 'folder',
        children: [
          { id: '1-1-1', name: 'explorer.exe', type: 'file' },
          { id: '1-1-2', name: 'notepad.exe', type: 'file' },
        ],
      },
      {
        id: '1-2',
        name: 'Windows',
        type: 'folder',
        children: [
          { id: '1-2-1', name: 'system32.dll', type: 'file' },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Documents',
    type: 'folder',
    children: [
      { id: '2-1', name: 'letter.doc', type: 'file' },
    ],
  },
];

function TreeItem({ node, level = 0 }: { node: TreeNode; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div>
      <div
        className="flex items-center gap-2 py-1 px-2 hover:bg-blue-600 hover:text-white cursor-pointer transition-colors"
        style={{ paddingLeft: `${level * 20 + 8}px` }}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        {hasChildren ? (
          <span className="text-xs font-bold">
            {isExpanded ? '▼' : '▶'}
          </span>
        ) : (
          <span className="w-3" />
        )}
        <span className="text-base">
          {node.type === 'folder' ? (isExpanded ? '📂' : '📁') : '📄'}
        </span>
        <span className="text-sm font-sans">{node.name}</span>
      </div>
      {hasChildren && isExpanded && (
        <div>
          {node.children!.map((child) => (
            <TreeItem key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function RetroTree() {
  return (
    <div className="w-full max-w-md mx-auto p-6" style={{ background: '#008080' }}>
      <div className="bg-gray-200 border-4 border-t-white border-l-white border-r-gray-600 border-b-gray-600 shadow-lg">
        <div
          className="bg-gradient-to-r from-blue-800 to-blue-600 px-3 py-2 flex items-center justify-between border-b-2 border-blue-900"
          style={{ background: 'linear-gradient(to right, #000080, #1084d0)' }}
        >
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <span>📁</span>
            <span>Explorer</span>
          </h3>
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-gray-400 border border-gray-600 flex items-center justify-center text-xs">_</div>
            <div className="w-4 h-4 bg-gray-400 border border-gray-600 flex items-center justify-center text-xs">□</div>
            <div className="w-4 h-4 bg-gray-400 border border-gray-600 flex items-center justify-center text-xs">×</div>
          </div>
        </div>
        <div className="p-2 bg-white">
          {treeData.map((node) => (
            <TreeItem key={node.id} node={node} />
          ))}
        </div>
        <div className="bg-gray-200 border-t-2 border-t-white px-2 py-1">
          <div className="text-xs text-gray-700">{treeData.length} object(s)</div>
        </div>
      </div>
    </div>
  );
}
