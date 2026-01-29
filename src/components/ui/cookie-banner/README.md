# Cookie Banner Component

Cookie Banner 组件已重构为使用统一的主题系统。

## 核心组件

### CookieBanner

主组件位于 `/Users/linjinhong/Documents/MoneyProject/AI-UI-gallery/src/components/ui/cookie-banner/CookieBanner.tsx`

```tsx
import { CookieBanner } from './cookie-banner';

<CookieBanner
  theme="minimalist"
  position="bottom"
  variant="bar"
  title="Cookie Notice"
  description="We use cookies to enhance your experience."
  privacyPolicyUrl="#privacy"
  onAccept={() => console.log('Accepted')}
  onDecline={() => console.log('Declined')}
  showDecline={true}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| theme | ThemeName | required | 主题名称 |
| position | 'top' \| 'bottom' \| 'bottom-left' \| 'bottom-right' \| 'center' | 'bottom' | 位置 |
| variant | 'bar' \| 'popup' \| 'floating' | 'bar' | 变体样式 |
| title | string | undefined | 标题 |
| description | ReactNode | required | 描述内容 |
| privacyPolicyUrl | string | undefined | 隐私政策链接 |
| onAccept | () => void | required | 接受回调 |
| onDecline | () => void | undefined | 拒绝回调 |
| onCustomize | () => void | undefined | 自定义回调 |
| showDecline | boolean | false | 显示拒绝按钮 |
| showCustomize | boolean | false | 显示自定义按钮 |
| className | string | undefined | 额外的 CSS 类 |

## 已实现的主题

目前支持以下主题：
- minimalist
- dark
- glassmorphism
- neumorphism
- gradient
- flat
- material

## 未实现的主题

以下主题在类型定义中存在，但尚未在主题系统中实现。使用这些主题的展示文件会直接抛出错误：
- 3d
- brutalist
- corporate
- cyberpunk
- futuristic
- luxury
- monochrome
- nature
- neon
- pastel
- playful
- retro
- sketch

### 为什么直接抛出错误？

按照 Linus Torvalds 的哲学："不要有 fallback，有问题就直接报错"。这种做法：
1. 立即暴露问题，而不是隐藏它
2. 强制开发者修复真正的问题（实现主题）
3. 避免用户在生产环境中遇到意外行为

## 展示文件

每个主题都有对应的展示文件（如 `flat-001.tsx`），这些文件展示如何使用核心 `CookieBanner` 组件。

### 已实现主题示例

```tsx
// flat-001.tsx
import { CookieBanner } from './CookieBanner';

export default function FlatCookieBanner() {
  return (
    <CookieBanner
      theme="flat"
      position="bottom"
      variant="bar"
      title="We Use Cookies"
      description="This website uses cookies to ensure you get the best experience on our website."
      privacyPolicyUrl="#privacy"
      onAccept={() => console.log('Accepted')}
      onDecline={() => console.log('Declined')}
      showDecline={true}
    />
  );
}
```

### 未实现主题示例

```tsx
// brutalist-001.tsx
export default function BrutalistCookieBanner() {
  throw new Error(
    'Theme "brutalist" is not implemented yet. Available themes: minimalist, dark, glassmorphism, neumorphism, gradient, flat, material'
  );
}
```

## 架构设计

### 数据结构

核心数据结构简单明了：
- `CookieBannerProps` 定义组件接口
- 主题通过 `getTheme(themeName)` 获取
- 样式通过 `cn()` 工具函数合并

### 复杂度控制

- 单一组件处理所有变体，无需为每个主题创建独立实现
- 使用主题系统提供的标准化样式类
- 通过 props 控制行为，避免硬编码

### 零特殊情况

- 没有 fallback 逻辑
- 主题不存在时直接报错
- 所有变体使用相同的数据结构

## 类型定义

类型定义位于 `/Users/linjinhong/Documents/MoneyProject/AI-UI-gallery/src/components/ui/cookie-banner/types.ts`

```tsx
export type CookieBannerPosition = 'top' | 'bottom' | 'bottom-left' | 'bottom-right' | 'center';
export type CookieBannerVariant = 'bar' | 'popup' | 'floating';

export interface CookieBannerProps {
  theme: ThemeName;
  position?: CookieBannerPosition;
  variant?: CookieBannerVariant;
  title?: string;
  description: ReactNode;
  privacyPolicyUrl?: string;
  onAccept: () => void;
  onDecline?: () => void;
  onCustomize?: () => void;
  showDecline?: boolean;
  showCustomize?: boolean;
  className?: string;
}
```
