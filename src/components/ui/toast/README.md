# Toast Component System

可复用的 Toast 通知组件系统，支持多主题、多类型、多位置。

## 组件架构

```
toast/
├── Toast.tsx              # 单个 toast 组件
├── ToastContainer.tsx     # toast 容器（管理位置）
├── useToast.ts           # toast hook（管理状态）
├── Toast.types.ts        # 类型定义
├── icons.tsx             # toast 图标
├── themes/               # 主题配置
│   ├── index.ts
│   ├── minimalist.ts
│   ├── dark.ts
│   └── gradient.ts
└── index.ts              # 导出
```

## 使用方式

### 1. 基础使用

```tsx
import { useToast, ToastContainer } from './toast';

function App() {
  const { toasts, addToast, removeToast } = useToast();

  const showToast = () => {
    addToast({
      type: 'success',
      theme: 'minimalist',
      title: 'Success',
      description: 'Your changes have been saved.',
      position: 'top-right',
    });
  };

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>

      <ToastContainer
        position="top-right"
        toasts={toasts['top-right']}
        onClose={(id) => removeToast(id, 'top-right')}
      />
    </div>
  );
}
```

### 2. Toast 类型

支持 4 种类型：

```tsx
type: 'info' | 'success' | 'warning' | 'error'
```

### 3. Toast 位置

支持 6 个位置：

```tsx
position: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
```

### 4. Toast 主题

当前支持的主题：

```tsx
theme: 'minimalist' | 'dark' | 'gradient'
```

### 5. 自定义动作按钮

```tsx
addToast({
  type: 'info',
  theme: 'minimalist',
  title: 'New message',
  description: 'You have a new message.',
  action: (
    <button className="text-sm underline">View</button>
  ),
});
```

### 6. 禁用自动关闭

```tsx
addToast({
  type: 'error',
  theme: 'dark',
  title: 'Critical Error',
  description: 'Please contact support.',
  duration: 0, // 不自动关闭
});
```

### 7. 不可关闭的 Toast

```tsx
addToast({
  type: 'info',
  theme: 'gradient',
  title: 'Processing...',
  closable: false, // 不显示关闭按钮
  duration: 0,
});
```

## API

### useToast()

返回：

```typescript
{
  toasts: Record<ToastPosition, ToastProps[]>; // 所有位置的 toasts
  addToast: (options: ToastOptions) => string;  // 添加 toast，返回 id
  removeToast: (id: string, position: ToastPosition) => void; // 移除指定 toast
  clearAll: () => void; // 清除所有 toasts
}
```

### ToastOptions

```typescript
{
  type: ToastType;           // 'info' | 'success' | 'warning' | 'error'
  theme: ThemeName;          // 主题名称
  title: string;             // 标题
  description?: string;      // 描述（可选）
  duration?: number;         // 持续时间（毫秒），0 表示不自动关闭
  closable?: boolean;        // 是否显示关闭按钮
  action?: ReactNode;        // 自定义动作按钮
  position?: ToastPosition;  // 位置
}
```

## 添加新主题

1. 在 `themes/` 下创建新文件，例如 `glassmorphism.ts`
2. 定义主题配置：

```typescript
import type { ToastThemeConfig } from '../Toast.types';

export const glassmorphismToastTheme: ToastThemeConfig = {
  info: {
    container: 'bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-4 py-3',
    icon: '',
    iconBackground: 'w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center',
    title: 'text-sm font-medium text-white',
    description: 'text-xs text-white/70 mt-0.5',
    closeButton: 'text-white/50 hover:text-white transition-colors',
  },
  // ... success, warning, error
  animation: 'animate-[fadeIn_0.3s_ease-out]',
};
```

3. 在 `themes/index.ts` 中导出：

```typescript
import { glassmorphismToastTheme } from './glassmorphism';

export const toastThemes = {
  // ...
  glassmorphism: glassmorphismToastTheme,
};
```

## 设计原则

- **无 fallback**：主题不存在时直接报错，不要默认值
- **数据驱动**：所有样式由主题配置决定
- **职责分离**：Toast（UI）、ToastContainer（位置）、useToast（状态）
- **类型安全**：所有 props 都有完整的 TypeScript 类型定义
