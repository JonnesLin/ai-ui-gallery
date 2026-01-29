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
    name: 'Applications',
    type: 'folder',
    children: [
      {
        id: '1-1',
        name: 'Utilities',
        type: 'folder',
        children: [
          { id: '1-1-1', name: 'Calculator.app', type: 'file' },
          { id: '1-1-2', name: 'Terminal.app', type: 'file' },
          { id: '1-1-3', name: 'TextEdit.app', type: 'file' },
        ],
      },
      {
        id: '1-2',
        name: 'Games',
        type: 'folder',
        children: [
          { id: '1-2-1', name: 'Chess.app', type: 'file' },
          { id: '1-2-2', name: 'Solitaire.app', type: 'file' },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Downloads',
    type: 'folder',
    children: [
      { id: '2-1', name: 'setup.dmg', type: 'file' },
      { id: '2-2', name: 'document.pdf', type: 'file' },
    ],
  },
  { id: '3', name: 'README.txt', type: 'file' },
];

function TreeItem({ node, level = 0 }: { node: TreeNode; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div>
      <div
        className={`
          flex items-center gap-3 py-3 px-4 my-2 rounded-xl cursor-pointer
          transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50
          border border-blue-200
          ${isHovered
            ? 'shadow-[0_8px_16px_rgba(59,130,246,0.3),inset_0_2px_4px_rgba(255,255,255,0.8)] translate-y-[-2px]'
            : 'shadow-[0_4px_8px_rgba(59,130,246,0.2),inset_0_1px_2px_rgba(255,255,255,0.6)]'
          }
        `}
        style={{
          marginLeft: `${level * 28}px`,
          transform: isHovered ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
        }}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {hasChildren ? (
          <div
            className={`
              flex items-center justify-center w-6 h-6 rounded-full
              bg-gradient-to-br from-blue-400 to-blue-600
              shadow-[0_3px_8px_rgba(59,130,246,0.4),inset_0_1px_2px_rgba(255,255,255,0.3)]
              transition-transform duration-300
              ${isExpanded ? '' : 'rotate-[-90deg]'}
            `}
          >
            <span className="text-white text-xs font-bold">▼</span>
          </div>
        ) : (
          <span className="w-6" />
        )}
        <div
          className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-400 to-purple-600 shadow-[0_3px_8px_rgba(99,102,241,0.4),inset_0_1px_2px_rgba(255,255,255,0.3)]"
        >
          <span className="text-white text-sm">
            {node.type === 'folder' ? '📁' : '📄'}
          </span>
        </div>
        <span className="text-sm font-semibold text-gray-800">{node.name}</span>
      </div>
      {hasChildren && isExpanded && (
        <div
          className="relative"
          style={{
            paddingLeft: '4px',
            borderLeft: '3px solid rgba(147, 197, 253, 0.4)',
            marginLeft: `${level * 28 + 16}px`,
          }}
        >
          {node.children!.map((child) => (
            <TreeItem key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ThreeDTree() {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-gray-100 via-blue-50 to-indigo-100">
      <div
        className="bg-gradient-to-br from-white to-blue-50 rounded-2xl overflow-hidden border border-blue-200"
        style={{
          boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2), 0 8px 16px rgba(99, 102, 241, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
        }}
      >
        <div
          className="p-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 border-b border-blue-300"
          style={{
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
          }}
        >
          <h3 className="text-2xl font-bold text-white flex items-center gap-3 drop-shadow-lg">
            <div
              className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.4)]"
            >
              <span className="text-2xl">🗂</span>
            </div>
            <span>3D File Browser</span>
          </h3>
          <p className="text-xs text-blue-100 mt-2 tracking-wide">Layered Interface</p>
        </div>
        <div className="p-4">
          {treeData.map((node) => (
            <TreeItem key={node.id} node={node} />
          ))}
        </div>
        <div
          className="px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-blue-200"
          style={{
            boxShadow: 'inset 0 1px 2px rgba(59, 130, 246, 0.1)',
          }}
        >
          <div className="flex items-center justify-between">
            <div
              className="px-3 py-1 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 shadow-[0_3px_6px_rgba(59,130,246,0.3),inset_0_1px_2px_rgba(255,255,255,0.3)]"
            >
              <p className="text-xs text-white font-semibold">11 items</p>
            </div>
            <div
              className="px-3 py-1 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-[0_3px_6px_rgba(34,197,94,0.3),inset_0_1px_2px_rgba(255,255,255,0.3)]"
            >
              <p className="text-xs text-white font-semibold">2.4 GB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
