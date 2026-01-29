# Hero Component System

组合式 Hero 组件系统，用于快速构建各种风格的页面头部区域。

## 核心理念

**"Good programmers worry about data structures and their relationships."**

- **零 fallback**: 所有必需参数都必须提供，错误直接报错
- **组合优于配置**: 通过组合子组件而不是大量 props 来实现灵活性
- **主题驱动**: 样式由主题系统统一管理

## 组件结构

```
Hero (容器)
├── HeroTitle (标题)
├── HeroSubtitle (副标题)
├── HeroActions (操作按钮组)
└── HeroImage (图片)
```

## API

### Hero

主容器组件，管理布局和背景。

```typescript
interface HeroProps {
  theme: ThemeName;              // 必需: 主题名称
  layout?: HeroLayout;           // 布局: 'centered' | 'left' | 'right' | 'split'
  height?: HeroHeight;           // 高度: 'auto' | 'screen' | 'half'
  backgroundImage?: string;      // 背景图片 URL
  overlay?: boolean;             // 是否显示遮罩层
  overlayOpacity?: number;       // 遮罩层透明度 (0-1)
  children: ReactNode;           // 必需: 子内容
  className?: string;            // 额外的 CSS 类
}
```

### HeroTitle

标题组件，提供基础标题样式。

```typescript
interface HeroTitleProps {
  children: ReactNode;
  className?: string;
}
```

### HeroSubtitle

副标题组件，提供基础副标题样式。

```typescript
interface HeroSubtitleProps {
  children: ReactNode;
  className?: string;
}
```

### HeroActions

操作按钮容器，自动处理响应式布局。

```typescript
interface HeroActionsProps {
  children: ReactNode;
  className?: string;
}
```

### HeroImage

图片组件。

```typescript
interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
}
```

## 使用示例

### 基础用法

```tsx
import { Hero, HeroTitle, HeroSubtitle, HeroActions } from './hero';

export default function BasicHero() {
  return (
    <Hero theme="minimalist" layout="centered" height="screen">
      <HeroTitle>Welcome to Our Platform</HeroTitle>
      <HeroSubtitle>Build amazing products with ease</HeroSubtitle>
      <HeroActions>
        <button>Get Started</button>
        <button>Learn More</button>
      </HeroActions>
    </Hero>
  );
}
```

### 带背景图片

```tsx
<Hero
  theme="dark"
  layout="centered"
  height="screen"
  backgroundImage="/hero-bg.jpg"
  overlay={true}
  overlayOpacity={0.6}
>
  <HeroTitle className="text-white">Your Title</HeroTitle>
  <HeroSubtitle className="text-gray-300">Your subtitle</HeroSubtitle>
</Hero>
```

### 自定义样式

```tsx
<Hero theme="glassmorphism" layout="left">
  <HeroTitle className="text-4xl text-purple-900 font-black">
    Custom Styled Title
  </HeroTitle>
  <HeroSubtitle className="text-purple-700 max-w-md">
    Override default styles with className
  </HeroSubtitle>
  <HeroActions className="justify-start">
    <button>Action 1</button>
    <button>Action 2</button>
  </HeroActions>
</Hero>
```

### Split 布局

```tsx
<Hero theme="brutalist" layout="split">
  <div>
    <HeroTitle>Left Side</HeroTitle>
    <HeroSubtitle>Content on the left</HeroSubtitle>
  </div>
  <HeroImage src="/image.jpg" alt="Right side image" />
</Hero>
```

### 复杂组合 (Glassmorphism 示例)

```tsx
<Hero theme="glassmorphism" layout="centered" height="screen">
  {/* 自定义背景动画 */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-70" />
  </div>

  {/* 玻璃卡片 */}
  <div className="relative backdrop-blur-xl bg-white/10 rounded-3xl p-16">
    <HeroTitle className="text-white">Glass Effect</HeroTitle>
    <HeroSubtitle className="text-white/80">Transparent future</HeroSubtitle>
    <HeroActions>
      <button className="bg-white/20 backdrop-blur-sm">Start</button>
    </HeroActions>
  </div>
</Hero>
```

## 设计原则

1. **组件只提供结构，不强制样式**
   - 每个组件都有合理的默认样式
   - 通过 `className` 完全可覆盖

2. **主题控制全局风格**
   - 容器背景由 `theme` 决定
   - 子组件样式由使用者控制

3. **无隐式行为**
   - 不猜测用户意图
   - 不提供 fallback 值（除了合理的默认值）
   - 错误直接抛出

4. **布局与内容分离**
   - Hero 管理布局（layout, height）
   - 子组件管理内容（text, images）

## 迁移指南

### 从旧的硬编码组件迁移

**旧方式 (minimalist-001.tsx):**
```tsx
export default function MinimalistHero() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-light text-neutral-900 mb-8">
          Less is more.
        </h1>
        {/* ... */}
      </div>
    </section>
  );
}
```

**新方式 (minimalist-002.tsx):**
```tsx
export default function MinimalistHero002() {
  return (
    <Hero theme="minimalist" layout="centered" height="screen">
      <HeroTitle className="text-neutral-900 font-light">
        Less is more.
      </HeroTitle>
      {/* ... */}
    </Hero>
  );
}
```

**好处:**
- 消除重复的容器代码
- 主题统一管理
- 更容易维护和修改
- 更好的类型安全

## 注意事项

1. **`theme` 参数必需**
   ```tsx
   // ❌ 错误 - 缺少 theme
   <Hero><HeroTitle>Title</HeroTitle></Hero>

   // ✅ 正确
   <Hero theme="minimalist"><HeroTitle>Title</HeroTitle></Hero>
   ```

2. **主题不存在会抛出错误**
   ```tsx
   // ❌ 运行时错误
   <Hero theme="nonexistent">...</Hero>
   // Error: Theme "nonexistent" not found
   ```

3. **子组件不强制使用**
   ```tsx
   // ✅ 完全自定义内容也可以
   <Hero theme="dark">
     <div className="custom-layout">
       <h1>Custom Title</h1>
       <p>Custom Content</p>
     </div>
   </Hero>
   ```

4. **className 会覆盖默认样式**
   ```tsx
   // 使用 cn() 工具函数合并类名
   <HeroTitle className="text-red-500">
     // 会保留默认的 text-5xl md:text-7xl 等，但文字颜色变为红色
   </HeroTitle>
   ```

## 文件结构

```
hero/
├── Hero.tsx              # 主容器组件
├── HeroTitle.tsx         # 标题组件
├── HeroSubtitle.tsx      # 副标题组件
├── HeroActions.tsx       # 操作按钮容器
├── HeroImage.tsx         # 图片组件
├── types.ts              # TypeScript 类型定义
├── index.ts              # 导出文件
├── README.md             # 本文档
│
├── minimalist-001.tsx    # 旧版示例（保留）
├── minimalist-002.tsx    # 新版示例（使用组合式 API）
└── ...                   # 其他主题示例
```
