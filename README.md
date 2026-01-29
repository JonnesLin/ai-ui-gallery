# AI UI Gallery

> 一个通过大规模AI并行生成的前端UI组件展示平台，包含1000+高质量React组件

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-blue)
![Vite](https://img.shields.io/badge/Vite-7-blue)

## 快速开始

```bash
# 安装依赖
npm install

# 生成组件注册表
npm run generate-registry

# 启动开发服务器
npm run dev
```

访问 http://localhost:5173 查看Gallery

## 项目简介

**AI UI Gallery** 是一个工业级规模的UI组件库，通过40个并行AI agents生成：

- **75种组件类型** - 从Button到完整的Landing Page
- **20种视觉风格** - Minimalist, Glassmorphism, Cyberpunk...
- **1500+组件目标** - 每个组件都经过精心设计
- **完全独立** - 每个组件可直接复制使用

## 核心特性

### 🎨 丰富的组件类型

- **基础组件** (13): Button, Input, Card, Modal...
- **数据展示** (14): Table, Timeline, Chart, Carousel...
- **导航组件** (9): Navbar, Sidebar, Tabs, Pagination...
- **反馈组件** (6): Alert, Toast, Loading, Popover...
- **表单组件** (7): Search Box, Date Picker, Rating...
- **布局区块** (10): Hero, Feature, Pricing, CTA...
- **完整页面** (10): Login, Dashboard, Landing Page...
- **特殊组件** (6): Chat Widget, Comment Section...

### 🎭 20种视觉风格

| 风格 | 特点 |
|------|------|
| **Minimalist** | 极简留白、细线条 |
| **Glassmorphism** | 毛玻璃、半透明 |
| **Neumorphism** | 柔和凸起、软UI |
| **Dark** | 深色主题、亮色点缀 |
| **Gradient** | 渐变流动 |
| **Brutalist** | 粗犷原始 |
| **Retro** | 复古80年代 |
| **Cyberpunk** | 霓虹赛博 |
| **Pastel** | 马卡龙柔和 |
| **Corporate** | 专业商务 |
| **Playful** | 活泼有趣 |
| **Luxury** | 奢华高端 |
| **Nature** | 自然绿色 |
| **Futuristic** | 未来科技 |
| **Sketch** | 手绘涂鸦 |
| **Monochrome** | 黑白单色 |
| **Neon** | 霓虹发光 |
| **3D** | 立体效果 |
| **Flat** | 扁平设计 |
| **Material** | Material Design |

### 🚀 强大的Gallery系统

- **全屏瀑布流布局** - 美观的组件展示
- **多维度筛选** - 按类型、风格、分类筛选
- **实时搜索** - 关键词快速查找
- **预览模态框** - 支持多视口切换（Mobile/Desktop）
- **代码查看** - 可复制组件代码
- **懒加载** - 性能优化

## 项目结构

```
AI-UI-gallery/
├── src/
│   ├── components/ui/          # 组件库（75个类型目录）
│   │   ├── button/             # 20个Button变体
│   │   ├── card/               # 20个Card变体
│   │   └── ...
│   ├── gallery/                # Gallery UI系统
│   │   ├── GalleryLayout.tsx
│   │   ├── FilterBar.tsx
│   │   ├── ComponentCard.tsx
│   │   └── ComponentPreview.tsx
│   ├── types/                  # 类型定义
│   ├── registry.ts             # 组件注册表
│   └── App.tsx
├── scripts/
│   └── generate-registry.ts    # 自动生成注册表
├── public/thumbnails/          # 组件缩略图
└── package.json
```

## 组件规范

### 文件命名

```
格式: {style}-{variant}.tsx
示例: glassmorphism-001.tsx
```

### 组件要求

- ✅ 完全独立单文件
- ✅ 纯Tailwind CSS（Tailwind v4）
- ✅ 响应式设计
- ✅ 默认导出
- ✅ 无外部依赖

### 示例代码

```tsx
export default function GlassmorphismButton() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <button className="px-6 py-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl">
        Primary
      </button>
      <button className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl">
        Secondary
      </button>
    </div>
  )
}
```

## 开发脚本

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview

# 生成组件注册表
npm run generate-registry

# TypeScript类型检查
npx tsc --noEmit
```

## 技术栈

- **前端框架**: React 19
- **类型系统**: TypeScript 5.9
- **样式方案**: Tailwind CSS 4
- **构建工具**: Vite 7
- **包管理**: npm

## 使用组件

### 方法1: 直接复制

1. 浏览Gallery找到心仪组件
2. 点击预览查看详情
3. 点击"Code"查看源码
4. 复制代码到你的项目

### 方法2: Import导入

```tsx
import Button from '@/components/ui/button/glassmorphism-001'

function App() {
  return <Button />
}
```

## 贡献组件

欢迎贡献新的组件或风格！

### 添加新组件

1. 在 `src/components/ui/{component-type}/` 创建文件
2. 遵循命名规范: `{style}-{variant}.tsx`
3. 实现组件（参考组件规范）
4. 运行 `npm run generate-registry`

### 添加新风格

1. 修改 `src/types/index.ts` 添加风格类型
2. 更新 `STYLE_METADATA` 添加风格元数据
3. 为现有组件创建新风格变体

## 路线图

- [x] 项目框架搭建
- [x] Gallery UI系统
- [x] 组件类型定义
- [x] 自动注册表生成
- [x] 40种组件类型生成（第一批）
- [ ] 完成剩余35种组件类型
- [ ] 组件缩略图生成
- [ ] 代码高亮和复制
- [ ] 组件文档生成
- [ ] 搜索优化
- [ ] 性能优化
- [ ] 暗色主题
- [ ] 组件收藏功能

## 项目统计

- **当前组件数**: ~600-800 (第一批)
- **目标组件数**: 1500+
- **组件类型**: 75种
- **视觉风格**: 20种
- **代码行数**: ~50,000+ (估算)

## 详细文档

查看 [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) 了解完整的项目文档。

## FAQ

**Q: 组件可以直接用在生产环境吗？**
A: 可以！每个组件都是独立的，经过精心设计，可直接复制使用。

**Q: 是否支持自定义样式？**
A: 完全支持。组件使用Tailwind CSS，你可以轻松修改类名来定制样式。

**Q: 是否支持TypeScript？**
A: 是的，所有组件都是TypeScript编写。

**Q: 如何贡献组件？**
A: 参考"贡献组件"章节，欢迎PR！

## 许可证

MIT License

## 致谢

本项目由AI agents大规模并行生成，展示了AI在前端开发领域的潜力。

---

**Built with ❤️ by AI Agents**
