import type { ReactNode } from 'react';
import type { ThemeName } from '../_themes/types';

export interface TreeNodeData {
  key: string;
  title: ReactNode;
  icon?: ReactNode;
  children?: TreeNodeData[];
  disabled?: boolean;
}

export interface TreeProps {
  data: TreeNodeData[];
  theme: ThemeName;
  expandedKeys?: string[];
  selectedKeys?: string[];
  checkable?: boolean;
  checkedKeys?: string[];
  onExpand?: (keys: string[]) => void;
  onSelect?: (keys: string[]) => void;
  onCheck?: (keys: string[]) => void;
  className?: string;
}

export interface TreeNodeProps {
  node: TreeNodeData;
  level: number;
  theme: ThemeName;
  checkable: boolean;
  onToggleExpand: (key: string) => void;
  onToggleSelect: (key: string) => void;
  onToggleCheck: (key: string) => void;
}
