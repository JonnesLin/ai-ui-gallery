'use client';

import { useState, useMemo } from 'react';
import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';
import { TreeNode } from './TreeNode';
import type { TreeProps } from './types';

export function Tree({
  data,
  theme,
  expandedKeys = [],
  selectedKeys = [],
  checkable = false,
  checkedKeys = [],
  onExpand,
  onSelect,
  onCheck,
  className,
}: TreeProps) {
  const themeConfig = getTheme(theme);

  const [internalExpandedKeys, setInternalExpandedKeys] = useState<string[]>(expandedKeys);
  const [internalSelectedKeys, setInternalSelectedKeys] = useState<string[]>(selectedKeys);
  const [internalCheckedKeys, setInternalCheckedKeys] = useState<string[]>(checkedKeys);

  const expandedSet = useMemo(() => new Set(internalExpandedKeys), [internalExpandedKeys]);
  const selectedSet = useMemo(() => new Set(internalSelectedKeys), [internalSelectedKeys]);
  const checkedSet = useMemo(() => new Set(internalCheckedKeys), [internalCheckedKeys]);

  const handleToggleExpand = (key: string) => {
    const newExpandedKeys = expandedSet.has(key)
      ? internalExpandedKeys.filter((k) => k !== key)
      : [...internalExpandedKeys, key];

    setInternalExpandedKeys(newExpandedKeys);
    onExpand?.(newExpandedKeys);
  };

  const handleToggleSelect = (key: string) => {
    const newSelectedKeys = selectedSet.has(key)
      ? internalSelectedKeys.filter((k) => k !== key)
      : [...internalSelectedKeys, key];

    setInternalSelectedKeys(newSelectedKeys);
    onSelect?.(newSelectedKeys);
  };

  const handleToggleCheck = (key: string) => {
    const newCheckedKeys = checkedSet.has(key)
      ? internalCheckedKeys.filter((k) => k !== key)
      : [...internalCheckedKeys, key];

    setInternalCheckedKeys(newCheckedKeys);
    onCheck?.(newCheckedKeys);
  };

  return (
    <div
      className={cn(
        'w-full',
        themeConfig.base.background,
        themeConfig.base.border,
        themeConfig.base.radius,
        themeConfig.base.shadow,
        className
      )}
    >
      {data.map((node) => (
        <TreeNode
          key={node.key}
          node={node}
          level={0}
          theme={theme}
          checkable={checkable}
          expandedKeys={expandedSet}
          selectedKeys={selectedSet}
          checkedKeys={checkedSet}
          onToggleExpand={handleToggleExpand}
          onToggleSelect={handleToggleSelect}
          onToggleCheck={handleToggleCheck}
        />
      ))}
    </div>
  );
}
