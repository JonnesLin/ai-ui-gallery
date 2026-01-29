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
    name: 'system',
    type: 'folder',
    children: [
      {
        id: '1-1',
        name: 'core',
        type: 'folder',
        children: [
          { id: '1-1-1', name: 'kernel.c', type: 'file' },
          { id: '1-1-2', name: 'memory.c', type: 'file' },
          { id: '1-1-3', name: 'process.c', type: 'file' },
        ],
      },
      {
        id: '1-2',
        name: 'drivers',
        type: 'folder',
        children: [
          { id: '1-2-1', name: 'disk.c', type: 'file' },
          { id: '1-2-2', name: 'network.c', type: 'file' },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'lib',
    type: 'folder',
    children: [
      { id: '2-1', name: 'stdlib.c', type: 'file' },
      { id: '2-2', name: 'stdio.c', type: 'file' },
    ],
  },
  { id: '3', name: 'Makefile', type: 'file' },
];

function TreeItem({ node, level = 0 }: { node: TreeNode; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div>
      <div
        className="flex items-center gap-2 py-1.5 px-2 hover:bg-gray-200 cursor-pointer transition-colors border-l-2 border-transparent hover:border-black"
        style={{ paddingLeft: `${level * 20 + 8}px` }}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        {hasChildren ? (
          <span className="text-black text-xs font-bold w-4">
            {isExpanded ? '−' : '+'}
          </span>
        ) : (
          <span className="w-4" />
        )}
        <span className="text-base">
          {node.type === 'folder' ? '■' : '□'}
        </span>
        <span className="text-sm font-mono text-gray-900">{node.name}</span>
      </div>
      {hasChildren && isExpanded && (
        <div className="border-l-2 border-gray-300" style={{ marginLeft: `${level * 20 + 8}px` }}>
          {node.children!.map((child) => (
            <TreeItem key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function MonochromeTree() {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white">
      <div className="bg-gray-100 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
        <div className="p-4 bg-black text-white border-b-4 border-white">
          <h3 className="text-lg font-bold font-mono uppercase tracking-wider">Tree View</h3>
        </div>
        <div className="p-3 bg-white">
          {treeData.map((node) => (
            <TreeItem key={node.id} node={node} />
          ))}
        </div>
        <div className="px-4 py-2 bg-gray-200 border-t-4 border-black">
          <p className="text-xs font-mono text-gray-700">MONOCHROME INTERFACE</p>
        </div>
      </div>
    </div>
  );
}
