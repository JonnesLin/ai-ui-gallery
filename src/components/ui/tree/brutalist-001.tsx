'use client';

import { Tree } from './Tree';
import type { TreeNodeData } from './types';

const treeData: TreeNodeData[] = [
  {
    key: '1',
    title: 'ROOT',
    icon: '▪',
    children: [
      {
        key: '1-1',
        title: 'SRC',
        icon: '▪',
        children: [
          { key: '1-1-1', title: 'INDEX.JS', icon: '▫' },
          { key: '1-1-2', title: 'APP.JS', icon: '▫' },
        ],
      },
      {
        key: '1-2',
        title: 'BUILD',
        icon: '▪',
        children: [
          { key: '1-2-1', title: 'MAIN.JS', icon: '▫' },
        ],
      },
    ],
  },
  {
    key: '2',
    title: 'PUBLIC',
    icon: '▪',
    children: [
      { key: '2-1', title: 'FAVICON.ICO', icon: '▫' },
    ],
  },
  { key: '3', title: 'README.MD', icon: '▫' },
];

export default function BrutalistTree() {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gray-100">
      <div className="bg-white border-8 border-black p-6" style={{ boxShadow: '12px 12px 0px 0px #000' }}>
        <div className="border-4 border-black bg-red-500 p-4 mb-6" style={{ boxShadow: '4px 4px 0px 0px #000' }}>
          <h3 className="text-2xl font-black uppercase tracking-tight">FILE.TREE</h3>
        </div>
        <div className="[&_*]:font-black [&_*]:uppercase [&_button]:hover:bg-yellow-300">
          <Tree
            data={treeData}
            theme="flat"
            expandedKeys={['1', '1-1', '1-2', '2']}
          />
        </div>
      </div>
    </div>
  );
}
