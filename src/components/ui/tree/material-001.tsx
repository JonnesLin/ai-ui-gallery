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
    name: 'Documents',
    type: 'folder',
    children: [
      {
        id: '1-1',
        name: 'Projects',
        type: 'folder',
        children: [
          { id: '1-1-1', name: 'proposal.pdf', type: 'file' },
          { id: '1-1-2', name: 'budget.xlsx', type: 'file' },
          { id: '1-1-3', name: 'timeline.docx', type: 'file' },
        ],
      },
      {
        id: '1-2',
        name: 'Reports',
        type: 'folder',
        children: [
          { id: '1-2-1', name: 'annual-report.pdf', type: 'file' },
          { id: '1-2-2', name: 'quarterly.pdf', type: 'file' },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Media',
    type: 'folder',
    children: [
      { id: '2-1', name: 'photo.jpg', type: 'file' },
      { id: '2-2', name: 'video.mp4', type: 'file' },
    ],
  },
  { id: '3', name: 'README.md', type: 'file' },
];

function TreeItem({ node, level = 0 }: { node: TreeNode; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isSelected, setIsSelected] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div>
      <div
        className={`
          flex items-center gap-3 py-2.5 px-4 my-0.5 rounded-lg cursor-pointer
          transition-all duration-300 relative overflow-hidden
          ${isSelected
            ? 'bg-blue-50 text-blue-900'
            : 'hover:bg-gray-100 text-gray-900'
          }
        `}
        style={{
          paddingLeft: `${level * 24 + 16}px`,
        }}
        onClick={() => {
          setIsSelected(!isSelected);
          if (hasChildren) setIsExpanded(!isExpanded);
        }}
      >
        {hasChildren ? (
          <span
            className={`text-gray-600 text-sm transition-transform duration-200 ${
              isExpanded ? '' : '-rotate-90'
            }`}
          >
            ▼
          </span>
        ) : (
          <span className="w-4" />
        )}
        <span className="text-xl">
          {node.type === 'folder' ? '📁' : '📄'}
        </span>
        <span className="text-sm font-medium tracking-wide">{node.name}</span>
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-5 transition-opacity duration-200 pointer-events-none" />
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

export default function MaterialTree() {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gray-50">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
        <div className="p-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
          <h3 className="text-xl font-semibold tracking-wide">File Manager</h3>
          <p className="text-xs text-blue-100 mt-1">Material Design</p>
        </div>
        <div className="p-3">
          {treeData.map((node) => (
            <TreeItem key={node.id} node={node} />
          ))}
        </div>
        <div className="px-5 py-3 bg-gray-50 border-t border-gray-200">
          <p className="text-xs text-gray-500">3 folders, 8 files</p>
        </div>
      </div>
    </div>
  );
}
