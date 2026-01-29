'use client';

import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';
import type { TreeNodeProps } from './types';

interface TreeNodeInternalProps extends TreeNodeProps {
  expandedKeys: Set<string>;
  selectedKeys: Set<string>;
  checkedKeys: Set<string>;
}

export function TreeNode({
  node,
  level,
  theme,
  checkable,
  expandedKeys,
  selectedKeys,
  checkedKeys,
  onToggleExpand,
  onToggleSelect,
  onToggleCheck,
}: TreeNodeInternalProps) {
  const themeConfig = getTheme(theme);
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedKeys.has(node.key);
  const isSelected = selectedKeys.has(node.key);
  const isChecked = checkedKeys.has(node.key);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (node.disabled) {
      return;
    }
    onToggleSelect(node.key);
  };

  const handleExpandClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasChildren && !node.disabled) {
      onToggleExpand(node.key);
    }
  };

  const handleCheckClick = () => {
    if (!node.disabled) {
      onToggleCheck(node.key);
    }
  };

  const getNodeStyles = () => {
    const baseStyles = 'flex items-center gap-2 py-2 px-3 cursor-pointer transition-colors';

    if (node.disabled) {
      return cn(baseStyles, themeConfig.states.disabled);
    }

    if (isSelected) {
      return cn(
        baseStyles,
        themeConfig.variants.primary.background,
        themeConfig.variants.primary.text
      );
    }

    return cn(
      baseStyles,
      themeConfig.base.text,
      'hover:bg-gray-50 dark:hover:bg-gray-800'
    );
  };

  return (
    <div>
      <div
        className={getNodeStyles()}
        style={{ paddingLeft: `${level * 20 + 12}px` }}
        onClick={handleClick}
      >
        {checkable && (
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckClick}
            disabled={node.disabled}
            className="cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          />
        )}

        {hasChildren ? (
          <span
            onClick={handleExpandClick}
            className="text-xs cursor-pointer select-none transition-transform duration-200"
            style={{
              display: 'inline-block',
              transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
            }}
          >
            ▶
          </span>
        ) : (
          <span className="w-3" />
        )}

        {node.icon && <span className="flex-shrink-0">{node.icon}</span>}

        <span className="text-sm flex-1">{node.title}</span>
      </div>

      {hasChildren && isExpanded && (
        <div>
          {node.children!.map((child) => (
            <TreeNode
              key={child.key}
              node={child}
              level={level + 1}
              theme={theme}
              checkable={checkable}
              expandedKeys={expandedKeys}
              selectedKeys={selectedKeys}
              checkedKeys={checkedKeys}
              onToggleExpand={onToggleExpand}
              onToggleSelect={onToggleSelect}
              onToggleCheck={onToggleCheck}
            />
          ))}
        </div>
      )}
    </div>
  );
}
