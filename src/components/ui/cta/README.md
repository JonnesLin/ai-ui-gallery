# CTA Component System

Call-to-Action (CTA) 组件系统，支持多主题、多布局和多变体的灵活配置。

## 核心组件

### CTA (容器)
主容器组件，负责整体布局和主题应用。

```tsx
import { CTA } from './cta';

<CTA theme="minimalist" layout="centered" variant="simple">
  {children}
</CTA>
```

**Props:**
- `theme: ThemeName` - 主题名称（必填）
- `layout?: 'centered' | 'left' | 'split'` - 布局方式，默认 `'centered'`
- `variant?: 'simple' | 'card' | 'banner'` - 变体样式，默认 `'simple'`
- `backgroundImage?: string` - 背景图片 URL
- `className?: string` - 额外的 CSS 类名
- `children: ReactNode` - 子组件

### CTATitle (标题)
CTA 标题组件。

```tsx
import { CTATitle } from './cta';

<CTATitle className="text-gray-900">
  Start building today
</CTATitle>
```

**Props:**
- `children: ReactNode` - 标题内容
- `className?: string` - 额外的 CSS 类名

### CTADescription (描述)
CTA 描述文本组件。

```tsx
import { CTADescription } from './cta';

<CTADescription className="text-gray-500">
  Simple tools for complex problems.
</CTADescription>
```

**Props:**
- `children: ReactNode` - 描述内容
- `className?: string` - 额外的 CSS 类名

### CTAActions (操作按钮区)
CTA 操作按钮容器组件。

```tsx
import { CTAActions } from './cta';

<CTAActions>
  <button>Get Started</button>
  <button>Learn More</button>
</CTAActions>
```

**Props:**
- `children: ReactNode` - 按钮内容
- `className?: string` - 额外的 CSS 类名

## 使用示例

### 基础示例 (Minimalist)

```tsx
import { CTA, CTATitle, CTADescription, CTAActions } from './cta';

export default function MinimalistCTA() {
  return (
    <CTA theme="minimalist" layout="centered" variant="simple">
      <CTATitle className="font-light text-gray-900">
        Start building today
      </CTATitle>
      <CTADescription className="text-gray-500">
        Simple tools for complex problems. No clutter, just results.
      </CTADescription>
      <CTAActions>
        <button className="px-8 py-3.5 bg-gray-900 text-white">
          Get Started
        </button>
        <button className="px-8 py-3.5 border border-gray-200">
          Learn More
        </button>
      </CTAActions>
    </CTA>
  );
}
```

### Split 布局示例 (Flat)

```tsx
import { CTA, CTATitle, CTADescription, CTAActions } from './cta';

export default function FlatCTA() {
  return (
    <CTA theme="flat" layout="split" variant="card" className="bg-sky-500">
      <div className="flex-1">
        <CTATitle className="text-gray-800">
          Simple. Clean. Effective.
        </CTATitle>
        <CTADescription className="text-gray-600 mb-0">
          No frills, just straightforward design.
        </CTADescription>
      </div>
      <CTAActions className="flex-col gap-3 md:min-w-[200px]">
        <button>Start Free</button>
        <button>Learn More</button>
      </CTAActions>
    </CTA>
  );
}
```

### Banner 变体示例 (Dark)

```tsx
import { CTA, CTATitle, CTADescription, CTAActions } from './cta';

export default function DarkCTA() {
  return (
    <CTA theme="dark" layout="centered" variant="banner" className="bg-black">
      <div className="relative z-10">
        <CTATitle className="text-white">
          Build Without Boundaries
        </CTATitle>
        <CTADescription className="text-gray-400">
          Unleash your creativity with modern tools.
        </CTADescription>
        <CTAActions>
          <button className="bg-white text-black">Start Building</button>
          <button className="border border-gray-700 text-white">View Examples</button>
        </CTAActions>
      </div>
    </CTA>
  );
}
```

### 带背景图示例

```tsx
<CTA
  theme="glassmorphism"
  layout="centered"
  variant="banner"
  backgroundImage="/images/hero-bg.jpg"
>
  {/* 内容 */}
</CTA>
```

## 布局说明

### centered
文本和操作按钮居中对齐，适合单栏式 CTA。

### left
文本和操作按钮左对齐，适合带图片或图标的 CTA。

### split
标题/描述与操作按钮分开布局（响应式：移动端垂直，桌面端水平），适合横向布局。

## 变体说明

### simple
基础样式，只有 padding 和背景色。

### card
卡片样式，白色背景和阴影效果。

### banner
横幅样式，支持全宽背景和装饰元素。

## 主题支持

支持所有已定义的主题：
- minimalist
- dark
- glassmorphism
- neumorphism
- flat
- material
- gradient
- brutalist
- retro
- cyberpunk
- pastel
- corporate
- playful
- 3d
- futuristic
- luxury
- monochrome
- nature
- neon
- sketch

## 类型定义

```typescript
export type CTALayout = 'centered' | 'left' | 'split';
export type CTAVariant = 'simple' | 'card' | 'banner';

export interface CTAProps {
  theme: ThemeName;
  layout?: CTALayout;
  variant?: CTAVariant;
  backgroundImage?: string;
  className?: string;
  children: ReactNode;
}
```

## 设计原则

1. **组合优于配置** - 通过组合子组件实现灵活布局
2. **无隐式回退** - 所有必填参数必须显式提供，避免默认值陷阱
3. **样式可覆盖** - 每个组件都接受 `className` 进行样式定制
4. **主题驱动** - 通过 theme prop 统一管理视觉风格
5. **语义化结构** - 清晰的组件命名和职责划分

## 迁移指南

从旧的独立组件迁移到新系统：

1. 导入新组件：
   ```tsx
   import { CTA, CTATitle, CTADescription, CTAActions } from './cta';
   ```

2. 包裹内容到 CTA 容器并指定主题：
   ```tsx
   <CTA theme="minimalist" layout="centered" variant="simple">
   ```

3. 用对应的子组件替换原有标题、描述和按钮区：
   ```tsx
   <CTATitle>...</CTATitle>
   <CTADescription>...</CTADescription>
   <CTAActions>...</CTAActions>
   ```

4. 保留自定义样式到 className props。
