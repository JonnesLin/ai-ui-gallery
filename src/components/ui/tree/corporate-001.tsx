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
    name: 'Corporate Documents',
    type: 'folder',
    children: [
      {
        id: '1-1',
        name: 'Financial Reports',
        type: 'folder',
        children: [
          { id: '1-1-1', name: 'Q1-2024.xlsx', type: 'file' },
          { id: '1-1-2', name: 'Q2-2024.xlsx', type: 'file' },
          { id: '1-1-3', name: 'Annual-Report.pdf', type: 'file' },
        ],
      },
      {
        id: '1-2',
        name: 'HR Documents',
        type: 'folder',
        children: [
          { id: '1-2-1', name: 'Employee-Handbook.pdf', type: 'file' },
          { id: '1-2-2', name: 'Policies.docx', type: 'file' },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Presentations',
    type: 'folder',
    children: [
      { id: '2-1', name: 'Board-Meeting.pptx', type: 'file' },
    ],
  },
  { id: '3', name: 'Strategy-2024.pdf', type: 'file' },
];

function TreeItem({ node, level = 0 }: { node: TreeNode; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div>
      <div
        className="flex items-center gap-3 py-2 px-3 hover:bg-blue-50 cursor-pointer transition-colors border-l-2 border-transparent hover:border-blue-600"
        style={{ paddingLeft: `${level * 24 + 12}px` }}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        {hasChildren ? (
          <div className="w-4 h-4 flex items-center justify-center">
            <svg
              className="w-3 h-3 text-gray-500 transition-transform duration-200"
              style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M7 7l3 3-3 3V7z" />
            </svg>
          </div>
        ) : (
          <span className="w-4" />
        )}
        <div className="w-5 h-5 flex items-center justify-center">
          {node.type === 'folder' ? (
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
            </svg>
          )}
        </div>
        <span className="text-sm text-gray-700 font-medium">{node.name}</span>
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

export default function CorporateTree() {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gray-50">
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        <div className="px-4 py-3 bg-gradient-to-r from-blue-700 to-blue-600 border-b border-blue-800">
          <h3 className="text-base font-semibold text-white">Document Explorer</h3>
        </div>
        <div className="p-2">
          {treeData.map((node) => (
            <TreeItem key={node.id} node={node} />
          ))}
        </div>
      </div>
    </div>
  );
}
