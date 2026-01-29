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
    name: 'Sketches',
    type: 'folder',
    children: [
      {
        id: '1-1',
        name: 'Drawings',
        type: 'folder',
        children: [
          { id: '1-1-1', name: 'portrait.sketch', type: 'file' },
          { id: '1-1-2', name: 'landscape.draw', type: 'file' },
        ],
      },
      {
        id: '1-2',
        name: 'Ideas',
        type: 'folder',
        children: [
          { id: '1-2-1', name: 'concept-01.png', type: 'file' },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Drafts',
    type: 'folder',
    children: [
      { id: '2-1', name: 'rough-draft.txt', type: 'file' },
    ],
  },
];

function TreeItem({ node, level = 0 }: { node: TreeNode; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div>
      <div
        className="flex items-center gap-3 py-2 px-3 my-1 cursor-pointer transition-all duration-200 hover:bg-gray-50 relative"
        style={{
          paddingLeft: `${level * 24 + 12}px`,
          borderLeft: level > 0 ? '2px dashed #9ca3af' : 'none',
          marginLeft: level > 0 ? '12px' : '0',
        }}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        {hasChildren ? (
          <span className="text-gray-500 text-sm font-bold transition-transform duration-200" style={{ transform: isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
            ▽
          </span>
        ) : (
          <span className="w-4" />
        )}
        <div
          className="relative"
          style={{
            filter: 'url(#sketch-filter)',
          }}
        >
          <span className="text-lg">
            {node.type === 'folder' ? '📂' : '📝'}
          </span>
        </div>
        <span
          className="text-sm text-gray-700 font-handwriting"
          style={{
            fontFamily: 'cursive',
            transform: 'rotate(-0.5deg)',
          }}
        >
          {node.name}
        </span>
        <div
          className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 3px, #d1d5db 3px, #d1d5db 6px)',
          }}
        />
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

export default function SketchTree() {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gray-50">
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="sketch-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
        </defs>
      </svg>
      <div
        className="bg-white rounded-lg overflow-hidden relative"
        style={{
          border: '2px solid #374151',
          boxShadow: '4px 4px 0px 0px #e5e7eb',
          transform: 'rotate(-0.5deg)',
        }}
      >
        <div
          className="p-5 bg-white border-b-2 border-dashed border-gray-300 relative"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 19px, #f3f4f6 19px, #f3f4f6 20px)',
          }}
        >
          <h3
            className="text-xl font-bold text-gray-800"
            style={{
              fontFamily: 'cursive',
              transform: 'rotate(-1deg)',
            }}
          >
            ✏️ My File Tree
          </h3>
          <div className="absolute top-2 right-2 w-8 h-8 border-2 border-gray-300 rounded-full" />
        </div>
        <div
          className="p-4 bg-white"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 24px, #f9fafb 24px, #f9fafb 25px)',
          }}
        >
          {treeData.map((node) => (
            <TreeItem key={node.id} node={node} />
          ))}
        </div>
      </div>
    </div>
  );
}
